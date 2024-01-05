import React, { useState } from "react";
import { Card, Tooltip, Avatar, Spinner, Button } from "@nextui-org/react";
import { AlpineLogo } from "../assets/icons";
import { ParagraphHeader, Paragraph, SubHeader } from "./TextComponents";

function Output({
  height,
  generated,
  type,
  promptOutput,
  outputs,
  toggleMenu,
  setToggleMenu,
}) {
  const [model] = useState(type == "chat" ? "Albert Ai" : "AGImageAi");

  return (
    <Card className={`overflow-y-scroll pb-10   ${height}`}>
      <div className="flex sticky lg:hidden pl-6 pr-6 pt-3 top-0 gap-2 justify-end ">
        <Tooltip content="Clear Prompt" delay={1000}>
          <Button
            isIconOnly
            variant="bordered"
            className="border-1"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <SubHeader>☰</SubHeader>
          </Button>
        </Tooltip>
      </div>
      <div className="pl-3 flex flex-col gap-10 pr-3">
        {generated ? (
          <>
            {outputs.map((output, i) => (
              <>
                <div className="flex items-center gap-1">
                  <div className="scale-75">
                    <Avatar />
                  </div>
                  <div>
                    <ParagraphHeader>@username</ParagraphHeader>
                    <Paragraph>
                      <strong>{output.promptValue}</strong>
                    </Paragraph>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="scale-75">
                    <AlpineLogo />
                  </div>
                  <div className="w-full">
                    <ParagraphHeader>{model}</ParagraphHeader>
                    {promptOutput[i] ? (
                      type === "image" ? (
                        <div className="h-60 w-full flex lg:flex-row md:flex-row flex-wrap gap-2">
                          <div className="h-full w-48">
                            <img src={promptOutput[i][0]} alt="" />
                          </div>
                          <div className="h-full w-48">
                            <img src={promptOutput[i][1]} alt="" />
                          </div>
                          <div className="h-full w-48">
                            <img src={promptOutput[i][2]} alt="" />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <Paragraph>{promptOutput[i]}</Paragraph>
                        </div>
                      )
                    ) : (
                      <Spinner
                        label="Generating"
                        color="secondary"
                        labelColor="secondary"
                      />
                    )}
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </Card>
  );
}

export default Output;
