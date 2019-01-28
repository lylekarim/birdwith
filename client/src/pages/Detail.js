import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Detail extends Component {
    state = {
        birder: {},
        email: {
            to: '',
            from: 'admin@birdwith.com',
            subject: 'A message from BirdWith',
            text: '',
            // html: '',
        },
        logintoken :  window.localStorage.getItem("SMC_authkey"),

    };


    // When this component mounts, grab the birder with the _id of this.props.match.params.id
    // e.g. localhost:3000/birders/599dcb67f0f16317844583fc
    componentDidMount() {
        API.getBirder(this.props.match.params.id)
            .then(res => this.setState({ birder: res.data }))

            .catch(err => console.log(err));
    }


        sendEmail = () => {
            const { email } = this.state;

            API.sendEmail(email)
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }


        render() {
      
            const { email } = this.state;
            email.to = this.state.birder.email;
            email.subject =  this.state.birder.title + "sent you a message through BirdWith" ;
          //  const { contactinfo } =  "Click here to reply to" + token;
            const { replytext } = email.text;
            email.text = "Click here to reply to https://enigmatic-taiga-42636.herokuapp.com/" + this.state.logintoken;


            const textArea = {
                borderRadius: 4
            }
            return (
                <div>

                    <section id="inner_banner" className="parallex-bg howitwork_bg">
                        <div className="container">
                            <div className="white-text text-center div_zindex">
                                <h1>{this.state.birder.title}</h1>
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
                                            <img src={this.state.birder.thumbnail} alt="birderpic" />
                                        </div>
                                        <div className="entry_meta">
                                            <span className="meta_m"><i className="fa fa-eye"></i> 48 Views</span>
                                            <span className="meta_m"><i className="fa fa-heart-o"></i> 4 Likes</span>
                                        </div>
                                        <div className="entry-desc">
                                            <div className="entry-content">
                                                <p>{this.state.birder.description}</p>

                                            </div>
                                        </div>
                                        <div className="post_tag">
                                            <span>Interests:</span>
                                            <a href="/interests">  {this.state.birder.interests}</a>

                                        </div>
                                        <Link to="/">← Back to Birds</Link>
                                    </article>

                                    {/* email form  */}
                                    <div className="comment-respond">
                                        <h4 className="block-head">Contact {this.state.birder.title}</h4>
                                        <form method="get" className="comment-form">
                                            <div className="form-group">
                                                <label>To:</label>
                                                <input placeholder="To" value={email.recipient} />
                                            </div>

                                            <div className="form-group">
                                                <label>From:</label>
                                                <input placeholder="From" value={email.sender} />
                                            </div>

                                            <div className="form-group">
                                                <label>Subject:</label>
                                                <input placeholder="Subject" value={email.subject}
                                                    onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                                            </div>


                                            <div className="form-group">
                                                <label>Message:</label>
                                                <textarea placeholder="Message" className="form-control" rows={3} value={email.text} style={textArea}
                                                    onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                                            </div>


                                            <div className="form-group">
                                                <button className="btn" onClick={this.sendEmail}> Send Email </button>
                                                
                                            </div>
                                        </form>
                                    </div>




                                    {/* <!-- All-Comments --> */}
                                    <div className="articale_comments">
                                        <div id="comments">
                                            <h4 className="block-head">2 Comments</h4>
                                            <ul className="commentlist">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="comment-author">
                                                            <img className="avatar" src="assets/images/100x100.jpg" alt="100x100" />
                                                            <span className="fn">John Smith</span>
                                                        </div>
                                                        <div className="comment-meta commentmetadata"> Feb 23, 2016 at 12:52 pm </div>
                                                        <div className="comment-content">
                                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        Ut enim ad minima veniam, quis nostrum exercitationem</p>
                                                        </div>
                                                        <div className="reply">
                                                         <i className="fa fa-reply" aria-hidden="true"></i> Reply
                                                        </div>
                                                    </div>

                                                    <ul className="children">
                                                        <li className="comment">
                                                            <div className="comment-body">
                                                                <div className="comment-author">
                                                                    <img className="avatar" src="assets/images/100x100.jpg" alt="100x100" />
                                                                    <span className="fn">John Smith</span>
                                                                </div>
                                                                <div className="comment-meta commentmetadata"> Feb 23, 2016 at 12:52 pm</div>
                                                                <div className="comment-content">
                                                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                                                    sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        Ut enim ad minima veniam, quis nostrum exercitationem</p>
                                                                </div>
                                                                <div className="reply">
                                                                  <i className="fa fa-reply" aria-hidden="true"></i> Reply
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
