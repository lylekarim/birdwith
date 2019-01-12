import React from "react";
import {
  Button
} from 'rebass'

// Destructuring the type, className, children and onClick props, applying them to the button element
function Button({ type = "default", className, children, onClick }) {
  return (
    <Button cursor='pointer' bg='green' onClick={onClick} className={[className].join(" ")}>
      {children}
    </Button>
  );
}

export default Button;
