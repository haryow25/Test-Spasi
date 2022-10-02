import { Dropdown } from "react-bootstrap";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function DropdownBar() {
  const [show, setShow] = useState(false);

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <FontAwesomeIcon icon={faMap} />
        View Map
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {}
        <Dropdown.Item href="">Simple</Dropdown.Item>
        <Dropdown.Item href="">Satelite</Dropdown.Item>
        <Dropdown.Item href="">Dark</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownBar;
