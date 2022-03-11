import "./GroupsPage.css";
import AddGroupForm from "../AddGroupForm/AddGroupForm";
import EditGroupForm from "../EditGroupForm/EditGroupForm";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import typing from '../../images/typing.jpg'

const GroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [toggle, setToggle] = useState(true);

  // GET request for all groups
  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, [toggle]);

  // Mapping our groups to render on page
  const listGroups = groups.map((group, index) => {
    return (
      <Container key={index}>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={typing} />
          <Card.Body>
            <Card.Title>{group.displayName}</Card.Title>
            <Card.Text>{group.location}</Card.Text>
            <div className="edit-del-btns"><EditGroupForm
              toggle={toggle}
              setToggle={setToggle}
              groupId={group._id}
              groupDisplayName={group.displayName}
              groupLocation={group.location}
              groupProjects={group.projects}
            />
            <Button variant="danger" onClick={() => handleDelete(group._id)}>
              Delete
            </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  });

  // handleDelete
  const handleDelete = async (id) => {
   await axios.delete(apiUrl + "/groups/" + id);
    setToggle(!toggle);
  };

  return (
    <Container>
      <h2 className="groups-title">Groups</h2>
      <AddGroupForm toggle={toggle} setToggle={setToggle} />
      {listGroups}
    </Container>
  );
};

export default GroupsPage;
