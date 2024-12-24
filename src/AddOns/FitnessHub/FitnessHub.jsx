import samplePlan from "../../assets/Images/samplePlan.png";
import caloryTrack from "../../assets/Images/caloriesTrack.png";
import timerTrack from "../../assets/Images/timerTrack.png";
import weightLift from "../../assets/Images/weightLift.jpg";
import "./FitnessHub.css";
import { useEffect, useState } from "react";

const FitnessHub = () => {
  const [currentPic, setCurrentPic] = useState(samplePlan);
  const [firstPic, setFirstPic] = useState(caloryTrack);
  const [secondPic, setSecondPic] = useState(timerTrack);
  const [animationOn, setAnimationOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOn(true);
      if (currentPic === samplePlan) {
        setCurrentPic(caloryTrack);
        setFirstPic(timerTrack);
        setSecondPic(samplePlan);
      } else if (currentPic === caloryTrack) {
        setCurrentPic(timerTrack);
        setFirstPic(samplePlan);
        setSecondPic(caloryTrack);
      } else {
        setCurrentPic(samplePlan);
        setFirstPic(caloryTrack);
        setSecondPic(timerTrack);
      }
      setTimeout(() => {
        setAnimationOn(false);
      }, 200);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentPic]);

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
        <div className={animationOn ? "upper-image" : "upper-image1"}>
          <img src={firstPic} alt="Sample planning" className="img" />
        </div>
        <div className={animationOn ? "center-image" : "center-image1"}>
          <img src={secondPic} alt="Tracking the calories" className="img" />
        </div>
        <div className={animationOn ? "bottom-image" : "bottom-image1"}>
          <img src={currentPic} alt="Tracking time" className="img" />
        </div>
      </div>
    </div>
  );
};

export default FitnessHub;
