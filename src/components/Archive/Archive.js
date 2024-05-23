import React from 'react';
import './Archive.css';

function Archive({ archive }) {
  return (
    <div className="archive">
      <h2>Архив</h2>
      <ul>
        {archive.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Archive;
