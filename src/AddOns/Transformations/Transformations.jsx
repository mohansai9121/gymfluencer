import "./Transformations.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PersonCard from "./PersonCard";
import kamalBefore from "../../assets/Images/kamal-before.png";
import kamalAfter from "../../assets/Images/kamal-after.png";
import poovannanBefore from "../../assets/Images/poovannan-before.png";
import poovannanAfter from "../../assets/Images/poovannan-after.png";
import rajBefore from "../../assets/Images/raj-before.png";
import rajAfter from "../../assets/Images/raj-after.png";

const Transformations = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <div className="transformations-page">
      <div className="transformations-marquee">
        <div className="marquee-content-transformations">
          Workout Routines · Progress Tracking · Fitness Plans · Workout
          Routines · Progress Tracking · Fitness Plans · Workout Routines ·
          Progress Tracking · Fitness Plans · Workout Routines · Progress
          Tracking · Fitness Plans
        </div>
      </div>
      <div className="transformations-slider">
        <Slider {...settings}>
          <PersonCard
            name="Raj"
            age="28"
            weeks="24"
            beforeImage={rajBefore}
            afterImage={rajAfter}
            beforeWeight="80"
            afterWeight="78"
            beforeBmi="25"
            afterBmi="12"
          />
          <PersonCard
            name="Kamal"
            age="25"
            weeks="36"
            beforeImage={kamalBefore}
            afterImage={kamalAfter}
            beforeWeight="85"
            afterWeight="74"
            beforeBmi="35"
            afterBmi="15"
          />
          <PersonCard
            name="Poovannan"
            age="32"
            weeks="9"
            beforeImage={poovannanBefore}
            afterImage={poovannanAfter}
            beforeWeight="84"
            afterWeight="75"
            beforeBmi="27"
            afterBmi="15"
          />
        </Slider>
      </div>
    </div>
  );
};

export default Transformations;
