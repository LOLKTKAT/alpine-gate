import React, { useState } from 'react';
import { Card, Avatar, Spinner, Link } from '@nextui-org/react';
import { AlpineLogo } from '../assets/icons';
import {
  ParagraphHeader,
  Paragraph,
  SectionHeader,
  SubHeader
} from './TextComponents';

function Output({ height, generated, type, promptOutput, outputs }) {
  const [model] = useState(type == 'chat' ? 'Albert Ai' : 'AGImageAi');

  return (
    <Card
      className={`landing__chat-output w-full overflow-y-scroll pb-10 pt-6 ${height}`}
    >
      <div className="flex flex-col gap-10  pl-3 pr-3">
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
                  <div className="relative flex w-full  flex-col ">
                    <ParagraphHeader>{model}</ParagraphHeader>
                    {promptOutput[i] ? (
                      type === 'image' ? (
                        <div className="flex w-full flex-col gap-2 md:flex-row lg:flex-row">
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
                          {console.log(promptOutput[1])}
                          <img src={promptOutput[1].img} />
                          <SubHeader>{promptOutput[1].heading}</SubHeader>
                          {promptOutput[1].body.map((item, i) => {
                            return (
                              <div className="mb-4" key={i}>
                                <ParagraphHeader>
                                  {item.paragraphHeading}
                                </ParagraphHeader>
                                <Paragraph>{item.paragraph}</Paragraph>
                              </div>
                            );
                          })}
                          <ParagraphHeader>
                            {promptOutput[1].refreneces.refrenceHeading}
                          </ParagraphHeader>
                          {promptOutput[1].refreneces.links.map((item, i) => {
                            return (
                              <div>
                                <Link
                                  color="foreground"
                                  className="underline"
                                  href="#"
                                  key={i}
                                >
                                  {item}
                                </Link>
                              </div>
                            );
                          })}
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
          <div className="mt-20 flex w-full flex-col items-center justify-center gap-10">
            <div className="scale-200">
              <AlpineLogo />
            </div>
            <SectionHeader>Welcome! how can I help you</SectionHeader>
          </div>
        )}
      </div>
    </Card>
  );
}

export default Output;
