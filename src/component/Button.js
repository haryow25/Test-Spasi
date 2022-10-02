import React, { useState } from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import "./Button.css";
import { Collapse, Button } from "react-bootstrap";

function ButtonIcon() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(!show)} aria-controls="example-collapse-text" aria-expanded={show}>
        Click me
      </Button>
      <Collapse in={show}>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus excepturi alias quasi. Mollitia, labore nesciunt et tempora architecto voluptate vero ut vel atque ipsum eum blanditiis aperiam fuga, officiis ad?</p>
      </Collapse>
    </>
  );
}

export default ButtonIcon;
