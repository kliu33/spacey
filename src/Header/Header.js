import "./Header.css";
import spacex from "../imgs/spacex.png"
import { NavLink } from "react-router-dom/dist";
import { useState, useEffect } from "react";

function Header() {

  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    if(window.scrollY >= 200){
      setHeader(true)
    } else{
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);

    return () => {
      window.removeEventListener('scroll', changeHeader);
    };
  }, []);
  
  return (
    <div className={header ? 'header active' : 'header'}>
      <div id='header-div'>
        <img src={spacex} id="spacex-logo"></img>
        <div id='links-div'>
            <NavLink>FALCON 9</NavLink>
            <NavLink>FALCON HEAVY</NavLink>
            <NavLink>DRAGON</NavLink>
            <NavLink>STARSHIP</NavLink>
            <NavLink>HUMAN SPACEFLIGHT</NavLink>
            <NavLink>RIDESHARE</NavLink>
            <NavLink>STARSHIELD</NavLink>
            <NavLink>STARLINK</NavLink>
        </div>
      </div>
      <div id='shop-header'>
          <NavLink>Shop</NavLink>
      </div>
    </div>
  );
}

export default Header;
