import React from "react";
import { Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import { Map } from "../../components/Map";
import "./style.css";


function Home (props) {

return (

<div className="heroimage">
  <section id="banner" className="parallex-bg section-padding dark-overlay ">
  <div className="dark-overlay">
        <div className="intro_text white-text div_zindex section-padding">
          <h1>Find Someone to BirdWith</h1>
   
              <div className="search_form">
                <form action="listing-grid-map.html" method="get">
                    <div className="form-group select">
                         <select className="form-control">
                          <option>Where do you want to go birding?</option>
                          <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
                        </select>
                      </div>
                      <div className="form-group search_btn">
                        <input type="submit" value="Search" className="btn btn-block"/>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  
  </section>

  <section id="listing_category" className="section-padding">
	<div className="container">
    	<div className="section-header text-center">
        	<h2>What are you interested in? </h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
        </div>
    	<div id="category_slider2">
        	<div className="owl-carousel owl-theme">
            	<div className="item" style={{ backgroundImage: `url(require("assets/images/400x530.jpg"))` }}>


                	<a href="#">
    	            	<div className="category_icon">
                        	<span className="category_listing_n">20</span>
                            <img src="assets/images/category-icon1.png" alt="image" />
                        </div>
	                    <p>Real Estate</p>
                    </a>
                </div>
                
                <div className="item" style={{ backgroundImage: `url(require("assets/images/400x530.jpg"))` }}>
                	<a href="#">
    	            	<div className="category_icon">
                        	<span className="category_listing_n">32</span>
                            <img src="assets/images/category-icon2.png" alt="image" />
                        </div>
	                    <p>Restaurant</p>
                    </a>
                </div>
                
                <div className="item" style={{ backgroundImage: `url(require("assets/images/400x530.jpg"))` }}>
                	<a href="#">
    	            	<div className="category_icon">
                        	<span className="category_listing_n">18</span>
                            <img src="assets/images/category-icon3.png" alt="image" />
                        </div>
	                    <p>Health & Fitness</p>
                    </a>
                </div>
                
                <div className="item" style={{ backgroundImage: `url(require("assets/images/400x530.jpg"))` }}>
                	<a href="#">
    	            	<div className="category_icon">
                        	<span className="category_listing_n">15</span>
                            <img src="assets/images/category-icon4.png" alt="image" />
                        </div>
                        <p>Beauty & Spas</p>
                    </a>
                </div>
                
                <div className="item" style={{ backgroundImage: `url(require("assets/images/400x530.jpg"))` }}>
                	<a href="#">
    	            	<div className="category_icon">
                        	<span className="category_listing_n">15</span>
                            <img src="assets/images/category-icon5.png" alt="image" />
                        </div>
                        <p>Hotels & Travel</p>
                    </a>
                </div>
                
                <div className="item" style={{ backgroundImage: `url(require("assets/images/400x530.jpg"))` }}>
                	<a href="#">
    	            	<div className="category_icon">
                        	<span className="category_listing_n">32</span>
                            <img src="assets/images/category-icon6.png" alt="image" />
                        </div>
	                    <p>Automotive</p>
                    </a>
                </div>
                
                <div className="item" style={{ backgroundImage: `url(require("assets/images/400x530.jpg"))` }}>
                	<a href="#">
    	            	<div className="category_icon">
                        	<span className="category_listing_n">10</span>
                            <img src="assets/images/category-icon7.png" alt="image" />
                        </div>
	                    <p>Event</p>
                    </a>
                </div>
            </div>
        </div>        
    </div>
</section>
{/* <!-- /Category-Slider-Style-2 -->



<!--  Map--> */}

<section id="intro_map" className="section-padding">
	<div id="map-container" className="fullwidth-home-map">
    	<div id="map" data-map-zoom="9">
			 {/* <!-- map-here --> */}
		
        </div>
    	

</div>
	{/* <div className="dark-overlay"></div> */}
</section>



</div>
);
}
export default Home;
