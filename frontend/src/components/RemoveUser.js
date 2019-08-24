import React, { useContext, useState } from "react";
import { UserContext } from "../context/user-context";
import { ADD_USER } from "../reducers/types";

const RemoveUser = () => {
  const [username, setUsername] = useState("");
  const { dispatch } = useContext(UserContext);

  const submitUser = e => {
    e.preventDefault();

    const newUser = {
      username,
      added: new Date().toISOString()
    };
    dispatch({ type: ADD_USER, payload: newUser });
    setUsername("");
  };

  return (
    <div class='dboard'>
    <h1> Remove a user: </h1>
    <form onSubmit={submitUser}>
      <div >
        <input
          type="text"
          className="col-md-10 col-sm-12"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
        />
        <br />
        <button
          type="submit"
          className="btn btn-primary col-md-2 col-sm-12"
          disabled={username.trim().length === 0}
        >
          Remove
        </button>
      </div>
    </form>
    </div>

  );
};

export default RemoveUser;
