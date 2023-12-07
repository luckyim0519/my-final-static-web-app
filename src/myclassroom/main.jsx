import React from 'react';
import YouTube from 'react-youtube';
import { Link, useNavigate } from 'react-router-dom';
import "./main.css";

const main =()=> {
  const openBook = (url) => {
    window.open(url, '_book');
  }

 
  
  return (
    <div className="classroom">
      <h2>Welcome to your classroom! </h2>
      <div className="grid-container">

        <div className="screen">
          <div className="item1">
            <YouTube videoId='SVvr3ZjtjI8'></YouTube>
          </div>
        </div>

        <div className="item2">
          <p></p>
          <div className="buttons">
          <button className="button-54" onClick={() => openBook('https://en.wikipedia.org/wiki/Convolution')}>Book1</button><br />
          <button className="button-54" onClick={() => openBook('https://en.wikipedia.org/wiki/Pseudorandom_binary_sequence')}>Book2</button><br />
          <button className="button-54" onClick={() => openBook('https://en.wikipedia.org/wiki/PCB')}>Book3</button><br />
          </div>
        </div>

        <div className="item3">
          <p>TABLE</p>
        </div>

        <div className="item4">
          <p>TABLE</p>
        </div>

        <div className="item5" >
          <Link to="../progress">
            <button >My SECRET DOOR</button>
          </Link>
        </div>
      </div>
    
    </div>
    

    
  );
};

export default main;
