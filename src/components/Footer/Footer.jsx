import React from "react";
import "../../index.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className="footer" id="contactme">
        <a href="mailto:figueroada@vcu.edu" className="footer__link">figueroada@vcu.edu</a>
        <ul className="social-list">
            <li className="social-list__item">
                <a className="social-list__link" href="https://www.linkedin.com/in/davidfig/">
                <i className="fab fa-linkedin"></i>
                {/* <FontAwesomeIcon icon={faLinkedin} /> */}
                </a>
            </li>
            <li className="social-list__item">
                <a className="social-list__link" href="https://github.com/figfacts">
                <i className="fab fa-github"></i>
                 {/* <FontAwesomeIcon icon={faGithub} /> */}
                </a>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;