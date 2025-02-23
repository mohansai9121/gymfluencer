import "./SelectWorkout1.css";
import beginner from "../WorkoutPlans/images/b1.jpg";
import intermediate from "../WorkoutPlans/images/b2.jpg";
import advanced from "../WorkoutPlans/images/b3.jpg";
import personal from "../WorkoutPlans/images/b4.jpg";
import { Link } from "react-router-dom";

const SelectWorkouts1 = () => {
  return (
    <div className="select-workouts1-page">
      <div className="workoutplans-select-title">Select Your Workout Plan</div>
      <div className="workoutplans-select-subtitle">
        Choose a workout plan that fits your goals, whether it’s building
        strength, losing weight, or staying active. Find the perfect plan for
        you!
      </div>
      <Link to="/beginner-workout-plan" style={{ textDecoration: "none" }}>
        <div className="workout-beginner-card">
          <div className="workout-beginner-img">
            <img
              src={beginner}
              alt="workout plan beginner"
              className="diet-workouts-org-img"
            />
          </div>
          <div className="workout-beginner-title">BEGINNER</div>
          <div className="workout-beginner-subtitle">
            Start your fitness journey with simple and effective exercises.
          </div>
        </div>
      </Link>
      <Link to="/intermediate-workout-plan">
        <div className="workout-intermediate-card">
          <div className="workout-intermediate-img">
            <img
              src={intermediate}
              alt="workout plan intermediate"
              className="diet-workouts-org-img"
            />
          </div>
          <div className="workout-intermediate-title">INTERMEDIATE</div>
          <div className="workout-intermediate-subtitle">
            Start your fitness journey with simple and effective exercises.
          </div>
        </div>
      </Link>
      <Link to="/advanced-workout-plan">
        <div className="workout-advanced-card">
          <div className="workout-advanced-img">
            <img
              src={advanced}
              alt="workout plan advanced"
              className="diet-workouts-org-img"
            />
          </div>
          <div className="workout-advanced-title">ADVANCED</div>
          <div className="workout-advanced-subtitle">
            Push your limits with high-intensity and complex movements.
          </div>
        </div>
      </Link>
      <Link to="/personalized-workout-plan-form">
        <div className="workout-personalized-card">
          <div className="workout-personalized-img">
            <img
              src={personal}
              alt="workout plan personalized"
              className="diet-workouts-org-img"
            />
          </div>
          <div className="workout-personalized-title">PERSONALIZED</div>
          <div className="workout-personalized-subtitle">
            Get a tailored plan based on your specific needs and goals.
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SelectWorkouts1;
