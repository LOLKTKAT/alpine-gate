import React from "react";
import { Card, Button, Tooltip } from "@nextui-org/react";
import PromptButtons from "./PromptButtons.jsx";
import { StarIcon, EditIcon } from "../assets/icons.jsx";

function PromptInput({ handleKeyPress, type }) {
  return (
    <Card className="p-3 relative flex flex-col justify-between h-1/4">
      <textarea
        placeholder="Enter a prompt..."
        type="text"
        className="all-unset h-full max-w-4/5 overflow-wrap-break mb-2 pr-10"
      />
      <div className="absolute right-10 top-5 flex flex-col h-10 justify-between">
        <Tooltip content="Edit Prompt" delay={1000}>
          <div className="cursor-pointer">
            <EditIcon />
          </div>
        </Tooltip>
      </div>
      <div onKeyDown={handleKeyPress} className="flex gap-3">
        <Button type="submit" color="secondary" endContent={<StarIcon />}>
          Generate
        </Button>
        <PromptButtons type={type} />
      </div>
    </Card>
  );
}

export default PromptInput;
