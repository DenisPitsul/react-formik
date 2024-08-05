import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./SignUpForm.module.sass";
import { SIGN_UP_VALIDATION_SCHEMA } from "../../utils/schemas";
import classNames from "classnames";

function SignUpForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConformation: "",
    radioButton: "buyer",
    agreement: false,
  };

  const onSignUpSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_UP_VALIDATION_SCHEMA}
      onSubmit={onSignUpSubmit}
    >
      {(formikProps) => {
        const getInputClassNames = (field) => {
          return classNames(styles.input, {
            [styles.valid]:
              !formikProps.errors[field] && formikProps.touched[field],
            [styles.invalid]:
              formikProps.errors[field] && formikProps.touched[field],
          });
        };

        const firstNameClassName = getInputClassNames("firstName");
        const lastNameClassName = getInputClassNames("lastName");
        const userNameClassName = getInputClassNames("userName");
        const emailClassName = getInputClassNames("email");
        const passwordClassName = getInputClassNames("password");
        const passwordConfirmationClassName = getInputClassNames(
          "passwordConfirmation"
        );

        return (
          <Form className={styles.form}>
            <div className={styles.inputsWrapper}>
              <label className={styles.inputLabel}>
                <Field
                  className={firstNameClassName}
                  type="text"
                  name="firstName"
                  placeHolder="First name"
                />
                <ErrorMessage
                  className={styles.error}
                  name="firstName"
                  component="span"
                />
              </label>
              <label className={styles.inputLabel}>
                <Field
                  className={lastNameClassName}
                  type="text"
                  name="lastName"
                  placeHolder="Last name"
                />
                <ErrorMessage
                  className={styles.error}
                  name="lastName"
                  component="span"
                />
              </label>
            </div>
            <div className={styles.inputsWrapper}>
              <label className={styles.inputLabel}>
                <Field
                  className={userNameClassName}
                  type="text"
                  name="userName"
                  placeHolder="User name"
                />
                <ErrorMessage
                  className={styles.error}
                  name="userName"
                  component="span"
                />
              </label>
              <label className={styles.inputLabel}>
                <Field
                  className={emailClassName}
                  type="email"
                  name="email"
                  placeHolder="your@mail"
                />
                <ErrorMessage
                  className={styles.error}
                  name="email"
                  component="span"
                />
              </label>
            </div>
            <div className={styles.inputsWrapper}>
              <label className={styles.inputLabel}>
                <Field
                  className={passwordClassName}
                  type="password"
                  name="password"
                  placeHolder="Password"
                />
                <ErrorMessage
                  className={styles.error}
                  name="password"
                  component="span"
                />
              </label>
              <label className={styles.inputLabel}>
                <Field
                  className={passwordConfirmationClassName}
                  type="password"
                  name="passwordConfirmation"
                  placeHolder="Password confirmation"
                />
                <ErrorMessage
                  className={styles.error}
                  name="passwordConfirmation"
                  component="span"
                />
              </label>
            </div>
            <div className={styles.radioButtonsWrapper}>
              <label className={styles.radioButtonLabel}>
                <Field
                  className={styles.radioButton}
                  type="radio"
                  name="radioButton"
                  value="buyer"
                />
                <div className={styles.radioButtonCaption}>
                  <span className={styles.radioButtonCaptionTitle}>
                    Join As a Buyer
                  </span>
                  <span className={styles.radioButtonCaptionText}>
                    I am looking for a Name, Logo, or Tagline for my business,
                    brand or product
                  </span>
                </div>
              </label>
              <label className={styles.radioButtonLabel}>
                <Field
                  className={styles.radioButton}
                  type="radio"
                  name="radioButton"
                  value="creative"
                />
                <div className={styles.radioButtonCaption}>
                  <span className={styles.radioButtonCaptionTitle}>
                    Join As a Creative
                  </span>
                  <span className={styles.radioButtonCaptionText}>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </span>
                </div>
              </label>
            </div>
            <label className={styles.checkBoxLabel}>
              <Field
                className={styles.checkBox}
                type="checkbox"
                name="agreement"
              />
              <span className={styles.checkBoxCaption}>
                By clicking this checkBox, you agree to our{" "}
                <a className={styles.agreementLink} href="#">
                  Terms of Service
                </a>
              </span>
              <ErrorMessage
                className={styles.error}
                name="agreement"
                component="span"
              />
            </label>
            <button type="submit" className={styles.submitBtn}>
              Create Account
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignUpForm;
