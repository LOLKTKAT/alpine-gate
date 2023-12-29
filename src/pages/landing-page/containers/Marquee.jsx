import React, { useState } from "react";
import {
  generatedImage1,
  generatedImage2,
  generatedImage3,
  generatedImage4,
  generatedImage5,
  generatedImage6,
  generatedImage7,
  generatedImage8,
} from "../../../assets";

const Marquee = () => {
  const [isAnimationRunning, setIsAnimationRunning] = useState(true);

  const generatedImages = [
    generatedImage7,
    generatedImage8,
    generatedImage1,
    generatedImage2,
    generatedImage3,
    generatedImage4,
    generatedImage5,
    generatedImage6,
  ];

  const toggleAnimation = () => {
    setIsAnimationRunning(!isAnimationRunning);
  };

  return (
    <div className=" gap-10 box-wrapper">
      <button onClick={toggleAnimation}>
        {isAnimationRunning ? "Pause" : "Resume"}
      </button>
      <div
        className={`flex gap-10 marquee ${
          isAnimationRunning ? "running" : "paused"
        }`}
      >
        {generatedImages.map((img, i) => {
          return (
            <div key={i} className="top-1 box rounded-xl ">
              <img
                src={img}
                alt="generatedImage1"
                className="h-full w-full object-cover rounded-xl 	"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
