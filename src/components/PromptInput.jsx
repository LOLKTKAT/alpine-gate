import React from "react";
import { Card, Button } from "@nextui-org/react";
import PromptButtons from "./PromptButtons.jsx";

function PromptInput({ handleKeyPress, inputRef, type }) {
  return (
    <Card className="prompt-card">
      <textarea
        placeholder="Enter a prompt..."
        type="text"
        className="prompt-input"
      />
      <div onKeyDown={handleKeyPress} className="flex gap-3">
        <Button
          className="w-0"
          type="submit"
          ref={inputRef}
          color="secondary"
          radius="sm"
        >
          Generate
        </Button>
        <PromptButtons type={type} />
      </div>
    </Card>
  );
}

export default PromptInput;
