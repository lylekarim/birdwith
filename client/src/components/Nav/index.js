import React from "react";
import "./style.css";

function Nav() {
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
              <li className="menu-item-has-children"><a href="#">Home</a> <span className="arrow"></span>
                <ul className="sub-menu">
                    <li><a href="index.html">Home 1</a></li>
                    <li><a href="index-2.html">Home 2</a></li>
                    <li><a href="index-3.html">Home 3</a></li>
                 </ul>
              </li>
              <li className="menu-item-has-children"><a href="#">Listing</a> <span className="arrow"></span>
                 <ul className="sub-menu">
                    <li className="menu-item-has-children"><a href="#">Grid Layout</a> <span className="arrow"></span>
                        <ul className="sub-menu">
                            <li><a href="listing-grid.html">Listing Gird</a></li>
                            <li><a href="listing-grid-sidebar.html">Listing Gird Sidebar</a></li>
                            <li><a href="listing-grid-map.html">Listing Gird Half Map</a></li>
                        </ul> 
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
              <li className="menu-item-has-children"><a href="#">Blog</a> <span className="arrow"></span>
                 <ul className="sub-menu">
                    <li><a href="blog-grid-style.html">Blog Grid Style</a></li>
                    <li><a href="blog-list-style.html">Blog List Style</a></li>
                    <li><a href="blog-single.html">Single Blog</a></li>
                </ul> 
              </li>
              <li className="menu-item-has-children">
                    <a href="#">Elements</a>
                    <ul className="sub-menu">
                        <li><a href="header.html">Header Style</a></li>
                        <li><a href="footer.html">Footer Style</a></li>
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
    </nav>
</header>   
  );
}

export default Nav;
