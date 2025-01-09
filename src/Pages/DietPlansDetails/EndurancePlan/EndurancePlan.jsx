import "./EndurancePlan.css";
import starUser from "../../../assets/Images/starUserIcon.png";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import logo from "../../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";
import YouTube from "react-youtube";
import bg from "./images/background.jpg";
import img1 from "./images/7-day.jpg";
import img2 from "./images/30-day.jpg";
import img3 from "./images/600-cal.jpg";
import EnduranceSupport from "./EnduranceSupport";

const EndurancePlan = () => {
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
    <div className="endurance-diet-plan-page">
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
      <div className="endurance-diet-plan-title">
        Endurance/Performance Diet Plan
      </div>
      <div className="endurance-diet-plan-subtitle">
        An <b>Endurance/Performance</b> Diet Plan is designed to fuel your body
        for sustained physical activity, improve stamina, and enhance recovery.
        It emphasizes high carbohydrates for energy, moderate protein for muscle
        repair, and healthy fats, ensuring peak performance during training and
        competition.
      </div>
      <div className="endurance-diet-plan-video">
        <YouTube
          videoId="nGrpuWjfbbI"
          opts={options}
          onReady={onReady}
          className="endurance-diet-org-video"
        />
      </div>
      <div className="endurance-diet-plan-offer">
        Our Endurance Diet Meal Plans are crafted to ensure:
      </div>
      <div className="endurance-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="endurance-diet-plan-offer-img"
        />
      </div>
      <div className="endurance-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="endurance-diet-plan-offer-img"
        />
      </div>
      <div className="endurance-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="endurance-diet-plan-offer-img"
        />
      </div>
      <div className="endurance-diet-plan-offer-text1">Energized</div>
      <div className="endurance-diet-plan-offer-text2">Optimized</div>
      <div className="endurance-diet-plan-offer-text3">Sustainable</div>
      <div className="endurance-diet-plan-offer-title2">
        The Best Endurance/Performance Diet Plan – Men and Women
      </div>
      <div className="endurance-diet-plan-offer-subtitle2">
        Here’s a glimpse into a diet plan tailored to boost energy and enhance
        performance for endurance activities.
      </div>
      <div className="endurance-diet-plan-offer-goal">
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="endurance-diet-plan-offer-goal-matter">
          <div className="endurance-matter">
            <div className="endurance-matter-title">GOAL</div>
            <div className="endurance-matter-description">
              Maximize energy, improve stamina, and optimize recovery.
            </div>
          </div>
          <div className="endurance-matter">
            <div className="endurance-matter-title">Diet Focus</div>
            <div className="endurance-matter-description">
              High carbs, moderate protein, healthy fats, and hydration.
            </div>
          </div>
          <div className="endurance-matter">
            <div className="endurance-matter-title">Best Diet Plan</div>
            <div className="endurance-matter-description">
              Calories: Match or slightly exceed daily energy expenditure.
            </div>
          </div>
          <div className="endurance-matter">
            <div className="endurance-matter-title">Macronutrients</div>
            <div className="endurance-matter-description">
              <p>Carbs: 50-60% of total calories.</p>
              <p>Protein: 1.2–1.6 grams per kg of body weight.</p>
              <p>Fats: 20-30% of total calories.</p>
            </div>
          </div>
          <div className="endurance-matter">
            <div className="endurance-matter-title">Foods to Include</div>
            <div className="endurance-matter-description">
              <p>Complex carbs (whole grains, sweet potatoes)</p>
              <p>Lean proteins (chicken, turkey, tofu)</p>
              <p>Fruits and vegetables (bananas, berries, leafy greens)</p>
              <p>Healthy fats (nuts, seeds, avocado)</p>
              <p>Hydration (water, electrolyte drinks)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="endurance-diet-plan-offer-title3">Sample Meal</div>
      <div className="endurance-diet-plan-offer-subtitle3">
        Try our expertly designed endurance meal plans to keep you energized and
        performing at your best.
      </div>
      <div className="endurance-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="endurance-diet-plan-org-img"
        />
        <div className="endurance-img-title">7-Day Diet Meal Plan</div>
      </div>
      <div className="endurance-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="endurance-diet-plan-org-img"
        />
        <div className="endurance-img-title">30-Day High-Protein</div>
      </div>
      <div className="endurance-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="endurance-img-title">450-Calorie Sheet</div>
      </div>
      <EnduranceSupport />
    </div>
  );
};

export default EndurancePlan;
