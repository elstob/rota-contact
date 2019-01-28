import { ContactState } from "../models";

export interface ContactAction {
  type: string;
  payload: ContactState;
}

export function contactRequestAction(
  firstName: string,
  lastName: string,
  email: string,
  message: string
) {
  // With a real back end this would probably return a thunk or other async action to post the data
  // Instead we'll just call the success method directly in lieu of that
  return contactRequestSuccess({
    firstName,
    lastName,
    email,
    message
  });
}

export function contactRequestSuccess(payload: ContactState) {
  return {
    type: "CONTACT_REQUEST_SUCCESS",
    payload
  };
}
