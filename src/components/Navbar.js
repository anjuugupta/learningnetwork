import React from "react";
import logo from "../assets/img/learningnetwork-logo.png";
import { FaGithubSquare, FaLinkedinIn, FaHackerrank } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={logo} style={{ height: "350px" }} />
        </div>

        {/* Navbar */}
        <div className="manu-link">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Cource</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* practice platform */}

        <div className="social-media">
          <ul>
            <li>
              <a href="www.linkedin.com" target="_blank">
                <FaLinkedinIn className="linkdin" />
              </a>
            </li>
            <li>
              <a href="www.github.com" target="_blank">
                <FaGithubSquare className="github" />
              </a>
            </li>
            <li>
              <a href="www.hackerrank.com" target="_blank">
                <FaHackerrank className="hackerank" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#">
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
