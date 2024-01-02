import React from "react";
import { generatedImage7 } from "../../../assets";
import { Card, Input, Button } from "@nextui-org/react";
import { Paragraph, SectionHeader } from "../../../components/TextComponents";
import { SectionsCopy } from "../../../data";
import { MagicWandIcon } from "../../../assets/icons";
import BlurredCirculs from "../../../components/BlurredCirculs";

function PromptEngineeringSection({ sectionId }) {
  const { header } = SectionsCopy.value[sectionId];
  return (
    <article className="prompt-engineering w-full light:bg-white flex flex-col relative  items-center">
      <BlurredCirculs />
      <SectionHeader>{header}</SectionHeader>
      <br />
      <div className="flex w-full z-10 justify-between  items-center">
        <section className="">
          <div className="h-96 w-96">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={generatedImage7}
              alt="blog image"
            />
          </div>
        </section>
        <section className="w-2/5 flex flex-col gap-10">
          <div className="flex relative" action="">
            <Input
              type="text"
              label="Prompt"
              placeholder="Massage Albert AI..."
              size="lg"
              variant="flat"
              labelPlacement="inside"
              color="secondary"
              className="abosulte"
            />
            <Button
              type="submit"
              color="secondary"
              className="absolute right-3 top-3"
              endContent={<MagicWandIcon />}
            >
              Enhance Prompt
            </Button>
          </div>
          <Card className="landing__chat-output bg-background/100 dark:bg-default-100/30 h-96 w-full p-5">
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
        </section>
      </div>
    </article>
  );
}

export default PromptEngineeringSection;
