import React from "react";
import { Card, Tooltip } from "@nextui-org/react";
import PromptButtons from "./PromptButtons.jsx";
import { EditIcon } from "../assets/icons.jsx";

function PromptInput({ type, setPormptInput, promptInput, handleGenerate }) {
  return (
    <Card className="p-3 relative flex flex-col justify-between h-1/3 lg:h-1/4">
      <form className="w-full" onSubmit={(e) => handleGenerate(e)}>
        <input
          placeholder="Enter a prompt..."
          type="text"
          className="all-unset  h-full w-11/12 overflow-wrap-break mb-2 pr-10"
          value={promptInput}
          onChange={(e) => setPormptInput(e.target.value)}
        />
      </form>
      <div className="absolute right-5 top-5 flex flex-col h-10 justify-between">
        <Tooltip content="Edit Prompt" delay={1000}>
          <div className="cursor-pointer">
            <EditIcon />
          </div>
        </Tooltip>
      </div>
      <div className="flex flex-col lg:flex-row gap-1 lg:gap-3">
        <PromptButtons handleGenerate={handleGenerate} type={type} />
      </div>
    </Card>
  );
}

export default PromptInput;
