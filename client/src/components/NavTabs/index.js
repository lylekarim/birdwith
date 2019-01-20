import React from "react";
import "./style.css";


function NavTabs(props) {
  return (
    <header id="header" className="header_style2">
    <nav className="navbar navbar-default navbar-fixed-top affix-top" data-spy="affix" data-offset-top="10">
        <div className="container">
          <div className="navbar-header">
            <div className="logo"> <a href="index.html"><img src="assets/images/logo2.png" alt="image"/></a> </div>
            <button id="menu_slide" data-target="#navigation" aria-expanded="false" data-toggle="collapse" className="navbar-toggle collapsed" type="button"> 
                <span className="sr-only">Toggle navigation</span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="nav navbar-nav affix-top">
              <li className="menu-item"><a href="#">Home</a> <span className="arrow"></span>
               
              </li>
              <li className="menu-item"><a href="#">Birders</a> <span className="arrow"></span>
                 <ul className="sub-menu">
                    <li className="menu-item"><a href="#">Grid Layout</a> <span className="arrow"></span>
                       
                    </li>
                    <li className="menu-item-has-children"><a href="#">List Layout</a> <span className="arrow"></span>
                        <ul className="sub-menu">
                            <li><a href="listing-listview.html">Listing List</a></li>
                            <li><a href="listing-listview-sidebar.html">Listing List Sidebar</a></li>
                            <li><a href="listing-listview-map.html">Listing List Half Map</a></li>
                        </ul> 
                    </li>
                    <li className="menu-item-has-children"><a href="#">Single Listing</a> <span className="arrow"></span>
                        <ul className="sub-menu">
                            <li><a href="listing-detail-1.html">Style 1</a></li>
                            <li><a href="listing-detail-2.html">Style 2</a></li>
                        </ul> 
                    </li>
                 </ul>
              </li>
              <li className="menu-item-has-children"><a href="#">Pages</a> <span className="arrow"></span>
                 <ul className="sub-menu">
                    <li><a href="about-us.html">About Us</a></li>
                    <li><a href="how-it-work.html">How it Work</a></li>
                    <li><a href="pricing.html">Pricing</a></li>
                    <li><a href="contact-us.html">Contact Us</a></li>
                    <li><a href="404-error.html">404 Error</a></li>
                </ul> 
              </li>
             
              <li className="menu-item-has-children"><a href="#">User Panel</a> <span className="arrow"></span>
                 <ul className="sub-menu">
                    <li><a href="dashboard.html">Dashboard</a></li>
                    <li><a href="dashboard-my-listings.html">My Listings</a></li>
                    <li><a href="dashboard-reviews.html">Reviews</a></li>
                    <li><a href="dashboard-bookmarks.html">Bookmarks</a></li>
                    <li><a href="blog-single.html">Add Listing</a></li>
                    <li><a href="dashboard-my-profile.html">My Profile</a></li>
                </ul> 
              </li>
               
            </ul>
            <ul className="nav navbar-nav dashboard_menu affix-top">
                <li><a href="signin.html">Sign In</a></li>
            </ul>
            <div className="front_nav_bar">
                <a href="javascript:;" className="menu-toggle-bar">
                    <i className="fa fa-bars"></i>
                    <i className="fa fa-close"></i>
                </a>
            </div>
            <div className="submit_listing">
                <a href="pricing.html" className="btn outline-btn"><i className="fa fa-plus-circle"></i> Submit Listing</a>
            </div>
            
          </div>
           
        </div>
 
    <ul className="nav nav-tabs">
      <li className="nav-item">
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
          href="#blog"
          onClick={() => props.handlePageChange("Blog")}
          className={props.currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
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
    </ul>
    </nav>
</header>  
  );
}

export default NavTabs;
