import GroupForm from "../GroupForm/GroupForm";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";

const GroupsPage = () => {
  const [groups, setGroups] = useState([]);

  // GET request for all groups
  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, []);

  const listGroups = groups.map((group, index) => {
    return (
      <div key={index}>
        <h3>{group.displayName}</h3>
        <p>{group.location}</p>
        </div>
    )
  })

  return (
    <div>
      <h2>I'm a GroupsPage</h2>
      <GroupForm />
      {listGroups}
    </div>
  );
};

export default GroupsPage;
