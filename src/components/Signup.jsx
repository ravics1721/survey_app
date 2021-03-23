import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
      console.log(user);
      if (user) {
        history.push("/home");
      }
    });
  };
  return (
    <div className="parent">
      <form onSubmit={handleSignup}>
        <h1>Signup to app</h1>
        <div class="form-control">
          <label for="email">Email: </label>
          <br />
          <input
            class="input"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
          />
        </div>
        <div class="form-control">
          <label for="password">Password: </label>
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            class="input"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <button class="btn" type="submit">
          Signup
        </button>
        <p style={{ textAlign: "center" }}>
          Or <Link to="/">login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
