import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li class="navbar">
                <div class="navbar-button">
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </div>
                
            </li>
            <li class="navbar">
                <button class="navbar-button">Haikus</button>
                <div class="dropdown-content">
                    <Link to="/haikus/history">History</Link>
                    <Link to="/haikus/popular">Popular Haikus</Link>
                    <Link to="/haikus/create">Create a Haiku</Link>
                </div>
            </li>
            <li class="navbar">
                <button class="navbar-button">Exquisite Corpses</button>
                <div class="dropdown-content">
                    <Link to="/exquisite-corpses/history">History</Link>
                    <Link to="/exquisite-corpses/popular">Popular Exquisite Corpses</Link>
                    <Link to="/exquisite-corpses/create">Create an Exquisite Corpse</Link>
                </div>
            </li>
            <li class="navbar">
            <button class="navbar-button">Constrained Poems</button>
            <div class="dropdown-content">
                    <Link to="/constrained-poems/history">History</Link>
                    <Link to="/constrained-poems/popular">Popular Constrained Poems</Link>
                    <Link to="/constrained-poems/create">Create a Constained Poem</Link>
                </div>
            </li>
        </ul>
    </nav>
);

export default NavBar;