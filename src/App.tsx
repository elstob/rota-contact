import * as React from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { ContactState } from "./models";
import { ContactAction, contactRequestAction } from "./actions";
import { getContactRequest } from "./selectors";
import {
  Button,
  Callout,
  Classes,
  FormGroup,
  H1,
  InputGroup,
  TextArea
} from "@blueprintjs/core";

import "./App.css";

const ContactSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("That is an invalid email address")
    .required("Email address is required"),
  message: Yup.string().required("Your message is required")
});

type Props = {
  handleClick: Function;
  submittedValues: ContactState;
};

const App: React.SFC<Props> = props => {
  if (props.submittedValues && props.submittedValues.firstName) {
    return (
      <main>Thank you for your details {props.submittedValues.firstName}!</main>
    );
  }

  return (
    <main>
      <H1>Contact Us</H1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        }}
        onSubmit={(values: ContactState) => {
          props.handleClick(
            values.firstName,
            values.lastName,
            values.email,
            values.message
          );
        }}
        validationSchema={ContactSchema}
        render={(formikBag: FormikProps<ContactState>) => (
          <FormGroup>
            <Form>
              <label className="bp3-label">
                First name:
                <Field
                  name="firstName"
                  render={({ field, form }: FieldProps<ContactState>) => (
                    <div>
                      <input
                        type="text"
                        {...field}
                        className={`${Classes.INPUT} ${Classes.FILL}`}
                        placeholder="First Name"
                      />
                      {form.touched.firstName && form.errors.firstName && (
                        <Callout intent="danger">
                          {form.errors.firstName}
                        </Callout>
                      )}
                    </div>
                  )}
                />
              </label>
              <label className="bp3-label">
                Last name:
                <Field
                  name="lastName"
                  render={({ field, form }: FieldProps<ContactState>) => (
                    <div>
                      <input
                        type="text"
                        {...field}
                        className={`${Classes.INPUT} ${Classes.FILL}`}
                        placeholder="Last Name"
                      />
                      {form.touched.lastName && form.errors.lastName && (
                        <Callout intent="danger">
                          {form.errors.lastName}
                        </Callout>
                      )}
                    </div>
                  )}
                />
              </label>
              <label className="bp3-label">
                Email:
                <Field
                  name="email"
                  render={({ field, form }: FieldProps<ContactState>) => (
                    <div>
                      <input
                        type="text"
                        {...field}
                        className={`${Classes.INPUT} ${Classes.FILL}`}
                        placeholder="Email"
                      />
                      {form.touched.email && form.errors.email && (
                        <Callout intent="danger">{form.errors.email}</Callout>
                      )}
                    </div>
                  )}
                />
              </label>
              <label className="bp3-label">
                Your message:
                <Field
                  name="message"
                  render={({ field, form }: FieldProps<ContactState>) => (
                    <div>
                      <TextArea
                        {...field}
                        className={Classes.FILL}
                        placeholder="Your message"
                      />
                      {form.touched.message && form.errors.message && (
                        <Callout intent="danger">{form.errors.message}</Callout>
                      )}
                    </div>
                  )}
                />
              </label>
              <Button
                type="submit"
                text="Send Request"
                intent="success"
                large
              />
            </Form>
          </FormGroup>
        )}
      />
    </main>
  );
};

const mapStateToProps = (state: ContactState) => ({
  submittedValues: getContactRequest(state)
});

type Dispatch = (action: ContactAction) => void;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleClick: (
    firstName: string,
    lastName: string,
    email: string,
    message: string
  ) => dispatch(contactRequestAction(firstName, lastName, email, message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
