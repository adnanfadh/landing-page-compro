import React, { useEffect, useRef } from 'react';
import Lottie from "lottie-web";
import AnimationData from "./data.json";

export default function Animation() {

  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: AnimationData
    })
    return () => {
      Lottie.destroy();
    };
  },[]);
     
  return (
    <div style={{ backgroundColor:"grey"}} >
      <div className="container" ref={container} />
    </div>
  );
}