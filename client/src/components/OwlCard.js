import React from "react";


export function OwlCard({
    srcUrl,
    heading,
    text,
    interests,
    area,
    id,
    onClick,
}) {
   
   return (
   
     
<div id={id}>
    <div className="listing_wrap">
        <div className="listing_img">
            <span className="like_post"><i className="fa fa-bookmark-o"></i></span>
            <div className="listing_cate">
                <span className="cate_icon"><a href="#"><img src="assets/images/category-icon1.png" alt="icon-img" /></a></span>
                <span className="listing_like"><a href="#"><i className="fa fa-heart-o"></i></a></span>
            </div>
            <a href="#"><img src={srcUrl} alt="image" /></a>
        </div>
        <div className="listing_info">
            <div className="post_category">
                <a href="#">{interests}</a>
            </div>
            <h4><a href={`${id}`}>{heading}</a></h4>
            <p>{text}</p>

            <div className="listing_review_info">
                <p><span className="review_score">4.0/5</span>
                    <i className="fa fa-star active"></i> <i className="fa fa-star active"></i> <i className="fa fa-star active"></i>
                    <i className="fa fa-star active"></i> <i className="fa fa-star"></i>
                    (5 Reviews) </p>
                <p className="listing_map_m"><i className="fa fa-map-marker"></i>{area}</p>
            </div>
        </div>
    </div>
    </div>
    // </OwlCarousel>


    );

   
}

export default OwlCard;