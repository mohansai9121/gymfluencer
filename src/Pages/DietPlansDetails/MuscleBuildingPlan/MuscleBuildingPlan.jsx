import "./MuscleBuilding.css";
import starUser from "../../../assets/Images/starUserIcon.png";
import MuscleBuildingSupport from "./MuscleBuildingSupport";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";
import YouTube from "react-youtube";
import bg from "./images/vegetable-cutting-bg.avif";
import img1 from "./images/7-day.jpg";
import img2 from "./images/30-day.jpg";
import img3 from "./images/diet-chart.jpg";

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
    <div className="muscle-building-diet-plan-page">
      <div className="navbar">
        <div style={{ display: "flex" }}>
          <img src={logo} alt="GymFluencer Logo" className="logo" />
          <span
            className="navbar-logo-name"
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
      <div className="muscle-building-diet-plan-title">
        Muscle Building (Hypertrophy) Diet Plan
      </div>
      <div className="muscle-building-diet-plan-subtitle">
        The <b>Muscle Building (Hypertrophy)</b> Diet Plan focuses on
        high-protein meals, healthy carbs, and fats to support muscle growth,
        repair, and energy, combined with a calorie surplus for optimal gains.
      </div>
      <div className="muscle-building-diet-plan-video">
        <YouTube
          videoId="osqvOUJjaCo"
          opts={options}
          onReady={onReady}
          className="muscle-building-diet-org-video"
        />
      </div>
      <div className="muscle-building-diet-plan-offer">
        Our Muscle Building Diet Plans ensure:
      </div>
      <div className="muscle-building-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="muscle-building-diet-plan-offer-img"
        />
      </div>
      <div className="muscle-building-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="muscle-building-diet-plan-offer-img"
        />
      </div>
      <div className="muscle-building-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="muscle-building-diet-plan-offer-img"
        />
      </div>
      <div className="muscle-building-diet-plan-offer-text1">
        High Protein for growth.
      </div>
      <div className="muscle-building-diet-plan-offer-text2">
        Calorie Surplus for gains.
      </div>
      <div className="muscle-building-diet-plan-offer-text3">
        Balanced Carbs & Fats for energy.
      </div>
      <div className="muscle-building-diet-plan-offer-title2">
        Maximize Muscle Growth with Our Diet Plan
      </div>
      <div className="muscle-building-diet-plan-offer-subtitle2">
        Maximize muscle growth with our diet plan, featuring high-protein meals,
        balanced carbs, and healthy fats to fuel your gains and recovery.
        Perfectly designed for men and women.
      </div>
      <div className="muscle-building-diet-plan-offer-goal">
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="muscle-building-diet-plan-offer-goal-matter">
          <div className="muscle-building-matter">
            <div className="muscle-building-matter-title">GOAL</div>
            <div className="muscle-building-matter-description">
              Build muscle mass by providing the body with the necessary
              nutrients and calories to promote hypertrophy and strength.
            </div>
          </div>
          <div className="muscle-building-matter">
            <div className="muscle-building-matter-title">Diet Focus</div>
            <div className="muscle-building-matter-description">
              High protein, moderate to high carbs, and healthy fats to fuel
              muscle growth and recovery.
            </div>
          </div>
          <div className="muscle-building-matter">
            <div className="muscle-building-matter-title">Best Diet Plan</div>
            <div className="muscle-building-matter-description">
              Calories: Slight calorie surplus (10-20% above maintenance) to
              support muscle growth.
            </div>
          </div>
          <div className="muscle-building-matter">
            <div className="muscle-building-matter-title">Macronutrients</div>
            <div className="muscle-building-matter-description">
              <p>
                Protein: 1.6–2.2 grams per kg of body weight to support muscle
                repair and growth
              </p>
              <p>
                Carbs: 40-50% of total calories to fuel workouts and recovery.
              </p>
              <p>
                Fats: 20-30% of total calories for hormone production and
                overall health.
              </p>
            </div>
          </div>
          <div className="muscle-building-matter">
            <div className="muscle-building-matter-title">Foods to Include</div>
            <div className="muscle-building-matter-description">
              <p>Lean meats (chicken, turkey, beef)</p>
              <p>Fish (salmon, tuna)</p>
              <p>Whole grains (brown rice, oats, quinoa)</p>
              <p>Healthy fats (avocados, nuts, olive oil)</p>
              <p>Fruits and vegetables (spinach, berries, broccoli)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="muscle-building-diet-plan-offer-title3">Sample Meal</div>
      <div className="muscle-building-diet-plan-offer-subtitle3">
        Try our delicious weight-loss meal plans, designed by GymFluencer&apos;s
        registered dietitians and food experts to help you lose weight.
      </div>
      <div className="muscle-building-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="muscle-building-diet-plan-org-img"
        />
        <div className="muscle-building-img-title">7-Day Diet Meal Plan</div>
      </div>
      <div className="muscle-building-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="muscle-building-diet-plan-org-img"
        />
        <div className="muscle-building-img-title">30-Day High-Protein</div>
      </div>
      <div className="muscle-building-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="muscle-building-img-title">450-Calorie Sheet</div>
      </div>
      <MuscleBuildingSupport />
    </div>
  );
};

export default WeightLossDietPlan;
