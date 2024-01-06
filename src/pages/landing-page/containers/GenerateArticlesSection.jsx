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
import BlurredCirculs from "../../../components/BlurredCirculs";

function GenerateArticlesSection({ sectionId }) {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];

  return (
    <article className="generate-articles relative light:bg-white flex flex-col items-center">
      <BlurredCirculs />
      <div className="seaction-header z-10 text-3xl">
        <SectionHeader>{header}</SectionHeader>
      </div>
      <div className="flex flex-col  lg:flex-row gap-10  justify-between  items-center">
        <section className="flex flex-col gap-10 ">
          <Paragraph>{paragraphCopy}</Paragraph>

          <Button type="submit" className="w-1/4" color="secondary">
            Try now
          </Button>
        </section>
        <section>
          <Card className="landing__chat-output bg-background/100 h-[500px]  dark:bg-default-100/30  w-full lg:w-128 p-5">
            <div className="landing__chat-output-info">
              <img src={blogImg} alt="blog img" />
              <p>
                <SubHeader>
                  How Forests Communicate Underground The Wood Wide Web Forests
                </SubHeader>

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
