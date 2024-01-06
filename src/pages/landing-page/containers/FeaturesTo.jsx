import React from "react";
import "../landing-page.css";
import {
  Card,
  Button,
  Listbox,
  ListboxItem,
  ListboxSection,
  Tabs,
  Tab,
} from "@nextui-org/react";
import {
  Paragraph,
  ParagraphHeader,
  SectionHeader,
  SubHeader,
} from "../../../components/TextComponents";
import {
  ColoredUploadIcon,
  DownloadIcon,
  HistoryIcon,
  UploadIcon,
  ColoredDownloadIcon,
} from "../../../assets/icons";

const History = () => {
  return (
    <div>
      <SubHeader>History</SubHeader>
      <section className="flex flex-col gap-4 landing__chat-output">
        <Listbox color="default">
          <ListboxSection showDivider>
            <ListboxItem className="text-white" key="home" href="/">
              <ParagraphHeader>night vision goggles</ParagraphHeader>
              <Paragraph>12/09/2023 15:15</Paragraph>
            </ListboxItem>
          </ListboxSection>
          <ListboxSection>
            <ListboxItem className="text-white" key="home" href="/">
              <ParagraphHeader>Write me an article about AI</ParagraphHeader>
              <Paragraph>12/09/2023 15:10</Paragraph>
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </section>
    </div>
  );
};
const UploadFiles = () => {
  return (
    <>
      <div className="border-4 border-zinc-500 justify-center gap-10 rounded-2xl border-dashed flex flex-col items-center w-full h-full">
        <div className="w-20 rounded-full h-20 bg-purple-900/20">
          <div className="scale-200 flex items-center justify-center w-full h-full ">
            <ColoredUploadIcon />
          </div>
        </div>
        <div>
          <SubHeader>Drag & Drop</SubHeader>
        </div>
        <div className="text-center">
          <Paragraph>or</Paragraph>
          <Button color="secondary">Browse files</Button>
        </div>
      </div>
    </>
  );
};
const DownloadWork = () => {
  return (
    <div className="justify-center gap-10 rounded-2xl border-dashed flex flex-col items-center w-full h-full">
      <div className="w-20 rounded-full h-20 bg-purple-900/20">
        <div className="scale-200 flex items-center justify-center w-full h-full ">
          <ColoredDownloadIcon />
        </div>
      </div>
      <Paragraph>In many formats, PNG, JPG, DOCX</Paragraph>
      <Button color="secondary">Download</Button>
    </div>
  );
};
const features = [<History />, <UploadFiles />, <DownloadWork />];

function FeaturesTo() {
  return (
    <article className="w-full  relative light:bg-white flex flex-col  items-center">
      <div className="h-96 w-1/2 bg-purple-900 opacity-30 absolute blur-3xl top-0	right-0"></div>
      <section>
        <SectionHeader>Features to make your life easier</SectionHeader>
      </section>

      <section className="flex flex-col items-center ">
        <Tabs
          className="scale-75 lg:scale-100"
          key="lg"
          size="lg"
          color="secondary"
          aria-label="Tabs sizes"
        >
          <Tab
            key="History Work"
            title={
              <div className="flex items-center space-x-2">
                <HistoryIcon />
                <span>History</span>
              </div>
            }
          >
            <section className="prompt-engineering justify-between small-screen items-center flex w-svw">
              <div className="sm:h-20 md:h-20  lg:h-96 lg:w-2/5 w-full justify-center flex flex-col">
                <Paragraph>
                  The Prompt History feature is a functionality that allows the
                  chatbot to remember the conversation history with the user. It
                  keeps track of the prompts and responses exchanged between the
                  user and the chatbot, enabling a more contextual and
                  personalized conversation.
                </Paragraph>
              </div>
              <div className="lg:w-2/5 w-full ">
                <Card className="bg-background/100 dark:bg-default-100/30 h-96 p-5">
                  {features[0]}
                </Card>
              </div>
            </section>
          </Tab>

          <Tab
            key="File Upload"
            title={
              <div className="flex items-center space-x-2">
                <UploadIcon />
                <span>Upload</span>
              </div>
            }
          >
            <section className="prompt-engineering small-screen justify-between items-center flex w-svw">
              <div className="lg:h-96 lg:w-2/5 w-full justify-center flex flex-col">
                <Paragraph>
                  Upload your images and let our AGImageAI generate similar ones
                  that will take your collection to the next level.
                </Paragraph>
              </div>
              <div className="lg:w-2/5 w-full">
                <Card className="bg-background/100 dark:bg-default-100/30 h-96 p-5">
                  {features[1]}
                </Card>
              </div>
            </section>
          </Tab>

          <Tab
            key="Download Work"
            title={
              <div className="flex items-center space-x-2">
                <DownloadIcon />
                <span>Download</span>
              </div>
            }
          >
            <section className="prompt-engineering flex justify-between items-center small-screen   w-svw">
              <div className=" lg:h-96 lg:w-2/5 w-full  p-5 justify-center flex flex-col">
                <Paragraph>
                  Download your completed work in various formats.
                </Paragraph>
              </div>
              <div className="lg:w-2/5 w-full">
                <Card className="bg-background/100 dark:bg-default-100/30 h-96 p-5">
                  {features[2]}
                </Card>
              </div>
            </section>
          </Tab>
        </Tabs>
      </section>
    </article>
  );
}
export default FeaturesTo;
