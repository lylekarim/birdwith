import React from "react";
import "./style.css";
import { FontAwesomeIcon } from 'react-fontawesome';

function NavTabs(props) {
  return (
    <header id="header" className="header_style2">
    <nav className="navbar navbar-default navbar-fixed-top affix-top" data-spy="affix" data-offset-top="10">
        <div className="container">
          <div className="navbar-header">
            <div className="logo"> <a href="index.html"><img width="250" src="./assets/images/logo_large_transparentbg.png" alt="image"/></a> </div>
            <button id="menu_slide" data-target="#navigation" aria-expanded="false" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> 
                <span className="sr-only">Toggle navigation</span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
            </button>
          </div>
          <div className="collapse navbar-collapse shownav" id="navigation">
          <ul className="nav nav-tabs navbar-nav affix-top">
      <li className="nav-item menu-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#birders"
          onClick={() => props.handlePageChange("Birders")}
          className={props.currentPage === "Birders" ? "nav-link active" : "nav-link"}
        >
          Birders
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => props.handlePageChange("Contact")}
          className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    {/* </ul> */}
            {/* <ul className="nav navbar-nav affix-top"> */}
             
              {/* <li className="menu-item-has-children"><a href="#">Pages</a> <span className="arrow"></span>
                 <ul className="sub-menu">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="how-it-work.html">How it Work</a></li>
                    <li><a href="404-error.html">404 Error</a></li>
                </ul> 
              </li> */}
             
              {/* <li className="menu-item-has-children"><a href="#">User Panel</a> <span className="arrow"></span>
                 <ul className="sub-menu">
                    <li><a href="dashboard-reviews.html">Reviews</a></li>
                    <li><a href="dashboard-my-profile.html">My Profile</a></li>
                </ul> 
              </li> */}
               
            </ul>
            <ul className="nav navbar-nav dashboard_menu affix-top">
            <li className="nav-item">
        <a
          href="#login"
          onClick={() => props.handlePageChange("Log In")}
          className={props.currentPage === "Log In" ? "nav-link active" : "nav-link"}
        >
          Sign In
        </a>
      </li>
            </ul>
          
            {/* <div className="submit_listing">
                <a href="#signup" 
                  onClick={() => props.handlePageChange("Join BirdWith")}
                className={props.currentPage === "Join BirdWith" ? "nav-link active btn outline-btn" : "nav-link btn outline-btn" }
                
                ><FontAwesomeIcon icon="plus-circle" /> Join BirdWith</a>
            </div> */}
            
          </div>
           
        </div>
 
   
    </nav>
</header>  
  );
}

export default NavTabs;

