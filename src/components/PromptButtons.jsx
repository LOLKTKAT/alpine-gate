import React from 'react';
import { Button, Tooltip } from '@nextui-org/react';
import { MagicWandIcon, MicIcon } from '../assets/icons';
import { AttatchIcon } from '../assets/icons';

function PromptButtons({ type }) {
  if (type == 'image') {
    return (
      <section className="flex gap-4">
        <div className="flex  gap-2 md:flex-row lg:flex-row">
          <Button
            variant="flat"
            className="w-full"
            endContent={<MagicWandIcon />}
            radius="sm"
          >
            Enhance Prompt
          </Button>
        </div>
        <div className="flex justify-center gap-10 lg:flex-row lg:gap-2">
          <Tooltip className="dark" content="Attach files" delay={1000}>
            <Button
              variant="flat"
              isIconOnly
              endContent={<AttatchIcon />}
              radius="sm"
            ></Button>
          </Tooltip>
        </div>
      </section>
    );
  }
  if (type == 'chat') {
    return (
      <section className="flex gap-4">
        <div>
          <Button variant="flat" endContent={<MagicWandIcon />} radius="sm">
            Enhance Prompt
          </Button>
        </div>
        <div className="flex justify-center gap-10 lg:flex-row lg:gap-2">
          <Tooltip className="dark" content="Open Mic" delay={1000}>
            <Button
              variant="flat"
              isIconOnly
              endContent={<MicIcon />}
              radius="sm"
            ></Button>
          </Tooltip>
        </div>
      </section>
    );
  }
}

export default PromptButtons;
