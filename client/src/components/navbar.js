import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/*1st logo part*/}
        <div className="logo">
          <h2>
            <span>G</span>ym
            <span>T</span>racker
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link  mobile-media-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
        {/* social media links*/}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/
                    watch?v=8AJ3Kcz5FsM"
                target="_thapa"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/
                    watch?v=8AJ3Kcz5FsM"
                target="_thapa"
              >
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/
                    watch?v=8AJ3Kcz5FsM"
                target="_thapa"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
          </ul>
          {/*hamburger menu start*/}
          <div className="hanburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
      {/*Hero Section*/}
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Gym Tracker</h1>
      </section>
    </>
  );
};
export default Navbar;
