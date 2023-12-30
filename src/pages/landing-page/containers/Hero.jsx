import React from "react";
import { Input, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Marquee from "./Marquee";
import { motion } from "framer-motion";
import { Header, Paragraph } from "../../../components/TextComponents";
import { SectionsCopy } from "../../../data";
import { star } from "../../../assets/icons";
const Hero = ({ sectionId }) => {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/image");
  }
  return (
    <div className="p-5 text-default-900 hero">
      <article className="bg-purple-900    w-full gap-10  flex  rounded-3xl px-20 pt-28 pb-60 motion.">
        <motion.section
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-6xl w-2/3 font-bold text-center capitalize "
        >
          <Header>{header}</Header>
        </motion.section>
        <motion.section
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="w-1/2 flex flex-col gap-5"
        >
          <Paragraph>{paragraphCopy}</Paragraph>
          <form onSubmit={handleSubmit} action="">
            <Input
              type="text"
              label="Prompt"
              placeholder="Massage Albert AI..."
              size="lg"
              variant="flat"
              labelPlacement="inside"
              color="secondary"
            />
            <Button
              onClick={() => handleSubmit()}
              type="submit"
              color="secondary"
              endContent={
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_802_883)">
                    <path
                      d="M8.60499 1.34834L9.9463 4.83573C10.1343 5.32455 10.2283 5.56896 10.3745 5.77454C10.504 5.95675 10.6632 6.11594 10.8455 6.2455C11.051 6.39169 11.2954 6.48569 11.7843 6.6737L15.2717 8.015L11.7843 9.35631C11.2954 9.54431 11.051 9.63832 10.8455 9.7845C10.6632 9.91406 10.5041 10.0733 10.3745 10.2555C10.2283 10.461 10.1343 10.7055 9.9463 11.1943L8.60499 14.6817L7.26369 11.1943C7.07568 10.7055 6.98168 10.461 6.83549 10.2555C6.70593 10.0733 6.54674 9.91406 6.36453 9.7845C6.15894 9.63832 5.91453 9.54431 5.42571 9.35631L1.93832 8.015L5.42571 6.6737C5.91453 6.48569 6.15894 6.39169 6.36453 6.2455C6.54674 6.11594 6.70593 5.95675 6.83549 5.77454C6.98168 5.56896 7.07568 5.32455 7.26369 4.83573L8.60499 1.34834Z"
                      stroke="background"
                      stroke-width="1.34"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_802_883">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0.604996 0.0149994)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
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
