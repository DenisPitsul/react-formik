import React from "react";
import styles from "./SignInPage.module.sass";
import SignInForm from "../../components/SignInForm";

function SignInPage() {
  return (
    <section className={styles.signIn}>
      <div className={`${styles.container} ${styles.signInContent}`}>
        <h1 className={styles.title}>LOGIN TO YOUR ACCOUNT</h1>
        <SignInForm />
      </div>
    </section>
  );
}

export default SignInPage;
