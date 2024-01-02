import React from "react";
import { Card, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import {
  Paragraph,
  SectionHeader,
  SubHeader,
} from "../../../components/TextComponents";
import BlurredCirculs from "../../../components/BlurredCirculs";
import UseCaseComponents from "../../../components/UseCaseComponents";

function ChooseFrom() {
  return (
    <article className="prompt-engineering relative text-white light:text-black w-full light:bg-white flex flex-col  items-center">
      <BlurredCirculs />
      <SectionHeader>
        Choose from a range of prompt tools for optimal results
      </SectionHeader>
      <div className="flex w-full justify-between items-center">
        <UseCaseComponents />
        <section></section>
      </div>
    </article>
  );
}

export default ChooseFrom;
