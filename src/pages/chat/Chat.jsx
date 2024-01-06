import React, { useState } from "react";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import "../../App.css";
import Tools from "../../components/Tools";
import { motion } from "framer-motion";
import { XIcon } from "../../assets/icons";
import { Button } from "@nextui-org/react";

// onclick on the generate button push the input to outputs
// should contain input text also contain an id also contain an output also contain the time also

const Chat = ({ activeBtn, setActiveBtn }) => {
  const [outputs, setOutputs] = useState([]);
  const [promptInput, setPormptInput] = useState("");
  const [promptOutput, setPromptOutput] = useState([]);
  const [generated, setGenerated] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(true);

  function handleGenerate(e) {
    e.preventDefault();
    const OutPutsSchema = {
      id: generateUniqueId(),
      promptValue: promptInput,
      promptOutput: promptOutput,
      timestamp: new Date().toISOString(),
    };
    fetchData(OutPutsSchema);

    setGenerated(true);
    setOutputs([...outputs, OutPutsSchema]);

    setPormptInput("");
  }

  function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  function fetchData() {
    setTimeout(() => {
      setPromptOutput([...promptOutput, Math.random(5 * 3)]);
      // merge the prompt outputs array with outputs array
      outputs[outputs.length - 1].promptOutput =
        promptOutput[promptOutput.length - 1];
      console.log(outputs);
    }, 2000);
  }
  return (
    <>
      <div className="flex relative pl-5 lg:pl-0 output-card flex-col h-full w-full gap-8">
        <Output
          height="h-3/4"
          generated={generated}
          type="chat"
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          promptOutput={promptOutput}
          outputs={outputs}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <PromptInput
          type="chat"
          setGenerated={setGenerated}
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          setPromptOutput={setPromptOutput}
          setOutputs={setOutputs}
          outputs={outputs}
          handleGenerate={handleGenerate}
        />
      </div>
      <motion.div
        className="flex"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          key={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.22 }}
          className={`absolute lg:hidden right-72 top-8 mr-2 ${
            toggleMenu ? "hidden" : "flex"
          }`}
        >
          <Button
            isIconOnly
            variant="flat"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <XIcon />
          </Button>
        </motion.div>
        <Tools
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          showMenu={toggleMenu ? "hidden" : "flex"}
          page={1}
        />
      </motion.div>
    </>
  );
};

export default Chat;
