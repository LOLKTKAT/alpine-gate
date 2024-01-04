import React, { useState } from "react";
import { Card, Button, Tooltip, Avatar, Spinner } from "@nextui-org/react";
import { AlpineLogo, XIcon } from "../assets/icons";
import { SubHeader, ParagraphHeader } from "./TextComponents";

function Output({ height, generated, type, promptInput, promptOutput }) {
  const [model, setModel] = useState(
    type == "chat" ? "Albert Ai" : "AGImageAi"
  );

  return (
    <Card className={`overflow-y-scroll  ${height}`}>
      <div className="flex sticky pl-6 pr-6 pt-3 top-0 gap-2 justify-end ">
        <Tooltip content="Clear Prompt" delay={1000}>
          <Button
            variant="flat"
            className="border-1 outline-none focus:outline-none"
            isIconOnly
            endContent={<XIcon />}
            radius="sm"
          ></Button>
        </Tooltip>
      </div>
      <div className="pl-6 flex flex-col gap-10 pr-6">
        {generated ? (
          <>
            <div className="flex items-center gap-2">
              <Avatar />
              <div>
                <ParagraphHeader>@username</ParagraphHeader>
                <SubHeader>{promptInput}</SubHeader>
              </div>
            </div>
            <div className="flex gap-2">
              <AlpineLogo />
              <div className="w-full">
                <ParagraphHeader>{model}</ParagraphHeader>
                {promptOutput.length == 0 ? (
                  <Spinner
                    label="Generating "
                    color="secondary"
                    labelColor="secondary"
                  />
                ) : (
                  promptOutput
                )}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
}

export default Output;
