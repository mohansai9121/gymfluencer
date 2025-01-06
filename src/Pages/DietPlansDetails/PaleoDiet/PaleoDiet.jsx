import "./PaleoDiet.css";
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
import PaleoSupport from "./PaleoSupport";

const PaleoDiet = () => {
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
    <div className="paleo-diet-plan-page">
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
      <div className="paleo-diet-plan-title">Paleo Diet Plan</div>
      <div className="paleo-diet-plan-subtitle">
        A <b>Paleo Diet Plan</b> focuses on whole, unprocessed foods similar to
        what our ancient ancestors ate, including lean meats, fish, fruits,
        vegetables, nuts, and seeds, while excluding grains, legumes, and
        processed foods. This plan aims to promote weight loss, improve energy,
        and support overall health by mimicking the eating habits of the
        Paleolithic era.
      </div>
      <div className="paleo-diet-plan-video">
        <YouTube
          videoId="H9WGWBnQcbY"
          opts={options}
          onReady={onReady}
          className="paleo-diet-org-video"
        />
      </div>
      <div className="paleo-diet-plan-offer">
        Our Paleo Diet Meal Plans are crafted to ensure:
      </div>
      <div className="paleo-diet-plan-offer-img1">
        <img
          src={starUser}
          alt="starUser"
          className="paleo-diet-plan-offer-img"
        />
      </div>
      <div className="paleo-diet-plan-offer-img2">
        <img
          src={starUser}
          alt="starUser"
          className="paleo-diet-plan-offer-img"
        />
      </div>
      <div className="paleo-diet-plan-offer-img3">
        <img
          src={starUser}
          alt="starUser"
          className="paleo-diet-plan-offer-img"
        />
      </div>
      <div className="paleo-diet-plan-offer-text1">Natural</div>
      <div className="paleo-diet-plan-offer-text2">Sustainable</div>
      <div className="paleo-diet-plan-offer-text3">Balanced</div>
      <div className="paleo-diet-plan-offer-title2">
        The Best Paleo Diet Plan for Health and Weight Loss – Men and Women
      </div>
      <div className="paleo-diet-plan-offer-subtitle2">
        Here’s a glimpse into a Paleo diet plan designed to support weight loss
        and enhance overall well-being through natural foods.
      </div>
      <div className="paleo-diet-plan-offer-goal">
        <img src={bg} alt="background" className="wldp-org-bgimg" />
        <div className="paleo-diet-plan-offer-goal-matter">
          <div className="paleo-matter">
            <div className="paleo-matter-title">GOAL</div>
            <div className="paleo-matter-description">
              Lose weight, improve energy, and enhance health by focusing on
              nutrient-dense, whole foods.
            </div>
          </div>
          <div className="paleo-matter">
            <div className="paleo-matter-title">Diet Focus</div>
            <div className="paleo-matter-description">
              High in protein, healthy fats, and vegetables, excluding grains
              and processed foods.
            </div>
          </div>
          <div className="paleo-matter">
            <div className="paleo-matter-title">Best Diet Plan</div>
            <div className="paleo-matter-description">
              Calories: Slight calorie deficit (20-30% less than maintenance).
            </div>
          </div>
          <div className="paleo-matter">
            <div className="paleo-matter-title">Macronutrients</div>
            <div className="paleo-matter-description">
              <p>Carbs: 20-40% of total calories from fruits and vegetables.</p>
              <p>Protein: 30-35% of total calories from lean meats and fish.</p>
              <p>Fats: 35-45% of total calories from healthy fats.</p>
            </div>
          </div>
          <div className="paleo-matter">
            <div className="paleo-matter-title">Foods to Include</div>
            <div className="paleo-matter-description">
              <p>Lean meats (beef, chicken, turkey)</p>
              <p>Vegetables (broccoli, sweet potatoes, spinach)</p>
              <p>Fruits (berries, apples, bananas)</p>
              <p>Nuts and seeds (almonds, walnuts, chia seeds)</p>
              <p>Healthy fats (avocados, olive oil, coconut oil)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="paleo-diet-plan-offer-title3">Sample Meal</div>
      <div className="paleo-diet-plan-offer-subtitle3">
        Try our expertly crafted Paleo meal plans to support your health goals
        with clean, whole foods.
      </div>
      <div className="paleo-diet-plan-offer-7day-img">
        <img
          src={img1}
          alt="7 day diet plan"
          className="paleo-diet-plan-org-img"
        />
        <div className="paleo-img-title">7-Day Diet Meal Plan</div>
      </div>
      <div className="paleo-diet-plan-offer-30day-img">
        <img
          src={img2}
          alt="30 day diet plan"
          className="paleo-diet-plan-org-img"
        />
        <div className="paleo-img-title">30-Day High-Protein</div>
      </div>
      <div className="paleo-diet-plan-offer-450cal-img">
        <img src={img3} alt="450 calories" className="wldp-diet-plan-org-img" />
        <div className="paleo-img-title">450-Calorie Sheet</div>
      </div>
      <PaleoSupport />
    </div>
  );
};

export default PaleoDiet;
