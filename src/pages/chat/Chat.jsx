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
      setPromptOutput([
        ...promptOutput,
        Math.random(5 * 3),
        {
          img: 'https://www.albertaisuite.com/downloaded_image_6670d078-4933-44ee-9d44-b2a805d9dc9e.jpg',
          heading: 'Understanding Large Language Models (LLMs)',
          body: [
            {
              paragraphHeading: 'What is an LLM?',
              paragraph:
                "Large Language Models, commonly referred to as LLMs, are advanced artificial intelligence systems engineered to understand and generate human language. They are termed 'large' due to their extensive number of parameters, which can range into the hundreds of millions or even billions. These parameters are fine-tuned through pre-training on vast datasets comprising a wide variety of text. This process enables LLMs to grasp the nuances of language, including grammar, context, and even style."
            },
            {
              paragraphHeading: 'How LLMs Function?',
              paragraph:
                'At the heart of LLMs lies their ability to produce text that is convincingly human-like. This is achieved through the utilization of neural network architectures known as transformers. Transformers analyze input text and generate predictions for what comes next, making them exceptional at tasks such as language translation, question-answering, and content creation. Their versatility is showcased through their applications, ranging from writing essays to composing poetry.'
            },
            {
              paragraphHeading: 'Applications and Future Directions?',
              paragraph:
                'LLMs have a broad spectrum of applications. They are not only capable of generating text but can also handle tasks like summarization, translation, and even coding to some extent. However, it is always recommended to review and verify the outputs, particularly for technical tasks. The future of LLMs is promising, with ongoing research aiming to enhance their accuracy, efficiency, and adaptability to various tasks and industries.'
            },
            {
              paragraphHeading: 'Relevance of LLMs Today?',
              paragraph:
                "In today's digital landscape, LLMs like ChatGPT have become increasingly prevalent. Their ability to interact in a conversational manner has led to their integration into chatbots, virtual assistants, and other AI-driven platforms. The technology is rapidly evolving, and as it does, LLMs are expected to become even more sophisticated and integrated into various aspects of daily life and work."
            }
          ],
          refreneces: {
            refrenceHeading:
              'For more detailed information on how LLMs work, you can visit the following resources: -',
            links: [
              "DataCamp's Guide on Large Language Models",
              "How Do Large Language Models (LLMs) Actually Work? A Beginner's Guide",
              'A Jargon-Free Explanation of How AI Large Language Models Work',
              'How ChatGPT and Other LLMs Work—and Where They Could Go Next',
              'Large Language Models (LLMs): An Explainer',
              'Large Language Model - Wikipedia',
              'Introduction to Large Language Models - Google Developers'
            ]
          }
        }
      ]);
      // merge the prompt outputs array with outputs array
      outputs[outputs.length - 1].promptOutput =
        promptOutput[promptOutput.length - 1];
      console.log(outputs);
    }, 2000);
  }
  return (
    <>
      <div className="output-card relative flex h-full w-full flex-col gap-5  pl-5 lg:pl-0">
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
