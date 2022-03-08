import GroupForm from "../GroupForm/GroupForm";
import axios from "axios";
import { useState, useEffect } from "react";
import apiUrl from "../../apiUrl";

const GroupsPage = () => {
  const [groups, setGroups] = useState([]);

  useEffect(async () => {
    const response = await axios.get(apiUrl + "/groups");
    setGroups(response.data.groups);
  }, []);

  console.log(groups);

  return (
    <div>
      <h2>I'm a GroupsPage</h2>
      <GroupForm />
    </div>
  );
};

export default GroupsPage;
