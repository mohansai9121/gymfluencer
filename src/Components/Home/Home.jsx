import AnchorLink from "react-anchor-link-smooth-scroll";
import homeBackground from "../../assets/Images/home-background.jpg";
import "./Home.css";
import logo from "../../assets/Images/gymfluencer-logo.png";
import About from "../About/About";
import Services from "../Services/Services";
import Benefits from "../Benefits/Benefits";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";

const Home = () => {
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
            style={{ fontSize: "18px", textAlign: "center", marginTop: "12px" }}
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
        <AnchorLink className="navlink" href="#Services">
          Our Services
        </AnchorLink>
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
      <div className="trusted-users">Trusted by 3+ million users</div>
      <div className="home-heading">
        <span>Track Your Fitness</span>
        <span>Journey</span>
      </div>
      <div className="subtitle">
        <pre>
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log you workouts
        </pre>
        <pre>
          count reps and track calories burned. Stay motivated and achieve your
          goals with ease.
        </pre>
      </div>
      <About />
      <Services />
      <Benefits />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Home;
