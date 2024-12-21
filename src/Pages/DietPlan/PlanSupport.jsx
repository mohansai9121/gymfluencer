import AnchorLink from "react-anchor-link-smooth-scroll";
import "./PlanSupport.css";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const PlanSupport = () => {
  return (
    <div className="plan-support-page">
      <div className="plan-support-title">
        <img src={logo} alt="Logo" className="contact-logo" />
        GymFluencer
      </div>
      <div className="plan-support-subtitle">
        Where Fitness Meets Social Connection!
      </div>
      <div className="plan-support-email">hello@gym.birlaventures.com</div>
      <div className="plan-support-links">
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
      <hr className="plan-support-hr" />
      <div className="plan-support-copyright">
        © 2024 GymFluencer. All rights reserved.
      </div>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="plan-support-linkedin">
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="plan-support-twitter">
          <BsTwitterX />
        </div>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="plan-support-instagram">
          <RiInstagramFill />
        </div>
      </a>
    </div>
  );
};

export default PlanSupport;
