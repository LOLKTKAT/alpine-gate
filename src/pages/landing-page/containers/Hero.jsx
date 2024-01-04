import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import { motion } from "framer-motion";
import { Header, Paragraph } from "../../../components/TextComponents";
import { SectionsCopy } from "../../../data";
import { StarIcon } from "../../../assets/icons";

const Hero = ({ sectionId, setActiveBtn }) => {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    setActiveBtn(0);
    navigate("/dashboard");
  }
  return (
    <div className="px-5 lg:-mb-96 -mb-44 text-default-900 ">
      <article className="bg-purple-900 w-full gap-10 justify-center  flex lg:flex-row flex-col items-center px-20 pt-24 pb-52  rounded-3xl  motion">
        <motion.section
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-6xl lg:w-2/3 mt-16 lg:mt-0 font-bold text-center capitalize "
        >
          <Header>{header}</Header>
        </motion.section>
        <motion.section
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:w-1/2 flex flex-col gap-5"
        >
          <Paragraph>{paragraphCopy}</Paragraph>
          <form className="flex relative" onSubmit={handleSubmit} action="">
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
