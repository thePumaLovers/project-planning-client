import AddGroupForm from "../AddGroupForm/AddGroupForm";
import EditGroupForm from "../EditGroupForm/EditGroupForm";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";
import Button from 'react-bootstrap/Button'

const GroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [toggle, setToggle] = useState(true)
  
  // GET request for all groups
  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, [toggle]);

  // Mapping our groups to render on page
  const listGroups = groups.map((group, index) => {
    return (
      <div key={index}>
        <h3>{group.displayName}</h3>
        <p>{group.location}</p>
        <EditGroupForm toggle={toggle} setToggle={setToggle} groupDisplayName={group.displayName} groupLocation={group.location}/>
        <Button variant="danger" onClick={() => handleDelete(group._id)}>Delete</Button>
        </div>
    )
  })

  // PUT request for group by id


  // handleDelete
  const handleDelete = (id) => {
    axios.delete(apiUrl + '/groups/' + id )
    setToggle(!toggle)
  }

console.log(groups)
  return (
    <div>
      <h2>I'm a GroupsPage</h2>
      <AddGroupForm toggle={toggle} setToggle={setToggle} />
      {listGroups}
    </div>
  );
};

export default GroupsPage;
