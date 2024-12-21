import "./WeightLossDietPlan.css";
import starUser from "../../../assets/Images/starUserIcon.png";
import WeightLossSupport from "./WeightLossSupport";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";

const WeightLossDietPlan = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="weight-loss-diet-plan-page">
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
          <Link to="/">Home</Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#About">
          <Link to="/">About</Link>
        </AnchorLink>
        <AnchorLink
          className="navlink"
          href="#Services"
          onMouseEnter={() => setIsOptions(true)}
          onMouseLeave={() => setIsOptions(false)}
        >
          Our Services
          <FaAngleDown />
          {isOptions && (
            <>
              <Link to="/workoutplans">Workout Plans</Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/diet">Diet Plans</Link>
            </>
          )}
        </AnchorLink>
        <AnchorLink className="navlink" href="#Benefits">
          <Link to="/">Benefits</Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#Blogs">
          <Link to="/">Blogs</Link>
        </AnchorLink>
        <AnchorLink className="navlink" href="#Contact">
          <Link to="/">Contact</Link>
        </AnchorLink>
        <AnchorLink className="navlink">
          <Link to="/">
            <span className="join-us-link">Join Us Now</span>
          </Link>
        </AnchorLink>
      </div>
      <div className="weight-loss-diet-plan-title">Weight-Loss Diet Plans</div>
      <div className="weight-loss-diet-plan-subtitle">
        A diet plan is a structured approach to nutrition designed to help you
        achieve specific fitness goals, whether it&apos;s weight loss, muscle
        gain, or improving overall health. At GymFluencer, we believe that
        proper nutrition is the cornerstone of a successful fitness journey.
      </div>
      <div className="weight-loss-diet-plan-video"></div>
      <div className="weight-loss-diet-plan-offer">
        Our weight-loss meal plans are crafted to ensure:
      </div>
      <div className="weight-loss-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="weight-loss-diet-plan-offer-img"
        />
      </div>
      <div className="weight-loss-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="weight-loss-diet-plan-offer-img"
        />
      </div>
      <div className="weight-loss-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="weight-loss-diet-plan-offer-img"
        />
      </div>
      <div className="weight-loss-diet-plan-offer-text1">
        Customized Workout Plans
      </div>
      <div className="weight-loss-diet-plan-offer-text2">
        Professional Guidance
      </div>
      <div className="weight-loss-diet-plan-offer-text3">Holistic Approach</div>
      <div className="weight-loss-diet-plan-offer-title2">
        The Best Diet Plan for Weight Loss – Men and Women
      </div>
      <div className="weight-loss-diet-plan-offer-subtitle2">
        Here’s a glimpse into a healthy and balanced calorie diet plan. While
        this plan provides a general idea, it’s essential to consult a
        nutritionist for a plan tailored to your specific requirements.
      </div>
      <div className="weight-loss-diet-plan-offer-goal">
        <div className="weight-loss-diet-plan-offer-goal-matter"></div>
      </div>
      <div className="weight-loss-diet-plan-offer-title3">Sample Meal</div>
      <div className="weight-loss-diet-plan-offer-subtitle3">
        Try our delicious weight-loss meal plans, designed by GymFluencer&apos;s
        registered dietitians and food experts to help you lose weight.
      </div>
      <div className="weight-loss-diet-plan-offer-7day-img"></div>
      <div className="weight-loss-diet-plan-offer-30day-img"></div>
      <div className="weight-loss-diet-plan-offer-450cal-img"></div>
      <WeightLossSupport />
    </div>
  );
};

export default WeightLossDietPlan;
