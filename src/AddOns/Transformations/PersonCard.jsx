import "./PersonCard.css";

const PersonCard = ({
  name,
  age,
  weeks,
  beforeImage,
  afterImage,
  beforeWeight,
  afterWeight,
  beforeBmi,
  afterBmi,
}) => {
  return (
    <div className="person-card">
      <div className="person-card-title">
        TRANSFORMATIONS MADE POSSIBLE WITH GYMFLUENCER
      </div>
      <div className="person-card-name">
        <span>Name:</span>
        {name}
      </div>
      <div className="person-card-age">
        <span>Age:</span>
        {age}
      </div>
      <div className="person-card-weeks">
        <span>Weeks:</span>
        {weeks}
      </div>
      <div className="person-card-before">Before</div>
      <div className="person-card-after">After</div>
      <hr className="person-card-hr" />
      <div className="person-card-weight">Weight</div>
      <div className="person-card-body-fast">Body Fast</div>
      <div className="person-card-before-weight">
        {beforeWeight}
        <span>kg</span>
      </div>
      <div className="person-card-after-weight">
        {afterWeight}
        <span>kg</span>
      </div>
      <div className="person-card-before-bmi">
        {beforeBmi}
        <span>%</span>
      </div>
      <div className="person-card-after-bmi">
        {afterBmi}
        <span>%</span>
      </div>
      <div className="person-card-before-image">
        <img src={beforeImage} alt="Before" className="person-img" />
      </div>
      <div className="person-card-after-image">
        <img src={afterImage} alt="After" className="person-img" />
      </div>
      <div className="person-card-beforeimg-text">Before</div>
      <div className="person-card-afterimg-text">After</div>
    </div>
  );
};

export default PersonCard;
