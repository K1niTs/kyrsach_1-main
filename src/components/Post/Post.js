import React from 'react';
import './Post.css';

function Post({ post, handleDeleteClick, handleArchiveClick }) {
  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <p>Автор: <span><b>{post.author}</b></span></p>
      <p>Категория: <span><b>{post.category}</b></span></p>
      <p>{post.content}</p>
      <div className="buttons">
        <button className="delete-button" onClick={() => handleDeleteClick(post.title)}>Удалить</button>
        <button className="archive-button" onClick={() => handleArchiveClick(post.title)}>Архив</button>
      </div>
    </article>
  );
}

export default Post;
