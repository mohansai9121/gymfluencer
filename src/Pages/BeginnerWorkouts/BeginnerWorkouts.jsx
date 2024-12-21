import AnchorLink from "react-anchor-link-smooth-scroll";
import "./BeginnerWorkouts.css";
import Support1 from "./Support1";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";

const BeginnerWorkouts = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="beginner-workouts-page">
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
      <div className="beginner-workouts-title">BEGINNER WORKOUT PLAN</div>
      <div className="beginner-workouts-subtitle">
        Build basic strength and improve your mobility with simple,
        beginner-friendly exercises. Focus on enhancing your endurance while
        mastering proper form. Establish a consistent workout routine to set the
        foundation for long-term fitness success.
      </div>
      <div className="beginner-workouts-plan-container">
        <div className="beginner-workouts-plan-bgimg"></div>
        <div className="beginner-workouts-plan-box">
          <div className="beginner-workouts-plan-goal">Goal</div>
          <div className="beginner-workouts-plan-goal-subtitle">
            Build basic strength, improve mobility, and establish workout
            consistency.
          </div>
          <div className="beginner-workouts-plan-schedule">Schedule</div>
          <div className="beginner-workouts-plan-schedule-subtitle">
            3 days per week (e.g., Monday, Wednesday, Friday).
          </div>
          <div className="beginner-workouts-plan-routine">Workout Routine</div>
          <div className="beginner-workouts-plan-day1">
            Day 1: Full Body (Strength & Core)
          </div>
          <div className="beginner-workouts-plan-day1-img1"></div>
          <div className="beginner-workouts-plan-day1-img2"></div>
          <div className="beginner-workouts-plan-day1-img3"></div>
          <div className="beginner-workouts-plan-day1-matter-container"></div>
          <div className="beginner-workouts-plan-day2">
            Day 2: Cardio & Core
          </div>
          <div className="beginner-workouts-plan-day2-img1"></div>
          <div className="beginner-workouts-plan-day2-img2"></div>
          <div className="beginner-workouts-plan-day2-img3"></div>
          <div className="beginner-workouts-plan-day2-matter-container"></div>
          <div className="beginner-workouts-plan-day3">
            Day 3: Strength & Flexibility
          </div>
          <div className="beginner-workouts-plan-day3-img1"></div>
          <div className="beginner-workouts-plan-day3-img2"></div>
          <div className="beginner-workouts-plan-day3-img3"></div>
          <div className="beginner-workouts-plan-day3-matter-container"></div>
        </div>
      </div>
      <Support1 />
    </div>
  );
};

export default BeginnerWorkouts;
