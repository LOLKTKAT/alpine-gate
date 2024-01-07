import React, { useState } from 'react';
import Output from '../../components/Output';
import PromptInput from '../../components/PromptInput';
import '../../App.css';
import Tools from '../../components/Tools';

const Chat = ({ activeBtn, setActiveBtn }) => {
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

    setPormptInput('');
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
      <div className="output-card relative flex h-full w-full flex-col gap-8 pl-5 lg:pl-0">
        <Output
          height="h-3/4"
          generated={generated}
          type="chat"
          promptInput={promptInput}
          setPormptInput={setPormptInput}
          promptOutput={promptOutput}
          outputs={outputs}
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
      <div className="hidden lg:block">
        <Tools
          activeBtn={activeBtn}
          page={1}
          type="chat"
          setActiveBtn={setActiveBtn}
        />
      </div>
    </>
  );
};

export default Chat;
