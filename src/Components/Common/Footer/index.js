import React from 'react';
import './style.css';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <div className="footer">
      <h2>CryptoTracker.</h2>
      <div className="footer__left">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className="social-link" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon className="social-link" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;