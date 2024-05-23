import React, { useState } from 'react';
import './CreatePostForm.css';

function CreatePostForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, author, category, content });
    setTitle('');
    setCategory('');
    setAuthor('');
    setContent('');
  };

  return (
    <aside className="create-post">
      <h2>Создать запись</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">Автор:</label>
          <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          <label htmlFor="title">Заголовок:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="category">Категория:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label htmlFor="content">Содержание:</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit" className="create-button">Создать</button>
      </form>
    </aside>
  );
}

export default CreatePostForm;
