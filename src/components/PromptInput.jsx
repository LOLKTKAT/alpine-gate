import React from "react";
import { Card, Button } from "@nextui-org/react";
import PromptButtons from "./PromptButtons.jsx";
import { StarIcon } from "../assets/icons.jsx";

function PromptInput({ handleKeyPress, type }) {
  return (
    <Card className="prompt-card ">
      <textarea
        placeholder="Enter a prompt..."
        type="text"
        className="prompt-input"
      />
      <div onKeyDown={handleKeyPress} className="flex gap-3">
        <Button
          // onClick={() => handleSubmit()}
          type="submit"
          color="secondary"
          endContent={<StarIcon />}
        >
          Generate
        </Button>
        <PromptButtons type={type} />
      </div>
    </Card>
  );
}

export default PromptInput;
