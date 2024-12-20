import "./About.css";

const About = () => {
  return (
    <div className="About-page" id="About">
      <div className="scroll-text">
        <marquee className="marquee1">
          Transformation / Motivation / Fitness / Transformation / Workout
        </marquee>
        <marquee className="marquee2">
          Transformation / Motivation / Fitness / Transformation / Workout /
          Strength
        </marquee>
      </div>
      <div className="about-heading">
        <pre>Your Fitness.</pre>
        <pre>Our Mission.</pre>
      </div>
      <div className="about-subheading">
        <pre>
          At GymFluencer, our mission is simple: to provide the tools and
          support you need to
        </pre>
        <pre>
          reach your fitness goals. We combine innovative technology with
          personalized guidance
        </pre>
        <pre>
          to make fitness easier, more accessible, and more motivating. Join us
          as we help you
        </pre>
        <pre>transform your fitness journey, one workout at a time.</pre>
      </div>
      <div className="align-row-wise">
        <div className="box">
          <h1>463k+</h1>
          <p className="content">
            Workouts logged and progress tracked every month
          </p>
        </div>
        <hr className="line" />
        <div className="box">
          <h1>163k+</h1>
          <p className="content">
            Fitness enthusiasts connected through our platform
          </p>
        </div>
        <hr className="line" />
        <div className="box">
          <h1>13+</h1>
          <p className="content">
            Countries where GymFluencer is making an impact
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
