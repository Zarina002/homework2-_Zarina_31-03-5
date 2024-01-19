import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostsPage from './components/PostsPage';
import CreatePostPage from './components/CreatePostPage';
import Layout from "./components/Layout";
import "./App.css"
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<PostsPage/>}/>
                        <Route path="/create" element={<CreatePostPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
