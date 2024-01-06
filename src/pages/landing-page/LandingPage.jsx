import React, { useState, useEffect } from "react";
import { Footer } from "../../components/Footer";
import {
  Hero,
  ChooseFrom,
  UnleashSection,
  PromptEngineeringSection,
  GenerateArticlesSection,
  PricingSection,
  FeaturesTo,
} from "./containers";
import { theme } from "../../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./landing-page.css";
import NavBar from "../../components/Navbar";

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
      <NavBar />
      <motion.div
        className={`${
          toggleTheme ? "light bg-slate-50" : "dark"
        }  text-foreground w-full transition flex flex-col gap-40 pb-10`}
      >
        <Hero activeBtn={activeBtn} setActiveBtn={setActiveBtn} sectionId={0} />
        <UnleashSection sectionId={1} />
        <GenerateArticlesSection sectionId={2} />
        <PromptEngineeringSection sectionId={3} />
        <ChooseFrom />
        <FeaturesTo />
        <PricingSection />
        <Footer />
      </motion.div>
    </>
  );
};

export default LandingPage;
