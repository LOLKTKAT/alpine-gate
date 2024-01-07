import React from 'react';
import { Input, Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import Marquee from './Marquee';
import { motion } from 'framer-motion';
import { Header, Paragraph } from '../../../components/TextComponents';
import { SectionsCopy } from '../../../data';
import { StarIcon } from '../../../assets/icons';

const Hero = ({ sectionId, setActiveBtn }) => {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setActiveBtn(0);
    navigate('/sign-up');
  }
  return (
    <div className="-mb-44 px-5 text-default-900 lg:-mb-96 ">
      <article className="motion flex w-full flex-col  items-center justify-center gap-10 rounded-3xl bg-purple-900 px-20 pb-52  pt-24  lg:flex-row">
        <motion.section
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center text-6xl font-bold capitalize lg:mt-0 lg:w-2/3 "
        >
          <Header>{header}</Header>
        </motion.section>
        <motion.section
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-5 lg:w-1/2"
        >
          <Paragraph>{paragraphCopy}</Paragraph>
          <form className="relative flex" onSubmit={handleSubmit} action="">
            <Input
              type="text"
              label="Prompt"
              placeholder="Massage Albert AI..."
              size="lg"
              variant="flat"
              labelPlacement="inside"
              color="secondary"
              className="abosulte mb-28 lg:mb-0"
            />
            <Button
              onClick={() => handleSubmit()}
              type="submit"
              color="secondary"
              className="absolute right-3 top-3"
              endContent={<StarIcon />}
            >
              Generate
            </Button>
          </form>
        </motion.section>
      </article>
      <Marquee />
    </div>
  );
};

export default Hero;
