import React from 'react';

const WebChatFrame = () => {
  const iframeStyle = {
    minWidth: '300px',
    width: '60%',
    minHeight: '300px',
    border: 'none',  // Optional: To remove iframe border
  };

  return (
    <iframe
      src='https://webchat.botframework.com/embed/chat-bot-classroom?s=HFR7UzqKDsU.HfDYaGGc4UTgHo5-WkWRkynIVWWHUfW5P6Y6xf_FpNw'
      style={iframeStyle}
      title='Web Chat'
    ></iframe>
  );
};

export default WebChatFrame;
