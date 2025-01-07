import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Workoutplans from "./Pages/WorkoutPlans/Workoutplans";
import BeginnerWorkouts from "./Pages/BeginnerWorkouts/BeginnerWorkouts";
import IntermediateWorkouts from "./Pages/IntermediateWorkouts/IntermediateWorkouts";
import PersonalizedWorkout from "./Pages/PersonalizedWorkout/PersonalizedWorkout";
import AdvancedWorkouts from "./Pages/AdvancedWorkouts/AdvancedWorkouts";
import DietPlan from "./Pages/DietPlan/DietPlan";
import WeightLossDietPlan from "./Pages/DietPlansDetails/WeightLossDietPlan/WeightLossDietPlan";
import MuscleBuildingPlan from "./Pages/DietPlansDetails/MuscleBuildingPlan/MuscleBuildingPlan";
import EndurancePlan from "./Pages/DietPlansDetails/EndurancePlan/EndurancePlan";
import IntermittentFasting from "./Pages/DietPlansDetails/IntermittentFasting/IntermittentFasting";
import CuttingDiet from "./Pages/DietPlansDetails/CuttingDiet/CuttingDiet";
import KetoDiet from "./Pages/DietPlansDetails/KetoDiet/KetoDiet";
import VeganDiet from "./Pages/DietPlansDetails/VeganDiet/VeganDiet";
import PaleoDiet from "./Pages/DietPlansDetails/PaleoDiet/PaleoDiet";
import PersonalizedDiet from "./Pages/DietPlansDetails/PersonalizedDiet/PersonalizedDiet";
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
        <Route
          path="/muscle-building-diet-plan"
          element={<MuscleBuildingPlan />}
        />
        <Route
          path="/endurance-performance-diet-plans"
          element={<EndurancePlan />}
        />
        <Route
          path="/intermittent-fasting-diet-plan"
          element={<IntermittentFasting />}
        />
        <Route path="/cutting-diet-plan" element={<CuttingDiet />} />
        <Route path="/keto-meal-plan" element={<KetoDiet />} />
        <Route path="/vegetarianvegan-diet-plan" element={<VeganDiet />} />
        <Route path="/paleodietplan" element={<PaleoDiet />} />
        <Route
          path="/personalized-diet-plan-form"
          element={<PersonalizedDiet />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
