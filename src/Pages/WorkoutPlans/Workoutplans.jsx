import Support from "../../AddOns/BottomSupport/Support";
import starUser from "../../assets/Images/starUserIcon.png";
import SelectWorkouts from "./SelectWorkouts";
import logo from "../../assets/Images/gymfluencer-logo.png";
import "./Workoutplans.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import "./SelectWorkouts.css";
import beginner from "./images/b1.jpg";
import intermediate from "./images/b2.jpg";
import advanced from "./images/b3.jpg";
import personal from "./images/b4.jpg";

const Workoutplans = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="workoutplans-page">
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
      <div className="workoutplans-title">WHAT IS THE WORKOUT PLAN </div>
      <div className="workoutplans-subtitle">
        A workout plan is a structured schedule of exercises designed to help
        you reach your fitness goals, stay active, and improve your health.
      </div>
      <div className="workoutplans-offer">WHAT WE OFFER:</div>
      <div className="workoutplans-offer-img1">
        <img src={starUser} alt="starUser" className="workoutplans-offer-img" />
      </div>
      <div className="workoutplans-offer-img2">
        <img src={starUser} alt="starUser" className="workoutplans-offer-img" />
      </div>
      <div className="workoutplans-offer-img3">
        <img src={starUser} alt="starUser" className="workoutplans-offer-img" />
      </div>
      <div className="workoutplans-offer-text1">Customized Workout Plans</div>
      <div className="workoutplans-offer-text2">Professional Guidance</div>
      <div className="workoutplans-offer-text3">Holistic Approach</div>
      <div className="select-workouts-page">
        <div className="workoutplans-select-title">
          Select Your Workout Plan
        </div>
        <div className="workoutplans-select-subtitle">
          Choose a workout plan that fits your goals, whether it’s building
          strength, losing weight, or staying active. Find the perfect plan for
          you!
        </div>
        <Link to="/beginner-workout-plan" style={{ textDecoration: "none" }}>
          <div className="workout-beginner-card">
            <div className="workout-beginner-img">
              <img src={beginner} alt="beginner" className="org-img" />
            </div>
            <div className="workout-beginner-title">BEGINNER</div>
            <div className="workout-beginner-subtitle">
              Start your fitness journey with simple and effective exercises.
            </div>
          </div>
        </Link>
        <Link
          to="/intermediate-workout-plan"
          style={{ textDecoration: "none" }}
        >
          <div className="workout-intermediate-card">
            <div className="workout-intermediate-img">
              <img src={intermediate} alt="intermediate" className="org-img" />
            </div>
            <div className="workout-intermediate-title">INTERMEDIATE</div>
            <div className="workout-intermediate-subtitle">
              Start your fitness journey with simple and effective exercises.
            </div>
          </div>
        </Link>
        <Link to="/advanced-workout-plan" style={{ textDecoration: "none" }}>
          <div className="workout-advanced-card">
            <div className="workout-advanced-img">
              <img src={advanced} alt="advanced" className="org-img" />
            </div>
            <div className="workout-advanced-title">ADVANCED</div>
            <div className="workout-advanced-subtitle">
              Push your limits with high-intensity and complex movements.
            </div>
          </div>
        </Link>
        <Link
          to="/personalized-workout-plan-form"
          style={{ textDecoration: "none" }}
        >
          <div className="workout-personalized-card">
            <div className="workout-personalized-img">
              <img src={personal} alt="personal" className="org-img" />
            </div>
            <div className="workout-personalized-title">PERSONALIZED</div>
            <div className="workout-personalized-subtitle">
              Get a tailored plan based on your specific needs and goals.
            </div>
          </div>
        </Link>
      </div>
      <SelectWorkouts />
      <Support />
    </div>
  );
};

export default Workoutplans;
