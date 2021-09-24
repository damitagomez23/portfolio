import React from 'react';
import {Link} from "react-router-dom";
// import { HashLink } from 'react-router-hash-link';


export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div className ="dropdown">
                        <button className="menu" aria-label="menu button">&#9776;</button>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}