import { Link } from "react-router-dom";
import "./IntermediateWorkouts.css";
import Support2 from "./Support2";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";
import p1 from "./images/pushups.avif";
import p2 from "./images/dumbbell.webp";
import p3 from "./images/shoulder.webp";
import p4 from "./images/lunges.webp";
import p5 from "./images/twists.webp";
import p6 from "./images/crunches.jpg";
import p7 from "./images/pushups.avif";
import p8 from "./images/squats.jpg";
import p9 from "./images/burpees.jpg";
import p10 from "./images/quadstretch.jpg";
import p11 from "./images/shoulderstretch.jpg";
import p12 from "./images/forwardbend.jpg";
import bg from "./images/background.webp";

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
        <div className="intermediate-workouts-plan-bgimg">
          <img src={bg} alt="background" />
        </div>
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
          <div className="intermediate-workouts-plan-day1-img1">
            <img src={p1} alt="pushups" className="intermediate-img" />
            <div className="intermediate-img-title">Push-Ups</div>
          </div>
          <div className="intermediate-workouts-plan-day1-img2">
            <img src={p2} alt="dumbbell" className="intermediate-img" />
            <div className="intermediate-img-title">Dumbbell Rows</div>
          </div>
          <div className="intermediate-workouts-plan-day1-img3">
            <img src={p3} alt="shoulder" className="intermediate-img" />
            <div className="intermediate-img-title">Shoulder Press</div>
          </div>
          <div className="intermediate-workouts-plan-day1-matter-container">
            <p>Warm-up: 5 mins light cardio</p>
            <ul>
              <li>Push-Ups: 4 sets of 12 reps</li>
              <br />
              <li>Dumbbell Rows: 4 sets of 10 reps per side</li>
              <br />
              <li>Shoulder Press: 4 sets of 12 reps</li>
              <br />
              <li>Plank Hold: 3 sets of 30 seconds</li>
            </ul>
          </div>
          <div className="intermediate-workouts-plan-day2">
            Day 2: Lower Body & Core
          </div>
          <div className="intermediate-workouts-plan-day2-img1">
            <img src={p4} alt="lunges" className="intermediate-img" />
            <div className="intermediate-img-title">Lunges</div>
          </div>
          <div className="intermediate-workouts-plan-day2-img2">
            <img src={p5} alt="twists" className="intermediate-img" />
            <div className="intermediate-img-title">Russian Twists</div>
          </div>
          <div className="intermediate-workouts-plan-day2-img3">
            <img src={p6} alt="crunches" className="intermediate-img" />
            <div className="intermediate-img-title">Bicycle Crunches</div>
          </div>
          <div className="intermediate-workouts-plan-day2-matter-container">
            <p>Warm-up: 5 mins light cardio</p>
            <ul>
              <li>Lunges: 4 sets of 12 reps per leg</li>
              <br />
              <li>Russian Twists: 4 sets of 15 reps per side</li>
              <br />
              <li>Standing Knee Tucks: 4 sets of 15 reps per leg</li>
              <br />
              <li>Bicycle Crunches: 3 sets of 20 reps</li>
            </ul>
          </div>
          <div className="intermediate-workouts-plan-day3">
            Day 3: Full Body Circuit
          </div>
          <div className="intermediate-workouts-plan-day3-img1">
            <img src={p7} alt="wall" className="intermediate-img" />
            <div className="intermediate-img-title">Push-Ups</div>
          </div>
          <div className="intermediate-workouts-plan-day3-img2">
            <img src={p8} alt="squats" className="intermediate-img" />
            <div className="intermediate-img-title">Squats</div>
          </div>
          <div className="intermediate-workouts-plan-day3-img3">
            <img src={p9} alt="burpees" className="intermediate-img" />
            <div className="intermediate-img-title">Burpees</div>
          </div>
          <div className="intermediate-workouts-plan-day3-matter-container">
            <p>Warm-up: 5 mins light cardio</p>
            <ul>
              <li>Push-Ups: 4 sets of 12 reps</li>
              <br />
              <li>Bodyweight Squats: 4 sets of 15 reps</li>
              <br />
              <li>Burpees: 3 sets of 10 reps</li>
              <br />
              <li>Mountain Climbers: 3 sets of 30 seconds</li>
            </ul>
          </div>
          <div className="intermediate-workouts-plan-day4">
            Day 4: Flexibility & Recovery
          </div>
          <div className="intermediate-workouts-plan-day4-img1">
            <img src={p10} alt="quadstretch" className="intermediate-img" />
            <div className="intermediate-img-title">Quad Stretch</div>
          </div>
          <div className="intermediate-workouts-plan-day4-img2">
            <img src={p11} alt="shoulderstretch" className="intermediate-img" />
            <div className="intermediate-img-title">Shoulder Stretch</div>
          </div>
          <div className="intermediate-workouts-plan-day4-img3">
            <img src={p12} alt="forwardbend" className="intermediate-img" />
            <div className="intermediate-img-title">Forward Bend</div>
          </div>
          <div className="intermediate-workouts-plan-day4-matter-container">
            <p>
              Full-body stretching and mobility exercises to enhance recovery.
            </p>
            <ul>
              <li>Quad Stretch: 3 sets of 30 seconds per leg</li>
              <br />
              <li>Hamstring Stretch: 3 sets of 30 seconds per leg</li>
              <br />
              <li>Shoulder Stretch: 3 sets of 30 seconds per arm</li>
              <br />
              <li>Seated Forward Bend: 3 sets of 30 seconds</li>
              <br />
              <li>Cat-Cow Stretch: 3 sets of 30 seconds</li>
            </ul>
          </div>
        </div>
      </div>
      <Support2 />
    </div>
  );
};

export default IntermediateWorkouts;
