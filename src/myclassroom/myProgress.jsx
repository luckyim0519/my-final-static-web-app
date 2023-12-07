import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import "./myProgress.css";

import desk from "./desk.jsx";
const MyProgress = () => {

  return (
    <div>
      <h2><b>My Progress</b></h2>
      <div className="progress-grid-container">
        <div className='progress-bars'>
          <p>progress bar</p>
          <div class="wrap-circles">
            <div class="circle per-0">
              <div class="inner"><b>course1</b></div>
            </div>
            <div class="circle per-25">
              <div class="inner"><b>course2</b></div>
            </div>
            <div class="circle per-50">
              <div class="inner"><b>course3</b></div>
            </div>
            <div class="circle per-75">
              <div class="inner"><b>course4</b></div>
            </div>

          </div>
        </div>
        <div className='progress-graph1'>
          <p>graph1</p>
          <p></p>
        </div>
        <div className='progress-graph2'>
          <p>what you need to improve on</p>
    
         
  
        </div>

      </div>
    </div>
  );
};

export default MyProgress;
