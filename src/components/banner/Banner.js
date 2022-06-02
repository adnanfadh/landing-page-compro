import React from 'react';
import './Banner.css';
import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube } from 'react-icons/fa';
import arrow from '../../assets/images/arrow-banner.png';
import imgBanner from '../../assets/images/img-banner.png';
import bgBanner from '../../assets/images/bg-banner.png';

function Banner() {
  return (
    <div className="banner">
        <div className="banner-sosmed">
            <div className="sosmed">
              <a href="https://www.instagram.com/pancanarasidigital/" target="_blank">
                <FaInstagram className="sosmed-icon"/>
              </a>
              <a href="#" target="_blank">
                <FaTiktok className="sosmed-icon"/>
              </a>
              <a href="#" target="_blank">
                <FaFacebookF className="sosmed-icon"/>
              </a>
              <a href="#" target="_blank">
                <FaYoutube className="sosmed-icon"/>
              </a>
            </div>
            <div>
              <span className="dot"></span>
              <hr className="right" />
            </div>
        </div>
        <div className="banner-content">
          <div className="banner-title">
              <h2 className="title">Panca Narasi Digital</h2>
              <h1 className="subtitle">Innovative Technology Solutions</h1>
              <hr className="left line"/>
          </div>
          <div className="banner-content-image">
            <div>
              <img src={bgBanner} alt="arrow" className="bg-banner"/>
              <img src={imgBanner} alt="arrow" className="img-banner"/>
              <h2>What Creative Ideas<br/>Can We Help, For<br/>Your Business Unit</h2>
            </div>
          </div>
        </div>
        
        <div className="banner-image">
          <div className="subtitle">Work Hard</div>
          <img src={arrow} alt="arrow" className="image-arrow"/>
          {/* <div className="image-content">
            <p>
              What Creative Ideas Can We Help, For Your Business Unit
            </p>
          </div> */}
        </div>
        <div className="banner-footer"></div>
        {/* <div className="banner-footer-2"></div> */}
    </div>
  )
}

export default Banner