import AnchorLink from "react-anchor-link-smooth-scroll";
import "./AdvancedWorkouts.css";
import Support3 from "./Support3";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const IntermediateWorkouts = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="advanced-workouts-page">
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
      <div className="advanced-workouts-title">ADVANCED WORKOUT PLAN</div>
      <div className="advanced-workouts-subtitle">
        Push your limits with advanced workouts that challenge strength and
        endurance. Focus on mastering high-intensity techniques for maximum
        results. Stay consistent to reach your peak fitness potential.
      </div>
      <div className="advanced-workouts-plan-container">
        <div className="advanced-workouts-plan-bgimg"></div>
        <div className="advanced-workouts-plan-box">
          <div className="advanced-workouts-plan-goal">Goal</div>
          <div className="advanced-workouts-plan-goal-subtitle">
            Build muscle strength, endurance, and improve athletic performance.
          </div>
          <div className="advanced-workouts-plan-schedule">Schedule</div>
          <div className="advanced-workouts-plan-schedule-subtitle">
            5 days per week (e.g., Monday, Wednesday, Friday, Saturday, Sunday).
          </div>
          <div className="advanced-workouts-plan-routine">Workout Routine</div>
          <div className="advanced-workouts-plan-day1">
            Day 1: Upper Body Strength
          </div>
          <div className="advanced-workouts-plan-day1-img1"></div>
          <div className="advanced-workouts-plan-day1-img2"></div>
          <div className="advanced-workouts-plan-day1-img3"></div>
          <div className="advanced-workouts-plan-day1-matter-container"></div>
          <div className="advanced-workouts-plan-day2">
            Day 2: Lower Body & Core
          </div>
          <div className="advanced-workouts-plan-day2-img1"></div>
          <div className="advanced-workouts-plan-day2-img2"></div>
          <div className="advanced-workouts-plan-day2-img3"></div>
          <div className="advanced-workouts-plan-day2-matter-container"></div>
          <div className="advanced-workouts-plan-day3">
            Day 3: Functional Circuit
          </div>
          <div className="advanced-workouts-plan-day3-img1"></div>
          <div className="advanced-workouts-plan-day3-img2"></div>
          <div className="advanced-workouts-plan-day3-img3"></div>
          <div className="advanced-workouts-plan-day3-matter-container"></div>
          <div className="advanced-workouts-plan-day4">
            Day 4: Core & Conditioning
          </div>
          <div className="advanced-workouts-plan-day4-img1"></div>
          <div className="advanced-workouts-plan-day4-img2"></div>
          <div className="advanced-workouts-plan-day4-img3"></div>
          <div className="advanced-workouts-plan-day4-matter-container"></div>
          <div className="advanced-workouts-plan-day5">Cool-down:</div>
          <div className="advanced-workouts-plan-day5-matter-container"></div>
        </div>
      </div>
      <Support3 />
    </div>
  );
};

export default IntermediateWorkouts;
