import YouTube from "react-youtube";
import { useState } from "react";

const HomeVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  const onReady = (event) => {
    const player = event.target;
    if (isPlaying) {
      player.playVideo();
    }
  };

  const handleClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="home-video-container" onClick={handleClick}>
      <div className="video-wrapper">
        <YouTube
          videoId="pznrAWMhahA"
          opts={opts}
          onReady={onReady}
          className="home-video-container-video"
        />
      </div>
    </div>
  );
};

export default HomeVideo;
