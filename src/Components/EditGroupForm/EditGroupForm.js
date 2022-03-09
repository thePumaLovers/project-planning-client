import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import apiUrl from "../../apiUrl";

const EditGroupForm = ({toggle, setToggle, groupId, groupDisplayName, groupLocation, groupProjects}) => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    displayName: "",
    location: "",
    projects: [],
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handleChange
  const handleChange = (event) => {
    event.preventDefault();
    if (event.target.id === "formDisplayName") {
      setForm({ ...form, displayName: event.target.value });
    } else if (event.target.id === "formLocation") {
      setForm({ ...form, location: event.target.value });
    }
  };

  // handleSubmit and PUT request
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(apiUrl + '/groups/' + groupId, {
      displayName: form.displayName === '' ? groupDisplayName : form.displayName,
      location: form.location === '' ? groupLocation : form.location,
      projects: groupProjects
    });
    setToggle(!toggle);

  };

  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Edit Group
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3 group-form" controlId="formDisplayName">
              <Form.Label>Group Name</Form.Label>
              <Form.Control
                type="input"
                placeholder={groupDisplayName}
                value={form.groupName}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3 group-form" controlId="formLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="input"
                placeholder={groupLocation}
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

export default EditGroupForm;
