import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

/* A footer to our different pages that sends users to our code, various links and states our copyright.*/
function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-copyright">
        <h1 className="footer-copyright-heading">TRADERAUTO+</h1>
        <p className="footer-copyright-text">
          Technology Leadership Initative 2021 University of Toronto, CSC207
          Copyright © {new Date().getFullYear()}
        </p>
        <p className="footer-copyright-text">
          Jia Hao Choo, Ameen Parthab, Elizabeth Li, Sophie Sun, Daniel Xu{" "}
        </p>
      </section>
      <section className="footer-links">
        <a
          class="GithubLink"
          href="https://github.com/autotrader-plus"
          target="_blank"
        >
          <img
            className="GithubImage"
            alt="GitHub Logo"
            src="images/github-logo.png"
          />
        </a>
        <a class="footer-link" href="/sign-in">
          <p>Sign In</p>
        </a>
        <a class="footer-link" href="/sign-up">
          <p>Sign Up</p>
        </a>
        <a class="footer-link" href="/browse">
          <p>Browse Cars</p>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
