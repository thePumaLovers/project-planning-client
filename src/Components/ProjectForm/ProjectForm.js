import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import axios from "axios";
import apiUrl from "../../apiUrl";

function ProjectForm() {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    projectName: "",
    projectDescription: "",
    isCompleted: false
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
  } else if (event.target.id === "formProjectCompleted") {
    setForm({ ...form, isCompleted: event.target.value });
  }
};

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(apiUrl + '/projects/groupid/6226dfbb3ba734c3038e64a8', {
      projectName: form.projectName,
      projectDescription: form.projectDescription,
      isCompleted: form.isCompleted
    })
    .catch(() => console.log("why did you break"));
    setForm({
      projectName: "",
      projectDescription: "",
      isCompleted: false
    })
  };
  
  

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
       Add Project
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formProjectName">
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" value={form.projectName} placeholder="Name of project" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formProjectDescription">
              <Form.Label>Project Description</Form.Label>
              <Form.Control type="Textarea" value={form.projectDescription} placeholder="Enter description" onChange={handleChange}/>
            </Form.Group>  <Form.Group className="mb-3" controlId="formProjectCompleted">
              <Form.Label>Completed?</Form.Label>
              <Form.Control type="completed" value={form.projectCompleted} placeholder="Enter email" onChange={handleChange}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={ (event) => {handleSubmit(event); handleClose();}}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectForm;
