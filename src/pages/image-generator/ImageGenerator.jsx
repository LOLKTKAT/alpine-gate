import React from "react";
import Tools from "../../components/Tools";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import Sidebar from "../../components/Sidebar";
const ImageGenerator = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard">
        <div className="flex output-card flex-col h-full gap-8">
          <Output />
          <PromptInput type="image" />
        </div>
        <div>
          <Tools />
        </div>
      </div>
    </>
  );
};

export default ImageGenerator;
