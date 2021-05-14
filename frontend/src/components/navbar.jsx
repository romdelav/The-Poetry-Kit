import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/haikus">Haikus</Link>
            </li>
            <li>
                <Link to="/exquisite-corpses">Exquisite Corpses</Link>
            </li>
            <li>
                <Link to="/constrained-poems">Constrained Poems</Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;