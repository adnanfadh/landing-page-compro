import React from 'react';
import './Service.css';
import ItSolution from '../../assets/svg/it-solution.svg';
import DigitalAgency from '../../assets/svg/digital-agency.svg';
import EventOrgenizer from '../../assets/svg/event-orgenizer.svg';
import ProductionHouse from '../../assets/svg/production-house.svg';
import MotionGrapher from '../../assets/svg/motion-grapher.svg';
import Photography from '../../assets/svg/photography.svg';
import Videographer from '../../assets/svg/videographer.svg';
import GraphicDesigner from '../../assets/svg/graphic-design.svg';
import ITSupport from '../../assets/svg/it-support.svg';
import ContentCreator from '../../assets/svg/content-creator.svg';
import UiUxDesign from '../../assets/svg/ui-ux-design.svg';
import Arrow from '../../assets/images/arrow-banner.png';

function Service() {
    return (
        <div className="service">
            <div className="separator"></div>

            <div className="header">
                <div className="right-text">Copyright &copy; 2022 <b>PND</b> | All Rights Reserved</div>
            </div>
            <div className="separator-red"></div>
            <div className="bg-main">
                <img src={Arrow} className="arrow-left"/>
                <img src={Arrow} className="arrow-right"/>
            </div>
            <div className="main">
                <div className="service-title">
                    <h1>PND Business Services</h1>
                    <hr style={{border: "1px solid #bd1818"}}/>
                </div>
                <div className="service-content">
                    <div className="service-content-container">
                        <img src={ItSolution} className="service-icon"/>
                        <h2>IT Solution</h2>
                    </div>
                    <div className="service-content-container">
                        <img src={DigitalAgency} className="service-icon"/>
                        <h2>Digital Agency</h2>
                    </div>
                    <div className="service-content-container">
                        <img src={EventOrgenizer} className="service-icon"/>
                        <h2>Event Orgenizer</h2>
                    </div>
                    <div className="service-content-container">
                        <img src={ProductionHouse} className="service-icon" style={{height: "3.5em"}}/>
                        <h2>Production House</h2>
                    </div>
                </div>
            </div>
            <div className="service-footer">
                <div>
                    <img src={MotionGrapher} className="service-icon"/>
                    <h3>Motion Grapher</h3>
                </div>
                <div>
                    <img src={Photography} className="service-icon"/>
                   <h3>Photography</h3>
                </div>
                <div>
                    <img src={Videographer} className="service-icon"/>
                   <h3>Videographer</h3>
                </div>
                <div>
                    <img src={GraphicDesigner} className="service-icon"/>
                    <h3>Graphic Designer</h3>
                </div>
                <div>
                    <img src={ITSupport} className="service-icon"/>
                    <h3>IT Support System</h3>
                </div>
                <div>
                    <img src={ContentCreator} className="service-icon"/>
                   <h3>Content Creator</h3>
                </div>
                <div>
                    <img src={UiUxDesign} className="service-icon"/>
                     <h3>Ui Ux Design</h3>
                </div>
            </div>
            <div className="separator"></div>

        </div>
    )
}

export default Service;