import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addSurveyDocument, auth } from "../services/firebase";
import "./style/formstyle.css";

const SurveyForm = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(null);
  const [role, setRole] = useState("");
  const [recommend, setRecommend] = useState("");
  const [favoriteFeature, setFavoriteFeature] = useState("");
  const [improvement, setImprovement] = useState([]);
  const [suggestions, setSuggestions] = useState("");

  const handelRecommend = (e) => {
    const target = e.target;
    setRecommend(target.value);
  };
  const handleImprovement = (e) => {
    const value = e.target.value;
    console.log(value);
    const arr = improvement;
    arr.push(value);
    setImprovement(arr);
  };
  const SubmitForm = async (e) => {
    e.preventDefault();
    const res = await addSurveyDocument(
      {
        name,
        email,
        age,
        role,
        recommend,
        favoriteFeature,
        improvement,
        suggestions,
      },
      auth.currentUser.uid
    );
    if (res) {
      console.log(res);
      history.push("/response");
    }
  };

  return (
    <div>
      <h1 className="h1">Survey Form</h1>
      <form onSubmit={SubmitForm} className="form" id="survey-form">
        <div id="form-group">
          <label htmlFor="name" id="name-label">
            Name
          </label>
          <br />
          <input
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />{" "}
        </div>

        <div id="form-group">
          <label htmlFor="email" id="email-label">
            Email
          </label>
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <br />
        </div>

        <div id="form-group">
          <label htmlFor="number" id="number-label">
            Age<small>(optional)</small>
          </label>
          <br />
          <input
            onChange={(e) => setAge(e.target.value)}
            id="number"
            type="number"
            placeholder="Enter your age"
            name="age"
            min="13"
            max="70"
          />
          <br />
        </div>

        <div id="form-group">
          <label htmlFor="dropdown" id="dropdown-label">
            Which option best describes your current role?
          </label>
          <br />
          <select
            onChange={(e) => setRole(e.target.value)}
            className="select"
            required
            id="dropdown"
          >
            <option value="">{role || "Choose your role"} </option>
            <option value="Full Time Job">Full Time Job</option>
            <option value="Full Time Learner">Full Time Learner</option>
            <option value="Prefer Not To Say">Prefer Not To Say</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div id="form-group">
          <label aria-required htmlFor="" id="recomded-label">
            Would you recommend freeCodeCamp to a friend?
          </label>
          <br />

          <input
            onChange={handelRecommend}
            id="Definitely"
            type="radio"
            value="Definitely"
            name="recommend"
          />
          <label htmlFor="Definitely">Definitely</label>
          <br />

          <input
            onChange={handelRecommend}
            id="Maybe"
            type="radio"
            value="Maybe"
            name="recommend"
          />
          <label htmlFor="Maybe">Maybe</label>
          <br />

          <input
            onChange={handelRecommend}
            id="Not Sure"
            type="radio"
            value="Not Sure"
            name="recommend"
          />
          <label htmlFor="Not Sure">Not Sure</label>
        </div>

        <div id="form-group">
          <label htmlFor="feature-select" id="option-label">
            What is your favorite feature of freeCodeCamp?
          </label>
          <br />
          <select
            onChange={(e) => setFavoriteFeature(e.target.value)}
            className="select"
            required
            id="feature-select"
          >
            <option value="">Choose your option</option>
            <option value="Challenges">Challenges</option>
            <option value="Projects">Projects</option>
            <option value="Community">Community</option>
            <option value="Open Source">Open Source</option>
          </select>
        </div>

        <div id="form-group">
          <label htmlFor="" id="">
            What would you like to see improved?
            <small>(Check all that apply)</small>
          </label>
          <br />
          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Front-end Projects"
            value="Front-end Projects"
          />
          <label htmlFor="">Front-end Projects</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Back-end Projects"
            value="Back-end Projects"
          />
          <label htmlFor="">Back-end Projects</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Data Visualization"
            value="Data Visualization"
          />
          <label htmlFor="">Data Visualization</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Challenges"
            value="Challenges"
          />
          <label htmlFor="">Challenges</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Open Source Community"
            value="Open Source Community"
          />
          <label htmlFor="">Open Source Community</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Gitter help rooms"
            value="Gitter help rooms"
          />
          <label htmlFor="">Gitter help rooms</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Videos"
            value="Videos"
          />
          <label htmlFor="">Videos</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="City Meetups"
            value="City Meetups"
          />
          <label htmlFor="">City Meetups</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Wiki"
            value="Wiki"
          />
          <label htmlFor="">Wiki</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Forum"
            value="Forum"
          />
          <label htmlFor="">Forum</label>
          <br />

          <input
            onChange={handleImprovement}
            id=""
            type="checkbox"
            name="Additional Courses"
            value="Additional Courses"
          />
          <label htmlFor="">Additional Courses</label>
        </div>

        <div id="form-group">
          <label htmlFor="comment" id="">
            Any comments or suggestions?
          </label>
          <br />
          <textarea
            onChange={(e) => setSuggestions(e.target.value)}
            id="textarea"
            rows="8"
            cols="50"
            placeholder="Enter your comment here.."
          ></textarea>
        </div>

        <button className="btn" id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SurveyForm;
