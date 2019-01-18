import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { BirderList, BirderListItem } from "../components/BirderList";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Card } from 'rebass';
import NavTabs from "../components/NavTabs";
import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

class Birders extends Component {
  state = {
    currentPage: "Home",
    birders: [],
    title: "",
    author: "",
    thumbnail: "",
    href: "",
    description: "",
    birderSearch: "",
    birderresults: [],
    initial: "",
    lastName: "",
    area: "",
    state: "",
    availability: "",
    language: "",
    comments: "",
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Blog") {
      return <Blog />;
    } else {
      return <Contact />;
    }
  };

  componentDidMount() {
    this.loadBirders();
    this.searchBirders("the sun also rises");
  }

  searchBirders = query => {
    API.search(query)
      .then(res => this.setState({ birderresults: res.data.items }))
      .catch(err => console.log(err));
  };


  addBirder = birder => {
    //  if (birder.title !== this.state.title)

    API.saveBirder(birder)
      .then(res => this.loadBirders())
      .catch(err => console.log(err));
  }

  loadBirders = () => {
    API.getBirders()
      .then(res => {
        console.log(res);
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
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBirder({
        title: this.state.title,
        author: this.state.author,
        thumbnail: this.state.thumbnail,
        description: this.state.description,
        initial: this.state.initial,
        lastName: this.state.lastName,
        area: this.state.area,
        state: this.state.state,
        availability: this.state.availability,
        language: this.state.language,
        comments: this.state.comments,

      })
        .then(res => this.loadBirders())
        .catch(err => console.log(err));
    }
    else {
      API.search(this.state.birderSearch)
        .then(res =>
          this.setState({ birderresults: res.data.items }))

        .catch(err => console.log(err));
    };

  };


  render() {
    return (
      <Container fluid>
      <Row><Col size="xs-9 sm-10"> <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div></Col></Row>
        <Row>
          <Col size="xs-9 sm-10">

            <h2>Search Birders</h2>
            <form>

              <Input
                name="birderSearch"
                value={this.state.birderSearch}
                onChange={this.handleInputChange}
                placeholder="Search For a Birder"
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

            {!this.state.birderresults.length ? (
              <h1 className="text-center">No Birders to Display</h1>
            ) : (
                <BirderList>
                  {this.state.birderresults.map(birderresult => {
                    let birder = {
                      title: birderresult.volumeInfo.title,
                      author: birderresult.volumeInfo.authors,
                      description: birderresult.volumeInfo.description,
                      thumbnail: birderresult.volumeInfo.thumbnail,

                    }
                    return (
                      <BirderListItem
                        key={birderresult.id}
                        title={birderresult.volumeInfo.title}
                        thumbnail={birderresult.volumeInfo.imageLinks.thumbnail}
                        author={birderresult.volumeInfo.authors}
                        description={birderresult.volumeInfo.description}
                        href={birderresult.volumeInfo.previewLink}
                        onClick={() => this.addBirder(birder)}>

                      </BirderListItem>

                    );
                  })}
                </BirderList>

              )}


          </Col>
        </Row>
        <Row>

          <Col size="md-8 sm-12">

            <Card> <h1>My Saved Birders</h1> </Card>

            {this.state.birders.length ? (
              <List>
                {this.state.birders.map(birder => (
                  <ListItem
                    key={birder._id}
                    srcUrl={birder.thumbnail}
                    heading={birder.title}
                    text={birder.description}
                    onClick={() => this.deleteBirder(birder._id)}>
                    <Link to={"/birders/" + birder._id}>
                      <strong>
                        {birder.title} by {birder.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
          <Col size="md-4 xs-12">

            <h1>Add a new birder</h1>

            <form>
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
              value={this.state.availability}
              onChange={this.handleInputChange}
              name="availability"
              placeholder="Availability"
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
      </Container>
    );
  }
}

export default Birders;
