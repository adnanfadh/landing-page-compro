import React, { useEffect, useRef }from 'react'
import Lottie from "lottie-web";
import LoadAnimation from "./loading.json";
import "./preloader.css";


const Preloader = () => {

    const container = useRef(null);

    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        animationData: LoadAnimation
      });
      return () => {
        Lottie.destroy();
      };
    },[]);
       
    return (
      <div className="preloader">
        <div className="container loader" ref={container}></div>
      </div>
    );
}

export default Preloader