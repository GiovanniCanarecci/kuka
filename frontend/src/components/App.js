import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./Login";
import "../assets/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { UserProvider } from "../context/user-context";
import Dashboard from "./Dashboard";

// Note the UserProvider has to be wrapped around the components we want to have access to the user-context.
// To access the context state in a component first import the useContext hook from react
// Also import the UserContext from the context folder
// Then in the component above return you can destructure the userState or dispatch from the context, or both
// e.g. const { userState, dispatch } = useContext(UserContext);
// Now you can refer to the state in userContext simply with userState
// With dispatch you can modify the state, see the userReducer in the reducers folder how different action types change the state
// e.g. dipatch({type: ADD_USER, payload: newUser })
// Types are simply string values but i decided to assing a variable for them e.g. export const ADD_USER = 'ADD_USER';
// That step is optional but i did so we can avoid typos etc...
// To add new functionality add a case to the reducer

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/login" exact component={Login} />
          <UserProvider>
            <Route path="/dashboard" exact component={Dashboard} />
          </UserProvider>
        </Router>
      </div>
    );
  }
}

export default App;
