import samplePlan from "../../assets/Images/samplePlan.png";
import caloryTrack from "../../assets/Images/caloriesTrack.png";
import timerTrack from "../../assets/Images/timerTrack.png";
import weightLift from "../../assets/Images/weightLift.jpg";
import "./FitnessHub.css";

const FitnessHub = () => {
  return (
    <div className="fitnessHubPage">
      <div className="fitnessHub-Content">
        <img
          src={weightLift}
          alt="weight lifting background"
          className="backgoundLift"
        />
        <p className="fitnesshub-title">Your Personalized Fitness Hub</p>
        <p className="hub-content1">
          Personalized workout routines tailored to your goals and preferences
        </p>
        <p className="hub-content2">
          Get expert guidance with virtual coaching sessions, available anytime,
          anywhere.
        </p>
        <p className="hub-content3">
          Track your fitness journey with detailed analytics, goal setting, and
          achievements.
        </p>
      </div>
      <div className="images-scroll-down">
        <div className="upper-image">
          <img src={samplePlan} alt="Sample planning" className="img" />
        </div>
        <div className="center-image">
          <img src={caloryTrack} alt="Tracking the calories" className="img" />
        </div>
        <div className="bottom-image">
          <img src={timerTrack} alt="Tracking time" className="img" />
        </div>
      </div>
    </div>
  );
};

export default FitnessHub;
