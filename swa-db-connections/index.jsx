// DatabaseConnections.jsx

import React from 'react';

const DatabaseConnections = () => {
  const list = () => {
    // Add your list logic here
    console.log('List button clicked');
  };

  const get = () => {
    // Add your get logic here
    console.log('Get button clicked');
  };

  const update = () => {
    // Add your update logic here
    console.log('Update button clicked');
  };

  const create = () => {
    // Add your create logic here
    console.log('Create button clicked');
  };

  const del = () => {
    // Add your delete logic here
    console.log('Delete button clicked');
  };

  return (
    <div>
      <h1>Static Web Apps Database Connections</h1>
      <blockquote>
        Open the console in the browser developer tools to see the API responses.
      </blockquote>
      <div>
        <button id="list" onClick={list}>
          List
        </button>
        <button id="get" onClick={get}>
          Get
        </button>
        <button id="update" onClick={update}>
          Update
        </button>
        <button id="create" onClick={create}>
          Create
        </button>
        <button id="delete" onClick={del}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DatabaseConnections;
