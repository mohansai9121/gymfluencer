import AnchorLink from "react-anchor-link-smooth-scroll";
import "./PersonalizedWorkout.css";
import Support4 from "./Support4";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";

const PersonalizedWorkout = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="personalized-workout-page">
      <div className="navbar">
        <div style={{ display: "flex" }}>
          <img src={logo} alt="GymFluencer Logo" className="logo" />
          <span
            style={{ fontSize: "18px", textAlign: "center", marginTop: "12px" }}
          >
            GymFluencer
          </span>
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
        <div className="personalized-workout-bgimg"></div>
        <div className="personalized-workout-form-container">
          <div className="personalized-workout-form-container-heading">
            Personalized Workout Plan Form
          </div>
          <div className="personalized-workout-form-container-head1">
            1. Fitness Goals
          </div>
          <div className="personalized-workout-form-container-head2">
            2. Current Fitness Level
          </div>
          <div className="personalized-workout-form-container-head3">
            3. Physical Measurements and Health Info
          </div>
          <div className="personalized-workout-form-container-head4">
            4. Workout Preferences
          </div>
          <div className="personalized-workout-form-container-head5">
            5. Schedule and Time Availability
          </div>
        </div>
      </div>
      <Support4 />
    </div>
  );
};

export default PersonalizedWorkout;
