import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    const [preloader, setPreloader] = useState(false)

    useEffect(() => {
        setPreloader(true)
        axios.get('https://dummyjson.com/posts')
            .then((response) => {
                setPosts(response.data.posts)
            })
            .catch(error => console.error('Ошибка при получении постов:', error))
            .finally(() => {
                setPreloader(false)
            })
    }, []);

    return (
        <div>
            <h1>Посты</h1>
            {preloader
                ? <h2>Загружется...</h2>
                : Array.isArray(posts) ? (
                    posts.map(post => (
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    ))
                ) : (
                    <p>Произошла ошибка при получении постов.</p>
                )
            }
        </div>
    );
};

export default PostsPage;