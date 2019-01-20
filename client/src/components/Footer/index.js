import React from "react";
import "./style.css";



function Footer(props) {
  return (
<div>
<footer id="footer" className="secondary-bg">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="footer_widgets">
          <h5>Connect with Us</h5>
          <div className="follow_us">
            <ul>
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="footer_widgets">
          <h5>Quick Links</h5>
          <div className="footer_nav">
            <ul>
              <li><a href="#">How it Work</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & condition</a></li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  <div className="footer_bottom">
    <div className="container">
      <p>Copyright &copy; 2019 BirdWith. All Rights Reserved</p>
    </div>
  </div>
</footer>

</div>

);
}

export default Footer;