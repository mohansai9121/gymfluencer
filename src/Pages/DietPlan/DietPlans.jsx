import { Link } from "react-router-dom";
import "./DietPlans.css";
import bg from "./images/background.webp";
import img1 from "./images/weightloss.jpg";
import img2 from "./images/personalized.jpeg";
import img3 from "./images/muscle-building.webp";
import img4 from "./images/cutting.jpg";
import img5 from "./images/endurance.jpg";
import img6 from "./images/keto.jpg";
import img7 from "./images/intermittent.jpg";
import img8 from "./images/vegan.webp";
import img9 from "./images/paleo.jpg";

const DietPlans = () => {
  return (
    <div className="diet-plans-container">
      <div className="diet-plans-bgimg">
        <img src={bg} alt="Background" />
      </div>
      <Link to="/weight-loss-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img1">
          <img
            src={img1}
            alt="Weight loss diet image"
            className="diet-org-img"
          />
          <div className="diet-plans-img1-text">Weight Loss Diet Plan</div>
          <div className="diet-plans-img1-description">
            A description of the Weight Loss (Fat Loss) Diet Plan.
          </div>
        </div>
      </Link>
      <Link
        to="/personalized-diet-plan-form"
        style={{ textDecoration: "none" }}
      >
        <div className="diet-plans-img2">
          <img
            src={img2}
            alt="personalized diet image"
            className="diet-org-img"
          />
          <div className="diet-plans-img2-text">Personalized Diet Plan</div>
          <div className="diet-plans-img2-description">
            A description of the Personalized Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/muscle-building-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img3">
          <img
            src={img3}
            alt="muscle building diet image"
            className="diet-org-img"
          />
          <div className="diet-plans-img3-text">
            Muscle Building (Hypertrophy) Diet Plan
          </div>
          <div className="diet-plans-img3-description">
            A description of the Muscle Building (Hypertrophy) Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/cutting-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img4">
          <img src={img4} alt="cutting diet image" className="diet-org-img" />
          <div className="diet-plans-img4-text">Cutting Diet Plan</div>
          <div className="diet-plans-img4-description">
            A description of the Cutting Diet Plan
          </div>
        </div>
      </Link>
      <Link
        to="/endurance-performance-diet-plans"
        style={{ textDecoration: "none" }}
      >
        <div className="diet-plans-img5">
          <img src={img5} alt="endurance diet image" className="diet-org-img" />
          <div className="diet-plans-img5-text">
            Endurance/Performance Diet Plan
          </div>
          <div className="diet-plans-img5-description">
            A description of the Endurance/Performance Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/keto-meal-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img6">
          <img src={img6} alt="keto diet image" className="diet-org-img" />
          <div className="diet-plans-img6-text">Keto Diet (Ketogenic)</div>
          <div className="diet-plans-img6-description">
            A description of the Keto Diet (Ketogenic).
          </div>
        </div>
      </Link>
      <Link
        to="/intermittent-fasting-diet-plan"
        style={{ textDecoration: "none" }}
      >
        <div className="diet-plans-img7">
          <img
            src={img7}
            alt="intermittent fasting diet image"
            className="diet-org-img"
          />
          <div className="diet-plans-img7-text">
            Intermittent Fasting Diet Plan
          </div>
          <div className="diet-plans-img7-description">
            A description of the Intermittent Fasting Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/vegetarianvegan-diet-plan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img8">
          <img src={img8} alt="vegan diet image" className="diet-org-img" />
          <div className="diet-plans-img8-text">Vegetarian/Vegan Diet Plan</div>
          <div className="diet-plans-img8-description">
            A description of the Vegetarian/Vegan Diet Plan.
          </div>
        </div>
      </Link>
      <Link to="/paleodietplan" style={{ textDecoration: "none" }}>
        <div className="diet-plans-img9">
          <img src={img9} alt="paleo diet image" className="diet-org-img" />
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
