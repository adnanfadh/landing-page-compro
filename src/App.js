// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Preloader from './components/animationJSON/Preloader';
import Animation from './components/animationJSON/Animation';
import Navigation from './components/navigation/Navigation';
import Banner from './components/banner/Banner';
import AboutUs from './components/home/AboutUs';
import Service from './components/home/Service';
import BannerLogo from './components/home/BannerLogo';
import Footer from './components/footer/Footer';
import image1 from '../src/assets/images/img-1.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  const [loading, setLoading] = useState(false);
  // const [SlideUp, setSlideUp] = useState("");
  // const top = 100;

  // const transitionSlideUp = () => {
  //   setSlideUp(window.scrollY);
  //   if (setSlideUp > 120){
  //     top--;
  //   }else{
  //     top++;
  //   }
  //   console.log("Scroll = " + SlideUp);
  //   // if (window.scrollY > 75) {
  //   //   setNavbar(true);
  //   // }else{
  //   //   setNavbar(false);
  //   // }
  // };
  // window.addEventListener('scroll', transitionSlideUp);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  },[]);

  return (
      <div>
        {loading ? (
          <div>
          <Preloader loading={loading} />
          </div>
        ):(
          <div>
            <Navigation className="navigation"/>
            <div className="main-content">
              <div className="content-banner">
                <Banner />
              </div>
              <div className="content-about">
                <AboutUs />
              </div>
              <Service />
              <img src={image1} style={{width: '100%', marginBottom: '-0.3em'}}/>
              <BannerLogo />
              <Footer />
            </div>
            {/* <div className="App">
              <header className="App-header">
                <h1>React Lottie Animation JSON</h1>
              </header>
              <Animation />
            </div> */}
          </div>
        )}
    </div>
  );
}

export default App;
