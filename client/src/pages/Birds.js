import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { BirdList, BirdListItem } from "../components/BirdList";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Card } from 'rebass'

class Birds extends Component {
  state = {
    birds: [],
    title: "",
    author: "",
    thumbnail: "",
    href: "",
    description: "",
    birdSearch: "",
    birdresults: [],
  };

  componentDidMount() {
    this.loadBirds();
    this.searchBirds("the sun also rises");
  }

  searchBirds = query => {
    API.search(query)
      .then(res => this.setState({ birdresults: res.data.items }))
      .catch(err => console.log(err));
  };


  addBird = bird => {
    //  if (bird.title !== this.state.title)

    API.saveBird(bird)
      .then(res => this.loadBirds())
      .catch(err => console.log(err));
  }

  loadBirds = () => {
    API.getBirds()
      .then(res => {
        console.log(res);
        return this.setState({ birds: res.data, title: "", author: "", thumbnail: "", description: ""})
       })
  
      .catch(err => console.log(err));
  };

deleteBird = id => {
  API.deleteBird(id)
    .then(res => this.loadBirds())
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
    API.saveBird({
      title: this.state.title,
      author: this.state.author,
      thumbnail: this.state.thumbnail,
      description: this.state.description,

    })
      .then(res => this.loadBirds())
      .catch(err => console.log(err));
  }
  else {
    API.search(this.state.birdSearch)
      .then(res =>
        this.setState({ birdresults: res.data.items }))

      .catch(err => console.log(err));
  };

};


render() {
  return (
    <Container fluid>
      <Row>
        <Col size="xs-9 sm-10">

          <h2>Search Google Birds</h2>
          <form>

            <Input
              name="birdSearch"
              value={this.state.birdSearch}
              onChange={this.handleInputChange}
              placeholder="Search For a Bird"
            />
            <FormBtn
              disabled={!(this.state.birdSearch)}
              onClick={this.handleFormSubmit}
            >
              Search
              </FormBtn>

          </form>
        </Col>
        <Col size="xs-9 sm-10">

          <h1>Search results</h1>

          {!this.state.birdresults.length ? (
            <h1 className="text-center">No Birds to Display</h1>
          ) : (
              <BirdList>
                {this.state.birdresults.map(birdresult => {
                  let bird = {
                    title: birdresult.volumeInfo.title,
                    author: birdresult.volumeInfo.authors,
                    description: birdresult.volumeInfo.description,
                    thumbnail: birdresult.volumeInfo.thumbnail,

                  }
                  return (
                    <BirdListItem
                      key={birdresult.id}
                      title={birdresult.volumeInfo.title}
                      thumbnail={birdresult.volumeInfo.imageLinks.thumbnail}
                      author={birdresult.volumeInfo.authors}
                      description={birdresult.volumeInfo.description}
                      href={birdresult.volumeInfo.previewLink}
                      onClick={() => this.addBird(bird)}>

                    </BirdListItem>

                  );
                })}
              </BirdList>

            )}


        </Col>
      </Row>
      <Row>

        <Col size="md-8 sm-12">

          <Card> <h1>My Saved Birds</h1> </Card>

          {this.state.birds.length ? (
            <List>
              {this.state.birds.map(bird => (
                <ListItem
                  key={bird._id}
                  srcUrl={bird.thumbnail}
                  heading={bird.title}
                  text={bird.description}
                  onClick={() => this.deleteBird(bird._id)}>
                  <Link to={"/birds/" + bird._id}>
                    <strong>
                      {bird.title} by {bird.author}
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

          <h1>Add a new bird</h1>

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
            <TextArea
              value={this.state.description}
              onChange={this.handleInputChange}
              name="description"
              placeholder="Description (Optional)"
            />
            <FormBtn
              disabled={!(this.state.author && this.state.title)}
              onClick={this.handleFormSubmit}
            >
              Submit Bird
              </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Birds;
