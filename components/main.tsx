import React, { useState, useEffect } from "react";
import styles from "../styles/main.module.css";
import { useRouter } from "next/router";

const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");
  const [isEmailValid, setEmailValidation] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const Router = useRouter();

  // const getUserDetailsFromLocalStorage = () => {
  //   if (typeof window != "undefined") {
  //     const localEmail = localStorage.getItem("email");
  //     const localUserName = localStorage.getItem("name");
  //     const localPassword = localStorage.getItem("password");
  //     setName(localEmail);
  //     setName(localUserName);
  //     setPassword(localPassword);
  //   }
  // };

  // useEffect(() => {
  //   getUserDetailsFromLocalStorage();
  // });

  const emailFilter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  const validateForm = () => {
    console.log("validate");

    // validate mane
    if (name.length < 4) {
      setIsNameValid(false);
    } else {
      setIsNameValid(true);
    }

    // validate email
    if (email.length < 5) {
      setEmailValidation(false);
    } else if (emailFilter.test(email) == false) {
      setEmailValidation(false);
      console.log("emailIsValid");
    } else {
      setEmailValidation(true);
    }

    if (password.length <= 8) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
    if (isNameValid && isPasswordValid && isEmailValid) {
      alert("you are signed in successfully");
      Router.push("/user");
    }
  };

  return (
    <div className={styles.main0}>
      <div className={styles.main1}>
        <h3>Sign-up Here</h3>
      </div>
      <div className={styles.main2}>
        <label htmlFor="name">Username : </label>
        <input
          type="text"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        {isNameValid ? (
          <></>
        ) : (
          <p className={styles.main21}>
            pls enter your name with more than 4 charters
          </p>
        )}
      </div>

      <div className={styles.main3}>
        <label htmlFor="email">Email : </label>
        <input
          type="Email"
          value={email}
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {isEmailValid ? (
          <></>
        ) : (
          <p className={styles.main31}>Please enter valid email</p>
        )}
      </div>

      <div className={styles.main4}>
        <label htmlFor="password">Password : </label>
        <input
          type="password"
          value={password}
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {isPasswordValid ? (
          <></>
        ) : (
          <p className={styles.main41}>
            pls Enter your Password correctly and more than 8 charters
          </p>
        )}
      </div>

      <div className={styles.main5}>
        <button className={styles.main51} type="submit" onClick={validateForm}>
          Signup
        </button>
      </div>
    </div>
  );
};

export default Main;
