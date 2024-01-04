import React from "react";
import {
  SectionHeader,
  Paragraph,
  SubHeader,
} from "../../../components/TextComponents";
import { Button, Card, Divider } from "@nextui-org/react";
function PricingSection() {
  return (
    <article className="pricing-section w-full light:bg-white flex flex-col items-center">
      <SectionHeader className="transition">Pricing</SectionHeader>
      <Paragraph>Check out our pricing plans</Paragraph>
      <section className="flex w-full small-screen items-center gap-10 justify-between">
        <Card className="p-5 pricing-card flex flex-col justify-between">
          <section>
            <SubHeader>free</SubHeader>
            <SectionHeader>0$</SectionHeader>
            <Paragraph>
              You can use this plan, no credit card required!
            </Paragraph>
            <Divider className="divider" />
          </section>
          <section>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
          </section>
          <Button color="secondary">use this plan</Button>
        </Card>
        <Card className="p-5 bg-purple-950 text-background pricing-card flex flex-col justify-between">
          <section>
            <SubHeader>Premium</SubHeader>
            <SectionHeader>
              5.75$
              <span className="text-xl font-medium"> /month</span>
            </SectionHeader>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corporis, esse.
            </Paragraph>
            <Divider />
          </section>
          <section>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
            <Paragraph>
              <li>Lorem ipsum dolor sit amet .</li>
            </Paragraph>
          </section>
          <Button color="secondary">use this plan</Button>
        </Card>
      </section>
    </article>
  );
}
export default PricingSection;
