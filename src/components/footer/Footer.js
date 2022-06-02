import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaFacebookF, FaYoutube, FaRegEnvelope, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import PinLoc from '../../assets/svg/pin-location.svg';
import ImgLogo from '../../assets/svg/pnd-img-logo.svg';


function Footer() {
  return (
    <div className="footer">
        <div className="footer-contact-service">
            <div className="contact-service-icon">
                <FaInstagram /><FaTiktok /><FaFacebookF /><FaYoutube />
            </div>
            <div className="">
                <img src={PinLoc}  style={{height: '2.5em'}}/>
            </div>
            <div className="contact-service-title">Contact Service</div>
            <div className="contact-service-address">
                Kantor Pusat : <br/>
                Jl. Buah Batu Regency Blok A-1 No.3, Buah Batu, Bandung.
            </div>
            <hr style={{border: '1px solid #666666'}}/>
            <div className="contact-service-info">
                <table>
                    <tr>
                        <td><FaPhoneAlt /></td>
                        <td>Telepon</td>
                        <td>:</td>
                        <td>022 30500289</td>
                    </tr>
                    <tr>
                        <td><FaWhatsapp /></td>
                        <td>Whatsapp</td>
                        <td>:</td>
                        <td>+62 812-2122-7404</td>
                    </tr>
                    <tr>
                        <td><FaRegEnvelope /></td>
                        <td>Email</td>
                        <td>:</td>
                        <td>partnership@pancanarasidigital.com</td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="footer-copyright">
            <div className="copyright-image">
                <img src={ImgLogo} style={{height: '9em'}}/>
            </div>
            <div className="copyright-title">Copyright &copy; PND 2022</div>
            <div className="copyright-text">
                <p>All right reserved. No part of this design may be reproduced, distributed, or transmitted in any form or by any means, including photocopying, recording, or other electronic or mechanical methods, without the prior writtten permission of PND</p>
            </div>
            <hr style={{border: '4px solid #bd1818',width: '20%', marginLeft: '0'}}/>
        </div>
    </div>
  )
}

export default Footer