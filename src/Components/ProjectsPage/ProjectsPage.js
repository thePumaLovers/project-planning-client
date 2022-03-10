import AddGroupForm from "../AddGroupForm/AddGroupForm";
import EditGroupForm from "../EditGroupForm/EditGroupForm";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

const ProjectsPage = () => {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState({});
  const [toggle, setToggle] = useState(true);

  // GET request for all groups
  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, [toggle]);

  // Filling out dropdown menu with groups
  const dropdownGroups = groups.map((group, index) => {
    return (
      <Dropdown.Item
        key={index}
        role="menuitem"
        onClick={() => {
          setGroup(group);
        }}
      >
        {group.displayName}
      </Dropdown.Item>
    );
  });

  // Mapping projects from selected group to cards

  const listProjects = group.projects?.map((project, index) => {
    return (
      <Container key={index}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/1/286/180" />
          <Card.Body>
            <Card.Title>{project.projectName}</Card.Title>
            <Card.Text>
              {project.projectDescription}
              {project.isCompleted}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  });

  console.log(listProjects);

  // handleDelete
  const handleDelete = (id) => {
    axios.delete(apiUrl + "/groups/" + id);
    setToggle(!toggle);
  };

  return (
    <div>
      <h2>I'm a Projects Page</h2>
      <AddGroupForm toggle={toggle} setToggle={setToggle} />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>{dropdownGroups}</Dropdown.Menu>
        {listProjects}
      </Dropdown>
    </div>
  );
};

export default ProjectsPage;
