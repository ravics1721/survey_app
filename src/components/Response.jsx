import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { getSurveyDocument, auth } from "../services/firebase";

const Response = () => {
  const history = useHistory();
  const [survey, setSurvey] = useState({});
  useEffect(() => {
    if (!auth.currentUser) {
      history.push("/");
    }
    const getDocs = async (uid) => {
      const doc = await getSurveyDocument(uid);
      if (doc) {
        setSurvey(doc);
        console.log(doc);
      }
    };
    getDocs(auth?.currentUser?.uid);
  }, [auth.currentUser]); //eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Your response is submitted</h1>
      <p style={{ textAlign: "center" }}>
        <Link to="/home">Home</Link>
      </p>
    </div>
  );
};

export default Response;
