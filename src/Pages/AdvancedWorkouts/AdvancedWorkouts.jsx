import AnchorLink from "react-anchor-link-smooth-scroll";
import "./AdvancedWorkouts.css";
import Support3 from "./Support3";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import bg from "./images/background.jpg";
import workout1 from "./images/weightedpullups.jpg";
import workout2 from "./images/benchpress.jpg";
import workout3 from "./images/benchpress2.webp";
import workout4 from "./images/barbellsquats.jpg";
import workout5 from "./images/deadlift.jpg";
import workout6 from "./images/bulgariansplit.jpg";
import workout7 from "./images/battleropes.jpg";
import workout8 from "./images/benchpress.jpg";
import workout9 from "./images/kettlebell.jpg";
import workout10 from "./images/legraises.webp";
import workout11 from "./images/russiantwists.jpg";
import workout12 from "./images/bicyclecrunches.jpg";

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
      <div className="advanced-workouts-title">ADVANCED WORKOUT PLAN</div>
      <div className="advanced-workouts-subtitle">
        Push your limits with advanced workouts that challenge strength and
        endurance. Focus on mastering high-intensity techniques for maximum
        results. Stay consistent to reach your peak fitness potential.
      </div>
      <div className="advanced-workouts-plan-container">
        <div className="advanced-workouts-plan-bgimg">
          <img src={bg} alt="background img" className="advanced-background" />
        </div>
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
          <div className="advanced-workouts-plan-day1-img1">
            <img
              src={workout1}
              alt="weighted pullups img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Weighted Pullups</div>
          </div>
          <div className="advanced-workouts-plan-day1-img2">
            <img
              src={workout2}
              alt="bench press img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Bench Press</div>
          </div>
          <div className="advanced-workouts-plan-day1-img3">
            <img
              src={workout3}
              alt="overhead shoulder img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">OverHead Shoulder</div>
          </div>
          <div className="advanced-workouts-plan-day1-matter-container">
            <div>Warm-up: 10 mins dynamic stretching</div>
            <ul>
              <li>Weighted Pull-Ups: 5 sets of 8 reps</li>
              <br />
              <li>Bench Press: 4 sets of 8 reps</li>
              <br />
              <li>Overhead Shoulder Press: 4 sets of 10 reps</li>
              <br />
              <li>Tricep Dips: 4 sets of 12 reps</li>
            </ul>
          </div>
          <div className="advanced-workouts-plan-day2">
            Day 2: Lower Body & Core
          </div>
          <div className="advanced-workouts-plan-day2-img1">
            <img
              src={workout4}
              alt="Barbell squats img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Barbell Squats</div>
          </div>
          <div className="advanced-workouts-plan-day2-img2">
            <img
              src={workout5}
              alt="Dead lifts img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Dead Lift</div>
          </div>
          <div className="advanced-workouts-plan-day2-img3">
            <img
              src={workout6}
              alt="Bulgarian split img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Bulgarian Split</div>
          </div>
          <div className="advanced-workouts-plan-day2-matter-container">
            <div>Warm-up: 10 mins of light jogging</div>
            <ul>
              <li>Barbell Squats: 5 sets of 6 reps</li>
              <br />
              <li>Deadlifts: 5 sets of 5 reps</li>
              <br />
              <li>Bulgarian Split Squats: 4 sets of 8 reps per leg</li>
              <br />
              <li>Calf Raises: 4 sets of 15 reps</li>
            </ul>
          </div>
          <div className="advanced-workouts-plan-day3">
            Day 3: Functional Circuit
          </div>
          <div className="advanced-workouts-plan-day3-img1">
            <img
              src={workout7}
              alt="Battle ropes img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Battles Ropes</div>
          </div>
          <div className="advanced-workouts-plan-day3-img2">
            <img
              src={workout8}
              alt="Bench press img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Bench Press</div>
          </div>
          <div className="advanced-workouts-plan-day3-img3">
            <img
              src={workout9}
              alt="Kettlebell swing img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Kettlebell Swing</div>
          </div>
          <div className="advanced-workouts-plan-day3-matter-container">
            <div>Warm-up: 5 mins jump rope</div>
            <ul>
              <li>Battle Ropes: 4 sets of 45 seconds</li>
              <br />
              <li>Box Jumps: 4 sets of 15 reps</li>
              <br />
              <li>Kettlebell Swings: 4 sets of 20 reps</li>
              <br />
              <li>Burpees: 3 sets of 20 reps</li>
            </ul>
          </div>
          <div className="advanced-workouts-plan-day4">
            Day 4: Core & Conditioning
          </div>
          <div className="advanced-workouts-plan-day4-img1">
            <img
              src={workout10}
              alt="Hanging leg raises img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Hanging Leg Raise</div>
          </div>
          <div className="advanced-workouts-plan-day4-img2">
            <img
              src={workout11}
              alt="Russian twists img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Russian Twists</div>
          </div>
          <div className="advanced-workouts-plan-day4-img3">
            <img
              src={workout12}
              alt="Bicycle crunches img"
              className="advanced-workouts-org-img"
            />
            <div className="advanced-img-title">Bicycle crunches</div>
          </div>
          <div className="advanced-workouts-plan-day4-matter-container">
            <div>Hanging Leg Raises: 4 sets of 12 reps</div>
            <ul>
              <li>Russian Twists: 4 sets of 20 reps</li>
              <br />
              <li>Bicycle Crunches: 4 sets of 20 reps</li>
              <br />
              <li>Plank: 4 sets of 1 minute</li>
            </ul>
          </div>
          <div className="advanced-workouts-plan-day5">Cool-down:</div>
          <div className="advanced-workouts-plan-day5-matter-container">
            <div>Quad Stretch: 3 sets of 30 seconds per leg</div>
            <ul>
              <li>Hamstring Stretch: 3 sets of 30 seconds per leg</li>
              <br />
              <li>Seated Forward Bend: 3 sets of 30 seconds</li>
              <br />
              <li>Cat-Cow Stretch: 3 sets of 30 seconds</li>
            </ul>
          </div>
        </div>
      </div>
      <Support3 />
    </div>
  );
};

export default IntermediateWorkouts;
