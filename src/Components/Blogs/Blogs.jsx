import "./Blogs.css";
import blogimg1 from "../../assets/Images/blogsPic1.jpg";
import blogimg2 from "../../assets/Images/blogsPic2.webp";
import blogimg3 from "../../assets/Images/blogsPic3.jpg";

const Blogs = () => {
  return (
    <div className="blogs-page" id="Blogs">
      <div className="blogs-title">OUR LATEST BLOGS</div>
      <div className="blog1">
        <img src={blogimg1} alt="blog1" className="blog-img" />
        <button className="blog-btn1">Exercise</button>
        <div className="blog-text1">
          Conquering Consistency: How to Make Exercise a Habit You Love
        </div>
        <div className="blog-date1">Jun 28, 2024</div>
        <div className="blog-author1">Benjamin</div>
      </div>
      <div className="blog2">
        <img src={blogimg2} alt="blog2" className="blog-img" />
        <button className="blog-btn2">Weight Loss</button>
        <div className="blog-text2">
          Weight Loss: A Sustainable Approach for a Healthier You
        </div>
        <div className="blog-date2">Jun 26, 2024</div>
        <div className="blog-author2">Jessica</div>
      </div>
      <div className="blog3">
        <img src={blogimg3} alt="blog3" className="blog-img" />
        <button className="blog-btn3">Nutrition</button>
        <div className="blog-text3">
          Fuel Your Fitness: A Guide to Nutrition for Peak Performance
        </div>
        <div className="blog-date3">Jun 23, 2024</div>
        <div className="blog-author3">David</div>
      </div>
    </div>
  );
};

export default Blogs;
