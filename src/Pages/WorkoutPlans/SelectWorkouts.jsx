import { Link } from "react-router-dom";
import "./SelectWorkouts.css";
import beginner from "./images/b1.jpg";
import intermediate from "./images/b2.jpg";
import advanced from "./images/b3.jpg";
import personal from "./images/b4.jpg";

const SelectWorkouts = () => {
  return (
    <div className="select-workouts-page">
      <div className="workoutplans1-select-title">Select Your Workout Plan</div>
      <div className="workoutplans1-select-subtitle">
        Choose a workout plan that fits your goals, whether it’s building
        strength, losing weight, or staying active. Find the perfect plan for
        you!
      </div>
      <Link to="/beginner-workout-plan" style={{ textDecoration: "none" }}>
        <div className="workouts-beginner-card">
          <div className="workout-beginner-img">
            <img src={beginner} alt="beginner" className="org-img" />
          </div>
          <div className="workouts-beginner-title">BEGINNER</div>
          <div className="workouts-beginner-subtitle">
            Start your fitness journey with simple and effective exercises.
          </div>
        </div>
      </Link>
      <Link to="/intermediate-workout-plan" style={{ textDecoration: "none" }}>
        <div className="workouts-intermediate-card">
          <div className="workouts-intermediate-img">
            <img src={intermediate} alt="intermediate" className="org-img" />
          </div>
          <div className="workouts-intermediate-title">INTERMEDIATE</div>
          <div className="workouts-intermediate-subtitle">
            Start your fitness journey with simple and effective exercises.
          </div>
        </div>
      </Link>
      <Link to="/advanced-workout-plan" style={{ textDecoration: "none" }}>
        <div className="workouts-advanced-card">
          <div className="workout-advanced-img">
            <img src={advanced} alt="advanced" className="org-img" />
          </div>
          <div className="workouts-advanced-title">ADVANCED</div>
          <div className="workouts-advanced-subtitle">
            Push your limits with high-intensity and complex movements.
          </div>
        </div>
      </Link>
      <Link
        to="/personalized-workout-plan-form"
        style={{ textDecoration: "none" }}
      >
        <div className="workouts-personalized-card">
          <div className="workout-personalized-img">
            <img src={personal} alt="personal" className="org-img" />
          </div>
          <div className="workouts-personalized-title">PERSONALIZED</div>
          <div className="workouts-personalized-subtitle">
            Get a tailored plan based on your specific needs and goals.
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SelectWorkouts;
