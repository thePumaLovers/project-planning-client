import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function ProjectForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState({
    projectName: "",
    projectDescription: "",
    projectCompleted: ""
  });

// handleChange
const handleChange = (event) => {
  event.preventDefault();
  if (event.target.id === "formProjectName") {
    setForm({ ...form, projectName: event.target.value });
  } else if (event.target.id === "formProjectDescription") {
    setForm({ ...form, projectDescription: event.target.value });
  } else if (event.target.id === "formProjectCompleted") {
    setForm({ ...form, projectCompleted: event.target.value });
  }
};


  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:4000/projects/groupid/6227e59832173adef78ca00b`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    .catch(() => console.log("why did you break"));
    setForm("")
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
          <Button variant="primary" onClick={ (event) => {handleSubmit(event); handleClose();}}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProjectForm;
