import * as actions from "./actionTypes";

export function login(user) {
  return {
    type: actions.LOGIN,
    payload: {
      user,
      isAuthorized: true,
    }
  }
}

export function logout() {
  return {
    type: actions.LOGOUT,
    payload: {
      user: {},
      isAuthorized: false,
    }
  }
}