import AnchorLink from "react-anchor-link-smooth-scroll";
import "./WeightLossSupport.css";
import logo from "../../../assets/Images/gymfluencer-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Support3 = () => {
  return (
    <div className="weight-loss-support-page">
      <div className="weight-loss-support-title">
        <img src={logo} alt="Logo" className="contact-logo" />
        GymFluencer
      </div>
      <div className="weight-loss-support-subtitle">
        Where Fitness Meets Social Connection!
      </div>
      <div className="weight-loss-support-email">
        hello@gym.birlaventures.com
      </div>
      <div className="weight-loss-support-links">
        <AnchorLink
          href="#Home"
          style={{ textDecoration: "none", color: "white" }}
        >
          Home
        </AnchorLink>
        <AnchorLink
          href="#Workout Plan"
          style={{ textDecoration: "none", color: "white" }}
        >
          Workout Plan
        </AnchorLink>
        <AnchorLink
          href="#Diet Plan"
          style={{ textDecoration: "none", color: "white" }}
        >
          Diet Plan
        </AnchorLink>
        <AnchorLink
          href="#Contact"
          style={{ textDecoration: "none", color: "white" }}
        >
          FAQ&apos;s
        </AnchorLink>
      </div>
      <hr className="weight-loss-support-hr" />
      <div className="weight-loss-support-copyright">
        © 2024 GymFluencer. All rights reserved.
      </div>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="weight-loss-support-linkedin">
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="weight-loss-support-twitter">
          <BsTwitterX />
        </div>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="weight-loss-support-instagram">
          <RiInstagramFill />
        </div>
      </a>
    </div>
  );
};

export default Support3;
