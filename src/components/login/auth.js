import userStore from "./store/store";
import { login, logout } from './store/actions';
import { USERS } from "./users";

export const isAuthenticated = () => userStore.getState().isAuthenticated;

export const isAllowed = (rights) => {
  const userRights = userStore.getState().user.rights;
  return rights.some(right => userRights.includes(right));
}

export const hasRole = (roles) => {
  const userRole = userStore.getState().user.role;
  return roles.some(role => userRole.includes(role));
}

export const loginUser = (userLogin, userPassword) => {
  const user = USERS.find((user) => user.login === userLogin && user.password === userPassword);
  if (user) {
    userStore.dispatch(login(user));
    return true;
  } else {
    return false;
  }
}

export const logoutUser = () => {
  userStore.dispatch(logout());
}