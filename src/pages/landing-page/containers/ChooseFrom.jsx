import React from "react";
import { SectionHeader } from "../../../components/TextComponents";
import BlurredCirculs from "../../../components/BlurredCirculs";
import UseCaseComponents from "../../../components/UseCaseComponents";

function ChooseFrom() {
  return (
    <article className="prompt-engineering relative text-white light:text-black w-full light:bg-white flex flex-col  items-center">
      <BlurredCirculs />
      <SectionHeader>
        Choose from a range of prompt tools for optimal results
      </SectionHeader>
      <div className="flex  w-full justify-between items-center">
        <UseCaseComponents />
      </div>
    </article>
  );
}

export default ChooseFrom;
