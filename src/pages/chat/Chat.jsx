import React from "react";
import ChatTools from "../../components/ChatTools";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import "../../App.css";
const Chat = () => {
  return (
    <div className="dashboard">
      <div className="flex output-card flex-col h-full gap-8">
        <Output />
        <PromptInput type="chat" />
      </div>
      <ChatTools />
    </div>
  );
};

export default Chat;
