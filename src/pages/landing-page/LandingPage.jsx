import React from 'react';
import { Footer } from '../../components/Footer';
import {
  Hero,
  ChooseFrom,
  UnleashSection,
  PromptEngineeringSection,
  GenerateArticlesSection,
  PricingSection,
  FeaturesTo
} from './containers';
import { motion } from 'framer-motion';
import './landing-page.css';
import NavBar from '../../components/Navbar';

const LandingPage = ({ activeBtn, setActiveBtn }) => {
  return (
    <>
      <NavBar />
      <motion.div
        className={`flex w-full flex-col gap-40 text-foreground transition`}
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
