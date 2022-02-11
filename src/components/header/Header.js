import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss"
const Header = () => {
    return (
        <header className='header'>
            <ul>
                <li><Link to="/box-shadow">Box shadow</Link></li>
                <li><Link to="/text-shadow">Text shadow</Link></li>
                <li><Link to="/border">Border</Link></li>
                <li><Link to="/transform">Transform</Link></li>
                <li><Link to="/gradient">Gradient</Link></li>
            </ul>
        </header>
    );
};

export default Header;