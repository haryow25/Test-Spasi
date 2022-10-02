import { Form } from "react-bootstrap";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
  return (
    <>
      <Form className="d-flex">
        <div className="search-icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="form-search">
          <Form.Control type="search" placeholder="Search Location ..." className="me-2" aria-label="Search" />
        </div>
      </Form>
    </>
  );
}

export default SearchBar;
