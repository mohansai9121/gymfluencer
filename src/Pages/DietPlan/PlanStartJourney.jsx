import "./PlanStartJourney.css";
import bg from "./images/start-journey-bg.jpg";

const PlanStartJourney = () => {
  return (
    <div className="start-journey-page">
      <div className="start-journey-background-img">
        <img src={bg} alt="background" className="start-journey-bgimg" />
      </div>
      <div className="start-journey-container">
        <div className="journey-content-display">
          <div className="journey-left-box">
            <h3 className="journey-heading">
              Kickstart Your Fitness Journey with Gymfluencer
            </h3>
            <p className="journey-matter">
              Experience all that GymFluencer has to offer with a free trial.
              Explore our world-class amenities, personalized diet plans, and
              professional training programs—absolutely free.
            </p>
          </div>
        </div>
        <div className="journey-right-box">
          <label>Name:</label>
          <input type="text" className="j-input-field" placeholder="Ex: Mohan Sai" />
          <label>Phone:</label>
          <input type="number" className="j-input-field" placeholder="Ex: 9998887776"/>
          <label>Email:</label>
          <input type="email" className="j-input-field" placeholder="Ex: example@gmail.com" />
          <label>Services</label>
          <select className="j-input-field">
            <option>Diet Plans</option>
            <option>WorkOut Plans</option>
            <option>Both</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PlanStartJourney;
