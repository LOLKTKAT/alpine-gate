import React from 'react';
import { Card, Tooltip, Input, Button } from '@nextui-org/react';
import PromptButtons from './PromptButtons.jsx';
import { EditIcon, StarIcon, XIcon } from '../assets/icons.jsx';

function PromptInput({ type, setPormptInput, promptInput, handleGenerate }) {
  return (
    <Card className="relative flex h-1/3 flex-col p-3 lg:h-[27%]">
      <form className="h-full w-full" onSubmit={(e) => handleGenerate(e)}>
        <Input
          placeholder="Enter a prompt..."
          type="text"
          variant="flat"
          size="md"
          className="all-unset overflow-wrap-break mb-2 h-full border-1 pr-10"
          value={promptInput}
          onChange={(e) => setPormptInput(e.target.value)}
          startContent={
            <Tooltip content="Edit Prompt" className="dark" delay={1000}>
              <div className="cursor-pointer">
                <EditIcon />
              </div>
            </Tooltip>
          }
          endContent={
            <div className="flex gap-2">
              <Tooltip className="dark" content="Clear Prompt" delay={1000}>
                <div
                  onClick={() => setPormptInput('')}
                  className="flex cursor-pointer items-center"
                >
                  <XIcon />
                </div>
              </Tooltip>
              <Tooltip className="dark" content="Generate Prompt" delay={1000}>
                <Button
                  type="submit"
                  onClick={() => handleGenerate()}
                  color="secondary"
                  className=" dark"
                  isIconOnly
                >
                  <StarIcon />
                </Button>
              </Tooltip>
            </div>
          }
        />
      </form>
      <div className="flex flex-col gap-1 lg:flex-row lg:gap-3">
        <PromptButtons handleGenerate={handleGenerate} type={type} />
      </div>
    </Card>
  );
}

export default PromptInput;
