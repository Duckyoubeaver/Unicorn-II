import { createClient } from '@supabase/supabase-js';
import { ConversationChain } from 'langchain/chains';
import { RetrievalQAChain } from 'langchain/chains';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { PromptTemplate } from 'langchain/prompts';
import {
  SupabaseFilterRPCCall,
  SupabaseVectorStore
} from 'langchain/vectorstores/supabase';

// import { CallbackManager } from 'langchain/callbacks';

export const runtime = 'edge'; // 'nodejs' is the default

const privateKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!privateKey) throw new Error(`Expected env var SUPABASE_SERVICE_ROLE_KEY`);

const url = process.env.SUPABASE_URL;
if (!url) throw new Error(`Expected env var SUPABASE_URL`);

//FIX THIS ENDPOINT

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const { userInput, userId } = await req.json();

    try {
      // Remove both double quotes and whitespace
      let cleanUserId = userId.replace(/"/g, '').trim();

      const response = await search(userInput, cleanUserId);

      return cors(
        req,
        new Response(JSON.stringify(response), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        })
      );
    } catch (error) {
      console.error(error);

      // Handle different types of errors and return appropriate responses
      if (error) {
        return new Response(
          JSON.stringify({
            error: { statusCode: 500, message: error }
          }),
          { status: 500 }
        );
      } else {
        return new Response(
          JSON.stringify({
            error: { statusCode: 500, message: 'Internal Server Error' }
          }),
          { status: 500 }
        );
      }
    }
  }
}

export async function OPTIONS(request: Request) {
  return cors(
    request,
    new Response(null, {
      status: 204
    })
  );
}

const search = async (text: string, userId: string) => {
  const client = createClient(url, privateKey);
  const embeddings = new OpenAIEmbeddings();

  const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: 'documents'
  });

  const model = new ChatOpenAI({ modelName: 'gpt-3.5-turbo' }); //check model

  const template = `Use the following pieces of context to answer the question at the end.
If you don't know the answer, just say that you don't know, don't try to make up an answer. If the question is unclear but still somewhat related to the business, ask for more specific questions.
Don't start your messages with AI: or any name followed by a colon. Simply say what you would say without it. EX) Don't say AI: Hello how can I help, say Hello how can I help?
Don't output large text. Use three sentences maximum per response and keep the answer as concise as possible. Try to narrow down the question to better respond to the user's requests. {context} Say is there anything else I can help you with? Often if applicable.
Question: {question}
Helpful Answer:`;

  const recentVersion = await fetchRecentVersion(userId);
  console.log('Most recent version is' + recentVersion);

  //FIX

  const chain = RetrievalQAChain.fromLLM(
    model,
    //add a filter by version
    vectorStore.asRetriever({
      filter: {
        userId: userId,
        version: recentVersion
      }
    }),
    {
      prompt: PromptTemplate.fromTemplate(template)
    }
  );

  const response = await chain.call({
    query: `${text}`
  });

  console.log(response);
  return response;
};

function extractLatestUserInput(text: string) {
  let lines = text.split('\n'); // Split the text into lines
  let userLines = lines.filter((line) => line.trim().startsWith('User:')); // Filter out only user lines

  if (userLines.length > 0) {
    let latestUserLine = userLines[userLines.length - 1]; // Get the last user line
    return latestUserLine.split('User:')[1].trim(); // Return the text after "User:"
  } else {
    return ''; // Return an empty string if there are no user lines
  }
}

interface Document {
  metadata: {
    version: number;
    userId: string;
  };
}

const fetchRecentVersion = async (userId: string): Promise<number> => {
  try {
    const privateKey = process.env.SUPABASE_ANON_KEY;
    const url = process.env.SUPABASE_URL;

    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!supabaseKey) throw new Error(`Expected SUPABASE_SERVICE_ROLE_KEY`);

    console.log('OpenAI key: ' + process.env.OPENAI_API_KEY);

    if (!privateKey || !url || !process.env.OPENAI_API_KEY) {
      throw new Error(
        'Expected SUPABASE_ANON_KEY and SUPABASE_URL, OPEN AI environment variables.'
      );
    }

    const client = createClient(url, privateKey);
    const { data, error } = await client
      .from('documents')
      .select('metadata->version')
      .eq('metadata->>userId', userId)
      .order('metadata->version', { ascending: false })
      .limit(1);

    if (error) {
      throw error;
    }

    const version = data[0].version as number;
    return version;
  } catch (err) {
    // Handle any errors that occurred during the try block
    console.error('Error in fetchRecentVersion:', err);
    // You might want to return a specific error code or throw an error
    // Depending on how you want to handle this case
    throw err;
  }
};

//cors.ts

/**
 * Multi purpose CORS lib.
 * Note: Based on the `cors` package in npm but using only
 * web APIs. Feel free to use it in your own projects.
 */

type StaticOrigin = boolean | string | RegExp | (boolean | string | RegExp)[];

type OriginFn = (
  origin: string | undefined,
  req: Request
) => StaticOrigin | Promise<StaticOrigin>;

interface CorsOptions {
  origin?: StaticOrigin | OriginFn;
  methods?: string | string[];
  allowedHeaders?: string | string[];
  exposedHeaders?: string | string[];
  credentials?: boolean;
  maxAge?: number;
  preflightContinue?: boolean;
  optionsSuccessStatus?: number;
}

const defaultOptions: CorsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204
};

function isOriginAllowed(origin: string, allowed: StaticOrigin): boolean {
  return Array.isArray(allowed)
    ? allowed.some((o) => isOriginAllowed(origin, o))
    : typeof allowed === 'string'
    ? origin === allowed
    : allowed instanceof RegExp
    ? allowed.test(origin)
    : !!allowed;
}

function getOriginHeaders(reqOrigin: string | undefined, origin: StaticOrigin) {
  const headers = new Headers();

  if (origin === '*') {
    // Allow any origin
    headers.set('Access-Control-Allow-Origin', '*');
  } else if (typeof origin === 'string') {
    // Fixed origin
    headers.set('Access-Control-Allow-Origin', origin);
    headers.append('Vary', 'Origin');
  } else {
    const allowed = isOriginAllowed(reqOrigin ?? '', origin);

    if (allowed && reqOrigin) {
      headers.set('Access-Control-Allow-Origin', reqOrigin);
    }
    headers.append('Vary', 'Origin');
  }

  return headers;
}

// originHeadersFromReq

async function originHeadersFromReq(
  req: Request,
  origin: StaticOrigin | OriginFn
) {
  const reqOrigin = req.headers.get('Origin') || undefined;
  const value =
    typeof origin === 'function' ? await origin(reqOrigin, req) : origin;

  if (!value) return;
  return getOriginHeaders(reqOrigin, value);
}

function getAllowedHeaders(req: Request, allowed?: string | string[]) {
  const headers = new Headers();

  if (!allowed) {
    allowed = req.headers.get('Access-Control-Request-Headers')!;
    headers.append('Vary', 'Access-Control-Request-Headers');
  } else if (Array.isArray(allowed)) {
    // If the allowed headers is an array, turn it into a string
    allowed = allowed.join(',');
  }
  if (allowed) {
    headers.set('Access-Control-Allow-Headers', allowed);
  }

  return headers;
}

async function cors(req: Request, res: Response, options?: CorsOptions) {
  const opts = { ...defaultOptions, ...options };
  const { headers } = res;
  const originHeaders = await originHeadersFromReq(req, opts.origin ?? false);
  const mergeHeaders = (v: string, k: string) => {
    if (k === 'Vary') headers.append(k, v);
    else headers.set(k, v);
  };

  // If there's no origin we won't touch the response
  if (!originHeaders) return res;

  originHeaders.forEach(mergeHeaders);

  if (opts.credentials) {
    headers.set('Access-Control-Allow-Credentials', 'true');
  }

  const exposed = Array.isArray(opts.exposedHeaders)
    ? opts.exposedHeaders.join(',')
    : opts.exposedHeaders;

  if (exposed) {
    headers.set('Access-Control-Expose-Headers', exposed);
  }

  // Handle the preflight request
  if (req.method === 'OPTIONS') {
    if (opts.methods) {
      const methods = Array.isArray(opts.methods)
        ? opts.methods.join(',')
        : opts.methods;

      headers.set('Access-Control-Allow-Methods', methods);
    }

    getAllowedHeaders(req, opts.allowedHeaders).forEach(mergeHeaders);

    if (typeof opts.maxAge === 'number') {
      headers.set('Access-Control-Max-Age', String(opts.maxAge));
    }

    if (opts.preflightContinue) return res;

    headers.set('Content-Length', '0');
    return new Response(null, { status: opts.optionsSuccessStatus, headers });
  }

  // If we got here, it's a normal request
  return res;
}

function initCors(options?: CorsOptions) {
  return (req: Request, res: Response) => cors(req, res, options);
}
