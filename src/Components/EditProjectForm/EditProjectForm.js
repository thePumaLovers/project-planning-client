import { useState } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditProjectForm = ({
  toggle,
  setToggle,
  groupId,
  projectId,
  projectName,
  projectDescription,
  isCompleted,
}) => {
  // useStates
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

  // handleCheck for the checkbox in the form
  const handleCheck = (event) => {
    setForm({ ...form, isCompleted: event.target.checked });
  };

  // handleSubmit and PUT request
  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.put(
      `${apiUrl}/projects/groupid/${groupId}/projectid/${projectId}`,
      {
        projectName: form.projectName === "" ? projectName : form.projectName,
        projectDescription:
          form.projectDescription === ""
            ? projectDescription
            : form.projectDescription,
        isCompleted: form.isCompleted,
      }
    );
    setToggle(!toggle);
  };

  return (
    <Container>
      <Button variant="secondary" onClick={handleShow}>
        Edit Project
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
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
                placeholder={projectName}
                value={form.projectName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 project-form"
              controlId="formProjectDescription"
            >
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                type="input"
                placeholder={projectDescription}
                value={form.projectDescription}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 project-form"
              controlId="formIsCompleted"
            >
              <Form.Label>Project Completed</Form.Label>
              <Form.Check
                type="checkbox"
                defaultChecked={isCompleted}
                onClick={handleCheck}
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

export default EditProjectForm;
