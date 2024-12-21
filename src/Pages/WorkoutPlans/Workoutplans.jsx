import Support from "../../AddOns/BottomSupport/Support";
import starUser from "../../assets/Images/starUserIcon.png";
import SelectWorkouts from "./SelectWorkouts";
import logo from "../../assets/Images/gymfluencer-logo.png";
import "./Workoutplans.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

const Workoutplans = () => {
  const [isOptions, setIsOptions] = useState(false);
  return (
    <div className="workoutplans-page">
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
      <div className="workoutplans-title">WHAT IS THE WORKOUT PLAN </div>
      <div className="workoutplans-subtitle">
        A workout plan is a structured schedule of exercises designed to help
        you reach your fitness goals, stay active, and improve your health.
      </div>
      <div className="workoutplans-offer">WHAT WE OFFER:</div>
      <div className="workoutplans-offer-img1">
        <img src={starUser} alt="starUser" className="workoutplans-offer-img" />
      </div>
      <div className="workoutplans-offer-img2">
        <img src={starUser} alt="starUser" className="workoutplans-offer-img" />
      </div>
      <div className="workoutplans-offer-img3">
        <img src={starUser} alt="starUser" className="workoutplans-offer-img" />
      </div>
      <div className="workoutplans-offer-text1">Customized Workout Plans</div>
      <div className="workoutplans-offer-text2">Professional Guidance</div>
      <div className="workoutplans-offer-text3">Holistic Approach</div>
      <SelectWorkouts />
      <Support />
    </div>
  );
};

export default Workoutplans;
