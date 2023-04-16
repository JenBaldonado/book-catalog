import { useState } from "react";
import Button from "react-bootstrap/Button";
import AddModal from "./AddModal";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="add-bnt-container">
      <Button
        className="btn"
        variant="success"
        onClick={() => setModalShow(true)}
      >
        Add
      </Button>{" "}
      <AddModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
