import React from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="col-12 mb-3">
        <AddUser />
      </div>
      <UserList />
    </div>
  );
};

export default Dashboard;
