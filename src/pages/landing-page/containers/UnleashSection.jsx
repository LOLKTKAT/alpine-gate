import React from "react";
import { SectionHeader, Paragraph } from "../../../components/TextComponents";
import { Card, Link } from "@nextui-org/react";
import { SectionsCopy } from "../../../data";
function UnleashSection({ sectionId }) {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];

  return (
    <article className=" w-full light:bg-white pt-40 px-22 flex flex-col items-center">
      <div className="seaction-header text-3xl">
        <SectionHeader>{header}</SectionHeader>
      </div>
      <br />
      <div className="flex flex-wrap gap-6 justify-center">
        <Card className="examples-card rounded-2xl ">
          <section>
            <h3 className="smaller-header">Cozy Interior</h3>
            <Paragraph>{paragraphCopy}</Paragraph>
            <Link href="#">Read full prompt</Link>
          </section>
          <section>
            <div className="example-card__image rounded-2xl"></div>
          </section>
        </Card>
      </div>
    </article>
  );
}

export default UnleashSection;
