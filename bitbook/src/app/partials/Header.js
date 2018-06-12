import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <ul className="nav justify-content-end">
            <li className="bitbook">
                BitBook
            </li>
            <li className="nav-item">
                <Link to="/Feed"> Feed | </Link>
            </li>
            <li className="nav-item">
                <Link to="/People"> People | </Link>
            </li>
            <li className="nav-item">
                <Link to="/Profile"> Profile</Link>
            </li>
        </ul>
    )
}
export default Header;