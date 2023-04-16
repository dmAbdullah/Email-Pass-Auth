import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './Firebase.config'

const auth = getAuth(app);

const Register = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = event => {
    event.preventDefault()
    const email= event.target.email.value
    const pass= event.target.password.value
    console.log(email, pass);
    // create user in firebase
    createUserWithEmailAndPassword(auth, email, pass)
    .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error => {
        console.error(error);
    })
  }

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    // console.log(event.target.value);

  };
  return (
    <div>
      <h2> Please Register </h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Your Email"
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password "
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
