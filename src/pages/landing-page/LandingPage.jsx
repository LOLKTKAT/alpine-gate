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
          theme.value = "purple-dark";
        } else {
          setToggleTheme(false);
          theme.value = "";
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
      <div className="w-full">
        <NavBar />
        <Hero activeBtn={activeBtn} setActiveBtn={setActiveBtn} sectionId={0} />
        <br />
        <br />
        <br />
        <UnleashSection sectionId={1} />
        <br />
        <br />
        <br />
        <GenerateArticlesSection sectionId={2} />
        <br />
        <br />
        <br />
        <PromptEngineeringSection sectionId={3} />
        <br />
        <br />
        <br />
        <ChooseFrom />
        <br />
        <br />
        <br />
        <FeaturesTo />
        <br />
        <br />
        <br />
        <article className="pricing-section w-full light:bg-white flex flex-col items-center">
          <SectionHeader>Pricing</SectionHeader>
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
            <Card className="p-5 pricing-card flex flex-col justify-between">
              <section>
                <SubHeader>free</SubHeader>
                <br />
                <SectionHeader>0$</SectionHeader>
                <Paragraph>
                  You can use this plan, no credit card required!
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default LandingPage;
