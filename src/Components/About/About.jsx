import { useState } from "react";
import "./About.css";
import { useEffect } from "react";

const About = () => {
  const [animationOn, setAnimationOn] = useState(false);
  const [numbersIncrement, setNumbersIncrement] = useState(0);
  const [numbersIncrement2, setNumbersIncrement2] = useState(0);
  const [numbersIncrement3, setNumbersIncrement3] = useState(0);

  useEffect(() => {
    setAnimationOn(true);
    let interval = setInterval(() => {
      setAnimationOn(true);
      setTimeout(() => {
        setAnimationOn(false);
      }, 3000);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setNumbersIncrement(0);
      setNumbersIncrement2(0);
      setNumbersIncrement3(0);
    }, 10000);
    let interval1 = setInterval(() => {
      if (numbersIncrement < 467) {
        setNumbersIncrement((x) => x + 5);
      }
      if (numbersIncrement2 < 182) {
        setNumbersIncrement2((x) => x + 2);
      }
      if (numbersIncrement3 < 15) {
        setNumbersIncrement3((x) => x + 1);
      }
    }, 50);
    return () => {
      clearInterval(interval);
      clearInterval(interval1);
    };
  }, [numbersIncrement, numbersIncrement2, numbersIncrement3]);
  return (
    <div className="About-page" id="About">
      <div className="marquee1">
        <span>
          Transformation / Motivation / Fitness / Transformation / Workout&nbsp;
          Transformation / Motivation / Fitness / Transformation / Workout&nbsp;
        </span>
      </div>
      <div className="marquee2">
        <span>
          / Transformation / Motivation / Fitness / Transformation / Workout /
          Strength&nbsp; / Transformation / Motivation / Fitness /
          Transformation / Workout / Strength&nbsp;
        </span>
      </div>
      <div className="about-heading">
        <pre className={animationOn ? "animate-heading" : ""}>
          Your Fitness.
        </pre>
        <pre className={animationOn ? "animate-heading" : ""}>Our Mission.</pre>
      </div>
      <div className="about-subheading">
        <p className={animationOn ? "animate-about-subtitle" : ""}>
          At GymFluencer, our mission is simple: to provide the tools and
          support you need to reach your fitness goals. We combine innovative
          technology with personalized guidance to make fitness easier, more
          accessible, and more motivating. Join us as we help you transform your
          fitness journey, one workout at a time.
        </p>
      </div>
      <div className="align-row-wise">
        <div className="box">
          <h1>{numbersIncrement}k+</h1>
          <p className="content">
            Workouts logged and progress tracked every month
          </p>
        </div>
        <hr className="line" />
        <div className="box">
          <h1>{numbersIncrement2}k+</h1>
          <p className="content">
            Fitness enthusiasts connected through our platform
          </p>
        </div>
        <hr className="line" />
        <div className="box">
          <h1>{numbersIncrement3}+</h1>
          <p className="content">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
