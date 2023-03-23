import * as actions from "./actionTypes";

const initialState = {
  user: {},
  isAuthorized: false,
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case actions.LOGIN: {
      return {
        user: action.payload.user,
        isAuthorized: action.payload.isAuthorized
      }
    }
    case actions.LOGOUT: {
      return {
        user: action.payload.user,
        isAuthorized: action.payload.isAuthorized
      }
    }
    default:
      return state;
  }
}