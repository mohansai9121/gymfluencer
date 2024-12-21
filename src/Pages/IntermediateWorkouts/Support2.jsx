import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Support2.css";
import logo from "../../assets/Images/gymfluencer-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

const Support2 = () => {
  return (
    <div className="support2-page">
      <div className="support2-title">
        <img src={logo} alt="Logo" className="contact-logo" />
        GymFluencer
      </div>
      <div className="support2-subtitle">
        Where Fitness Meets Social Connection!
      </div>
      <div className="support2-email">hello@gym.birlaventures.com</div>
      <div className="support2-links">
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
      <hr className="support2-hr" />
      <div className="support2-copyright">
        © 2024 GymFluencer. All rights reserved.
      </div>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="support2-linkedin">
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="support2-twitter">
          <BsTwitterX />
        </div>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="support2-instagram">
          <RiInstagramFill />
        </div>
      </a>
    </div>
  );
};

export default Support2;