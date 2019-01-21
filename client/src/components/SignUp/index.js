import React from "react";

function SignUp({ src }) {
    return (

<div>
<section class="primary-bg">
	<div class="container">
    	<div id="login_signup">
            <div class="form_wrap_m">
            	<div class="white_box">
                	<h3>Sign Up</h3>
	                <form action="" method="get">
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Username">
                        </div>
                        <div class="form-group">
                            <input type="email" class="form-control" placeholder="Email Address">
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <input id="signup" class="btn btn-block" value="Sign Up">
                        </div>
                    </form>
                    <p>Already have an account? <a href="signin.html">Sign In</a></p>
                    <div class="back_home"><a href="index.html" class="btn outline-btn btn-sm"><i class="fa fa-angle-double-left"></i> Back to Home</a></div>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
);
}

export default Thumbnail;