import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const GroupForm = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    groupName: "",
    location: "",
    projects: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handleChange
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.id === "formGroupName") {
      setForm({ ...form, groupName: event.target.value });
    } else if (event.target.id === "formLocation") {
      setForm({ ...form, location: event.target.value });
    }
  };

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add a Group
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 group-form" controlId="formGroupName">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter group name"
                value={form.groupName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 group-form" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter location of group"
                value={form.location}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(event) => {
              handleSubmit(event);
              handleClose();
            }}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GroupForm;
