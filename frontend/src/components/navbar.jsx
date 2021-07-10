import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li className="navbar">
                <div className="navbar-button">
                    <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </div>
                
            </li>
            <li className="navbar">
                <button className="navbar-button">Haikus</button>
                <div className="dropdown-content">
                    <Link to="/haikus/history">History</Link>
                    <Link to="/haikus/popular">Popular Haikus</Link>
                    <Link to="/haikus/themes">Create a Haiku</Link>
                </div>
            </li>
            <li className="navbar">
                <button className="navbar-button">Exquisite Corpses</button>
                <div className="dropdown-content">
                    <Link to="/exquisite-corpses/history">History</Link>
                    <Link to="/exquisite-corpses/select">Contribute to an Exquisite Corpse</Link>
                </div>
            </li>
            <li className="navbar">
            <button className="navbar-button">Constrained Poems</button>
            <div className="dropdown-content">
                    <Link to="/constrained-poems/history">History</Link>
                    <Link to="/constrained-poems">View Constrained Poems</Link>
                    <Link to="/constrained-poems/create">Create a Constained Poem</Link>
                </div>
            </li>
        </ul>
    </nav>
);

export default NavBar;