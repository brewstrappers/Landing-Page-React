import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Landing Page</title>
        <meta property="og:title" content="Landing Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-left-side">
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
            <div className="home-links-container">
              <img alt="image" src="/br-200h.png" className="home-image" />
            </div>
          </div>
          <div className="home-right-side"></div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container1">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <a href="#resources" className="home-link Anchor">
                Resources
              </a>
              <span className="home-link1 Anchor">Inspiration</span>
              <span className="home-link2 Anchor">Process</span>
              <span className="home-link3 Anchor">Our story</span>
            </div>
          </div>
        </div>
      </div>
      <div id="resources" className="home-hero">
        <div className="home-content-container">
          <div className="home-hero-text">
            <em className="home-heading Section-Heading">
              The Sky is the Limit
            </em>
          </div>
        </div>
      </div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon4">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Brewstrappers, 2024</span>
          </div>
          <div className="home-copyright-container1">
            <span className="Anchor">info@brewstrappers,com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
