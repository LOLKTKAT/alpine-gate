import React from "react";
import Tools from "../../components/Tools";
import Output from "../../components/Output";
import PromptInput from "../../components/PromptInput";
import { motion } from "framer-motion";

const ImageGenerator = () => {
  return (
    <>
      <div className="flex output-card flex-col h-full gap-8">
        <Output height="h-3/4" />
        <PromptInput type="image" />
      </div>
      <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }}>
        <Tools page={0} />
      </motion.div>
    </>
  );
};

export default ImageGenerator;
