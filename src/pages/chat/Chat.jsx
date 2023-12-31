import React from "react";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import "../../App.css";
import Tools from "../../components/Tools";
const Chat = () => {
  return (
    <div className="dashboard">
      <div className="flex output-card flex-col h-full gap-8">
        <Output />
        <PromptInput type="chat" />
      </div>
      <div>
        <Tools page={1} />
      </div>
    </div>
  );
};

export default Chat;
