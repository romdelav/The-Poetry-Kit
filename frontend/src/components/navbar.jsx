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
                    <Link to="/haikus/popular">Popular Haikus</Link>
                    <Link to="/haikus/create">Create a Haiku</Link>
                </div>
            </li>
            <li class="dropdown">
                <button class="dropdown-button">Exquisite Corpses</button>
                <div class="dropdown-content">
                    <Link to="/exquisite-corpses/history">History</Link>
                    <Link to="/exquisite-corpses/popular">Popular Exquisite Corpses</Link>
                    <Link to="/exquisite-corpses/create">Create an Exquisite Corpse</Link>
                </div>
            </li>
            <li class="dropdown">
            <button class="dropdown-button">Constrained Poems</button>
            <div class="dropdown-content">
                    <Link to="/constrained-poems/history">History</Link>
                    <Link to="/constrained-poems/popular">Popular Exquisite Corpses</Link>
                    <Link to="/constrained-poems/create">Create an Exquisite Corpse</Link>
                </div>
            </li>
        </ul>
    </nav>
);

export default NavBar;