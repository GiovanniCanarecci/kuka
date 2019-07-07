import React from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import RemoveUser from "./RemoveUser"

const Dashboard = () => {
  return (
    <div className="container">
      <div className="col-12 mb-3">
        <AddUser />
      </div>
      <UserList />
      <br />
      <RemoveUser />
    </div>
  );
};

export default Dashboard;
