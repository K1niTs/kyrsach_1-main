import React from 'react';
import Post from '../Post/Post';
import './PostList.css';

function PostList({ posts, handleDeleteClick, handleArchiveClick }) {
  return (
    <div className="post-list">
      <div className="post-title">
        <h2>Записи</h2>
      </div>
      {posts.length === 0 && <p>Нет записей</p>}
      {posts.map((post, index) => (
        <Post key={index} post={post} handleDeleteClick={handleDeleteClick} handleArchiveClick={handleArchiveClick} />
      ))}
    </div>
  );
}

export default PostList;
