import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";

const AddProjectForm = ({ toggle, setToggle, groupId }) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    projectName: "",
    projectDescription: "",
    isCompleted: false,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handleChange
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.id === "formProjectName") {
      setForm({ ...form, projectName: event.target.value });
    } else if (event.target.id === "formProjectDescription") {
      setForm({ ...form, projectDescription: event.target.value });
    }
  };

  // handleSubmit and POST request
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post(apiUrl + "/projects/groupid/" + groupId, {
      projectName: form.projectName,
      projectDescription: form.projectDescription,
      isCompleted: false,
    });
    setToggle(!toggle);
  };

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Add New Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 project-form"
              controlId="formProjectName"
            >
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter project name"
                value={form.projectName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 project-form"
              controlId="formProjectDescription"
            >
              <Form.Label>Project Description </Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter description of project"
                value={form.projectDescription}
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
    </Container>
  );
};

export default AddProjectForm;
