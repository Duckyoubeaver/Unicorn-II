(function () {
  // Widget's HTML content
  const widgetHTML = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">

    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

      .button-widget {
        position: fixed;
        font-family: 'inter';

        bottom: 20px;

        right: 20px;

        background-color: #1a001a;

        color: #fff;

        border: none;

        border-radius: 15px;

        width: 50px;

        height: 50px;

        cursor: pointer;
        z-index: 999;

        transition: all 0.3s;

        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      }

      .button-widget:hover {
        transform: scale(1.05);
      }

      button-widget.clicked {
    transform: scale(0.9); /* Shrinks the button to 90% of its original size */
}

      /* CSS for the larger widget */

      .larger-widget {
        position: fixed;

        bottom: 90px;

        right: 20px;

        background-color: #ffffff;

        width: 390px;

        height: 267px;

        z-index: 2;

        transition: opacity 0.3s;

        opacity: 0;

        border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
      }
      .final {
        font-size: 10px;
      }

      .interim {
        font-size: 10px;
      }

      .speech-container {
        padding: 20px;

        text-align: center;
      }

      .speech-button {
        background-color: #005a9d;

        color: #fff;

        border: none;

        border-radius: 5px;

        padding: 10px 20px;

        cursor: pointer;
      }

      .speech-button:hover {
        background-color: #003b6b;
      }

      .speech-results {
        margin-top: 10px;
        font-size: 15px;
        font-family:"inter";
        user-select: none;

      }

      .access-message {
        display: none;
      }

      h1 {
        font-size: 20px;
      }

  .container {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center;
    padding: 33px;
    margin-top: 50px;
    height: 40px; /* Set a fixed height */
    min-height: 40px; /* Ensure it doesn't shrink below this height */
    overflow-y: auto;
    border: 1px solid #ccc; /* Optional: adds a border to make the container visible */

}
      .bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        /* border: 1px dashed;
        box-sizing: border-box; */
            border: 1px solid #ccc; /* Optional: adds a border to make the container visible */

      }
      .divider {
    height: 2px; /* Adjust the height as needed */
    background-color: #f5f5f5; /* Even lighter grey color */
    width: 100%; /* Ensures the divider stretches across the full width of its parent */
    margin: 20px 0; /* Adds some space above and below the divider */
}



      .fa-keyboard {
        margin-left: auto;
        margin-right: 80px;
        width: 5px;
      }

      .placeholder {
        width: 5px;
        visibility: hidden;
        margin-left: 80px;
      }

      .powered {
        font-size: 10px;
        /* Ensure this element is a direct child of .bottom for it to be centered */
        /* position: absolute;
        left: 50%;
        transform: translateX(-50%); */
        user-select: none;
        z-index: 99;
        font-family: 'inter';
      }

      .flex {
        flex: 1;
      }

      .ball {
        width:40px; /* Circle */

        height: 40px; /* Circle */

        border-radius: 50%;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 7px;
}
      /* CSS for chat above*/
      .ai-chat-container {
        position: fixed;
        bottom: 380px; /* Fixed bottom position */
        right: 20px;
        background-color: #fff; /* Match the larger-widget background */
        width: 250px; /* Width of the container */
        max-height: 300px; /* Maximum height before scrolling */
        overflow-y: auto; /* Add scrollbar for overflow content */
        z-index: 2;
        border-radius: 5px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
        font-size: 15px;
        padding: 20px; /* Padding around text */
        opacity: 0; /* Start with the container hidden */
        transform: translateY(
          20px
        ); /* Start slightly below its final position */
        transition: all 0.3s ease; /* Transition for smooth appearance */
        /* Removed fixed height */
      }

      .ai-chat-container.active {
        animation: expandAnimation 0.5s ease forwards; /* Apply the expand animation */
      }

      .ai-response-conatiner {
        font-size: 14px;
        user-select: none;
        font-family: 'inter';

      }

      .timestamp {
        color: rgb(107, 107, 110);
        font-size: 10px;
                        font-family: 'inter';

      }


      path {
        mix-blend-mode: plus-lighter;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }

      .ai-chat-container.fade-out {
        animation: fadeOut 0.3s ease forwards;
      }

      @keyframes dilate {
        0% {
          transform: scaleY(1);
        }

        25% {
          transform: scaleY(1.7);
        }

        50% {
          transform: scaleY(1);
        }

        75% {
          transform: scaleY(1.7);
        }

        100% {
          transform: scaleY(1);
        }
      }

      @keyframes expandFromCorner {
        from {
          transform: scale(0.2);

          opacity: 0;
        }

        to {
          transform: scale(1);

          opacity: 1;

          transform-origin: bottom right;
        }
      }

      @keyframes shrinkToCorner {
        from {
          transform: scale(1);

          opacity: 1;

          transform-origin: bottom right;
        }

        to {
          transform: scale(0.2);

          opacity: 0;

          transform-origin: bottom right;
        }
      }

      .interimTranscription {
        font-family:"inter";
      }

      @keyframes expandAnimation {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes shrink {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(0.75);
    }
}

@keyframes expand {
    from {
        transform: scale(0.75);
    }
    to {
        transform: scale(1);
    }
}
.link {
  color:black;
  text-decoration:none;
}
    </style>
    
    <button class="button-widget" id="openButton"></button>
    <div class="ai-chat-container" id="aiChatContainer">
      <div class="ai-response-conatiner" id="aiResponseContainer"></div>
      <span class="timestamp">Bot · Just now ·</span>
      <!-- This is where AI responses will go -->
    </div>

    <div class="larger-widget" id="largerWidget">
      <p id="accessText" class="access-message">
        Please allow microphone access to enable voice recognition.
      </p>

      <div class="speech-container" id="speechContainer">

        <div class="container" id="container">

        <div id="interimTranscription" class="speech-results"></div> 

        
<!--
          <div class="ball animateball" style="background-color: #ffbe0b"></div>

          <div class="ball animateball" style="background-color: #fb5607"></div>

          <div class="ball animateball" style="background-color: #ff006e"></div>

          <div class="ball animateball" style="background-color: #8338ec"></div>

          <div class="ball animateball" style="background-color: #3a86ff"></div>

-->

          
        </div>


        <div class="bottom">

          <div class="placeholder"></div>
          <div class="flex"></div>

          <p class="powered">
            POWERED BY 
            <a class="link" target="_blank" href="https://www.communicube.ai/">COMMUNICUBE</a>
          </p>
          <div class="flex"></div>
          <i class="fa-regular fa-keyboard"></i>
        </div>
      </div>
    </div>
    `;

  // Function to initialize the widget
  // Function to initialize the widget
  function init() {
    // Check if the body tag exists
    const body = document.getElementsByTagName('body')[0];
    if (body) {
      // If the body tag exists, insert the widget HTML and inject styles
      body.insertAdjacentHTML('beforeend', widgetHTML);

      // Additional JavaScript functionality here
    } else {
      // If the body tag does not exist, you can choose to retry after a delay
      // or log an error message, depending on your requirements
      console.error('Unable to initialize widget: <body> tag not found.');
    }

    const oscs = [];
    const startTime = Date.now();
    class RandomOscillator {
      constructor(mainFreq) {
        this.freqs = [];
        this.phases = [];
        for (let i = 0; i < 16; i++) {
          let mult = 1 - (1 - Math.random() ** 0.5) * 0.7;
          this.freqs.push(
            Math.random() < 0.5 ? mainFreq * mult : mainFreq / mult
          );
          this.phases.push(Math.random());
        }
        oscs.push(this);
      }
      oscUpdate() {
        let time = Date.now() - startTime;
        let sum = 0;
        for (let i = 0; i < 16; i++) {
          sum += Math.sin(
            (this.phases[i] + time * this.freqs[i]) * Math.PI * 2
          );
        }
        this.value = sum / 16;
      }
    }

    const paths = document.getElementsByTagName('path');
    function update() {
      oscs.forEach((o) => o.oscUpdate());
      for (let i = 0; i < paths.length; i++) {
        paths[i].setAttribute(
          'd',
          `M 0 .5 Q ${oscs[i * 4].value + 0.5} ${
            oscs[i * 4 + 1].value * 0.4 + 0.5
          } 1 .5 Q ${oscs[i * 4 + 2].value + 0.5} ${
            oscs[i * 4 + 3].value * 0.4 + 0.5
          } 0 .5`
        );
      }
      requestAnimationFrame(update);
    }
    for (let i = 0; i < paths.length; i++) {
      new RandomOscillator(0.00005);
      new RandomOscillator(0.00025);
      new RandomOscillator(0.00005);
      new RandomOscillator(0.00025);
    }
    update();
    class MicrophoneWidget {
      constructor() {
        this.openButton = document.getElementById('openButton');

        this.largerWidget = document.getElementById('largerWidget');

        this.speechContainer = document.getElementById('speechContainer');

        this.accessText = document.getElementById('accessText');

        this.accessMessage = document.querySelector('.access-message');
        this.aiChatContainer = document.getElementById('aiChatContainer');
        this.aiResponseContainer = document.getElementById(
          'aiResponseContainer'
        );

        this.isAssistantOpen = false;

        this.isMicrophoneAccessGranted = false;

        this.finalTranscription = '';

        this.interimTranscription = '';

        this.isAiMessageVisible = false; // Initialize the flag

        this.recognition = new webkitSpeechRecognition();

        this.recognition.lang = 'en-US';

        this.transcriptionInProgress = false; // Flag to track if transcription is in progress

        this.recognition.continuous = true;

        this.recognition.interimResults = true;

        this.conversationContext = '';

        this.recognition.onstart = function () {
          console.log('Speech recognition started');
        };

        this.recognition.onend = function () {
          console.log('Speech recognition ended');
        };
        this.userId = '';

        if (window.myWidget && window.myWidget.q) {
          for (var i = 0; i < window.myWidget.q.length; i++) {
            var args = window.myWidget.q[i];
            if (args[0] === 'init') {
              var config = args[1];
              // Set this.userId to config.appId as a double string
              this.userId = config.appId;
            }
          }
        }

        function scrollToBottom() {
          var container = document.getElementById('container');
          container.scrollTop = container.scrollHeight;
        }

        this.recognition.onresult = (event) => {
          var interimTranscript = '';

          this.finalTranscription = this.interimTranscription; // Store the current interim transcription as final

          for (var i = event.resultIndex; i < event.results.length; ++i) {
            if (!event.results[i].isFinal) {
              interimTranscript += event.results[i][0].transcript;
              scrollToBottom();
            }
          }

          this.interimTranscription = interimTranscript;

          this.updateDilationState();

          if (
            event.results[event.results.length - 1].isFinal &&
            event.results[event.results.length - 1][0].transcript !== ''
          ) {
            //Stop Recording
            this.recognition.onend = null;
            this.recognition.stop();
            console.log('Stopped transcribing to send data');
            this.recording = false;
            //Add to user Context EX) Hello -> User: "Hello" to conversationContext variable
            this.appendToContext(
              'User',
              event.results[event.results.length - 1][0].transcript //User utterance
            );
            //Log the user utterance
            console.log(event.results[event.results.length - 1][0].transcript);

            this.sendUtteranceToServer(this.conversationContext)
              .then((aiResponse) => {
                const messageTime = new Date();
                this.updateTimestamp(messageTime);

                console.log('Ai response is' + aiResponse); // This will log the resolved value, not the promise
                this.appendToContext('AI Assistant', aiResponse);
                this.updateChatContainer(aiResponse);

                console.log(this.conversationContext);
              })
              .catch((error) => {
                console.error('An error occurred:', error);
              });
          }
        };

        this.checkMicrophonePermission = () => {
          navigator.permissions
            .query({ name: 'microphone' })
            .then((permissionStatus) => {
              if (permissionStatus.state === 'granted') {
                this.isMicrophoneAccessGranted = true;
                this.accessMessage.style.display = 'none';
                this.speechContainer.style.display = 'block';
              } else if (permissionStatus.state === 'denied') {
                this.isMicrophoneAccessGranted = false;
                this.accessMessage.innerText =
                  'Microphone access denied. Please allow access in your browser settings.';
                this.accessMessage.style.display = 'block';
                this.speechContainer.style.display = 'none';
              } else {
                this.isMicrophoneAccessGranted = false;
                this.accessMessage.style.display = 'block';
                this.speechContainer.style.display = 'none';
              }
            });
        };

        this.openButton.addEventListener('mousedown', () => {
          openButton.style.animation = 'shrink 0.2s forwards';
        });

        this.openButton.addEventListener('mouseup', () => {
          openButton.style.animation = 'expand 0.2s forwards';
        });
        this.openButton.addEventListener('mouseleave', () => {
          if (openButton.style.animation.includes('shrink')) {
            openButton.style.animation = 'expand 0.2s forwards';
          }
        });
        this.openButton.addEventListener('click', () => {
          if (!this.isAssistantOpen) {
            this.checkMicrophonePermission();

            this.isAssistantOpen = true;

            this.largerWidget.style.display = 'block';

            this.largerWidget.style.animation =
              'expandFromCorner 0.1s forwards';

            if (!this.isMicrophoneAccessGranted) {
              this.accessMessage.style.display = 'block';

              this.speechContainer.style.display = 'none';

              this.requestMicrophoneAccess();
            } else {
              this.accessText.style.display = 'none';

              this.speechContainer.style.display = 'block';

              this.recognition.lang = 'en-US';

              this.recognition.onend = this.onEnd;
              this.recognition.start();
              this.recording = true;
            }
          } else {
            this.isAssistantOpen = false;
            this.interimTranscription = '';

            if (this.isAiMessageVisible) {
              this.aiChatContainer.style.animation = 'fadeOut 0.1s forwards';
              this.isAiMessageVisible = false;
            }

            this.largerWidget.style.animation = 'shrinkToCorner 0.1s forwards';

            // this.aiChatContainer.classList.add("fade-out");

            this.recognition.onend = null;
            this.recognition.stop();
            console.log('Stopped transcribing as widget closed');
            this.recording = false;

            this.finalTranscription = '';

            this.aiResponseContainer.textContent = '';

            //Clears conversation context

            this.conversationContext = '';

            setTimeout(() => {
              this.largerWidget.style.display = 'none';
            }, 300);
          }
        });
      }

      appendToContext(speaker, message) {
        this.conversationContext += `${speaker}: ${message}\n`;
      }

      updateChatContainer(aiResponse) {
        // Check if the widget is open
        if (!this.isAssistantOpen) {
          // If the widget is closed, exit the function
          return;
        }

        const chatContainer = document.getElementById('aiResponseContainer');
        chatContainer.textContent = aiResponse; // Update the text content of the chat container

        var el = document.getElementById('aiChatContainer');
        el.style.animation = 'none';
        el.offsetHeight; // Trigger reflow
        el.style.animation = null;
        // Trigger the expand animation
        this.aiChatContainer.style.animation = 'expandAnimation 0.3s forwards';
        this.isAiMessageVisible = true;
      }

      updateTimestamp(messageTime) {
        const currentTime = new Date();
        const timeDiff = Math.round((currentTime - messageTime) / 60000); // Difference in minutes

        const timestampElement = document.getElementById('timestamp');
        if (timestampElement) {
          if (timeDiff === 0) {
            timestampElement.textContent = 'Bot · Just now';
          } else if (timeDiff === 1) {
            timestampElement.textContent = 'Bot · 1 minute ago';
          } else {
            timestampElement.textContent = `Bot · ${timeDiff} minutes ago`;
          }
        }
      }
      requestMicrophoneAccess() {
        this.getLocalStream();
      }

      getLocalStream() {
        navigator.mediaDevices

          .getUserMedia({ video: false, audio: true })

          .then((stream) => {
            this.isMicrophoneAccessGranted = true;

            this.accessMessage.style.display = 'none';

            this.speechContainer.style.display = 'block';

            this.recognition.lang = 'en-US';

            this.recognition.onend = this.onEnd;
            this.recognition.start();
            this.recording = true;
          })

          .catch((err) => {
            console.error(`Error accessing microphone: ${err}`);
          });
      }
      async updateDilationState() {
        const animateBalls = document.querySelectorAll('.animateball');

        const interimTranscriptionElement = document.getElementById(
          'interimTranscription'
        );

        if (interimTranscriptionElement) {
          if (this.interimTranscription.trim() !== '') {
            if (!this.animationState) {
              animateBalls.forEach((ball) => {
                ball.style.animation =
                  'dilate 1s ease-in-out infinite alternate';

                this.animationState = true;
              });
            }

            interimTranscriptionElement.textContent = this.interimTranscription;
          } else {
            animateBalls.forEach((ball) => {
              ball.style.animation = 'none';
            });

            this.animationState = false;
          }
        } else {
          console.error("Element with id 'interimTranscription' not found");
        }

        const finalTranscriptionElement =
          document.getElementById('finalTranscription');

        if (finalTranscriptionElement) {
          finalTranscriptionElement.textContent = this.finalTranscription;
        }
      }

      async sendUtteranceToServer(utterance) {
        // Send the complete utterance to the server
        const requestData = {
          userInput: utterance,
          userId: this.userId // Add this line to include the userId
          // Change to match your server's expected format
        };

        try {
          const response = await fetch(
            'https://www.communicube.ai/api/chat',
            // "http://localhost:3000/api/chat",
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(requestData)
            }
          );

          const data = await response.json();
          console.log(data);

          if (!this.recognition) {
            throw new Error('Recognition object not found.');
          }

          console.log('transcription sent, transcription starting');
          this.recognition.onend = this.onEnd;
          this.recognition.start();
          this.recording = true;
          console.log('Returns' + data.text);
          return data.text;
        } catch (error) {
          console.error('Error:', error);

          if (this.recognition) {
            // If there's an error, check if recognition is not already started before restarting it
            this.recognition.onend = this.onEnd;
            this.recognition.start();
            this.recording = true;
          }
        }
      }

      onEnd = () => {
        console.log('Speech recognition has stopped. Starting again ...');
        // if (!this.recognition) {
        //   console.error("Recognition object not found.");

        //   return;
        // }
        this.recognition.start();
      };
    }

    // Create an instance of the MicrophoneWidget class

    const microphoneWidget = new MicrophoneWidget();
  }

  // Auto-initialize the widget
  init();
})();
