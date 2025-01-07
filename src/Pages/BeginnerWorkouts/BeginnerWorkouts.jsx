import AnchorLink from "react-anchor-link-smooth-scroll";
import "./BeginnerWorkouts.css";
import Support1 from "./Support1";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";
import p1 from "./images/pushups.avif";
import p2 from "./images/squats.jpg";
import p3 from "./images/bridges.png";
import p4 from "./images/ropejump.jpg";
import p5 from "./images/twists.jpg";
import p6 from "./images/crunches.jpg";
import p7 from "./images/wall.webp";
import p8 from "./images/lunges.webp";
import p9 from "./images/superman.jpg";
import bg from "./images/background.webp";

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
      <div className="beginner-workouts-title">BEGINNER WORKOUT PLAN</div>
      <div className="beginner-workouts-subtitle">
        Build basic strength and improve your mobility with simple,
        beginner-friendly exercises. Focus on enhancing your endurance while
        mastering proper form. Establish a consistent workout routine to set the
        foundation for long-term fitness success.
      </div>
      <div className="beginner-workouts-plan-container">
        <div className="beginner-workouts-plan-bgimg">
          <img src={bg} alt="bg" className="beginner-workouts-plan-bgimg" />
        </div>
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
          <div className="beginner-workouts-plan-day1-img1">
            <img src={p1} alt="pushups" className="beginner-org-img" />
            <div className="beginner-org-img-title">Push Ups</div>
          </div>
          <div className="beginner-workouts-plan-day1-img2">
            <img src={p2} alt="squats" className="beginner-org-img" />
            <div className="beginner-org-img-title">Squats</div>
          </div>
          <div className="beginner-workouts-plan-day1-img3">
            <img src={p3} alt="bridges" className="beginner-org-img" />
            <div className="beginner-org-img-title">Glute Bridges</div>
          </div>
          <div className="beginner-workouts-plan-day1-matter-container">
            <p>Warm-up: 5 mins brisk walk or light jog</p>
            <ul>
              <li>Push-Ups: 3 sets of 8-10 reps (kneeling if needed)</li>
              <br />
              <li>Bodyweight Squats: 3 sets of 12 reps</li>
              <br />
              <li>Glute Bridges: 3 sets of 12 reps</li>
              <br />
              <li>Plank Hold: 3 sets of 20 seconds</li>
              <br />
              <li>Mountain Climbers: 3 sets of 15 seconds</li>
            </ul>
          </div>
          <div className="beginner-workouts-plan-day2">
            Day 2: Cardio & Core
          </div>
          <div className="beginner-workouts-plan-day2-img1">
            <img src={p4} alt="ropejump" className="beginner-org-img" />
            <div className="beginner-org-img-title">Rope Jumps</div>
          </div>
          <div className="beginner-workouts-plan-day2-img2">
            <img src={p5} alt="twists" className="beginner-org-img" />
            <div className="beginner-org-img-title">Russian Twists</div>
          </div>
          <div className="beginner-workouts-plan-day2-img3">
            <img src={p6} alt="crunches" className="beginner-org-img" />
            <div className="beginner-org-img-title">Bicycle Crunches</div>
          </div>
          <div className="beginner-workouts-plan-day2-matter-container">
            <p>Warm-up: 5 mins brisk walk or light jog</p>
            <ul>
              <li>Rope Jumps: 3 sets of 30 seconds</li>
              <br />
              <li>Russian Twists: 3 sets of 15 reps(per side)</li>
              <br />
              <li>Standing Knee Tucks: 3 sets of 15 reps per leg</li>
              <br />
              <li>Bicycle Crunches: 3 sets of 12 reps</li>
            </ul>
          </div>
          <div className="beginner-workouts-plan-day3">
            Day 3: Strength & Flexibility
          </div>
          <div className="beginner-workouts-plan-day3-img1">
            <img src={p7} alt="wall" className="beginner-org-img" />
            <div className="beginner-org-img-title">Wall Push-Ups</div>
          </div>
          <div className="beginner-workouts-plan-day3-img2">
            <img src={p8} alt="lunges" className="beginner-org-img" />
            <div className="beginner-org-img-title">Lunges</div>
          </div>
          <div className="beginner-workouts-plan-day3-img3">
            <img src={p9} alt="superman" className="beginner-org-img" />
            <div className="beginner-org-img-title">Superman Exercise</div>
          </div>
          <div className="beginner-workouts-plan-day3-matter-container">
            <p>Warm-up: 5 mins brisk walk or light jog</p>
            <ul>
              <li>Wall Push-Ups: 3 sets of 10 reps</li>
              <br />
              <li>Lunges: 3 sets of 10 reps per leg</li>
              <br />
              <li>Standing Calf Raises: 3 sets of 15 reps</li>
              <br />
              <li>Superman Exercise: 3 sets of 15 seconds</li>
              <br />
              <li>Stretching: 10-15 mins of full-body stretching</li>
            </ul>
          </div>
        </div>
      </div>
      <Support1 />
    </div>
  );
};

export default BeginnerWorkouts;
