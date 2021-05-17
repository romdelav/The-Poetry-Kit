import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li class="dropdown">
                <button class="dropdown-button">Haikus</button>
                <div class="dropdown-content">
                    <Link to="/haikus/history">History</Link>
                    <a href="#">Popular Haikus</a>
                    <a href="#">Create a Haiku</a>
                </div>
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