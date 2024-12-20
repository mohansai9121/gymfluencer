import "./PeopleSay.css";
import backgroundDiscussion from "../../assets/Images/background-discussion.jpg";
import Marquee from "react-marquee-slider";
import peopleSay1 from "../../assets/Images/peopleSay1.png";
import peopleSay2 from "../../assets/Images/peopleSay2.png";
import peopleSay3 from "../../assets/Images/peopleSay3.png";

const PeopleSay = () => {
  return (
    <div className="people-say-container">
      <div className="background-image-container">
        <img
          src={backgroundDiscussion}
          alt="background"
          className="people-say-background-image"
        />
      </div>
      <div className="people-say-dark-overlay"></div>
      <div className="people-say-title">WHAT PEOPLE SAY</div>
      <div className="people-say-content-container">
        <Marquee>
          <img src={peopleSay1} alt="peopleSay1" className="people-say-img" />
          <img src={peopleSay2} alt="peopleSay2" className="people-say-img" />
          <img src={peopleSay3} alt="peopleSay3" className="people-say-img" />
        </Marquee>
      </div>
    </div>
  );
};

export default PeopleSay;
