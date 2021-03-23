import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../services/firebase";

const Home = () => {
  const history = useHistory();
  useEffect(() => {
    if (!auth.currentUser) {
      history.replace("/");
    }
  }, [auth.currentUser]); //eslint-disable-line react-hooks/exhaustive-deps
  const logOut = () => {
    auth
      .signOut()
      .then((user) => {
        history.push("/");
      })
      .catch((err) => console.log(`err: ${err.message}`));
  };
  return (
    <div>
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Survey App</h1>
        </div>
        <div>
          <button onClick={logOut} style={{ margin: "20px 20px" }}>
            Logout
          </button>
        </div>
      </div>

      <h1 style={{ textAlign: "center" }}>
        Welcome{" "}
        <span style={{ color: "blue" }}>{auth?.currentUser?.email || ""}</span>
      </h1>
      <h2 style={{ textAlign: "center" }}>
        <Link to="/survey">Take Survey</Link>
      </h2>
    </div>
  );
};

export default Home;
