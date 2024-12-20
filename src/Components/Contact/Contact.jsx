import "./Contact.css";
import faqbg from "../../assets/Images/faqBackground.jpg";
import logo from "../../assets/Images/gymfluencer-logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact-page" id="Contact">
      <div className="faq-background">
        <img src={faqbg} alt="faqbg" className="faq-background-img" />
      </div>
      <div className="contact-faq-title">Frequently Asked Questions</div>
      <div className="contact-faq-container">
        <div className="contact-faq">
          <div>How do I log my workouts?</div>
          <div>
            You can easily log your workouts by selecting the exercise, entering
            the duration, and tracking your reps.
          </div>
        </div>
        <div className="contact-faq">
          <div>Can I track my calories burned?</div>
          <div>
            Yes, you can track calories burned through the application
            integrated tracking features.
          </div>
        </div>
        <div className="contact-faq">
          <div>Is this application suitable for beginners?</div>
          <div>
            Absolutely! GymFluencer is designed to be user-friendly and suitable
            for all fitness levels.
          </div>
        </div>
        <div className="contact-faq">
          <div>What features does the application offer?</div>
          <div>
            The app offers workout logging, rep counting, calorie tracking, and
            progress reviews.
          </div>
        </div>
        <div className="contact-faq">
          <div>How can I reset my password?</div>
          <div>
            You can reset your password by going to the login screen and
            selecting the &quot;Forgot Password.&quot;
          </div>
        </div>
      </div>
      <div className="contact-title">
        <img src={logo} alt="Logo" className="contact-logo" />
        GymFluencer
      </div>
      <div className="contact-subtitle">
        Where Fitness Meets Social Connection!
      </div>
      <div className="contact-email">hello@gym.birlaventures.com</div>
      <div className="contact-links">
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
      <hr className="contact-hr" />
      <div className="contact-copyright">
        © 2024 GymFluencer. All rights reserved.
      </div>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="contact-linkedin">
          <FaLinkedin />
        </div>
      </a>
      <a
        href="https://x.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="contact-twitter">
          <BsTwitterX />
        </div>
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="contact-instagram">
          <RiInstagramFill />
        </div>
      </a>
    </div>
  );
};

export default Contact;
