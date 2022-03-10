import AddGroupForm from "../AddGroupForm/AddGroupForm";
import EditGroupForm from "../EditGroupForm/EditGroupForm";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
const GroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [toggle, setToggle] = useState(true)
  
  // GET request for all groups
  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, [toggle]);

  

  // Mapping our groups to render on page
  //const Projects = groups.map();
  //console.log('projects flat:', Projects)

  const listGroups = groups.map((group, index) => {
    return (
      <div key={index}>
        <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
    <Card.Body>
      <Card.Title>{group.displayName}</Card.Title>
      <Card.Text>
      {group.location}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>Cras justo odio</ListGroupItem>
      <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
      <ListGroupItem>Vestibulum at eros</ListGroupItem>
    </ListGroup>
    <Card.Body>
    <EditGroupForm toggle={toggle} setToggle={setToggle} groupId={group._id} groupDisplayName={group.displayName} groupLocation={group.location} groupProjects={group.projects} />
        <Button variant="danger" onClick={() => handleDelete(group._id)}>Delete</Button>
    </Card.Body>
  </Card>
        
        </div>
    )
  })

console.log(groups)

  // handleDelete
  const handleDelete = (id) => {
    axios.delete(apiUrl + '/groups/' + id )
    setToggle(!toggle)
  }

console.log(groups)
  return (
    <div>
      <h2>I'm a Projects Page</h2>
      <AddGroupForm toggle={toggle} setToggle={setToggle} />
      {listGroups}
    </div>
  );
};

export default GroupsPage;