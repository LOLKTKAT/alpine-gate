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
import { PauseIcon, PlayIcon } from "../../../assets/icons";
import { Button } from "@nextui-org/react";

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
    <div className="flex flex-col gap-3 relative w-full lg:-top-48 -top-28 mb-10 box-wrapper">
      <Button
        variant="flat"
        isIconOnly
        className="border-0 outline-none focus:outline-none mt-1 mx-3 "
        onClick={toggleAnimation}
      >
        {isAnimationRunning ? (
          <div className="scale-150">
            <PauseIcon />
          </div>
        ) : (
          <div className="scale-150">
            <PlayIcon />
          </div>
        )}
      </Button>
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
