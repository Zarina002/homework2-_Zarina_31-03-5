import React from 'react';
import { NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Посты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/create">Создать пост</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;