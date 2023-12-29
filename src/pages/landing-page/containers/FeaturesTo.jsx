import React from "react";
import "../landing-page.css";
import {
  Card,
  Button,
  Divider,
  Listbox,
  ListboxItem,
  Tabs,
  Tab,
} from "@nextui-org/react";
import {
  Paragraph,
  ParagraphHeader,
  SectionHeader,
  SubHeader,
} from "../../../components/TextComponents";

const History = () => {
  return (
    <div>
      <SubHeader>History</SubHeader>
      <br />
      <section className="flex flex-col gap-4 landing__chat-output">
        <Listbox color="secondary">
          <ListboxItem className="text-white" key="home" href="/">
            <ParagraphHeader>night vision goggles</ParagraphHeader>
            <Paragraph>12/09/2023 15:15</Paragraph>
          </ListboxItem>
        </Listbox>
        <Divider />
      </section>
    </div>
  );
};
const UploadFiles = () => {
  return (
    <>
      <div className="border-4  border-zinc-500 justify-center gap-10 rounded-2xl border-dashed flex flex-col items-center w-full h-full">
        <div className="w-20 h-20 bg-red-600"></div>
        <div>
          <SubHeader>Drag & Drop</SubHeader>
        </div>
        <Button color="secondary">Browse files</Button>
      </div>
    </>
  );
};
const DownloadWork = () => {
  return (
    <div className="justify-center gap-10 rounded-2xl border-dashed flex flex-col items-center w-full h-full">
      <div className="flex items-center flex-col ">
        <div className="w-20 h-20 bg-red-600"></div>
        <Paragraph>In many formats, PNG, JPG, DOCX</Paragraph>
      </div>
      <Button color="secondary">Download</Button>
    </div>
  );
};
const features = [<History />, <UploadFiles />, <DownloadWork />];

function FeaturesTo() {
  return (
    <article className="w-full  light:bg-white flex flex-col  items-center">
      <section>
        <SectionHeader>Features to make your life easier</SectionHeader>
      </section>
      <br />

      <section className="flex flex-col items-center  ">
        <Tabs key="lg" size="lg" color="secondary" aria-label="Tabs sizes">
          <Tab key="History Work" title="History Work">
            <section className="prompt-engineering justify-between items-center flex  w-full">
              <div className="h-96 w-2/5 p-5 justify-center flex flex-col">
                <Paragraph>
                  The Prompt History feature is a functionality that allows the
                  chatbot to remember the conversation history with the user. It
                  keeps track of the prompts and responses exchanged between the
                  user and the chatbot, enabling a more contextual and
                  personalized conversation.
                </Paragraph>
              </div>
              <div className="w-2/5">
                <Card className="h-96  p-5">{features[0]}</Card>
              </div>
            </section>
          </Tab>

          <Tab key="File Upload" title="File Upload">
            <section className="prompt-engineering justify-between items-center flex  w-full">
              <div className="h-96 w-2/5 p-5 justify-center flex flex-col">
                <Paragraph>
                  Upload your images and let our AGImageAI generate similar ones
                  that will take your collection to the next level.
                </Paragraph>
              </div>
              <div className="w-2/5">
                <Card className="h-96  p-5">{features[1]}</Card>
              </div>
            </section>
          </Tab>

          <Tab key="Download Work" title="Download Work">
            <section className="prompt-engineering justify-between items-center flex  w-full">
              <div className="h-96  p-5 justify-center flex flex-col">
                <Paragraph>
                  Download your completed work in various formats.
                </Paragraph>
              </div>
              <div className="w-2/5">
                <Card className="h-96 p-5">{features[2]}</Card>
              </div>
            </section>
          </Tab>
        </Tabs>
      </section>
    </article>
  );
}
export default FeaturesTo;
