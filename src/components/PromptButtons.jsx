import React from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { MagicWandIcon, MicIcon } from "../assets/icons";
import { AttatchIcon } from "../assets/icons";
import { XIcon } from "../assets/icons";

function PromptButtons({ type }) {
  if (type == "image") {
    return (
      <>
        <Button variant="flat" endContent={<MagicWandIcon />} radius="sm">
          Enhance Prompt
        </Button>
        <Tooltip className="dark" content="Attach files" delay={1000}>
          <Button
            variant="flat"
            isIconOnly
            endContent={<AttatchIcon />}
            radius="sm"
          ></Button>
        </Tooltip>
        <Tooltip className="dark" content="Clear Prompt" delay={1000}>
          <Button
            variant="bordered"
            className="border-1 outline-none focus:outline-none"
            isIconOnly
            endContent={<XIcon />}
            radius="sm"
          ></Button>
        </Tooltip>
      </>
    );
  }
  if (type == "chat") {
    return (
      <>
        <Button variant="flat" endContent={<MagicWandIcon />} radius="sm">
          Enhance Prompt
        </Button>
        <Tooltip className="dark" content="Open Mic" delay={1000}>
          <Button
            variant="flat"
            isIconOnly
            endContent={<MicIcon />}
            radius="sm"
          ></Button>
        </Tooltip>

        <Tooltip className="dark" content="Clear Prompt" delay={1000}>
          <Button
            variant="bordered"
            className="border-1 outline-none focus:outline-none"
            isIconOnly
            endContent={<XIcon />}
            radius="sm"
          ></Button>
        </Tooltip>
      </>
    );
  }
}

export default PromptButtons;
