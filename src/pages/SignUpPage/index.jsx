import React from "react";
import styles from "./SignUpPage.module.sass";
import SignUpForm from "../../components/SignUpForm";

function SignUpPage() {
  return (
    <section className={styles.signUp}>
      <div className={`${styles.container} ${styles.signUpContent}`}>
        <h1 className={styles.title}>CREATE AN ACCOUNT</h1>
        <p className={styles.text}>
          We always keep your name and email address private
        </p>
        <SignUpForm />
      </div>
    </section>
  );
}

export default SignUpPage;
