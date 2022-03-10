import AddProjectForm from "../AddProjectForm/AddProjectForm";

import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

const ProjectsPage = () => {
  const [groups, setGroups] = useState([]);
  const [groupProjects, setGroupProjects] = useState({});
  const [toggle, setToggle] = useState(true);

  // GET request for all groups
  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, [toggle]);

  // handleDelete
  const handleDelete = (projectId) => {
    axios.delete(`${apiUrl}/projects/groupid/${groupProjects._id}/projectid/${projectId}`);
    setToggle(!toggle);
  };

  // Filling out dropdown menu with groups
  const dropdownGroups = groups.map((group, index) => {
    return (
      <Dropdown.Item
        key={index}
        role="menuitem"
        onClick={() => {
          setGroupProjects(group);
        }}
      >
        {group.displayName}
      </Dropdown.Item>
    );
  });

  console.log(groupProjects)
  // Mapping projects from selected group to cards

  const listProjects = groupProjects.projects?.map((project, index) => {
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
            <Button variant="danger" onClick={() => handleDelete(project._id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  });

  return (
    <div>
      <h2>I'm a Projects Page</h2>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>{dropdownGroups}</Dropdown.Menu>
      </Dropdown>
      <AddProjectForm
        toggle={toggle}
        setToggle={setToggle}
        groupId={groupProjects._id}
      />

      {listProjects}
    </div>
  );
};

export default ProjectsPage;
