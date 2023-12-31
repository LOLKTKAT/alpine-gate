import React from "react";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import "../../App.css";
import Tools from "../../components/Tools";
import { motion } from "framer-motion";
const Chat = () => {
  return (
    <>
      <div className="flex output-card flex-col h-full gap-8">
        <Output />
        <PromptInput type="chat" />
      </div>
      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>
        <Tools page={1} />
      </motion.div>
    </>
  );
};

export default Chat;
