import React from 'react';
import {BsFillCameraReelsFill} from 'react-icons/bs'
import bgAboutUs from '../../assets/images/bg-aboutus.jpg';
import imgBannerService from '../../assets/images/img-banner-service.png';
import Lamp from '../../assets/svg/lamp.svg';
import Triangle from '../../assets/svg/triangle.svg';
import Movie from '../../assets/svg/movie-icon.svg';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
        <div className="main">
            <div className="about-title">
                <img src={Lamp} alt="Lamp" className="icon"/>
                <div className="title">
                    About PND
                </div>
                <img src={Triangle} alt="Triangle" className="icon"/>
                <hr />
                <div className="subtitle">Panca Narasi Digital</div>
                <div className="deskription">
                    " Is one of the information technology companies engaged in the development of Creative Industry, Production House, Advertising Agency, Software House and Network Solution "
                </div>
                <div className="subtitle-right">Work Hard</div>
            </div>
            <img src={bgAboutUs} alt="BG-AboutUs" className="bg-about-us"/>
            {/* <img src={imgBannerService} alt="imgBannerService" className="img-banner-service"/> */}
        </div>
        <div className="img-banner-service">
            <div className="banner-service-content">
                <h1>Innovative Technology Solutions</h1>
            </div>
        </div>
        <div className="about-footer">
            <div className="about-content">
                <div className="about-info">
                    <div className="row-info">
                        <div className="info-title">
                            <span className="dot"></span>
                            Efficient
                        </div>
                        <div className="info-deskription">Setiap pekerjaan kamu lakukan secara profesional dan terstruktur sehingga waktu yang dibutuhkan sangat efisien. Sehingga anda tidak pertu membuang waktu dan uang untuk merekrut creative designer dan menyediakan peralatan yang mahal.</div>
                        <hr style={{border: '1px solid #666666',width: '90%', marginLeft: '0'}}/>
                    </div>
                    <div className="row-info">
                        <div className="info-title">
                            <span className="dot"></span>Profesional Team
                        </div>
                        <div className="info-deskription">
                            Tim creative kami merupakan orang yang ahli dan berpengalaman dibidangnya sehingga banyak perusahaan dan sektor ukm yang terbantu
                        </div>
                        <hr style={{border: '1px solid #666666',width: '90%', marginLeft: '0'}}/>
                    </div>
                </div>
                <div className="about-info">
                    <div className="row-info">
                        <div className="info-title"> <span className="dot"></span>Good Services</div>
                        <div className="info-deskription">
                            Anda bebas konsultasi dengan tim kami sehingga kami dapat memahami kebutuhan anda dan memberikan apa yang dibutuhkan oleh anda.
                        </div>
                        <hr style={{border: '1px solid #666666',width: '90%', marginLeft: '0'}}/>
                    </div>
                    <div className="row-info">
                    <div className="info-title"> <span className="dot"></span>Reative and Innovative</div>
                        <div className="info-deskription">
                            Melakukan riset dan analisis untuk memunculkan ide kreatif dan inovatif merupakan identitas yang baik membuat konsumen dapat mengenali produk perusahaan anda tanpa perlu membaca nama produk anda.
                        </div>
                        <hr style={{border: '1px solid #666666',width: '90%', marginLeft: '0'}}/>
                    </div>
                </div>
            </div>
            <div className="about-info-icon"><img src={Movie} style={{width: '100%',height: '3.5em'}}/></div>
        </div>
    </div>
  )
}

export default AboutUs