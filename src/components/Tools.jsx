import { SmallMenu } from "./SmallMenu";
import React, { useState } from "react";
import {
  Button,
  Input,
  Slider,
  Card,
  Tab,
  Tabs,
  Divider,
} from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { useCaseData, NumOfImgs, sizes } from "../data";
import {
  Paragraph,
  ParagraphHeader,
  SubHeader,
  TinyText,
} from "./TextComponents";
import {
  HistoryIcon,
  GridDotsBottomIcon,
  GridDotsTopIcon,
  GridDotsCenterIcon,
} from "../assets/icons";
import { motion, AnimatePresence } from "framer-motion";

const CreativitySlider = {
  label: "Creativity",
  placeholder: "Select a Tone",
  value: "",
  items: [],
  size: "sm",
  color: "secondary",
  elementType: "slider",
  className: "max-w-md",
};

const ToolsEndPoints = [
  [
    CreativitySlider,
    {
      label: "Size",
      placeholder: "Select a Size",
      items: sizes,
      elementType: "select",
    },
    {
      label: "Number of images",
      placeholder: "select a number",
      items: NumOfImgs,
      elementType: "select",
    },
    {
      label: "Text to insert",
      placeholder: "",
      elementType: "input",
      labelPlacement: "inside",
    },
  ],
  [
    {
      label: "Tone",
      placeholder: "Select a Tone",
      items: useCaseData,
      elementType: "select",
    },
    CreativitySlider,
    {
      elementType: "button",
      innerText: "turn on mic",
    },
  ],
];

const Tools = ({ page, showMenu, activeBtn, setActiveBtn }) => {
  const [showHistory, setShowHistory] = useState(false);
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={showMenu}
          initial={{ x: 300, opacity: 0, position: "relative" }}
          animate={{ x: 0, opacity: 1, position: "relative" }}
          transition={{ ease: "easeInOut" }}
          exit={{ x: 300, opacity: 0 }}
          className="h-full"
        >
          <Card
            className={`lg:block lg:relative absolute mb-4 right-0 top-0  p-5 h-full pb-10 w-72 ${showMenu}`}
          >
            <SmallMenu activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
            <div className="header flex mb-4 dark justify-between">
              <div className="cursor-pointer">
                {page === 0 ? (
                  <ParagraphHeader>AGImageAI</ParagraphHeader>
                ) : (
                  <ParagraphHeader>Albert</ParagraphHeader>
                )}
              </div>
              <div onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? (
                  <div className="cursor-pointer">
                    <ParagraphHeader>Endpoints</ParagraphHeader>
                  </div>
                ) : (
                  <div className="flex cursor-pointer items-center gap-1">
                    <HistoryIcon />
                    <ParagraphHeader>History</ParagraphHeader>
                  </div>
                )}
              </div>
            </div>
            {showHistory ? (
              <HistorySection />
            ) : (
              <EndpointsSection page={page} />
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Tools;

function HistorySection() {
  return (
    <section className="history h-full landing__chat-output">
      <div className="flex flex-col cursor-pointer gap-4">
        <div>
          <ParagraphHeader>Prompt example NO.1</ParagraphHeader>
          <Paragraph>12/09/2023 15:10</Paragraph>
        </div>
        <div>
          <Divider />
        </div>
      </div>
    </section>
  );
}

function EndpointsSection({ page }) {
  return (
    <>
      <section className="flex flex-col h-full pb-4 justify-between">
        <div className="flex flex-col gap-5 ">
          {ToolsEndPoints[page].map((endPoint) => {
            if (endPoint.elementType === "select")
              return (
                <Select
                  items={endPoint.items}
                  label={endPoint.label}
                  placeholder={endPoint.placeholder}
                  size="sm"
                  className="danger"
                >
                  {(items) => (
                    <SelectItem key={items.value}>{items.value}</SelectItem>
                  )}
                </Select>
              );
            if (endPoint.elementType === "slider")
              return (
                <Slider
                  label={endPoint.label}
                  placeholder={endPoint.placeholder}
                  items={endPoint.items}
                  size="sm"
                  color="secondary"
                  step={0.01}
                  maxValue={5}
                  minValue={-5}
                  fillOffset={0}
                  defaultValue={1.5}
                  formatOptions={{
                    signDisplay: "always",
                  }}
                />
              );
            if (endPoint.elementType === "input")
              return (
                <Input
                  type={endPoint.type}
                  labelPlacement="inside"
                  label={endPoint.label}
                  placeholder={endPoint.ParagraphHeader}
                  size="sm"
                  color=""
                />
              );
            if (endPoint.elementType === "button")
              return (
                <Button variant="flat" className={endPoint.className}>
                  {endPoint.innerText}
                </Button>
              );
          })}
          {page === 0 && (
            <div className="flex justify-between">
              <TinyText>Text Location</TinyText>
              <Tabs aria-label="Options">
                <Tab
                  key="photos"
                  title={
                    <div title="Bottom">
                      <GridDotsBottomIcon />
                    </div>
                  }
                />
                <Tab
                  key="music"
                  title={
                    <div title="Center">
                      <GridDotsCenterIcon />
                    </div>
                  }
                />
                <Tab
                  key="videos"
                  title={
                    <div title="Top">
                      <GridDotsTopIcon />
                    </div>
                  }
                />
              </Tabs>
            </div>
          )}
        </div>
        <div className="w-full">
          <Button className="w-full" color="secondary">
            {page == 0 ? "Download Images" : "Download Output"}
          </Button>
        </div>
      </section>
    </>
  );
}
