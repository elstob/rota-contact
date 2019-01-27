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
  return {
    type: "CONTACT_REQUEST",
    payload: {
      firstName,
      lastName,
      email,
      message
    }
  };
}
