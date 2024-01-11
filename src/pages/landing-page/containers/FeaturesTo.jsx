import React from 'react';
import '../landing-page.css';
import {
  Card,
  Button,
  Listbox,
  ListboxItem,
  ListboxSection,
  Tabs,
  Tab
} from '@nextui-org/react';
import {
  Paragraph,
  ParagraphHeader,
  SectionHeader,
  SubHeader
} from '../../../components/TextComponents';
import {
  ColoredUploadIcon,
  DownloadIcon,
  HistoryIcon,
  UploadIcon,
  ColoredDownloadIcon
} from '../../../assets/icons';

const History = () => {
  return (
    <div>
      <SubHeader>History</SubHeader>
      <section className="landing__chat-output flex flex-col gap-4">
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
      <div className="flex h-full w-full flex-col items-center justify-center gap-10 rounded-2xl border-4 border-dashed border-zinc-500">
        <div className="h-20 w-20 rounded-full bg-purple-900/20">
          <div className="flex h-full w-full scale-200 items-center justify-center ">
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
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 rounded-2xl border-dashed">
      <div className="h-20 w-20 rounded-full bg-purple-900/20">
        <div className="flex h-full w-full scale-200 items-center justify-center ">
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
    <article className="relative  flex w-full flex-col items-center  light:bg-white">
      <div className="absolute right-0 top-0 h-96 w-1/2 bg-purple-900 opacity-30	blur-3xl"></div>
      <section>
        <SectionHeader>Features to make your life easier</SectionHeader>
      </section>

      <section className="prompt-engineering flex flex-col items-center ">
        <Tabs
          className="scale-75  lg:scale-100"
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
            <section className="prompt-engineering small-screen flex w-svw max-w-[1440px] items-center justify-around">
              <div className="flex w-full  flex-col justify-center sm:h-20 md:h-20 lg:h-96 lg:w-2/5">
                <Paragraph>
                  The Prompt History feature is a functionality that allows the
                  chatbot to remember the conversation history with the user. It
                  keeps track of the prompts and responses exchanged between the
                  user and the chatbot, enabling a more contextual and
                  personalized conversation.
                </Paragraph>
              </div>
              <div className="w-full lg:w-2/5 ">
                <Card className="h-96 bg-background/100 p-5 dark:bg-default-100/30">
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
            <section className="prompt-engineering small-screen flex w-svw items-center justify-around">
              <div className="flex w-full flex-col justify-center lg:h-96 lg:w-2/5">
                <Paragraph>
                  Upload your images and let our AGImageAI generate similar ones
                  that will take your collection to the next level.
                </Paragraph>
              </div>
              <div className="w-full lg:w-2/5">
                <Card className="h-96 bg-background/100 p-5 dark:bg-default-100/30">
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
            <section className="prompt-engineering small-screen flex w-svw items-center justify-around">
              <div className=" flex w-full flex-col  justify-center p-5 lg:h-96 lg:w-2/5">
                <Paragraph>
                  Download your completed work in various formats.
                </Paragraph>
              </div>
              <div className="w-full lg:w-2/5">
                <Card className="h-96 bg-background/100 p-5 dark:bg-default-100/30">
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
