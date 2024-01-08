import React, { useState } from 'react';
import Tools from '../../components/Tools';
import Output from '../../components/Output';
import PromptInput from '../../components/PromptInput';

import { outputImage1, outputImage2, outputImage3 } from '../../assets';

const ImageGenerator = ({ activeBtn, setActiveBtn }) => {
  const [outputs, setOutputs] = useState([]);
  const [promptInput, setPormptInput] = useState('');
  const [promptOutput, setPromptOutput] = useState([]);
  const [generated, setGenerated] = useState(false);

  function handleGenerate(e) {
    e.preventDefault();
    const OutPutsSchema = {
      id: generateUniqueId(),
      promptValue: promptInput,
      promptOutput: promptOutput,
      timestamp: new Date().toISOString()
    };
    fetchData(OutPutsSchema);

    setGenerated(true);
    setOutputs([...outputs, OutPutsSchema]);
    console.log(promptOutput);

    setPormptInput('');
  }

  function generateUniqueId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  function fetchData() {
    setTimeout(() => {
      setPromptOutput([
        ...promptOutput,
        [outputImage1, outputImage2, outputImage3]
      ]);
      outputs[outputs.length - 1].promptOutput =
        promptOutput[promptOutput.length - 1];
      console.log(outputs);
    }, 2000);
  }

  return (
    <>
      <div className="output-card relative flex h-full w-full flex-col gap-5 pl-5 lg:pl-0">
        <Output
          height="h-3/4"
          generated={generated}
          type="image"
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          promptOutput={promptOutput}
          outputs={outputs}
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
      <div className="hidden lg:block">
        <Tools activeBtn={activeBtn} setActiveBtn={setActiveBtn} page={0} />
      </div>
    </>
  );
};

export default ImageGenerator;
