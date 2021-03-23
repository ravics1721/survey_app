import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { auth } from "../services/firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          console.log(user);
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });
  };
  useEffect(() => {
    if (auth.currentUser) {
      history.push("/home");
    }
  }, [auth.currentUser]); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="parent">
      <form onSubmit={handleLogin}>
        <h1>Login to app</h1>
        <div class="form-control">
          <label for="email">Email: </label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            class="input"
            type="email"
            // id="email"
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
          Login
        </button>

        <p>
          Didn't have account? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
