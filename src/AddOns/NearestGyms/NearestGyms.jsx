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
import { useState } from "react";

const gyms = [
  {
    image: gym0,
    name: "Physc Gym Nerul 24/7",
    address: "Nerul, Navi Mumbai, Maharashtra, 400706",
    phone: "+91 1234567890",
    lat: 18.922,
    long: 72.834,
  },
  {
    image: gym1,
    name: "Iron Fitness",
    address: "2801 14th St NW, Washington, DC 20009",
    phone: "+91 1234567890",
    lat: 47.751,
    long: 120.74,
  },
  {
    image: gym2,
    name: "Hydropower Fitness & Gym",
    address: "28345 Industrial Blvd, Hayward, CA 94545",
    phone: "+91-22-0001-0211",
    lat: 36.668,
    long: -122.081,
  },
  {
    image: gym3,
    name: "Yuva Fitness",
    address: "1921 Wichman Rd, Moore",
    phone: "+91 1234567890",
    lat: 33.335,
    long: -97.486,
  },
  {
    image: gym4,
    name: "Ozone The Gym",
    address: "2043 S 3rd Dr, Phoenix, AZ 85003",
    phone: "+91 1234567890",
    lat: 33.448,
    long: -112.074,
  },
  {
    image: gym5,
    name: "The Square Gym",
    address: "HC 77 Box 1A, Budville, NM 87007",
    phone: "+91 1234567890",
    lat: 50.998,
    long: -3.267,
  },
  {
    image: gym6,
    name: "Arnolds Total Fitness",
    address: "1050 W Hampden Ave Ste 100",
    phone: "+91 1234567890",
    lat: 44.745,
    long: -68.837,
  },
  {
    image: gym7,
    name: "Edge Fitness Seawoods",
    address: "V368+53 Las Colinas, Irving",
    phone: "+91 1234567890",
    lat: 32.814,
    long: -96.948,
  },
  {
    image: gym0,
    name: "Physc Gym Nerul 24/7",
    address: "Nerul, Navi Mumbai, Maharashtra, 400706",
    phone: "+91 1234567890",
    lat: 18.922,
    long: 72.834,
  },
  {
    image: gym1,
    name: "Iron Fitness",
    address: "2nd floor, 15, Bannerghatta Rd, Banglore",
    phone: "+91 1234567890",
    lat: 12.971,
    long: 77.595,
  },
  {
    image: gym2,
    name: "FitLife Gym",
    address: "3rd floor,Pheonix Padmavathi Road, Guntur",
    phone: "+91 123456789",
    lat: 16.29,
    long: 80.44215,
  },
];

const NearestGyms = () => {
  const [latitude, setLatitude] = useState(21.0278);
  const [longitude, setLongitude] = useState(72.8375);
  const [selectedGym, setSelectedGym] = useState("");

  const selectingGym = (gym) => {
    setSelectedGym(gym);
    setLatitude(gym.lat);
    setLongitude(gym.long);
  };

  return (
    <div className="nearest-gyms-container">
      <div className="nearest-gyms-title">FIND YOUR NEAREST GYMS</div>
      <div className="nearest-gyms-details">
        {gyms.map((gym, index) => (
          <div
            className={
              selectedGym === gym ? "selected-gym" : "nearest-gyms-detail"
            }
            key={index}
            onClick={() => selectingGym(gym)}
          >
            <div className="nearest-gyms-detail-image">
              <img src={gym.image} alt={gym.name} className="gym-img" />
            </div>
            <div
              className="each-gym-details"
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
            center={{ lat: latitude, lng: longitude }}
            zoom={10}
          >
            <Marker position={{ lat: latitude, lng: longitude }} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default NearestGyms;
