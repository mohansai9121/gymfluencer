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
          <Link to="/">Home</Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#About">
          <Link to="/">About</Link>
        </AnchorLink>
        <AnchorLink
          className="navlink"
          href="#Services"
          onMouseEnter={() => setIsOptions(true)}
          onMouseLeave={() => setIsOptions(false)}
        >
          Our Services
          <FaAngleDown />
          {isOptions && (
            <>
              <Link to="/workoutplans">Workout Plans</Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/diet">Diet Plans</Link>
            </>
          )}
        </AnchorLink>
        <AnchorLink className="navlink" href="#Benefits">
          <Link to="/">Benefits</Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#Blogs">
          <Link to="/">Blogs</Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#Contact">
          <Link to="/">Contact</Link>
        </AnchorLink>
        <AnchorLink className="navlink">
          <Link to="/">
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
