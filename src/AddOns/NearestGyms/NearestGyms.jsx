import "./NearestGyms.css";
import gym0 from "../../assets/Images/gym0.jpg";
import gym1 from "../../assets/Images/gym1.jpg";
import gym2 from "../../assets/Images/gym2.jpg";
import gym3 from "../../assets/Images/gym3.jpg";
import gym4 from "../../assets/Images/gym4.webp";
import gym5 from "../../assets/Images/gym5.webp";
import gym6 from "../../assets/Images/gym6.jpg";
import gym7 from "../../assets/Images/gym7.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const gyms = [
  {
    image: gym0,
    name: "Physc Gym Nerul 24/7",
    address: "Nerul, Navi Mumbai, Maharashtra, 400706",
    phone: "+91 1234567890",
  },
  {
    image: gym1,
    name: "Iron Fitness",
    address: "2801 14th St NW, Washington, DC 20009",
    phone: "+91 1234567890",
  },
  {
    image: gym2,
    name: "Hydropower Fitness & Gym",
    address: "28345 Industrial Blvd, Hayward, CA 94545",
    phone: "+91-22-0001-0211",
  },
  {
    image: gym3,
    name: "Yuva Fitness",
    address: "1921 Wichman Rd, Moore",
    phone: "+91 1234567890",
  },
  {
    image: gym4,
    name: "Ozone The Gym",
    address: "2043 S 3rd Dr, Phoenix, AZ 85003",
    phone: "+91 1234567890",
  },
  {
    image: gym5,
    name: "The Square Gym",
    address: "HC 77 Box 1A, Budville, NM 87007",
    phone: "+91 1234567890",
  },
  {
    image: gym6,
    name: "Arnolds Total Fitness",
    address: "1050 W Hampden Ave Ste 100",
    phone: "+91 1234567890",
  },
  {
    image: gym7,
    name: "Edge Fitness Seawoods",
    address: "V368+53 Las Colinas, Irving",
    phone: "+91 1234567890",
  },
];

const NearestGyms = () => {
  return (
    <div className="nearest-gyms-container">
      <div className="nearest-gyms-title">FIND YOUR NEAREST GYMS</div>
      <div className="nearest-gyms-details">
        {gyms.map((gym, index) => (
          <div className="nearest-gyms-detail" key={index}>
            <div className="nearest-gyms-detail-image">
              <img src={gym.image} alt={gym.name} className="gym-img" />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5vh",
                padding: "3vh",
              }}
            >
              <div className="nearest-gyms-detail-name">{gym.name}</div>
              <div className="nearest-gyms-detail-phone">{gym.phone}</div>
              <div className="nearest-gyms-detail-address">{gym.address}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="gyms-map-container">
        <LoadScript googleMapsApiKey="AIzaSyBvmS5zeldynLKhAHhK6GratzTAlSm5ueg">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 21.0278, lng: 72.8357 }}
            zoom={10}
          >
            <Marker position={{ lat: 21.0278, lng: 72.8357 }} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default NearestGyms;
