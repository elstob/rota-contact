import { ContactAction } from "../actions";
import { ContactState } from "../models";

const initialState: ContactState = {
  firstName: null,
  lastName: null,
  email: null,
  message: null
};

export function rootReducer(
  state = initialState,
  action: ContactAction
): ContactState {
  switch (action.type) {
    case "CONTACT_REQUEST_SUCCESS":
      return { ...action.payload };
    default:
      return state;
  }
}
