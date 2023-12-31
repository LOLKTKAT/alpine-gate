import React from "react";
import { Button, Input, Slider, Card } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import { useCaseData, NumOfImgs, sizes, textLocation } from "../data";
import { ParagraphHeader } from "./TextComponents";

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
    {
      label: "text location",
      placeholder: "select a location",
      items: textLocation,
      elementType: "select",
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

const Tools = ({ page }) => {
  return (
    <Card className="hidden lg:block p-5 h-full pb-10 w-72">
      <div className="header flex  dark justify-between">
        {page === 0 ? (
          <ParagraphHeader>AGImageAI</ParagraphHeader>
        ) : (
          <ParagraphHeader>Albert</ParagraphHeader>
        )}
        <ParagraphHeader>History</ParagraphHeader>
      </div>
      <section className="flex  flex-col h-full  justify-between">
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
        </div>
        <div className="w-full">
          <Button className="w-full" color="secondary">
            Download images
          </Button>
        </div>
      </section>
    </Card>
  );
};

export default Tools;
