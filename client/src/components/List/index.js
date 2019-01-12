import React from "react";
import "./style.css";
import DeleteBtn from "../DeleteBtn";
import {
  Box,
  Card,
  Image,
  Heading,
  Text,
} from 'rebass';


// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({
srcUrl,
heading,
text,
onClick,
}) {
  return (
  <Box width={280} m={4} pl={2}>
    <Card
      p={1}
      borderRadius={2}
      boxShadow='0 0 16px rgba(0, 0, 0, .25)'>
      <Image 
        borderRadius={2}
        src={srcUrl} />
      <Box px={2}>
        <Heading p={2} as='h3'>
          {heading}
        </Heading>
        <Text p={2} fontSize={0}>
          {text}
        </Text>
      </Box>
      <DeleteBtn onClick={onClick}/>
    </Card>
  </Box>
  );
}
