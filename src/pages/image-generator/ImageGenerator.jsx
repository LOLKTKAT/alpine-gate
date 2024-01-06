import React, { useState } from "react";
import Tools from "../../components/Tools";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { XIcon } from "../../assets/icons";
import { outputImage1, outputImage2, outputImage3 } from "../../assets";

const ImageGenerator = ({ activeBtn, setActiveBtn }) => {
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
    console.log(promptOutput);

    setPormptInput("");
  }

  function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  function fetchData() {
    setTimeout(() => {
      setPromptOutput([
        ...promptOutput,
        [outputImage1, outputImage2, outputImage3],
      ]);
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
          type="image"
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          promptOutput={promptOutput}
          outputs={outputs}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <PromptInput
          type="image"
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
            variant="bordered"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <XIcon />
          </Button>
        </motion.div>
        <Tools
          activeBtn={activeBtn}
          setActiveBtn={setActiveBtn}
          showMenu={toggleMenu ? "hidden" : "flex"}
          page={0}
        />
      </motion.div>
    </>
  );
};

export default ImageGenerator;
