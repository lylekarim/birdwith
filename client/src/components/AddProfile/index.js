import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class AddProfile extends Component {
  state = {

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

  addBirder = birder => {
    //  if (birder.title !== this.state.title)

    API.saveBirder(birder)
    //   .then(res => this.loadBirders())
    //   .catch(err => console.log(err));
  }

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
        interests: this.state.interests,
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
  };


  render() {
    return (
        <Container>
        <Row>
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
</Container>

);
}
}