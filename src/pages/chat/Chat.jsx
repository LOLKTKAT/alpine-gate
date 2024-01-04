import React, { useState } from "react";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import "../../App.css";
import Tools from "../../components/Tools";
import { motion } from "framer-motion";
const Chat = () => {
  const [promptInput, setPormptInput] = useState("");
  const [promptOutput, setPromptOutput] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <>
      <div className="flex output-card flex-col h-full w-full gap-8">
        <Output
          height="h-3/4"
          generated={generated}
          type="chat"
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          promptOutput={promptOutput}
        />
        <PromptInput
          type="chat"
          setGenerated={setGenerated}
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          setPromptOutput={setPromptOutput}
        />
      </div>
      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>
        <Tools page={1} />
      </motion.div>
    </>
  );
};

export default Chat;
