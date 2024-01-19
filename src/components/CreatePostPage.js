import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const handleCreatePost = () => {
    if (title === "" || body === "") {
      alert("Заполните все поля!")
      return
    }
    axios.post('https://dummyjson.com/posts/', { title, body }, {headers: {"Content-Type": "application/json"}})
      .then(() => navigate('/'))
      .catch(error => console.error('Ошибка при создании поста:', error));
  };

  return (
    <div>
      <h1>Создать пост</h1>
      <form>
        <label>Заголовок:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br />
        <label>Текст:
          <textarea value={body} onChange={e => setBody(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCreatePost}>Создать пост</button>
      </form>
    </div>
  );
};

export default CreatePostPage;