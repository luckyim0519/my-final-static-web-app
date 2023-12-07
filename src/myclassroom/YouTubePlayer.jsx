import React from 'react';
import YouTube from 'react-youtube';

const YouTubePlayer = ({ videoId }) => {

  const opts = {
    playerVars: {
      // Autoplay: 1 enables autoplay
      autoplay: 1,
    },
  };

  // Event handler for when the video ends
  const onEnd = (event) => {
    console.log('Video ended:', event);
    // You can add logic here for what happens after the video ends
  };

  return (

    <div className="youtube-wrapper">
      <div className="youtube-player-container">
        <YouTube
          videoId={videoId} // YouTube video ID
          opts={opts} // Options for the YouTube player
          onEnd={onEnd} // Event handler for when the video ends // Apply the class for styling
        />
      </div>
    </div>
  );

};

export default YouTubePlayer;
