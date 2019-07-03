import { ADD_USER } from "./types";

export default function userReducer(state, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload)
      };
    default:
      return {
        ...state
      };
  }
}
