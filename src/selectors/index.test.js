import { getContactRequest } from ".";

const INITIAL_STATE = {
  firstName: "David",
  lastName: "Elstob",
  email: "elstob@gmail.com",
  message: "Test Contact Request"
};

describe("Contact Selectors", () => {
  it("can select contact details", () => {
    const details = getContactRequest(INITIAL_STATE);
    expect(Object.keys(details).length).toEqual(4);
    expect(details.firstName).toEqual(INITIAL_STATE.firstName);
  });
});
