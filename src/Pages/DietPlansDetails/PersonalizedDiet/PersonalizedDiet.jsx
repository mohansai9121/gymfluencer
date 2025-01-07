import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/Images/gymfluencer-logo.png";
import { useState } from "react";
import bg from "./images/background.jpg";
import "./PersonalizedDiet.css";
import PersonalizedDietSupport from "./PersonalizedDietSupport";

const PersonalizedDiet = () => {
  const [isOptions, setIsOptions] = useState(false);

  return (
    <div className="personalized-diet-page">
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
      <div className="personalized-diet-container-bg">
        <div className="personalized-diet-bgimg">
          <img
            src={bg}
            alt="background"
            className="personalized-diet-org-bgimg"
          />
        </div>
        <div className="personalized-diet-content-container">
          <div className="personalized-diet-title">
            Personalized Diet Plan Form
          </div>
          <div className="side-headings">
            <h3>Personal Details</h3>
            <div className="flex-row">
              <div>
                <p>Age</p>
                <input type="text" className="half-text-input" />
                <p>Height</p>
                <input type="text" className="half-text-input" />
              </div>
              <div>
                <p>Gender</p>
                <select className="half-text-input">
                  <option>Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <p>Weight</p>
                <input type="text" className="half-text-input" />
              </div>
            </div>
            <div>
              <p>Activity Level</p>
              <select className="full-text-input">
                <option>Select</option>
                <option>Sedentary</option>
                <option>Moderate</option>
                <option>Active</option>
              </select>
            </div>
          </div>
          <div className="side-headings">
            <h3>Dietary Goals</h3>
            <div>
              <p>Goal</p>
              <select className="full-text-input">
                <option>Select</option>
                <option>Weight Loss</option>
                <option>Weight Gain</option>
                <option>Maintenance</option>
              </select>
            </div>
            <div>
              <p>Specofic Goal</p>
              <input type="text" className="full-text-input" />
            </div>
          </div>
          <div className="side-headings">
            <h3>Dietary Preferences and Restrictions</h3>
            <div>
              <p>Diet Type</p>
              <select className="full-text-input">
                <option>Select Diet</option>
                <option>Vegetarian</option>
                <option>Non-Vegetarian</option>
                <option>Vegan</option>
                <option>Keto</option>
              </select>
            </div>
            <div>
              <p>Food Allergies or Intolerances</p>
              <input type="text" className="full-text-input" />
            </div>
            <div>
              <p>Foods you Dislike</p>
              <input type="text" className="full-text-input" />
            </div>
          </div>
          <div className="side-headings">
            <h3>Health Information</h3>
            <div>
              <p>Medical Conditions</p>
              <input type="text" className="full-text-input" />
            </div>
            <div>
              <p>Nutritional Needs</p>
              <input type="text" className="full-text-input" />
            </div>
          </div>
          <div className="side-headings">
            <h3>Meal and Lifestyle Preferences</h3>
            <div>
              <p>Meals per day</p>
              <input type="text" className="full-text-input" />
            </div>
            <div>
              <p>Cooking Habits</p>
              <input type="text" className="full-text-input" />
            </div>
            <div>
              <p>Budget Considerations</p>
              <input type="text" className="full-text-input" />
            </div>
          </div>
          <div className="eating-habits">
            <h3>Current Eating Habits</h3>
            <div>
              <p>Typical Daily Diet</p>
              <input type="text" className="full-text-input" />
            </div>
            <div>
              <p>Frequency of Eating Out</p>
              <input type="text" className="full-text-input" />
            </div>
          </div>
          <div className="personalized-diet-submit-button">
            <button>Submit</button>
          </div>
        </div>
      </div>
      <PersonalizedDietSupport />
    </div>
  );
};

export default PersonalizedDiet;
