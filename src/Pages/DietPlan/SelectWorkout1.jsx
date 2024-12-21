import "./SelectWorkout1.css";

const SelectWorkouts1 = () => {
  return (
    <div className="select-workouts-page">
      <div className="workoutplans-select-title">Select Your Workout Plan</div>
      <div className="workoutplans-select-subtitle">
        Choose a workout plan that fits your goals, whether it’s building
        strength, losing weight, or staying active. Find the perfect plan for
        you!
      </div>
      <div className="workout-beginner-card">
        <div className="workout-beginner-img"></div>
        <div className="workout-beginner-title">BEGINNER</div>
        <div className="workout-beginner-subtitle">
          Start your fitness journey with simple and effective exercises.
        </div>
      </div>
      <div className="workout-intermediate-card">
        <div className="workout-intermediate-img"></div>
        <div className="workout-intermediate-title">INTERMEDIATE</div>
        <div className="workout-intermediate-subtitle">
          Start your fitness journey with simple and effective exercises.
        </div>
      </div>
      <div className="workout-advanced-card">
        <div className="workout-advanced-img"></div>
        <div className="workout-advanced-title">ADVANCED</div>
        <div className="workout-advanced-subtitle">
          Push your limits with high-intensity and complex movements.
        </div>
      </div>
      <div className="workout-personalized-card">
        <div className="workout-personalized-img"></div>
        <div className="workout-personalized-title">PERSONALIZED</div>
        <div className="workout-personalized-subtitle">
          Get a tailored plan based on your specific needs and goals.
        </div>
      </div>
    </div>
  );
};

export default SelectWorkouts1;
