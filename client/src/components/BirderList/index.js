import React from "react";
 import Thumbnail from "../Thumbnail";
 import AddBtn from "../AddBtn";  
 import { Container, Row, Col } from "../Grid";
 import { Link } from "react-router-dom";

// BirdList renders a bootstrap list item
export function BirderList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BirdListItem renders a bootstrap list item containing data from the Google Birds api call
export function BirderListItem({
  thumbnail,
  title,
  author,
  href,
  description,
  onClick,
  id,
}) {
  return (
    <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={thumbnail} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{title}</h3>
          <Link to={id}>
            <strong>
            {author}
            </strong>
          </Link>

          <a rel="noreferrer noopener" target="_blank" href={href}>
            Go to birder!
          </a>
          <p>Description: {description}</p>
          <AddBtn onClick={onClick}/>
        </Col>
      </Row>
    </Container>
  </li>
  );
}


