import { rootReducer } from ".";

describe("Reducers", () => {
  /* Mock localStorage */
  class LocalStorageMock {
    constructor() {
      this.store = {};
    }

    clear() {
      this.store = {};
    }

    getItem(key) {
      return this.store[key] || null;
    }

    setItem(key, value) {
      this.store[key] = value.toString();
    }

    removeItem(key) {
      delete this.store[key];
    }
  }

  if (!global.localStorage) {
    global.localStorage = new LocalStorageMock();
  }

  it("can store a successful contact request", () => {
    const action = {
      type: "CONTACT_REQUEST_SUCCESS",
      payload: {
        firstName: "David",
        lastName: "Elstob",
        email: "elstob@gmail.com",
        message: "Test Contact Request"
      }
    };
    const afterState = rootReducer({}, action);
    expect(afterState.firstName).toEqual("David");
    expect(afterState.email).toEqual("elstob@gmail.com");
  });
});
