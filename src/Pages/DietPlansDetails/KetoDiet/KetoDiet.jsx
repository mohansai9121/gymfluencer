import "./KetoDiet.css";
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
import KetoSupport from "./KetoSupport";

const KetoDiet = () => {
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
    <div className="keto-diet-plan-page">
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
      <div className="keto-diet-plan-title">
        Keto Diet Plan (Ketogenic Diet)
      </div>
      <div className="keto-diet-plan-subtitle">
        A <b>Keto Diet Plan</b> focuses on achieving a metabolic state called
        ketosis, where your body burns fat for fuel instead of carbohydrates. It
        emphasizes low-carb, high-fat, and moderate-protein intake, making it
        ideal for fat loss, improved energy levels, and mental clarity.
      </div>
      <div className="keto-diet-plan-video">
        <YouTube
          videoId="Qifg5hxnlJE"
          opts={options}
          onReady={onReady}
          className="keto-diet-org-video"
        />
      </div>
      <div className="keto-diet-plan-offer">
        Our Keto Diet Meal Plan are crafted to ensure:
      </div>
      <div className="keto-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="keto-diet-plan-offer-img"
        />
      </div>
      <div className="keto-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="keto-diet-plan-offer-img"
        />
      </div>
      <div className="keto-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="keto-diet-plan-offer-img"
        />
      </div>
      <div className="keto-diet-plan-offer-text1">Ketogenic</div>
      <div className="keto-diet-plan-offer-text2">Sustainable</div>
      <div className="keto-diet-plan-offer-text3">Satisfying</div>
      <div className="keto-diet-plan-offer-title2">
        The Best Keto Diet Plan for Fat Loss and Energy – Men and Women
      </div>
      <div className="keto-diet-plan-offer-subtitle2">
        Here’s a glimpse into a ketogenic diet plan tailored to help you burn
        fat and boost energy levels.
      </div>
      <div className="keto-diet-plan-offer-goal">
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="keto-diet-plan-offer-goal-matter">
          <div className="keto-matter">
            <div className="keto-matter-title">GOAL</div>
            <div className="keto-matter-description">
              Promote fat loss, improve energy, and enhance mental focus through
              ketosis.
            </div>
          </div>
          <div className="keto-matter">
            <div className="keto-matter-title">Diet Focus</div>
            <div className="keto-matter-description">
              Low carbs, high fat, and moderate protein intake.
            </div>
          </div>
          <div className="keto-matter">
            <div className="keto-matter-title">Best Diet Plan</div>
            <div className="keto-matter-description">
              Calories: Match or slightly exceed daily energy expenditure.
            </div>
          </div>
          <div className="keto-matter">
            <div className="keto-matter-title">Macronutrients</div>
            <div className="keto-matter-description">
              <p>Carbs: 5-10% of total calories (20-50g/day).</p>
              <p>Protein: 20-25% of total calories.</p>
              <p>Fats: 70-80% of total calories.</p>
            </div>
          </div>
          <div className="keto-matter">
            <div className="keto-matter-title">Foods to Include</div>
            <div className="keto-matter-description">
              <p>Healthy fats (avocados, olive oil, butter)</p>
              <p>Protein sources (eggs, fatty fish, chicken thighs)</p>
              <p>Low-carb vegetables (spinach, zucchini, cauliflower)</p>
              <p>Nuts and seeds (almonds, chia seeds)</p>
              <p>Full-fat dairy (cheese, heavy cream)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="keto-diet-plan-offer-title3">Sample Meal</div>
      <div className="keto-diet-plan-offer-subtitle3">
        Try our carefully crafted keto meal plans designed to help you achieve
        ketosis and stay satisfied.
      </div>
      <div className="keto-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="keto-diet-plan-org-img"
        />
        <div className="keto-img-title">7-Day Diet Meal Plan</div>
      </div>
      <div className="keto-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="keto-diet-plan-org-img"
        />
        <div className="keto-img-title">30-Day High-Protein</div>
      </div>
      <div className="keto-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="keto-img-title">450-Calorie Sheet</div>
      </div>
      <KetoSupport />
    </div>
  );
};

export default KetoDiet;
