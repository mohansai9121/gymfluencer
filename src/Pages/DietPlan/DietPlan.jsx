import "./DietPlan.css";
import starUser from "../../assets/Images/starUserIcon.png";
import DietPlans from "./DietPlans";
import SelectWorkouts1 from "./SelectWorkout1";
import PlanStartJourney from "./PlanStartJourney";
import PlanSupport from "./PlanSupport";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";

const DietPlan = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="diet-plan-page">
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
      <div className="diet-plan-title">DIET PLAN</div>
      <div className="diet-plan-subtitle">
        A diet plan is a structured approach to nutrition designed to help you
        achieve specific fitness goals, whether it&apos;s weight loss, muscle
        gain, or improving overall health. At GymFluencer, we believe that
        proper nutrition is the cornerstone of a successful fitness journey.
      </div>
      <div className="diet-plan-offer">WHAT WE OFFER:</div>
      <div className="diet-plan-offer-img1">
        <img src={starUser} alt="starUser" className="diet-plan-offer-img" />
      </div>
      <div className="diet-plan-offer-img2">
        <img src={starUser} alt="starUser" className="diet-plan-offer-img" />
      </div>
      <div className="diet-plan-offer-img3">
        <img src={starUser} alt="starUser" className="diet-plan-offer-img" />
      </div>
      <div className="diet-plan-offer-text1">Customized Meal Plans</div>
      <div className="diet-plan-offer-text2">Professional Guidance</div>
      <div className="diet-plan-offer-text3">Holistic Approach</div>
      <div className="diet-plan-offer-why">Why Choose Our Diet Plan?</div>
      <div className="diet-plan-offer-why-ans">
        At GymFluencer, we provide expertly curated diet plans tailored to your
        individual needs and fitness goals. Our plans are designed by
        professional nutritionists and fitness experts to ensure you get optimal
        results.
      </div>
      <DietPlans />
      <SelectWorkouts1 />
      <PlanStartJourney />
      <PlanSupport />
    </div>
  );
};

export default DietPlan;
