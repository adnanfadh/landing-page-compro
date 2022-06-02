import React from 'react';
import './BannerLogo.css';
import logo from '../../assets/images/logo-pnd.png'

function BannerLogo() {
  return (
    <div className="banner-logo">
        <div className="separato2"/>
        <img src={logo} alt="Logo"  className="img"/>
        <div className="separator"/>
    </div>
  )
}

export default BannerLogo