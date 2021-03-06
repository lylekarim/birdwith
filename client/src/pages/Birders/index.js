import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { OwlCard } from "../../components/OwlCard";
import AliceCarousel from 'react-alice-carousel';
// import { MyOwlCarousel } from "../../components/MyOwlCarousel";
import { BirderList, BirderListItem } from "../../components/BirderList";
import { Input, FormBtn, TextArea } from "../../components/Form";
import NavTabs from "../../components/NavTabs";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import LogIn from '../../components/LogIn';
import SignUp from '../../components/SignUp';
import "react-alice-carousel/lib/alice-carousel.css";


class Birders extends Component {
  state = {
    email: "",
    password: "",
    currentPage: "Home",
    birders: [],
    title: "",
    author: "",
    available: "",
    reviews: "",
    thumbnail: "",
    href: "",
    description: "",
    birderSearch: "",
    searchInfo: "",
    birderresults: [],
    initial: "",
    lastName: "",
    area: "",
    state: "",
    availability: "",
    language: "",
    comments: "",
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1024: {
        items: 3
      }
    },

    currentIndex: 0,
  };


  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Birders") {
      return <Birders />;
    } else if (this.state.currentPage === "Log In") {
      return <LogIn />;
    } else if (this.state.currentPage === "Sign Up") {
      return <SignUp />;
    } else {
      return <Contact />;
    }
  };

  componentDidMount() {
    {
      let readToken = window.localStorage.getItem("SMC_authkey");
      let query = {
        token: readToken
      };
      API.checkAuth(query)
        .then(res => {
          if (res.data.success) {
            this.setState({ isLoggedIn: true, });
          } else {
            this.setState({ isLoggedIn: false });
            window.location.assign('/login');
          };
        })
        .catch(err => console.log(err));
    }
    this.loadBirders();
    // this.searchBirders("VA");
  }


  addBirder = birder => {
    //  if (birder.title !== this.state.title)

    API.saveBirder(birder)
    //   .then(res => this.loadBirders())
    //   .catch(err => console.log(err));
  }

  searchBirders = query => {
    API.searchBirders(query)
      .then(res => {
         //  console.log(res);
        // const birderSearch = (res.data || []).map(birder => ({
        //  // state: birder.state,
        //  interests: birder.interests,
        // }));

        return this.setState({
          birders: res.data,
          title: "",
          author: "",
          thumbnail: "",
          description: "",
          initial: "",
          lastName: "",
          area: "",
          state: "",
          availability: "",
          language: "",
          comments: "",
        })
      })

      .catch(err => console.log(err));
  };

  // componentDidMount() {
  //  this.searchBirders({interests:"lister"});
  // }

  loadBirders = () => {
    API.getBirders()
      .then(res => {
        // console.log(res);
        return this.setState({
          birders: res.data,
          title: "",
          author: "",
          thumbnail: "",
          description: "",
          initial: "",
          lastName: "",
          area: "",
          state: "",
          available: "",
          language: "",
          reviews: "",
          comments: "",
        })
      })

      .catch(err => console.log(err));
  };


  deleteBirder = id => {
    API.deleteBirder(id)
      .then(res => this.loadBirders())
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  //  this.searchBirders(value);
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.birderSearch) {
      API.searchBirders({
       // state: this.state.state,
       interests: this.state.birderSearch
       })
    } else if (this.state.title && this.state.author) {

      API.saveBirder({
        title: this.state.title,
        author: this.state.author,
        thumbnail: this.state.thumbnail,
        description: this.state.description,
        interests: this.state.interests,
        initial: this.state.initial,
        lastName: this.state.lastName,
        area: this.state.area,
        state: this.state.state,
        available: this.state.available,
        language: this.state.language,
        comments: this.state.comments,

      })
    }
    }

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    render() {


      const owldivs = (

        this.state.birders.map((birder, index) => (

          <OwlCard
            key={birder._id}
            srcUrl={birder.thumbnail}
            heading={birder.author}
            available={birder.available}
            language={birder.language}
            reviews={birder.reviews}
            text={birder.description}
            area={birder.area}
            interests={birder.interests}
            id={birder._id}
            onClick={() => window.location("/something")}>
            {/* <Link to={birder._id}>
            <strong>
              {birder.title} by {birder.author}
            </strong>
          </Link> */}
          </OwlCard>
        ))
        //   ) : (
        //  <h4>no results to display</h4>
      );
      // console.log('owls')
      // console.log(owldivs)


      return (

        <Container fluid>
          <Row><Col size="xs-12 sm-12"> <div>
            <NavTabs
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            {this.renderPage()}
          </div></Col></Row>
         
  <Row><Col size="xs-12 sm-12"> 
              <div>
                <section id="featured_listings" className="section-padding">
                  <div className="container">
                    <div className="section-header text-center">

                      <h2>Featured Birders, Bird-Watchers and Twitchers</h2>
                    </div>     </div>
                  <AliceCarousel
                    items={owldivs}
                    loop
                    margin={10}
                    autoPlay={true}
                    dotsDisabled={true}
                    responsive={this.state.responsive}
                    duration={400}
                    autoPlayInterval={2000}
                    startIndex={75}
                  >

                  </AliceCarousel>
                </section>
              </div>

            </Col>
            <Col size="md-4 xs-12">

              <h1>Add to your Profile</h1>

              <form>
                <Input
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="password(required)"
                />
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  value={this.state.author}
                  onChange={this.handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <Input
                  value={this.state.thumbnail}
                  onChange={this.handleInputChange}
                  name="thumbnail"
                  placeholder="Thumbnail (Optional)"
                />
                <Input
                  value={this.state.initial}
                  onChange={this.handleInputChange}
                  name="initial"
                  placeholder="Initial (Optional)"
                />
                <Input
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Last Name"
                />
                <Input
                  value={this.state.area}
                  onChange={this.handleInputChange}
                  name="area"
                  placeholder="Area"
                />
                <Input
                  value={this.state.state}
                  onChange={this.handleInputChange}
                  name="state"
                  placeholder="State"
                />
                <Input
                  value={this.state.available}
                  onChange={this.handleInputChange}
                  name="availability"
                  placeholder="Availability"
                />
                <Input
                  value={this.state.interests}
                  onChange={this.handleInputChange}
                  name="interests"
                  placeholder="Interests"
                />
                <Input
                  value={this.state.language}
                  onChange={this.handleInputChange}
                  name="language"
                  placeholder="Language(s)"
                />
                <TextArea
                  value={this.state.comments}
                  onChange={this.handleInputChange}
                  name="comments"
                  placeholder="Comments (Optional)"
                />

                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Birder
              </FormBtn>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-9 sm-10">

              <h2>Search Birders</h2>
              <form>

                <Input
                  name="birderSearch"
                  value={this.state.birderSearch}
                  onChange={this.handleInputChange}
                  placeholder="Where do you want to go birding?"
                />
                <FormBtn
                  disabled={!(this.state.birderSearch)}
                  onClick={this.handleFormSubmit}
                >
                  Search
              </FormBtn>

              </form>
            </Col>
            <Col size="xs-9 sm-10">

              <h1>Search results</h1>

              {/* {!this.state.birderresults.length ? ( */}
                {/* <h1 className="text-center">No Birders to Display</h1> */}
              {/* ) : ( */}
                  <BirderList>
                    {this.state.birderresults.map(birderresult => {
                      let birder = {
                        title: birderresult.title,
                        author: birderresult.author,
                        description: birderresult.description,
                        area: birderresult.area,
                        thumbnail: birderresult.thumbnail,
                        interests:birderresult.interests,

                      }
                      return (
                        <BirderListItem
                          key={birderresult.id}
                          title={birderresult.title}
                          interests={birderresult.interests}
                          thumbnail={birderresult.thumbnail}
                          author={birderresult.author}
                          description={birderresult.description}
                          onClick={() => this.addBirder(birder)}>

                        </BirderListItem>

                      );
                    })}
                  </BirderList>

                {/* )} */}


            </Col>
          </Row>
         
      
        </Container>
      );
    }
  }

  export default Birders;
