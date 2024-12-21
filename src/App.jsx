import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Workoutplans from "./Pages/WorkoutPlans/Workoutplans";
import BeginnerWorkouts from "./Pages/BeginnerWorkouts/BeginnerWorkouts";
import IntermediateWorkouts from "./Pages/IntermediateWorkouts/IntermediateWorkouts";
import PersonalizedWorkout from "./Pages/PersonalizedWorkout/PersonalizedWorkout";
import AdvancedWorkouts from "./Pages/AdvancedWorkouts/AdvancedWorkouts";
import DietPlan from "./Pages/DietPlan/DietPlan";
import WeightLossDietPlan from "./Pages/DietPlansDetails/WeightLossDietPlan/WeightLossDietPlan";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workoutplans" element={<Workoutplans />} />
        <Route path="/beginner-workout-plan" element={<BeginnerWorkouts />} />
        <Route
          path="/intermediate-workout-plan"
          element={<IntermediateWorkouts />}
        />
        <Route
          path="/personalized-workout-plan-form"
          element={<PersonalizedWorkout />}
        />
        <Route path="/advanced-workout-plan" element={<AdvancedWorkouts />} />
        <Route path="/diet" element={<DietPlan />} />
        <Route path="/weight-loss-diet-plan" element={<WeightLossDietPlan />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
