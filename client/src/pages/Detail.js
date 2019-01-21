import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass';
import API from "../utils/API";

class Detail extends Component {
  state = {
    birder: {}
  };
  // When this component mounts, grab the birder with the _id of this.props.match.params.id
  // e.g. localhost:3000/birders/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBird(this.props.match.params.id)
      .then(res => this.setState({ birder: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
   
        <Row>
          <Col size="md-12">
            <Box width={600}>
              <Card
                p={1}
                borderRadius={2}
                boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
                <Image src={this.state.birder.thumbnail} />

                <Box px={2}>
                  <Heading as='h3'>
                    {this.state.birder.title} by {this.state.birder.author}
                  </Heading>
                  <Text fontSize={0}>
                    {this.state.birder.description}
                  </Text>
                </Box>
              </Card>
            </Box>;
          </Col>
        </Row>

        <Row>
     
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.birder.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Birds</Link>
          </Col>
        </Row>
 
 



<section id="inner_banner" className="parallex-bg howitwork_bg">
	<div className="container">
    	<div className="white-text text-center div_zindex">
        	<h1>But I must explain to mistaken</h1>
        </div>
    </div>
    <div className="dark-overlay"></div>
</section>


<section id="inner_pages">
	<div className="container">
		<div className="row">
        	<div className="col-md-8">
            	<article className="article_wrap single_post">    
                    <div className="post-thumbnail">
                        <img src="assets/images/800x530.jpg" alt="image" />
                    </div>
                    <div className="entry_meta">
                        <span className="meta_m"><i className="fa fa-eye"></i> 48 Views</span>
                        <span className="meta_m"><i className="fa fa-heart-o"></i> <a href="#">4 Likes</a></span>
                    </div>
                    <div className="entry-desc">
                        <div className="entry-content">
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                    <div className="post_tag">
                        <span>Tags:</span> 
                        <a href="#">Inspiration</a>
                        <a href="#">Health  Care</a>
                    </div>
                    <div className="share_post">
                        <a href="#" className="facebook"><i className="fa fa-facebook-f"></i> Facebook</a>
                        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i> Linkedin</a>
                        <a href="#" className="twitter"><i className="fa fa-twitter"></i> Twitter</a>
                        <a href="#" className="g_plus"><i className="fa fa-google-plus"></i> Goodle Plus</a>
                    </div>
                </article>  
                     
                {/* <!-- All-Comments --> */}
                <div className="articale_comments">
                	<div id="comments">
	                	<h4 className="block-head">2 Comments</h4>
                        <ul className="commentlist">                           
                            <li className="comment">
                            	<div className="comment-body">
                                	<div className="comment-author">
                                    	<img className="avatar" src="assets/images/100x100.jpg" alt="image" />
                                    	<span className="fn">John Smith</span>
                                    </div>
                                    <div className="comment-meta commentmetadata"> <a href="#">Feb 23, 2016 at 12:52 pm</a> </div>
                                    <div className="comment-content">
	                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                                        Ut enim ad minima veniam, quis nostrum exercitationem</p>
                                    </div>
                                    <div className="reply">
                                    	<a href="#" className="btn-link"><i className="fa fa-reply" aria-hidden="true"></i> Reply</a>
                                    </div>
                                </div>
                                
                                <ul className="children">
                                	 <li className="comment">
		                            	<div className="comment-body">
                                	<div className="comment-author">
                                    	<img className="avatar" src="assets/images/100x100.jpg" alt="image" />
                                    	<span className="fn">John Smith</span>
                                    </div>
                                    <div className="comment-meta commentmetadata"> <a href="#">Feb 23, 2016 at 12:52 pm</a> </div>
                                    <div className="comment-content">
	                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                                        Ut enim ad minima veniam, quis nostrum exercitationem</p>
                                    </div>
                                    <div className="reply">
                                    	<a href="#" className="btn-link"><i className="fa fa-reply" aria-hidden="true"></i> Reply</a>
                                    </div>
                                </div>
                                	</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
				{/* <!-- Comment-Form --> */}
                <div className="comment-respond">
                	<h4 className="block-head">Leave A Comment</h4>
                    <form method="get" className="comment-form">
                    	<div className="form-group">
                        	<input className="form-control" placeholder="Full Name" type="text" />
                        </div>
                        
                        <div className="form-group">
                        	<input className="form-control" placeholder="Email Address" type="email" />
                        </div>
                        
                        <div className="form-group">
                        	<textarea className="form-control" rows="4" placeholder="Comment"></textarea>
                        </div>
                        
                        <div className="form-group">
							<button className="btn" type="submit">Post Comment</button>
                        </div>
                    </form>
                </div>
            </div>
            
            <aside className="col-md-4">
            	<div className="sidebar">
                	<div className="sidebar_widgets">
                    	<div className="widget_title">
	                    	<h4>Categories</h4>
                        </div>
                        <ul>
                        	<li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Health Care</a></li>
                            <li><a href="#">Inspiration</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Interior</a></li>
                            <li><a href="#">Uncategorized</a></li>
                        </ul>
                    </div>
                    
                    <div className="sidebar_widgets">
                    	<div className="widget_title">
	                    	<h4>Featured Posts</h4>
                        </div>
                       <div className="featured_posts"> 
                       	  <div className="thubb_img">
                          	 <a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                          </div>
                       	  <div className="info_m">
                         	 <h6><a href="#">At vero eos et accusamus</a></h6>
                             <p><span className="meta_m"><i className="fa fa-clock-o"></i> 20 May 2017</span></p>
                           </div>
                       </div>
                       
                       <div className="featured_posts"> 
                       	  <div className="thubb_img">
                          	 <a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                          </div>
                       	  <div className="info_m">
                         	 <h6><a href="#">At vero eos et accusamus</a></h6>
                             <p><span className="meta_m"><i className="fa fa-clock-o"></i> 20 May 2017</span></p>
                           </div>
                       </div>
                       
                       <div className="featured_posts"> 
                       	  <div className="thubb_img">
                          	 <a href="#"><img src="assets/images/800x530.jpg" alt="image" /></a>
                          </div>
                       	  <div className="info_m">
                         	 <h6><a href="#">At vero eos et accusamus</a></h6>
                             <p><span className="meta_m"><i className="fa fa-clock-o"></i> 20 May 2017</span></p>
                           </div>
                       </div>
                    </div>
                    
                </div>
            </aside>
        </div>
    </div>
</section>
</div>
);
  }
}

export default Detail;
