import "./VeganDiet.css";
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
import VeganSupport from "./VeganSupport";

const VeganDiet = () => {
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
    <div className="Vegan-diet-plan-page">
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
      <div className="vegan-diet-plan-title">Vegetarian/Vegan Diet Plan</div>
      <div className="vegan-diet-plan-subtitle">
        A <b>Vegetarian/Vegan Diet Plan</b> focuses on plant-based foods,
        eliminating animal products to promote overall health, weight
        management, and environmental sustainability. It emphasizes whole
        grains, fruits, vegetables, legumes, nuts, and seeds, ensuring balanced
        nutrition while supporting ethical eating choices.
      </div>
      <div className="vegan-diet-plan-video">
        <YouTube
          videoId="6lFnoCD-RGA"
          opts={options}
          onReady={onReady}
          className="vegan-diet-org-video"
        />
      </div>
      <div className="vegan-diet-plan-offer">
        Our Vegetarian/Vegan Meal Plans are crafted to ensure:
      </div>
      <div className="vegan-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="vegan-diet-plan-offer-img"
        />
      </div>
      <div className="vegan-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="vegan-diet-plan-offer-img"
        />
      </div>
      <div className="vegan-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="vegan-diet-plan-offer-img"
        />
      </div>
      <div className="vegan-diet-plan-offer-text1">Nutritious</div>
      <div className="vegan-diet-plan-offer-text2">Sustainable</div>
      <div className="vegan-diet-plan-offer-text3">Balanced</div>
      <div className="vegan-diet-plan-offer-title2">
        The Best Vegetarian/Vegan Diet Plan for Health and Wellness – Men and
        Women
      </div>
      <div className="vegan-diet-plan-offer-subtitle2">
        Here’s a glimpse into a plant-based diet plan designed to support weight
        management and overall wellness.
      </div>
      <div className="vegan-diet-plan-offer-goal">
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="vegan-diet-plan-offer-goal-matter">
          <div className="vegan-matter">
            <div className="vegan-matter-title">GOAL</div>
            <div className="vegan-matter-description">
              Achieve optimal health, improve energy, and manage weight through
              plant-based eating.
            </div>
          </div>
          <div className="vegan-matter">
            <div className="vegan-matter-title">Diet Focus</div>
            <div className="vegan-matter-description">
              High in fruits, vegetables, whole grains, and plant-based
              proteins.
            </div>
          </div>
          <div className="vegan-matter">
            <div className="vegan-matter-title">Best Diet Plan</div>
            <div className="vegan-matter-description">
              Calories: Slight calorie deficit (20-30% less than maintenance).
            </div>
          </div>
          <div className="vegan-matter">
            <div className="vegan-matter-title">Macronutrients</div>
            <div className="vegan-matter-description">
              <p>Carbs: 40-60% of total calories.</p>
              <p>Protein: 15-25% of total calories from plant sources.</p>
              <p>Fats: 20-30% of total calories from healthy fats.</p>
            </div>
          </div>
          <div className="vegan-matter">
            <div className="vegan-matter-title">Foods to Include</div>
            <div className="vegan-matter-description">
              <p>Plant-based proteins (tofu, tempeh, lentils, chickpeas)</p>
              <p>Whole grains (quinoa, brown rice, oats)</p>
              <p>Vegetables (spinach, kale, carrots)</p>
              <p>Fruits (berries, apples, avocados)</p>
              <p>Healthy fats (nuts, seeds, olive oil)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vegan-diet-plan-offer-title3">Sample Meal</div>
      <div className="vegan-diet-plan-offer-subtitle3">
        Try our expertly designed vegetarian/vegan meal plans to nourish your
        body with wholesome, plant-based foods.
      </div>
      <div className="vegan-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="vegan-diet-plan-org-img"
        />
        <div className="vegan-img-title">7-Day Diet Meal Plan</div>
      </div>
      <div className="vegan-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="vegan-diet-plan-org-img"
        />
        <div className="vegan-img-title">30-Day High-Protein</div>
      </div>
      <div className="vegan-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="vegan-img-title">450-Calorie Sheet</div>
      </div>
      <VeganSupport />
    </div>
  );
};

export default VeganDiet;
