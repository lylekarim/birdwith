import React from "react";
import {
  Button
} from 'rebass'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <Button bg='gray' m={2}  cursor='pointer' className="delete-btn" {...props} role="button" tabIndex="0">
    ✗ Delete Bird 
    </Button>
  );
}

export default DeleteBtn;
