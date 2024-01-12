import React from 'react';
import {
  SectionHeader,
  Paragraph,
  SubHeader
} from '../../../components/TextComponents';
import { Button, Card, Divider } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

function PricingSection() {
  const navigate = useNavigate();
  return (
    <article className="pricing-section flex w-full flex-col items-center light:bg-white">
      <div className="flex flex-col items-center">
        <SectionHeader className="transition">Pricing</SectionHeader>
        <Paragraph>Check out our pricing plans</Paragraph>
      </div>
      <section className=" flex w-full  flex-col items-center justify-between gap-10 lg:flex-row ">
        <Card className="pricing-card flex flex-col justify-between p-5  ">
          <section className="flex flex-col items-start">
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
          <Button onClick={() => navigate('/sign-up')} color="secondary">
            Try now
          </Button>
        </Card>
        <Card className="pricing-card flex flex-col justify-between bg-purple-950 p-5">
          <section className="flex flex-col items-start">
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
        <Card className="pricing-card flex flex-col justify-between p-5">
          <section className="flex flex-col items-start">
            <SubHeader>Enterprise</SubHeader>
            <SectionHeader>Custom</SectionHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
              et.
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
          <Button color="secondary">Contact Us</Button>
        </Card>
      </section>
    </article>
  );
}
export default PricingSection;
