import { Dropdown } from "react-bootstrap";
import "./Dropdown.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

function DropdownBar() {
  const [show, setShow] = useState(false);

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic">
        <FontAwesomeIcon icon={faMap} />
        View Map
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          Simple
        </Dropdown.Item>
        <Dropdown.Item href="" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          Satelite
        </Dropdown.Item>
        <Dropdown.Item href="" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
          Dark
        </Dropdown.Item>
      </Dropdown.Menu>
      {show && <AiOutlineCheck className="check-button" />}
    </Dropdown>
  );
}

export default DropdownBar;
