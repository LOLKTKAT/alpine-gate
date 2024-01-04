import React, { useState } from "react";
import Tools from "../../components/Tools";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import { motion } from "framer-motion";

const ImageGenerator = () => {
  const [promptInput, setPormptInput] = useState("");
  const [promptOutput, setPromptOutput] = useState("");
  const [generated, setGenerated] = useState(false);

  return (
    <>
      <div className="flex output-card flex-col w-full h-full gap-8">
        <Output
          height="h-3/4"
          generated={generated}
          type="image"
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          promptOutput={promptOutput}
        />
        <PromptInput
          type="image"
          setGenerated={setGenerated}
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          setPromptOutput={setPromptOutput}
        />
      </div>
      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>
        <Tools page={0} />
      </motion.div>
    </>
  );
};

export default ImageGenerator;
