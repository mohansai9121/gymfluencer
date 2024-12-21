import { Link } from "react-router-dom";
import "./DietPlans.css";
const DietPlans = () => {
  return (
    <div className="diet-plans-container">
      <div className="diet-plans-bgimg"></div>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img1">
          <div className="diet-plans-img1-text">Weight Loss Diet Plan</div>
          <div className="diet-plans-img1-description">
            A description of the Weight Loss (Fat Loss) Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img2">
          <div className="diet-plans-img2-text">Personalized Diet Plan</div>
          <div className="diet-plans-img2-description">
            A description of the Personalized Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img3">
          <div className="diet-plans-img3-text">
            Muscle Building (Hypertrophy) Diet Plan
          </div>
          <div className="diet-plans-img3-description">
            A description of the Muscle Building (Hypertrophy) Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img4">
          <div className="diet-plans-img4-text">Cutting Diet Plan</div>
          <div className="diet-plans-img4-description">
            A description of the Cutting Diet Plan
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img5">
          <div className="diet-plans-img5-text">
            Endurance/Performance Diet Plan
          </div>
          <div className="diet-plans-img5-description">
            A description of the Endurance/Performance Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img6">
          <div className="diet-plans-img6-text">Keto Diet (Ketogenic)</div>
          <div className="diet-plans-img6-description">
            A description of the Keto Diet (Ketogenic).
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img7">
          <div className="diet-plans-img7-text">
            Intermittent Fasting Diet Plan
          </div>
          <div className="diet-plans-img7-description">
            A description of the Intermittent Fasting Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img8">
          <div className="diet-plans-img8-text">Vegetarian/Vegan Diet Plan</div>
          <div className="diet-plans-img8-description">
            A description of the Vegetarian/Vegan Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img9">
          <div className="diet-plans-img9-text">Paleo Diet Plan</div>
          <div className="diet-plans-img9-description">
            A description of the Paleo Diet Plan.
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DietPlans;
