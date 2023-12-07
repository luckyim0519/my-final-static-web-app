import React, { useState, useEffect } from 'react';
import WebChatFrame from './WebChatFrame';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`/api/message`);
        const { text } = await response.json();
        setData(text);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []); // Make sure to include an empty dependency array to ensure this effect runs only once

  return <div>
    {data}
    <h1>Classroom Chatbot</h1>
    <WebChatFrame/> 
    
    </div>;
}

export default App;


