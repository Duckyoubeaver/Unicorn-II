import {
  getSession,
  getUserDetails,
  getSubscription
} from '@/app/supabase-server';
import { createClient } from '@supabase/supabase-js';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { SupabaseVectorStore } from 'langchain/vectorstores/supabase';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function Account() {
  const [session, userDetails, subscription] = await Promise.all([
    getSession(),
    getUserDetails(),
    getSubscription()
  ]);

  const user = session?.user;
  const userId = user!.id;

  const scriptText = `
      <script>
      (function (w, d, s, o, f, js, fjs) {
        w['MyWidgetObject'] = o; 
        w[o] =
          w[o] ||
          function () {
            (w[o].q = w[o].q || []).push(arguments); 
          };
        (js = d.createElement(s)), (fjs = d.getElementsByTagName(s)[0]);
        js.id = o;
        js.src = f;
        js.async = 1;
        fjs.parentNode.insertBefore(js, fjs);
      })(window, document, 'script', 'myWidget', 'https://www.communicube.ai/script.js');
      // Initialize the widget with any configuration options
      myWidget('init', {
        appId: '"${userId}"'
      });
    </script>
  `;
  if (!session) {
    // If session is not truthy, redirect the user to the sign-in page.
    return redirect('/signin');
  }

  const train = async (formData: FormData) => {
    'use server';

    const trainingValueEntry = formData.get('trainingData');
    const trainingValue =
      trainingValueEntry !== null ? trainingValueEntry.toString() : '';
    console.log('From the client, trainingValue is ' + trainingValue);
    try {
      const [session] = await Promise.all([
        getSession(),
        getUserDetails(),
        getSubscription()
      ]);
      const user = session?.user;
      const userId = user!.id;

      await trainData(trainingValue, userId);

      // return response.json();
    } catch (error) {
      console.error('Error calling train API:', error);
    }
  };

  return (
    <section className="mb-32 bg-black">
      <div className="sm:align-center sm:flex sm:flex-col py-8">
        <h1 className="text-6xl font-extrabold text-white sm:text-center sm:text-4xl">
          Training
        </h1>
      </div>
      <div className="p-4">
        {subscription ? (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-4xl mx-auto">
            <form action={train}>
              <div className="w-full border-b pb-2 mb-4">
                <textarea
                  name="trainingData"
                  className="w-full h-80 outline-none text-black text-xl focus:border-transparent resize-none"
                  placeholder="Enter training data here for your business...
                  (Hint: To enhance the effectiveness of the generated response, consider using a question-and-answer format, as it tends to work well. Alternatively, you can provide general knowledge or information related to your business.)"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-lg mr-2 focus:outline-none"
              >
                Train
              </button>
            </form>
          </div>
        ) : (
          // Render a div with a link to choose a plan if subscription is not available
          <div
            className="text-center text-pink-600"
            style={{ fontSize: '24px' }}
          >
            <Link href="/">Choose your plan to get started</Link>
          </div>
        )}
      </div>
      <div>
        <pre>{scriptText}</pre>
      </div>
    </section>
  );
}

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

// Split text utility function
function splitTextWithOverlap(
  text: string,
  chunkSize: number,
  overlapSize: number
): string[] {
  const words: string[] = text.split(' ');
  const result: string[] = [];

  for (let i = 0; i < words.length; i += chunkSize - overlapSize) {
    const chunk: string[] = words.slice(i, i + chunkSize);
    result.push(chunk.join(' '));
  }

  return result;
}

const trainData = async (textValue: string, userID: string) => {
  const privateKey = process.env.SUPABASE_ANON_KEY;
  const url = process.env.SUPABASE_URL;

  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseKey) throw new Error(`Expected SUPABASE_SERVICE_ROLE_KEY`);

  console.log('OpenAI key' + process.env.OPENAI_API_KEY);

  if (!privateKey || !url || !process.env.OPENAI_API_KEY) {
    throw new Error(
      'Expected SUPABASE_ANON_KEY and SUPABASE_URL, OPEN AI environment variables.'
    );
  }

  const client = createClient(url, privateKey);

  const store = new SupabaseVectorStore(new OpenAIEmbeddings(), {
    client,
    tableName: 'documents'
  });

  const chunkSize = 100; // Edit chunk size as needed, make sure to implement limits on frontend for short inputs
  const overlapSize = 20;

  const splitText = splitTextWithOverlap(textValue, chunkSize, overlapSize);

  const metadata = await createMetadataForChunks(
    textValue,
    chunkSize,
    overlapSize,
    userID
  );

  console.log(metadata);

  const docs = splitText.map((pageContent, index) => ({
    pageContent,
    metadata: metadata[index]
  }));

  console.log(docs);
  console.log(store);

  await store
    .addDocuments(docs)
    .then(() => {
      console.log('storing done');
    })
    .catch((error) => {
      console.error('Error while storing documents:', error);
      throw error; // Optionally re-throw the error if you want to propagate it further
    });
};

// Create metadata for chunks utility function
interface ChunkMetadata {
  userId: string;
  version: number | undefined;
}

async function createMetadataForChunks(
  text: string,
  chunkSize: number,
  overlapSize: number,
  userId: string
): Promise<ChunkMetadata[]> {
  const words: string[] = text.split(' ');
  console.log(userId);
  const version = await fetchRecentVersion(userId);
  console.log(version);
  const metadata: ChunkMetadata[] = [];

  for (let i = 0; i < words.length; i += chunkSize - overlapSize) {
    metadata.push({ userId, version });
  }

  return metadata;
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

    if (data && data.length > 0 && typeof data[0].version === 'number') {
      const version = data[0].version as number;
      const document: Document = {
        metadata: {
          version: version,
          userId: userId // Include userId if necessary
        }
      };
      return version + 1;
    } else {
      return 0;
    }
  } catch (err) {
    // Handle any errors that occurred during the try block
    console.error('Error in fetchRecentVersion:', err);
    // You might want to return a specific error code or throw an error
    // Depending on how you want to handle this case
    throw err;
  }
};
