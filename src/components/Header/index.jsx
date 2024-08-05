import React from "react";
import logo from "../../assets/react.svg";
import styles from "./Header.module.sass";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="sign-in">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        {location.pathname === "/sign-in" && (
          <Link className={styles.link} to="sign-up">
            SignUp
          </Link>
        )}
        {location.pathname === "/sign-up" && (
          <Link className={styles.link} to="sign-in">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
