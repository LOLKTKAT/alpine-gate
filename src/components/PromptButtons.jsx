import React from "react";
import { Button } from "@nextui-org/react";

function PromptButtons({ type }) {
  if (type == "image") {
    return (
      <>
        <Button radius="sm">Generate Prompt</Button>
        <Button radius="sm">Upload</Button>
        <Button radius="sm">clear</Button>
      </>
    );
  }
  if (type == "chat") {
    return (
      <>
        <Button radius="sm">Generate Prompt</Button>
        <Button radius="sm">clear</Button>
      </>
    );
  }
}

export default PromptButtons;
