import React from "react";
import "./style.css";
// get our fontawesome imports
// ref https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="container-fluid custom-footer fixed-bottom p-1">
      <div className="row">
          <div className="col-3">
              <a href="https://www.facebook.com/shayla.stevenson.165" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon"icon={faFacebook} />
              </a>
          </div>

          <div className="col-3">
              <a href="https://www.instagram.com/shayla711/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
          </div>

          <div className="col-3">
              <a href="https://github.com/ShaylaStevenson" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon className="icon"icon={faGithub} />
              </a>
          </div>

          <div className="col-3">
              <a href="https://www.linkedin.com/in/shayla-stevenson-806143200/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon className="icon"icon={faLinkedin} />
              </a>
          </div>
      </div>
    </footer>
  );
}

export default Footer;