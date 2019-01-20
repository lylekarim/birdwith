import React from "react";
import { Container } from "../components/Grid";
import { Input } from "../components/Form";


const Home = () => (
  <Container>
 
  <section id="banner" className="parallex-bg section-padding">
    <div>
        <div className="intro_text white-text div_zindex">
          <h1>Welcome to BirdWith</h1>
            <h5>Find Someone to go Birding With</h5>
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
                      <div className="form-group">
                         <Input type="text" className="form-control" placeholder="Locaton"/>
                      </div>
                      <div className="form-group search_btn">
                        <Input type="submit" value="Search" className="btn btn-block"/>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  
  </section>


      </Container>
);

export default Home;
