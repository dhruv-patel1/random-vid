import React from "react";
import Iframe from "react-iframe";
import "../styles/Video.css";

const Video = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const src = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <Iframe
        id="video"
        url={src}
        className="video-player"
        frameBorder="0"
        allowFullScreen="allowFullScreen"
      />
    </div>
  );
};

export default Video;
