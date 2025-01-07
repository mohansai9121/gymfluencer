import {
  FaBatteryFull,
  FaMusic,
  FaPlay,
  FaRegStar,
  FaSign,
  FaSignal,
  FaWifi,
} from "react-icons/fa";
import "./Benefits.css";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiEarthLine } from "react-icons/ri";
import { BsStars } from "react-icons/bs";
import { PiSmileyStickerBold } from "react-icons/pi";
import iphone from "../../assets/Images/iphone.jpg";
import dumbell from "../../assets/Images/dumbell.jpg";
import FitnessHub from "../../AddOns/FitnessHub/FitnessHub";
import Transformations from "../../AddOns/Transformations/Transformations";
import PeopleSay from "../../AddOns/PeopleSay/PeopleSay";
import NearestGyms from "../../AddOns/NearestGyms/NearestGyms";
import { IoSettings } from "react-icons/io5";

const Benefits = () => {
  return (
    <div className="benefits-page" id="Benefits">
      <div className="star-benefits">
        <FaRegStar />
        Our Benefits
      </div>
      <div className="title">Discover GymFluencer Benefits</div>
      <div className="benefits-subtitle1">
        Unlock your full potential with GymFluencer your personal fitness
        partner for progress and motivation
      </div>
      <div className="benefit1">
        <div className="benefit-icon">
          <MdOutlinePeopleAlt className="icon" />
        </div>
        <div className="benefit-title">Effortless Workout Logging</div>
        <div className="benefit-description1">
          Easily log your workouts and monitor
        </div>
        <div className="benefit-description2">
          your progress overtime with our intuitive
        </div>
        <div className="benefit-description3">logging feature.</div>
      </div>
      <div className="benefit2">
        <div className="benefit-icon">
          <RiEarthLine className="icon" />
        </div>
        <div className="benefit-title">Accurate Rep Counting</div>
        <div className="benefit-description1">
          Count your reps accurately with our app
        </div>
        <div className="benefit-description2">
          ensuring consistency and improved
        </div>
        <div className="benefit-description3">performance.</div>
      </div>
      <div className="phone-img">
        <img src={iphone} alt="Phone" className="phone" />
        <div className="phone-time">9:41</div>
        <div className="phone-signal">
          <FaSignal />
        </div>
        <div className="phone-wifi">
          <FaWifi />
        </div>
        <div className="phone-battery">
          <FaBatteryFull />
        </div>
        <div className="phone-timer">03:25</div>
        <div className="phone-skip">Skip Warm-up</div>
        <div className="dumbell-image">
          <img src={dumbell} alt="dumbell exercise" className="phone-dumbell" />
        </div>
        <div className="phone-play">
          <FaPlay />
        </div>
        <div className="phone-settings">
          <IoSettings />
        </div>
        <div className="phone-music">
          <FaMusic />
        </div>
      </div>
      <div className="benefit3">
        <div className="benefit-icon">
          <BsStars className="icon" />
        </div>
        <div className="benefit-title">Personalized Workout Plans</div>
        <div className="benefit-description1">
          AI-powered workout plans tailored to
        </div>
        <div className="benefit-description2">
          your fitness level, goals and progress
        </div>
      </div>
      <div className="benefit4">
        <div className="benefit-icon">
          <PiSmileyStickerBold className="icon" />
        </div>
        <div className="benefit-title">Calorie Calculation & Personalized</div>
        <div className="forth-benefit-title2">Diet Plans</div>
        <div className="forth-benefit-description1">
          Calculate calories burned during
        </div>
        <div className="forth-benefit-description2">
          workouts and AI-customized meal plans
        </div>
        <div className="forth-benefit-description3">
          for optimal nutrition and wellness
        </div>
      </div>
      <div className="fitnessHub-component">
        <FitnessHub />
      </div>
      <div className="transformations-component">
        <Transformations />
      </div>
      <div className="people-say-component">
        <PeopleSay />
      </div>
      <div className="nearest-gyms-component">
        <NearestGyms />
      </div>
    </div>
  );
};

export default Benefits;
