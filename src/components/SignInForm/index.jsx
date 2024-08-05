import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./SignInForm.module.sass";
import { SIGN_IN_VALIDATION_SCHEMA } from "../../utils/schemas";
import classNames from "classnames";

function SignInForm() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSignInSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SIGN_IN_VALIDATION_SCHEMA}
      onSubmit={onSignInSubmit}
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

        const emailClassName = getInputClassNames("email");
        const passwordClassName = getInputClassNames("password");

        return (
          <Form className={styles.form}>
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
            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignInForm;
