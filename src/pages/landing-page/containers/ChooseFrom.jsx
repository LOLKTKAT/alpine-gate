import React from "react";
import { Card, Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import {
  Paragraph,
  SectionHeader,
  SubHeader,
} from "../../../components/TextComponents";
function ChooseFrom() {
  return (
    <article className="prompt-engineering text-white light:text-black w-full light:bg-white flex flex-col  items-center">
      <SectionHeader>
        Choose from a range of prompt tools for optimal results
      </SectionHeader>
      <br />
      <div className="flex w-full justify-between items-center">
        <section className="flex justify-between w-full ">
          <Card className="h-96 w-2/5 p-5">
            <SubHeader>Use Cases</SubHeader>
            <br />
            <section className="flex flex-col gap-4 landing__chat-output">
              <Listbox color="secondary">
                <ListboxSection showDivider>
                  <ListboxItem className="text-white" key="home" href="/">
                    <Paragraph>Ad Copy</Paragraph>
                  </ListboxItem>
                </ListboxSection>
              </Listbox>
            </section>
          </Card>
          <Card className="p-5 w-2/5 flex flex-col justify-between">
            <section>
              <div className="h-20 w-20 bg-red-400">
                <img src="" alt="" />
              </div>
            </section>
            <section>
              <SubHeader>Ad Content</SubHeader>

              <Paragraph>
                Ad Content is a prompt tool that helps in creating compelling
                advertisements for various platforms. It provides suggestions
                and ideas for writing effective ad copy that can grab the
                attention of the target audience. With Ad Content, you can craft
                engaging and persuasive ad campaigns to promote your products or
                services.
              </Paragraph>
            </section>
          </Card>
        </section>
        <section></section>
      </div>
    </article>
  );
}

export default ChooseFrom;
