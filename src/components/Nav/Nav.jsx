import React from 'react';
import '../../index.css';
import logo from '../../images/logo.png';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

function Nav() {
    return(
    <>
        <div className="logo"> <img src={logo} alt="logo"/> </div>

        <button className="nav-toggle" aria-label="toggle navigation">
            <span className="hamburger"></span>
        </button>
    
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                {/* <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li> */}
                <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                <li className="nav__item"><a href="#contactme" className="nav__link">Contact me</a></li>
            </ul>
        </nav>
    </>
    );
}

export default Nav;

