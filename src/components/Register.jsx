import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "./Firebase.config";

const Register = () => {
  const auth = getAuth(app);
  //   const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    // validate
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    }
     
    else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers");
      return;
    } 
    
    else if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }
    // create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        // setSuccess('User has been successfully created')
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleEmailChange = (event) => {
    // console.log(event.target.value);
    // setEmail(event.target.value);
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
          required
        />
        <br />
        <input
          onBlur={handlePasswordBlur}
          type="password"
          name="password"
          id="password"
          placeholder="Your Password"
          required
        />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default Register;
