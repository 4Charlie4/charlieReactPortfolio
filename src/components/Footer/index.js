import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer container-fluid shadow">
      <footer className="row">
      <p className="footP col">Please feel free to contact me. You can also check me out on Linkedin and Github.</p>
        <ul className="d-flex col justify-content-center social">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/charliedev4/"
            >
              <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/4Charlie4"
            >
              <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
            </a>
          </li>
        </ul>
        
      </footer>
    </div>
  );
}

export default Footer;
