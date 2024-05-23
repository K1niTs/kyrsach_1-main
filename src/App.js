import React, { useState } from 'react';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import Archive from './components/Archive/Archive';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [archive, setArchive] = useState([]);

  const handleSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleArchiveClick = (title) => {
    const archivedPost = posts.find(post => post.title === title);
    if (archivedPost) {
      const updatedPosts = posts.filter(post => post.title !== title);
      setPosts(updatedPosts);
      setArchive([...archive, archivedPost]);
    } else {
      const updatedArchive = archive.concat(posts.filter(post => post.title === title));
      setArchive(updatedArchive);
      const updatedPosts = posts.filter(post => post.title !== title);
      setPosts(updatedPosts);
    }
  };

  const handleDeleteClick = (title) => {
    const updatedPosts = posts.filter(post => post.title !== title);
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <Header />
      <div className="blog-content">
        <PostList posts={posts} handleDeleteClick={handleDeleteClick} handleArchiveClick={handleArchiveClick} />
        <CreatePostForm onSubmit={handleSubmit} />
        <Archive archive={archive} />
      </div>
    </div>
  );
}

export default App;
