import React, { useState }from 'react';
import './Navigation.css'
import logo from '../../assets/images/logo-pnd.png';

function Navigation() {

  const [Navbar, setNavbar] = useState(false);

  const changeBackgroundNavbar = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 75) {
      setNavbar(true);
    }else{
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundNavbar);

  return (
    <div className={Navbar ? "nav active" : "nav"}>
        <div>
            <img src={logo} alt="Logo" className="nav-logo"/>
        </div>
        {/* <div>
          Navigation
        </div> */}
    </div>
  )
}

export default Navigation