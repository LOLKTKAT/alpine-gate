import React from "react";

const BlurredCirculs = () => {
  return (
    <>
      <div className="h-96 w-1/2 bg-purple-900 opacity-15 absolute blur-3xl top-0	right-0"></div>
      <div className="h-96 w-96 bg-purple-950 opacity-10 absolute blur-3xl top-80	left-80"></div>
      <div className="h-96 w-96 bg-purple-950 opacity-40 absolute blur-3xl top-3/4	right-1/2"></div>
    </>
  );
};

export default BlurredCirculs;
