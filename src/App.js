import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { getTokenOrRefresh } from './token_util';
import './custom.css';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';

const speechsdk = require('microsoft-cognitiveservices-speech-sdk');

export default function App() {
  const [displayText, setDisplayText] = useState('5s_Promo.mp3 size=123644bytes - \n scrib leo. We draw the world to your idea');
  const [player, updatePlayer] = useState({ p: undefined, muted: false });

  async function fileChange(event) {
    const audioFile = event.target.files[0];
    console.log(audioFile);
    const fileInfo = audioFile.name + ` size=${audioFile.size} bytes `;

    setDisplayText(fileInfo);

    const tokenObj = await getTokenOrRefresh();
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
    speechConfig.speechRecognitionLanguage = 'en-US';

    const audioConfig = speechsdk.AudioConfig.fromWavFileInput(audioFile);
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync((result) => {
      let text;
      if (result.reason === ResultReason.RecognizedSpeech) {
        text = `RECOGNIZED: Text=${result.text}`;
      } else {
        text = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
      }

      setDisplayText(fileInfo + text);
    });
  }

  return (
    <Container className="app-container">
      <h1 className="display-4 mb-3">Speech to Text</h1>

      <div className="row main-container">
        <div className="col-6">
          <label htmlFor="audio-file">
            <i className="fas fa-file-audio fa-lg mr-2"></i>
          </label>
          <input
            type="file"
            id="audio-file"
            onChange={(e) => fileChange(e)}
            style={{ display: 'none' }}
          />
          Convert speech to text from an audio file.
        </div>
        <div className="col-6 output-display rounded">
          <code>{displayText}</code>
        </div>
      </div>
    </Container>
  );
}
