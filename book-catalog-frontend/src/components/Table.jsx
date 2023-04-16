import { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import EditBook from "./EditBook";

const Table = () => {
  const [editShow, setEditShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  return (
    <div>
      <Container className="">
        <Row>
          <Col className="column">TITLE</Col>
          <Col className="column">ISBN</Col>
          <Col className="column">AUTHOR</Col>
          <Col className="column">PUBLISHER</Col>
          <Col className="column">YEAR PUBLISHED</Col>
          <Col className="column">CATEGORY</Col>
          <Col className="column"></Col>
        </Row>
        <Row>
          <Col className="column2">The Alchemist</Col>
          <Col className="column2">ISBN-XYY-122467</Col>
          <Col className="column2">Paolo Coelho</Col>
          <Col className="column2">Amazon Publishing</Col>
          <Col className="column2">1997</Col>
          <Col className="column2">Slice of Life</Col>
          <Col className="column2">
            <Button variant="primary" onClick={() => setEditShow(true)}>
              EDIT
            </Button>
            <EditBook show={editShow} onHide={() => setEditShow(false)} />
            <Button variant="danger" onClick={() => setDeleteShow(true)}>
              DELETE
            </Button>
            <EditBook show={deleteShow} onHide={() => setDeleteShow(false)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Table;
