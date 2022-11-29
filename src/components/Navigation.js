// import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";

import React from "react";

import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

import { useRef } from "react";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import { Form, Link } from "react-router-dom";
import { Navbar, Icon, NavItem } from "react-materialize";
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  // return (
  //   <div>

  //   <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

  //     <div style={{position: 'relative'}} >

  //       <li><Link className='active' to='/'>Home</Link></li>
  //       <li><a href='#gernal'>TV Series</a></li>
  //       <li><a className='Add' href='#add'>Movies</a></li>
  //       <input type="text" placeholder="Search.." className='search'></input>
  //       <li><a className='switch-mode' href='#' onClick={toggle}
  //         style={{
  //           backgroundColor: theme.backgroundColor,
  //           color: theme.color,
  //           outline: 'none'
  //         }} data-testid="toggle-theme-btn">

  //           {/* <i class="gg-toggle-on"></i> */}

  //           </a></li>
  //       {/* <div class="header-right"> */}

  //       <li><a className='Login' href='#login'>Login</a></li>
  //       <li><a className='Register' href='#register'>Register</a></li>
  //       <li><Link to='Contact'  >Contact</Link></li>
  //       <li>
  //           <a
  //             className="switch-mode"
  //             href="#"
  //             style={{
  //               backgroundColor: theme.backgroundColor,
  //               color: theme.color,
  //               outline: "none",
  //             }}
  //             data-testid="toggle-theme-btn"
  //           >
  //             {/* <i class="gg-toggle-on"></i> */}

  //             <label class="switch">
  //               <input type="checkbox" onChange={toggle}></input>
  //               <span class="slider round"></span>
  //             </label>
  //           </a>
  //         </li>
  //       </div>

  //   </nav>
  //   </div>
  // )
  // ===============================================================
  return (
    <Navbar
      className="Menu"
      alignLinks="right"
      brand={<span className="brand-logo">Player Cards</span>}
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
    >
      <ul>
        <li>
          <div class="form-outline">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder="SEARCH"
              aria-label="Search"
            />
          </div>
        </li>
        <li>
          <Link to="/">
            <Icon left>home</Icon>Home
          </Link>
        </li>
        <li to="/about">
          <Link to="/about">
            <Icon left>info_outline</Icon>About
          </Link>
        </li>
        <li to="/news">
          <Link to="/news">
            <Icon left>dvr</Icon>News
          </Link>
        </li>
        <li href="/contact">
          <Link to="/contact">
            <Icon left>contacts</Icon>Contact
          </Link>
        </li>
      </ul>
    </Navbar>
  );
}
