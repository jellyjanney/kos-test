import React, { Component } from "react";
// import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <header>
                <nav>
                    <button className="brand">
                        <img src="/images/about-me/logo-1.png" alt="JANNEY's Portfolio" className="brand-logo" />
                    </button>
                    <ul className="menu">
                        <li className="menu-list active">
                            <button className="menu-list__btn">
                                Home
                            </button>
                        </li>
                        <li className="menu-list">
                            <button className="menu-list__btn">
                                Skill
                            </button>
                        </li>
                        <li className="menu-list">
                            <button className="menu-list__btn">
                                Portfolio
                            </button>
                        </li>
                        <li className="menu-list">
                            <button className="menu-list__btn">
                                About Me
                            </button>
                        </li>
                        <li className="menu-list">
                            <button className="menu-list__btn">
                                Contact Me
                            </button>
                        </li>
                    </ul>
                    
                    <ul className="menu-right dropdown">
                        <li className="menu-right__list dropdown-toggle" id="aboutme" data-bs-toggle="dropdown" aria-expanded="false">
                            <button className="menu-right__btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                </svg>
                            </button>
                            
                            <ul className="dropdown-menu" aria-labelledby="aboutme">
                                <li><a className="dropdown-item" href="#">About Me</a></li>
                                <li><a className="dropdown-item" href="#">My Skill</a></li>
                                <li><a className="dropdown-item" href="#">Contact Me</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>
        );    
    }
}

export default Header;