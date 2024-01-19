import React from 'react';
import {useNavigate} from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate()
    return (
        <div>
            <h1>404... Такой страницы не существует</h1>
            <button onClick={()=>{navigate(-1)}}>Вернуться назад</button>
        </div>
    );
}

export default NotFoundPage;