import * as actions from "./actionTypes";

export default function reducer(state = false, action) {
  switch(action.type) {
    case actions.AGREEMENT_CHANGED:
      return state = !state;
    default:
      return state;
  }
}