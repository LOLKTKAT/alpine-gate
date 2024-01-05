import { SmallMenu } from "./SmallMenu";
import React from "react";
import { Button, Input, Slider, Card, Tab, Tabs } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { useCaseData, NumOfImgs, sizes } from "../data";
import { ParagraphHeader, TinyText } from "./TextComponents";
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

const Tools = ({ page, showMenu }) => {
  return (
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
          className={`lg:block lg:relative absolute right-0 top-0  p-5 h-full pb-10 w-72 ${showMenu}`}
        >
          <SmallMenu />
          <div className="header flex  dark justify-between">
            <div className="cursor-pointer">
              {page === 0 ? (
                <ParagraphHeader>AGImageAI</ParagraphHeader>
              ) : (
                <ParagraphHeader>Albert</ParagraphHeader>
              )}
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <HistoryIcon />
              <ParagraphHeader>History</ParagraphHeader>
            </div>
          </div>
          <section className="flex flex-col h-full  justify-between">
            <div className="flex flex-col gap-5 h-full py-5">
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
                      formatOptions={{ signDisplay: "always" }}
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
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default Tools;
