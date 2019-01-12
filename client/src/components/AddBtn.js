import React from "react";
import {
  Button
} from 'rebass'

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function AddBtn(props) {
  return (
    <Button cursor='pointer' bg='green' className="add-btn" {...props} role="button" tabIndex="0">
     Add Birder +
    </Button>
  );
}

export default AddBtn;
