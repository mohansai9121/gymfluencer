import "./Services.css";
import boxing from "../../assets/Images/boxing.jpg";
import hanging from "../../assets/Images/hanging-exercise.webp";
import rope from "../../assets/Images/rope.jpg";
import swim from "../../assets/Images/swimming.webp";
import zumba from "../../assets/Images/zumba.jpg";

const Services = () => {
  return (
    <div className="services-page" id="Services">
      <div className="services-title">OUR SERVICES</div>
      <pre className="services-subtitle1">
        GymFluencer offers 5 essential services to help you
        achieve your fitness goals with ease and flexibility
      </pre>
      <div className="images-grid">
        <img src={rope} alt="rope exercise" className="grid-images" />
        <img src={hanging} alt="hanging exercise" className="grid-images" />
        <img src={boxing} alt="Boxing" className="grid-images" />
        <img src={zumba} alt="zumba dance" className="grid-images" />
        <img src={swim} alt="swimming exercise" className="grid-images" />
      </div>
      <div className="text-on-images">
        <p className="imageText1">
          <span className="text1">Track</span>
        </p>
        <p className="imageText2">
          <span className="text2">Analyze</span>
        </p>
        <p className="imageText3">
          <span className="text3">Train</span>
        </p>
        <p className="imageText4">
          <span className="text4">Connect</span>
        </p>
        <p className="imageText5">
          <span className="text5">Challenge</span>
        </p>
      </div>
    </div>
  );
};

export default Services;
