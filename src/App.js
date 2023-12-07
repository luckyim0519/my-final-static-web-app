import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Header from './components/Header/Header.jsx'; 
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Lectures from "./pages/Lectures";
import NoPage from "./pages/NoPage";

import Classroom from "./myclassroom_page/main.jsx";
import MyProgress from "./myclassroom_page/myProgress.jsx";

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      const { text } = await( await fetch(`/api/message`)).json();
      setData(text);
    })();
  });

  return (
  <div>
    {data}
      <h1>Static Web Apps Database Connections</h1>
    <blockquote>
        Open the console in the browser developer tools to see the API responses.
    </blockquote>
    <div>
        <button id="list" onclick="list()">List</button>
        <button id="get" onclick="get()">Get</button>
        <button id="update" onclick="update()">Update</button>
        <button id="create" onclick="create()">Create</button>
        <button id="delete" onclick="del()">Delete</button>
    </div>
    <script>
        // add JavaScript here
    </script>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/myclassroom" element={<Classroom />} />
            <Route path="/my-progress" element={<MyProgress />} />
            <Route path="/lectures" element={<Lectures />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Header />
        <p>MS Hackathons-nevergiveup</p>
    </div>
  </div>
  
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
