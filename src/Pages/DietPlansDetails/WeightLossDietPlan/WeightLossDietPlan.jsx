import "./WeightLossDietPlan.css";
import starUser from "../../../assets/Images/starUserIcon.png";
import WeightLossSupport from "./WeightLossSupport";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";
import YouTube from "react-youtube";
import bg from "./images/bg.webp";
import img1 from "./images/7-day-plan.jpg";
import img2 from "./images/30-day-plan.jpg";
import img3 from "./images/450-calories.jpg";

const WeightLossDietPlan = () => {
  const [isOptions, setIsOptions] = useState(false);

  const onReady = (e) => {
    const player = e.target;
    player.playVideo();
  };

  const options = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  return (
    <div className="weight-loss-diet-plan-page">
      <div className="navbar">
        <div style={{ display: "flex" }}>
          <img src={logo} alt="GymFluencer Logo" className="logo" />
          <span className="navbar-logo-name">GymFluencer</span>
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
      <div className="weight-loss-diet-plan-title">Weight-Loss Diet Plan</div>
      <div className="weight-loss-diet-plan-subtitle">
        A diet plan is a structured approach to nutrition designed to help you
        achieve specific fitness goals, whether it&apos;s weight loss, muscle
        gain, or improving overall health. At GymFluencer, we believe that
        proper nutrition is the cornerstone of a successful fitness journey.
      </div>
      <div className="weight-loss-diet-plan-video">
        <YouTube
          videoId="uBoQJkNEx-M"
          opts={options}
          onReady={onReady}
          className="weight-loss-diet-org-video"
        />
      </div>
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
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="weight-loss-diet-plan-offer-goal-matter">
          <div className="wldp-matter">
            <div className="wldp-matter-title">GOAL</div>
            <div className="wldp-matter-description">
              Lose fat and reduce body weight while maintaining muscle mass.
            </div>
          </div>
          <div className="wldp-matter">
            <div className="wldp-matter-title">Diet Focus</div>
            <div className="wldp-matter-description">
              High protein, moderate carbs, and healthy fats.
            </div>
          </div>
          <div className="wldp-matter">
            <div className="wldp-matter-title">Best Diet Plan</div>
            <div className="wldp-matter-description">
              Calories: Slight calorie deficit (20-30% less than maintenance).
            </div>
          </div>
          <div className="wldp-matter">
            <div className="wldp-matter-title">Macronutrients</div>
            <div className="wldp-matter-description">
              <p>Protein: 1.6–2.2 grams per kg of body weight.</p>
              <p>Carbs: 30-40% of total calories.</p>
              <p>Fats: 20-30% of total calories.</p>
            </div>
          </div>
          <div className="wldp-matter">
            <div className="wldp-matter-title">Foods to Include</div>
            <div className="wldp-matter-description">
              <p>Lean meats (chicken, turkey)</p>
              <p>Fish</p>
              <p>Leafy greens</p>
              <p>Low-glycemic carbs (sweet potatoes, brown rice)</p>
              <p>Healthy fats (avocados, nuts, olive oil)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="weight-loss-diet-plan-offer-title3">Sample Meal</div>
      <div className="weight-loss-diet-plan-offer-subtitle3">
        Try our delicious weight-loss meal plans, designed by GymFluencer&apos;s
        registered dietitians and food experts to help you lose weight.
      </div>
      <div className="weight-loss-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="wldp-diet-plan-org-img"
        />
        <div className="wldp-img-title">7-Day Diet Meal Plan</div>
      </div>
      <div className="weight-loss-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="wldp-diet-plan-org-img"
        />
        <div className="wldp-img-title">30-Day High-Protein</div>
      </div>
      <div className="weight-loss-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="wldp-img-title">450-Calorie Sheet</div>
      </div>
      <WeightLossSupport />
    </div>
  );
};

export default WeightLossDietPlan;
