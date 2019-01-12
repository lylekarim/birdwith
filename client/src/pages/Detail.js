import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass';
import API from "../utils/API";

class Detail extends Component {
  state = {
    birder: {}
  };
  // When this component mounts, grab the birder with the _id of this.props.match.params.id
  // e.g. localhost:3000/birders/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBird(this.props.match.params.id)
      .then(res => this.setState({ birder: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Box width={600}>
              <Card
                p={1}
                borderRadius={2}
                boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
                <Image src={this.state.birder.thumbnail} />

                <Box px={2}>
                  <Heading as='h3'>
                    {this.state.birder.title} by {this.state.birder.author}
                  </Heading>
                  <Text fontSize={0}>
                    {this.state.birder.description}
                  </Text>
                </Box>
              </Card>
            </Box>;
          </Col>
        </Row>

        {/* <Row>
     
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Description</h1>
              <p>
                {this.state.birder.description}
              </p>
            </article>
          </Col>
        </Row> */}
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Birds</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
