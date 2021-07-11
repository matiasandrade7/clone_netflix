import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (

        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" alt="Netflix logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/245px-Netflix_2015_logo.svg.png"></img>

            <img className="nav__avatar" alt="Netflix avatar" src="https://i.imgur.com/SHx84Cv.png"></img>
        </div>
    )
}

export default Nav
