import React from 'react';
import { generatedImage7 } from '../../../assets';
import { Card, Button } from '@nextui-org/react';
import { Paragraph, SectionHeader } from '../../../components/TextComponents';
import { SectionsCopy } from '../../../data';
import { MagicWandIcon } from '../../../assets/icons';
import BlurredCirculs from '../../../components/BlurredCirculs';

function PromptEngineeringSection({ sectionId }) {
  const { header } = SectionsCopy.value[sectionId];
  return (
    <article className="prompt-engineering relative flex w-full flex-col items-center  light:bg-white">
      <BlurredCirculs />
      <SectionHeader>{header}</SectionHeader>
      <div className="z-10 flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
        <section className="">
          <div className="h-80 lg:h-96">
            <img
              className="aspect-1 h-full w-full rounded-xl object-cover"
              src={generatedImage7}
              alt="blog image"
            />
          </div>
        </section>
        <section className="flex w-full flex-col gap-10 lg:w-2/5">
          <Card className="landing__chat-output h-[500px] w-full bg-background/100 p-5 dark:bg-default-100/30">
            <Paragraph>
              I am interested in a detailed description of an ideal modern home
              that balances luxury and functionality. The house should be
              designed with sustainability in mind, featuring energy-efficient
              systems and environmentally friendly materials. It should have a
              spacious open-plan living area that seamlessly integrates with an
              outdoor space, perfect for relaxation and entertainment. The
              kitchen should be state-of-the-art with high-end appliances and a
              layout that caters to both casual dining and formal gatherings.
              The home should include a master suite with a walk-in closet and a
              spa-like bathroom, two additional bedrooms with en-suite
              bathrooms, and a flexible space that could serve as a home office
              or gym. Smart home technology should be incorporated for
              convenience and security, including automated lighting, heating,
              and cooling systems, as well as advanced security features.
              Landscaping is important; the outdoor area should have a mix of
              hardscaping and greenery, with a focus on low-maintenance and
              drought-resistant plants. A swimming p.....
            </Paragraph>
          </Card>
          <div className="relative flex" action="">
            <Button
              type="submit"
              color="secondary"
              endContent={<MagicWandIcon />}
            >
              Enhance Prompt
            </Button>
          </div>
        </section>
      </div>
    </article>
  );
}

export default PromptEngineeringSection;
