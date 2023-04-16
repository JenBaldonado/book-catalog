import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const DeleteBook = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Are you sure you want to delete this book?</h4>
          <p>This action is ireversible.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button>DELETE</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteBook;
