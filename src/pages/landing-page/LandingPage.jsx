import ChooseFrom from "./containers/ChooseFrom";
import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import Hero from "./containers/Hero";
import "./landing-page.css";
import {
  Card,
  Link,
  Input,
  Button,
  Divider,
  Listbox,
  ListboxItem,
  Tabs,
  Tab,
} from "@nextui-org/react";
import {
  Header,
  Paragraph,
  ParagraphHeader,
  SectionHeader,
  SubHeader,
} from "../../components/TextComponents";
import UnleashSection from "./containers/UnleashSection";
import PromptEngineeringSection from "./containers/PromptEngineeringSection";
import GenerateArticlesSection from "./containers/GenerateArticlesSection";
import FeaturesTo from "./containers/FeaturesTo";
import { theme } from "../../data";
import { motion } from "framer-motion";
const LandingPage = ({ activeBtn, setActiveBtn }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricingSection = document.querySelector(".pricing-section");

      if (pricingSection) {
        const { top } = pricingSection.getBoundingClientRect();
        // You can adjust the threshold as needed
        const threshold = 100; // Adjust this value based on your needs

        if (top < window.innerHeight - threshold) {
          setToggleTheme(true);
          theme.value = "";
        } else {
          setToggleTheme(false);
          theme.value = "purple-dark";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {}, [toggleTheme]);

  return (
    <>
      <motion.div
        className={`${
          theme.value === "purple-dark"
            ? "light bg-slate-50 text-foreground"
            : "dark"
        }   w-full transition flex flex-col gap-60`}
      >
        <Hero activeBtn={activeBtn} setActiveBtn={setActiveBtn} sectionId={0} />
        <UnleashSection sectionId={1} />
        <GenerateArticlesSection sectionId={2} />
        <PromptEngineeringSection sectionId={3} />
        <ChooseFrom />
        <FeaturesTo />

        <article className="pricing-section w-full light:bg-white flex flex-col items-center">
          <SectionHeader className="transition">Pricing</SectionHeader>
          <Paragraph>Check out our pricing plans</Paragraph>
          <section className="flex w-full justify-between">
            <Card className="p-5 pricing-card flex flex-col justify-between">
              <section>
                <SubHeader>free</SubHeader>
                <br />
                <SectionHeader>0$</SectionHeader>
                <Paragraph>
                  You can use this plan, no credit card required!
                </Paragraph>
                <br />
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
              <br />
              <Button color="secondary">use this plan</Button>
            </Card>
            <Card className="p-5 bg-purple-950 text-background pricing-card flex flex-col justify-between">
              <section>
                <SubHeader>Premium</SubHeader>
                <br />
                <SectionHeader>
                  5.75$
                  <span className="text-xl font-medium"> /month</span>
                </SectionHeader>
                <Paragraph>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corporis, esse.
                </Paragraph>
                <br />
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
              <br />
              <Button color="secondary">use this plan</Button>
            </Card>
          </section>
        </article>

        <article className="pricing-section w-full light:bg-white flex flex-col items-center">
          <section className="text-center">
            <div>logo</div>
            <div className="flex gap-20">
              <Paragraph>privacy</Paragraph>
              <Paragraph>features</Paragraph>
              <Paragraph>contact</Paragraph>
              <Paragraph>about</Paragraph>
            </div>
          </section>
          <br />
          <br />
          <br />
          <section className="flex justify-between w-full items-end">
            <div className="flex items-end gap-3">
              <Input
                type="email"
                label="Subscribe to out news letter"
                placeholder="Enter your email"
                labelPlacement="outside"
                size="lg"
              />

              <Button size="lg" color="secondary" className="rounded-lx">
                Subscribe
              </Button>
            </div>
            <div>
              <Paragraph>© 2023 - ALPINEGATE Technologies Inc </Paragraph>
            </div>
          </section>
          <br />
        </article>
      </motion.div>
    </>
  );
};

export default LandingPage;
