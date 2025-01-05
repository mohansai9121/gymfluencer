import "./IntermittentFasting.css";
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
import IntermittentSupport from "./IntermittentSupport";

const IntermittentFasting = () => {
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
    <div className="intermittent-fasting-diet-plan-page">
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
      <div className="intermittent-fasting-diet-plan-title">
        Intermittent Fasting Diet Plan
      </div>
      <div className="intermittent-fasting-diet-plan-subtitle">
        An <b>Intermittent Fasting</b> Diet Plan involves cycling between
        periods of eating and fasting, designed to improve fat loss, enhance
        metabolic health, and promote cellular repair. It doesn't focus on
        specific food types but emphasizes when to eat, often featuring fasting
        windows like 16:8 or 18:6.
      </div>
      <div className="intermittent-fasting-diet-plan-video">
        <YouTube
          videoId="-hSERcBUsGY"
          opts={options}
          onReady={onReady}
          className="intermittent-fasting-diet-org-video"
        />
      </div>
      <div className="intermittent-fasting-diet-plan-offer">
        Our Intermittent Fasting Meal Plans are crafted to ensure:
      </div>
      <div className="intermittent-fasting-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="intermittent-fasting-diet-plan-offer-img"
        />
      </div>
      <div className="intermittent-fasting-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="intermittent-fasting-diet-plan-offer-img"
        />
      </div>
      <div className="intermittent-fasting-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="intermittent-fasting-diet-plan-offer-img"
        />
      </div>
      <div className="intermittent-fasting-diet-plan-offer-text1">Balanced</div>
      <div className="intermittent-fasting-diet-plan-offer-text2">
        Sustainable
      </div>
      <div className="intermittent-fasting-diet-plan-offer-text3">
        Effective
      </div>
      <div className="intermittent-fasting-diet-plan-offer-title2">
        The Best Intermittent Fasting Diet Plan for Weight Loss and Health – Men
        and Women
      </div>
      <div className="intermittent-fasting-diet-plan-offer-subtitle2">
        Here’s a glimpse into an intermittent fasting plan tailored to help you
        lose weight and improve overall health.
      </div>
      <div className="intermittent-fasting-diet-plan-offer-goal">
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="intermittent-fasting-diet-plan-offer-goal-matter">
          <div className="intermittent-fasting-matter">
            <div className="intermittent-fasting-matter-title">GOAL</div>
            <div className="intermittent-fasting-matter-description">
              Burn fat, improve metabolism, and support overall well-being
              through fasting.
            </div>
          </div>
          <div className="intermittent-fasting-matter">
            <div className="intermittent-fasting-matter-title">Diet Focus</div>
            <div className="intermittent-fasting-matter-description">
              Time-restricted eating, balanced meals during eating windows.
            </div>
          </div>
          <div className="intermittent-fasting-matter">
            <div className="intermittent-fasting-matter-title">
              Best Diet Plan
            </div>
            <div className="intermittent-fasting-matter-description">
              Eating Window: 8-hour window (e.g., 12pm-8pm) with fasting for 16
              hours.
            </div>
          </div>
          <div className="intermittent-fasting-matter">
            <div className="intermittent-fasting-matter-title">
              Macronutrients
            </div>
            <div className="intermittent-fasting-matter-description">
              <p>Protein: Moderate intake to support muscle.</p>
              <p>Carbs: Controlled during eating periods.</p>
              <p>Fats: Focus on healthy fats to maintain satiety.</p>
            </div>
          </div>
          <div className="intermittent-fasting-matter">
            <div className="intermittent-fasting-matter-title">
              Foods to Include
            </div>
            <div className="intermittent-fasting-matter-description">
              <p>Lean proteins (chicken, fish, tofu)</p>
              <p>Vegetables (spinach, kale, broccoli)</p>
              <p>Whole grains (quinoa, brown rice)</p>
              <p>Healthy fats (olive oil, nuts, avocados)</p>
              <p>Hydration (water, herbal teas, black coffee)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="intermittent-fasting-diet-plan-offer-title3">
        Sample Meal
      </div>
      <div className="intermittent-fasting-diet-plan-offer-subtitle3">
        Try our expertly designed endurance meal plans to keep you energized and
        performing at your best.
      </div>
      <div className="intermittent-fasting-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="intermittent-fasting-diet-plan-org-img"
        />
        <div className="intermittent-fasting-img-title">
          7-Day Diet Meal Plan
        </div>
      </div>
      <div className="intermittent-fasting-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="intermittent-fasting-diet-plan-org-img"
        />
        <div className="intermittent-fasting-img-title">
          30-Day High-Protein
        </div>
      </div>
      <div className="intermittent-fasting-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="intermittent-fasting-img-title">450-Calorie Sheet</div>
      </div>
      <IntermittentSupport />
    </div>
  );
};

export default IntermittentFasting;
