import React from "react";
import { blogImg } from "../../../assets";
import { Card, Input, Button } from "@nextui-org/react";
import { Paragraph, SectionHeader } from "../../../components/TextComponents";
import { SectionsCopy } from "../../../data";

function PromptEngineeringSection({ sectionId }) {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];
  return (
    <article className="prompt-engineering w-full light:bg-white flex flex-col  items-center">
      <SectionHeader>{header}</SectionHeader>
      <br />
      <div className="flex w-full justify-between  items-center">
        <section className="">
          <div className="h-96 w-96">
            <img
              className="h-full w-full object-cover rounded-xl"
              src={blogImg}
              alt=""
            />
          </div>
        </section>
        <section className="w-2/5 flex flex-col gap-10">
          <Paragraph>{paragraphCopy}</Paragraph>
          <Input
            type="text"
            label="Prompt"
            placeholder="Write a prompt..."
            size="lg"
            variant="flat"
            labelPlacement="inside"
            color="secondary"
            endContent={
              <Button type="submit" color="secondary">
                Enhance Prompt
              </Button>
            }
          />
          <Card className="landing__chat-output h-96 w-full p-5">
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
