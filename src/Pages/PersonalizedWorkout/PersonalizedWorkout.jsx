import AnchorLink from "react-anchor-link-smooth-scroll";
import "./PersonalizedWorkout.css";
import Support4 from "./Support4";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";
import bg from "./background.jpg";

const PersonalizedWorkout = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="personalized-workout-page">
      <div className="navbar">
        <div style={{ display: "flex" }}>
          <img src={logo} alt="GymFluencer Logo" className="logo" />
          <span className="navbar-logo-name">GymFluencer</span>
        </div>
        <AnchorLink className="navlink" href="#Home">
          <Link to="/" className="navlink">
            Home
          </Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#About">
          <Link to="/" className="navlink">
            About
          </Link>
        </AnchorLink>
        <AnchorLink
          className="navlink"
          href="#Services"
          onMouseEnter={() => setIsOptions(true)}
          onMouseLeave={() => setIsOptions(false)}
        >
          Our Services
          <FaAngleDown />
        </AnchorLink>
        <div className="options">
          {isOptions && (
            <div
              className="option-display"
              onMouseEnter={() => setIsOptions(true)}
              onMouseLeave={() => setIsOptions(false)}
            >
              <Link
                to="/workoutplans"
                style={{ textDecoration: "underline", color: "white" }}
              >
                Workout Plans
              </Link>
              <Link
                to="/diet"
                style={{ textDecoration: "underline", color: "white" }}
              >
                Diet Plans
              </Link>
            </div>
          )}
        </div>
        <AnchorLink className="navlink" href="#Benefits">
          <Link to="/" className="navlink">
            Benefits
          </Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#Blogs">
          <Link to="/" className="navlink">
            Blogs
          </Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#Contact">
          <Link to="/" className="navlink">
            Contact
          </Link>
        </AnchorLink>
        <AnchorLink className="navlink">
          <Link to="/" className="navlink">
            <span className="join-us-link">Join Us Now</span>
          </Link>
        </AnchorLink>
      </div>
      <div className="personalized-workout-container">
        <div className="personalized-workout-bgimg">
          <img src={bg} alt="Background img" />
        </div>
        <div className="personalized-workout-form-container">
          <div className="personalized-workout-form-container-heading">
            Personalized Workout Plan Form
          </div>
          <div className="personalized-workout-form-container-head1">
            1. Fitness Goals
            <div className="head1-subhead1">Primary Goals:</div>
            <div className="left-checkboxes1">
              <div className="checkbox1">
                <input type="checkbox" className="check-style-box" />
                <label>Weight Loss</label>
              </div>
              <div className="checkbox2">
                <input type="checkbox" className="check-style-box" />
                <label>Endurance</label>
              </div>
              <div className="checkbox3">
                <input type="checkbox" className="check-style-box" />
                <label>Overall Fitness</label>
              </div>
            </div>
            <div className="right-checkboxes1">
              <div className="checkbox4">
                <input type="checkbox" className="check-style-box" />
                <label>Muscle Gain</label>
              </div>
              <div className="checkbox5">
                <input type="checkbox" className="check-style-box" />
                <label>Flexibility</label>
              </div>
            </div>
            <div className="head1-subhead2">Areas of Focus:</div>
            <div className="left-checkboxes2">
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Upper Body</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Core</label>
              </div>
            </div>
            <div className="right-checkboxes2">
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Upper Body</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Core</label>
              </div>
            </div>
          </div>
          <div className="personalized-workout-form-container-head2">
            2. Current Fitness Level
            <div className="head2-title">Fitness Level:</div>
            <div className="head2-dropdown">
              <select className="dropdown-options">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          <div className="personalized-workout-form-container-head3">
            3. Physical Measurements and Health Info
            <div className="head3-part1">
              <div className="head3-part1-p">
                <label>Age</label>
                <input type="text" className="age-input" />
                <label>Height</label>
                <input type="text" className="height-input" />
              </div>
              <div className="head3-part1-p">
                <label>Gender</label>
                <select className="gender-selection">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <label>Weight</label>
                <input type="text" className="weight-input" />
              </div>
            </div>
            <div className="head3-part2">
              <label>
                <pre>Injuries or Physical Limitations:</pre>
              </label>
              <input type="textarea" className="injuries-input" />
              <label>
                <pre>Medical Conditions:</pre>
              </label>
              <input type="text" className="condition-input" />
            </div>
          </div>
          <div className="personalized-workout-form-container-head4">
            4. Workout Preferences
            <div className="left-checkboxes4">
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Strength Training</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Yoga</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Body Weight</label>
              </div>
            </div>
            <div className="right-checkboxes4">
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Cardio</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>HIIT</label>
              </div>
            </div>
          </div>
          <div className="personalized-workout-form-container-head5">
            5. Schedule and Time Availability
            <div className="left-checkboxes5">
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Sunday</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Monday</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Tuesday</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Wednesday</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Thursday</label>
              </div>
            </div>
            <div className="right-checkboxes5">
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Friday</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Saturday</label>
              </div>
              <div>
                <input type="checkbox" className="check-style-box" />
                <label>Sunday</label>
              </div>
            </div>
          </div>
          <div className="submit-button">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <Support4 />
    </div>
  );
};

export default PersonalizedWorkout;
