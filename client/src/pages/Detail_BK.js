import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Detail extends Component {
  state = {
    birder: {}
  };
  // When this component mounts, grab the birder with the _id of this.props.match.params.id
  // e.g. localhost:3000/birders/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBirder(this.props.match.params.id)
      .then(res => this.setState({ birder: res.data }))
     
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>

<section id="inner_banner" className="parallex-bg howitwork_bg">
	<div className="container">
    	<div className="white-text text-center div_zindex">
        <a href='/email'><h1>{this.state.birder.title}</h1></a>
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
                        <img src={this.state.birder.thumbnail} alt="birder image" />
                    </div>
                    <div className="entry_meta">
                        <span className="meta_m"><i className="fa fa-eye"></i> 48 Views</span>
                        <span className="meta_m"><i className="fa fa-heart-o"></i> <a href="#">4 Likes</a></span>
                    </div>
                    <div className="entry-desc">
                        <div className="entry-content">
                            <p>{this.state.birder.description}</p>
                          
                         </div>
                    </div>
                    <div className="post_tag">
                        <span>Interests:</span> 
                        <a href="#">  {this.state.birder.interests}</a>
                
                    </div>
                    <Link to="/">← Back to Birds</Link>
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
            
         
        </div>
    </div>
</section>
</div>
);
  }
}

export default Detail;
