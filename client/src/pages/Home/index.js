import React from "react";
import { Container } from "../../components/Grid";
import { Input } from "../../components/Form";
import { Map } from "../../components/Map";
import "./style.css";


const Home = () => (

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
                            <option>Real Estate</option>
                              <option>Restaurant</option>
                              <option>Real Estate</option>
                            <option>Health & Fitness</option>
                            <option>Beauty & Spas</option>
                              <option>Hotels & Travel</option>
                              <option>Automotive</option>
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

<!-- How-it-Work --> */}
<section id="how_it_work" className="section-padding parallex-bg">
	<div className="container">
    	<div className="section-header text-center white-text div_zindex">
        	<h2>Find Quick and Easy</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
        </div>
        
        <div className="row">
        	<div className="col-md-4">
            	<div className="steps_wrap">
                	<div className="icon_div">
                    	<i className="fa fa-map-marker"></i>
                    </div>
                	<h5>Choose a location</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            
            <div className="col-md-4">
            	<div className="steps_wrap">
                	<div className="icon_div">
                    	<i className="fa fa-location-arrow"></i>
                    </div>
                	<h5>Pick a category</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            
            <div className="col-md-4">
            	<div className="steps_wrap">
                	<div className="icon_div">
                    	<i className="fa fa-smile-o"></i>
                    </div>
                	<h5>Find what you want</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    </div>
	<div className="dark-overlay"></div>
</section>
{/* <!-- /How-it-Work -->

<!-- Featured-Listings --> */}
<section id="featured_listings" className="section-padding">
	<div className="container">
    	<div className="section-header text-center">
        	<h2>Featured Listings</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>   
        
        <div id="popular_listing_slider">
        	<div className="owl-carousel owl-theme">                
                <div className="listing_wrap">
                    <div className="listing_img">
                        <span className="like_post"><i className="fa fa-bookmark-o"></i></span>
                        <div className="listing_cate">
                            <span className="cate_icon"><a href="#"><img src="assets/images/category-icon1.png" alt="icon-img" /></a></span> 
                            <span className="listing_like"><a href="#"><i className="fa fa-heart-o"></i></a></span>
                        </div>
                        <a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                    </div>
                    <div className="listing_info">
                        <div className="post_category">
                            <a href="#">Real Estate</a>
                        </div>
                        <h4><a href="#">The Morning Hotel</a></h4>
                        <p>5-star hotel with restaurant, Deluxe Rooms.</p>
                        
                        <div className="listing_review_info">
                            <p><span className="review_score">4.0/5</span> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star"></i> 
                               (5 Reviews) </p>
                            <p className="listing_map_m"><i className="fa fa-map-marker"></i> Los Angeles</p>
                        </div>
                    </div>
                </div>
                
                <div className="listing_wrap">
                    <div className="listing_img">
                        <span className="like_post"><i className="fa fa-bookmark-o"></i></span>
                        <div className="listing_cate">
                            <span className="cate_icon"><a href="#"><img src="assets/images/category-icon2.png" alt="icon-img" /></a></span> 
                            <span className="listing_like"><a href="#"><i className="fa fa-heart-o"></i></a></span>
                        </div>
                        <a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                    </div>
                    <div className="listing_info">
                        <div className="post_category">
                            <a href="#">Restaurant</a>
                        </div>
                        <h4><a href="#">Eating Restaurant</a></h4>
                        <p>5-star hotel with restaurant, Deluxe Rooms.</p>
                        
                        <div className="listing_review_info">
                            <p><span className="review_score">4.0/5</span> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star"></i> 
                               (5 Reviews) </p>
                            <p className="listing_map_m"><i className="fa fa-map-marker"></i> Los Angeles</p>
                        </div>
                    </div>
                </div>
                
                <div className="listing_wrap">
                    <div className="listing_img">
                        <span className="like_post"><i className="fa fa-bookmark-o"></i></span>
                        <div className="listing_cate">
                            <span className="cate_icon"><a href="#"><img src="assets/images/category-icon4.png" alt="icon-img" /></a></span> 
                            <span className="listing_like"><a href="#"><i className="fa fa-heart-o"></i></a></span>
                        </div>
                        <a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                    </div>
                    <div className="listing_info">
                        <div className="post_category">
                            <a href="#">Beauty & Spas</a>
                        </div>
                        <h4><a href="#">The Morning Hotel</a></h4>
                        <p>5-star hotel with restaurant, Deluxe Rooms.</p>
                        
                        <div className="listing_review_info">
                            <p><span className="review_score">4.0/5</span> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star"></i> 
                               (5 Reviews) </p>
                            <p className="listing_map_m"><i className="fa fa-map-marker"></i> Los Angeles</p>
                        </div>
                    </div>
                </div>
                
                <div className="listing_wrap">
                    <div className="listing_img">
                        <span className="like_post"><i className="fa fa-bookmark-o"></i></span>
                        <div className="listing_cate">
                            <span className="cate_icon"><a href="#"><img src="assets/images/category-icon2.png" alt="icon-img" /></a></span> 
                            <span className="listing_like"><a href="#"><i className="fa fa-heart-o"></i></a></span>
                        </div>
                        <a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                    </div>
                    <div className="listing_info">
                        <div className="post_category">
                            <a href="#">Restaurant</a>
                        </div>
                        <h4><a href="#">Blue Restaurant</a></h4>
                        <p>5-star hotel with restaurant, Deluxe Rooms.</p>
                        
                        <div className="listing_review_info">
                            <p><span className="review_score">4.0/5</span> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> 
                               <i className="fa fa-star active"></i> <i className="fa fa-star"></i> 
                               (5 Reviews) </p>
                            <p className="listing_map_m"><i className="fa fa-map-marker"></i> Los Angeles</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             
    </div>
</section>
{/* <!-- /Featured-Listings -->

<!-- Pricing-Table --> */}
<section id="pricing_table" className="section-padding parallex-bg">
	<div className="container">
    	<div className="section-header white-text div_zindex text-center">
        	<h2>Listing Packages</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
        </div>
        
        <div className="row">
        	<div className="col-md-4">
            	<div className="pricing_wrap">
                	<div className="pricing_header">
                    	<h2>Basic</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                    <div className="plan_info">
                    	<div className="plan_price">Free</div>
                        <ul>
                        	<li><span>One</span> Listing</li>
                            <li><span>30 Days </span> Availability</li>
                            <li><span>Standard </span> Listing</li>
                            <li><span>Limited </span> Support</li>
                        </ul>
                        <a href="#" className="btn">Get Started</a>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
            	<div className="pricing_wrap active">
                	<div className="pricing_header">
                    	<p className="popular_plan">Most Popular</p>
                    	<h2>Professional</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                    <div className="plan_info">
                    	<div className="plan_price">$5.00</div>
                        <ul>
                        	<li><span>10</span> Listing</li>
                            <li><span>90 Days </span> Availability</li>
                            <li><span>Standard </span> Listing</li>
                            <li><span>24/7 </span> Support</li>
                        </ul>
                        <a href="#" className="btn">Get Started</a>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
            	<div className="pricing_wrap">
                	<div className="pricing_header">
                    	<h2>Business</h2>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                    <div className="plan_info">
                    	<div className="plan_price">$16.00</div>
                        <ul>
                        	<li><span>Unlimited</span> Listing</li>
                            <li><span>Unlimited Days </span> Availability</li>
                            <li><span>Featured</span> Listing</li>
                            <li><span>24/7 </span> Support</li>
                        </ul>
                        <a href="#" className="btn">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
	<div className="dark-overlay"></div>
</section>
{/* <!-- /Pricing-Table -->

<!-- Latest-Blog --> */}
<section id="latest_blog" className="section-padding">
	<div className="container">
    	<div className="section-header text-center">
        	<h2>Latest Articles and Tips</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
        </div>
        
        <div className="row">
        	<div className="col-md-4">
            	<div className="post_wrap">
                	<div className="post_img">
                    	<a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                    </div>
                    <div className="post_info">
                    	<div className="post_category">
                        	<a href="#">Beauty & Spas</a>
                        </div>
                    	<h4><a href="#">The Standard Chunk.</a></h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <div className="post_meta">
                        	<p>By: <a href="#">ElemoListing</a></p>
                            <p>On: <a href="#">22 March, 2017</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
            	<div className="post_wrap">
                	<div className="post_img">
                    	<a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                    </div>
                    <div className="post_info">
                    	<div className="post_category">
                        	<a href="#">Restaurant</a>
                        </div>
                    	<h4><a href="#">There are many variations.</a></h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <div className="post_meta">
                        	<p>By: <a href="#">ElemoListing</a></p>
                            <p>On: <a href="#">22 March, 2017</a></p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="col-md-4">
            	<div className="post_wrap">
                	<div className="post_img">
                    	<a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                    </div>
                    <div className="post_info">
                    	<div className="post_category">
                        	<a href="#">Real Estate</a>
                        </div>
                    	<h4><a href="#">All the Lorem Ipsum.</a></h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        <div className="post_meta">
                        	<p>By: <a href="#">ElemoListing</a></p>
                            <p>On: <a href="#">22 March, 2017</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="text-center">
        	<a href="#" className="btn">Read More Articles</a>
        </div>
        
    </div>
</section>
{/* <!-- /Latest-Blog --> */}

</div>
);

export default Home;
