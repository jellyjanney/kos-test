import React, { Component, useEffect, useState } from "react";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
// import { Link } from "react-router-dom";

const Header = () => {
    const [sticky, setSticky] = useState("");

    // on render, set listener
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);

    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
    };
    
    const classes = `header-section ${sticky}`;
    

    return (
        <>
            <header className={classes}>
                <nav className="header">
                    <button className="brand">
                        <img src="/images/about-me/logo.png" alt="JANNEY's Portfolio" className="brand-logo" />
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
                    
                    <Menu menuButton={<MenuButton>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </MenuButton>}>
                        <MenuItem>About Me</MenuItem>
                        <MenuItem>My Skill</MenuItem>
                        <MenuItem>Contact me</MenuItem>
                    </Menu>
                </nav>
            </header>
        </>
    );
};

export default Header;