import React from "react";
import "./style.css";


function Map({ children }) {
	return (
		<div>
<section id="intro_map" className="section-padding">
	<div id="map-container" className="fullwidth-home-map">
    	<div id="map" data-map-zoom="9">
			 {/* <!-- map-here --> */}
			 {children}
        </div>
    	</div>

</section>

</div>
);
}

export default Map;