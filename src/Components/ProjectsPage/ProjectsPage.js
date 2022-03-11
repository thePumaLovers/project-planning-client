import AddProjectForm from "../AddProjectForm/AddProjectForm";
import EditProjectForm from "../EditProjectForm/EditProjectForm";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const [groups, setGroups] = useState([]);
  const [groupProjects, setGroupProjects] = useState({});
  const [toggle, setToggle] = useState(true);

  // Variable to hold single group id
  let groupId = groupProjects._id;

  // GET request for all groups
  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, [toggle]);

  // Second useEffect
  useEffect(() => {
    for (let i = 0; i < groups.length; i++) {
      if (groupId === groups[i]._id) {
        setGroupProjects(groups[i]);
      }
    }
  }, [groups]);

  // handleDelete
  const handleDelete = async (projectId) => {
    await axios.delete(
      `${apiUrl}/projects/groupid/${groupProjects._id}/projectid/${projectId}`
    );
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
            <EditProjectForm
              toggle={toggle}
              setToggle={setToggle}
              groupId={groupId}
              projectId={project._id}
              projectName={project.projectName}
              projectDescription={project.projectDescription}
              isCompleted={project.isCompleted}
            />
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
      <h2 className="projects-title">Projects</h2>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {groupProjects.displayName
            ? groupProjects.displayName
            : "Pick a Group"}
        </Dropdown.Toggle>
        <Dropdown.Menu>{dropdownGroups}</Dropdown.Menu>
      </Dropdown>
      {groupProjects.displayName ? (
        <AddProjectForm
          toggle={toggle}
          setToggle={setToggle}
          groupId={groupProjects._id}
        />
      ) : (
        ""
      )}

      {listProjects}
    </div>
  );
};

export default ProjectsPage;
