import React from 'react';
import {
  generatedImage1,
  generatedImage2,
  generatedImage3,
  generatedImage4,
  generatedImage5,
  generatedImage6,
  generatedImage7,
  generatedImage8
} from '../../../assets';
import Marquee from 'react-fast-marquee';

const MarqueeComponent = () => {
  const generatedImages = [
    generatedImage7,
    generatedImage8,
    generatedImage1,
    generatedImage2,
    generatedImage3,
    generatedImage4,
    generatedImage5,
    generatedImage6
  ];

  return (
    <div className="box-wrapper lg:-top-35 relative -top-28 mb-10 flex w-full flex-col gap-3">
      <Marquee pauseOnHover>
        {generatedImages.map((img, i) => {
          return (
            <div
              key={i}
              className="lg:w- mx-5 mt-5 aspect-square h-40 rounded-xl hover:border-1 lg:h-52"
            >
              <img
                src={img}
                alt="generatedImage1"
                className="h-full w-full rounded-xl object-cover 	"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
