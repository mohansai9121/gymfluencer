import "./CuttingDiet.css";
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
import CuttingDietSupport from "./CuttingDietSupport";

const CuttingDiet = () => {
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
    <div className="cutting-diet-plan-page">
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
      <div className="cutting-diet-plan-title">Cutting Diet Plan</div>
      <div className="cutting-diet-plan-subtitle">
        A <b>Cutting Diet Plan</b> helps reduce body fat while preserving
        muscle. It involves a calorie deficit, high protein, controlled carbs,
        and healthy fats, often with smaller, frequent meals, making it ideal
        for fat-loss phases in fitness.
      </div>
      <div className="cutting-diet-plan-video">
        <YouTube
          videoId="pR3RqBlHJHQ"
          opts={options}
          onReady={onReady}
          className="cutting-diet-org-video"
        />
      </div>
      <div className="cutting-diet-plan-offer">
        Our Cutting Diet Meal Plan are crafted to ensure:
      </div>
      <div className="cutting-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="cutting-diet-plan-offer-img"
        />
      </div>
      <div className="cutting-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="cutting-diet-plan-offer-img"
        />
      </div>
      <div className="cutting-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="cutting-diet-plan-offer-img"
        />
      </div>
      <div className="cutting-diet-plan-offer-text1">Effective</div>
      <div className="cutting-diet-plan-offer-text2">Sustainable</div>
      <div className="cutting-diet-plan-offer-text3">Effective</div>
      <div className="cutting-diet-plan-offer-title2">
        The Best Cutting Diet Plan for Fat Loss – Men and Women
      </div>
      <div className="cutting-diet-plan-offer-subtitle2">
        Here’s a glimpse into a cutting diet plan tailored to reduce body fat
        while preserving muscle mass.
      </div>
      <div className="cutting-diet-plan-offer-goal">
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="cutting-diet-plan-offer-goal-matter">
          <div className="cutting-matter">
            <div className="cutting-matter-title">GOAL</div>
            <div className="cutting-matter-description">
              Burn fat while retaining lean muscle mass.
            </div>
          </div>
          <div className="cutting-matter">
            <div className="cutting-matter-title">Diet Focus</div>
            <div className="cutting-matter-description">
              High protein, moderate carbs, and healthy fats in a calorie
              deficit.
            </div>
          </div>
          <div className="cutting-matter">
            <div className="cutting-matter-title">Best Diet Plan</div>
            <div className="cutting-matter-description">
              Calories: Slight calorie deficit (20-30% less than maintenance).
            </div>
          </div>
          <div className="cutting-matter">
            <div className="cutting-matter-title">Macronutrients</div>
            <div className="cutting-matter-description">
              <p>Protein: 2.0–2.4 grams per kg of body weight.</p>
              <p>Carbs: 25-35% of total calories.</p>
              <p>Fats: 20-30% of total calories.</p>
            </div>
          </div>
          <div className="cutting-matter">
            <div className="cutting-matter-title">Foods to Include</div>
            <div className="cutting-matter-description">
              <p>Lean proteins (chicken breast, egg whites)</p>
              <p>Fish (salmon, tuna)</p>
              <p>Green vegetables (broccoli, spinach)</p>
              <p>Complex carbs (quinoa, oats)</p>
              <p>Healthy fats (avocados, almonds, olive oil)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cutting-diet-plan-offer-title3">Sample Meal</div>
      <div className="cutting-diet-plan-offer-subtitle3">
        Try our expertly crafted cutting meal plans designed by GymFluencer’s
        dietitians to support fat loss and muscle retention.
      </div>
      <div className="cutting-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="cutting-diet-plan-org-img"
        />
        <div className="cutting-img-title">7-Day Diet Meal Plan</div>
      </div>
      <div className="cutting-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="cutting-diet-plan-org-img"
        />
        <div className="cutting-img-title">30-Day High-Protein</div>
      </div>
      <div className="cutting-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="cutting-img-title">450-Calorie Sheet</div>
      </div>
      <CuttingDietSupport />
    </div>
  );
};

export default CuttingDiet;
