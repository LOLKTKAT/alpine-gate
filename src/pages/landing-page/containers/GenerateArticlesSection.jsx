import React from "react";
import {
  Paragraph,
  ParagraphHeader,
  SubHeader,
  SectionHeader,
} from "../../../components/TextComponents";
import { Card, Link, Input, Button } from "@nextui-org/react";
import { blogImg } from "../../../assets";
import { SectionsCopy } from "../../../data";

function GenerateArticlesSection({ sectionId }) {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];

  return (
    <article className="generate-articles  light:bg-white flex flex-col items-center">
      <div className="seaction-header text-3xl">
        <SectionHeader>{header}</SectionHeader>
      </div>
      <br />
      <div className="flex gap-10 generate-articles__body">
        <section>
          <Paragraph>{paragraphCopy}</Paragraph>

          <Input
            type="text"
            label="Prompt"
            placeholder="Massage Albert AI..."
            size="lg"
            variant="flat"
            labelPlacement="inside"
            color="secondary"
            endContent={
              <Button type="submit" color="secondary">
                Generate
              </Button>
            }
          />
        </section>
        <section>
          <Card className="landing__chat-output  w-full  p-5">
            <div className="landing__chat-output-info">
              <img src={blogImg} alt="blog img" />
              <p>
                <SubHeader>
                  How Forests Communicate Underground The Wood Wide Web Forests
                </SubHeader>

                <br />
                <ParagraphHeader>The Wood Wide Web</ParagraphHeader>
                <Paragraph>
                  Forests are complex ecosystems where trees are interconnected
                  in a myriad of ways, particularly through an underground
                  network often referred to as the "Wood Wide Web." This network
                  consists of mycorrhizal fungi, which form symbiotic
                  relationships with the roots of trees. Through these
                  connections, trees can exchange nutrients, water, and chemical
                  signals with one another, effectively communicating and
                  sharing resources.
                </Paragraph>
                <br />
                <ParagraphHeader>For further information</ParagraphHeader>
                <Paragraph>
                  on how trees communicate through underground networks, you can
                  explore the resources provided in the links below: -
                </Paragraph>

                <Link showAnchorIcon href="#" color="foreground">
                  <li>
                    How Trees Secretly Talk to Each Other in the Forest |
                    Decoder
                  </li>
                </Link>
              </p>
            </div>
          </Card>
        </section>
      </div>
    </article>
  );
}

export default GenerateArticlesSection;
