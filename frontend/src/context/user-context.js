import React, { useReducer, createContext } from "react";
import userReducer from "../reducers/userReducer";

export const UserContext = createContext();

// Note, the loading state is here only for future considerations.
// For example when we start to make requests to our backend the method that has the request dispatches an action that turns loading to true so during that time we could show a loading spinner
// When the request is complete and we have the users at our state the action would also turn loading to false
const initialState = {
  loading: false,
  users: []
};

export const UserProvider = props => {
  const [userState, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ userState, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};
