import { Link } from "react-router-dom";
import "./IntermediateWorkouts.css";
import Support2 from "./Support2";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";

const IntermediateWorkouts = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="intermediate-workouts-page">
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
      <div className="intermediate-workouts-title">
        INTERMEDIATE WORKOUT PLAN
      </div>
      <div className="intermediate-workouts-subtitle">
        Take your fitness to the next level by building strength and refining
        your technique. Improve endurance with more challenging exercises
        designed to push your limits. Stay consistent and progress toward
        achieving your fitness goals.
      </div>
      <div className="intermediate-workouts-plan-container">
        <div className="intermediate-workouts-plan-bgimg"></div>
        <div className="intermediate-workouts-plan-box">
          <div className="intermediate-workouts-plan-goal">Goal</div>
          <div className="intermediate-workouts-plan-goal-subtitle">
            Improve overall fitness, increase muscle strength, and enhance
            cardiovascular endurance.
          </div>
          <div className="intermediate-workouts-plan-schedule">Schedule</div>
          <div className="intermediate-workouts-plan-schedule-subtitle">
            4 days per week (e.g., Monday, Tuesday, Thursday, Saturday).
          </div>
          <div className="intermediate-workouts-plan-routine">
            Workout Routine
          </div>
          <div className="intermediate-workouts-plan-day1">
            Day 1: Upper Body Strength
          </div>
          <div className="intermediate-workouts-plan-day1-img1"></div>
          <div className="intermediate-workouts-plan-day1-img2"></div>
          <div className="intermediate-workouts-plan-day1-img3"></div>
          <div className="intermediate-workouts-plan-day1-matter-container"></div>
          <div className="intermediate-workouts-plan-day2">
            Day 2: Lower Body & Core
          </div>
          <div className="intermediate-workouts-plan-day2-img1"></div>
          <div className="intermediate-workouts-plan-day2-img2"></div>
          <div className="intermediate-workouts-plan-day2-img3"></div>
          <div className="intermediate-workouts-plan-day2-matter-container"></div>
          <div className="intermediate-workouts-plan-day3">
            Day 3: Full Body Circuit
          </div>
          <div className="intermediate-workouts-plan-day3-img1"></div>
          <div className="intermediate-workouts-plan-day3-img2"></div>
          <div className="intermediate-workouts-plan-day3-img3"></div>
          <div className="intermediate-workouts-plan-day3-matter-container"></div>
          <div className="intermediate-workouts-plan-day4">
            Day 4: Flexibility & Recovery
          </div>
          <div className="intermediate-workouts-plan-day4-img1"></div>
          <div className="intermediate-workouts-plan-day4-img2"></div>
          <div className="intermediate-workouts-plan-day4-img3"></div>
          <div className="intermediate-workouts-plan-day4-matter-container"></div>
        </div>
      </div>
      <Support2 />
    </div>
  );
};

export default IntermediateWorkouts;
