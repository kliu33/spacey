import "./Header.css";
import spacex from "../imgs/spacex.png"
import { NavLink } from "react-router-dom/dist";

function Header() {
  return (
    <div id="header">
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
