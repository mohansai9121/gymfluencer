import AnchorLink from "react-anchor-link-smooth-scroll";
import homeBackground from "../../assets/Images/home-background.jpg";
import "./Home.css";
import logo from "../../assets/Images/gymfluencer-logo.png";
import About from "../About/About";
import Services from "../Services/Services";
import Benefits from "../Benefits/Benefits";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import { FaAngleDown } from "react-icons/fa";
import HomeVideo from "../HomeVideo/HomeVideo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import trustedUsers from "../../assets/Images/trusted-users-logo.png";

const Home = () => {
  const [isOptions, setIsOptions] = useState(false);
  const [animationOn, setAnimationOn] = useState(false);
  useEffect(() => {
    setAnimationOn(true);
    const interval = setInterval(() => {
      setAnimationOn(true);
      setTimeout(() => {
        setAnimationOn(false);
      }, 3010);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div id="Home">
      <div className="home-background">
        <img
          src={homeBackground}
          alt="background-image"
          className="background-image"
        />
      </div>
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
          Home
        </AnchorLink>
        <AnchorLink className="navlink" href="#About">
          About
        </AnchorLink>
        <AnchorLink
          className="navlink"
          href="#Services"
          onMouseEnter={() => setIsOptions(true)}
          onMouseLeave={() => setIsOptions(false)}
          onClick={()=>{setIsOptions(true)}}
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
          Benefits
        </AnchorLink>
        <AnchorLink className="navlink" href="#Blogs">
          Blogs
        </AnchorLink>
        <AnchorLink className="navlink" href="#Contact">
          Contact
        </AnchorLink>
        <AnchorLink className="navlink">
          <span className="join-us-link">Join Us Now</span>
        </AnchorLink>
      </div>
      <div className="trusted-users">
        <img
          src={trustedUsers}
          alt="Trusted users image"
          className="trusted-users-logo"
        />
        Trusted by 3+ million users
      </div>
      <div className="home-heading">
        <span className={animationOn ? "animate-heading" : ""}>
          Track Your Fitness
        </span>
        <span className={animationOn ? "animate-heading" : ""}>Journey</span>
      </div>
      <div className={animationOn ? "animate-subtitle" : "subtitle"}>
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log you workouts
          count reps and track calories burned. Stay motivated and achieve your
          goals with ease.
      </div>
      <About />
      <HomeVideo />
      <Services />
      <Benefits />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
