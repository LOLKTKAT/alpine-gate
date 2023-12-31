import React from "react";
import {
  Button,
  Input,
  Slider,
  Select,
  SelectItem,
  Card,
} from "@nextui-org/react";
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
  step: 0.01,
  maxValue: 5,
  minValue: -5,
  fillOffset: 0,
  defaultValue: 1.5,
  formatOptions: { signDisplay: "always" },
};

const ToolsEndPoints = [
  {
    image: [
      CreativitySlider,
      {
        label: "Size",
        placeholder: "Select a Size",
        value: "",
        items: sizes,
        size: "sm",
        color: "",
        elementType: "select",
        className: "",
      },
      {
        label: "Number of images",
        placeholder: "select a number",
        value: "",
        items: NumOfImgs,
        size: "sm",
        color: "",
        elementType: "select",
        className: "",
      },
      {
        label: "Text to insert",
        placeholder: "",
        value: "",
        size: "sm",
        color: "",
        elementType: "input",
        labelPlacement: "inside",
        type: "text",
        className: "text-gray-50",
      },
      {
        label: "text location",
        placeholder: "select a location",
        value: "",
        items: textLocation,
        size: "sm",
        color: "",
        elementType: "select",
        className: "",
      },
    ],
  },
  {
    chat: [
      {
        label: "Tone",
        placeholder: "Select a Tone",
        value: "",
        items: useCaseData,
        size: "sm",
        color: "",
        elementType: "select",
        className: "",
      },
      CreativitySlider,
      {
        elementType: "button",
        innerText: "turn on mic",
        variant: "flat",
        className: "w-full",
      },
    ],
  },
];

const Tools = ({ page }) => {
  return (
    <Card className="p-5 h-full w-72">
      <div className="header flex  dark justify-between">
        {page === "image" ? (
          <ParagraphHeader>AGImageAI</ParagraphHeader>
        ) : (
          <ParagraphHeader>Albert</ParagraphHeader>
        )}
        <ParagraphHeader>History</ParagraphHeader>
      </div>
      <section className="flex flex-col h-full  justify-between">
        <div className="flex flex-col justify-between h-full py-5">
          {page == "image"
            ? ToolsEndPoints[0].image.map((endPoint) => {
                if (endPoint.elementType === "select")
                  return (
                    <Select
                      items={endPoint.items}
                      label={endPoint.label}
                      placeholder={endPoint.placeholder}
                      size={endPoint.size}
                      className={endPoint.className}
                      color={endPoint.color}
                      value={endPoint.value}
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
                      size={endPoint.size}
                      color={endPoint.color}
                      className={endPoint.className}
                      step={endPoint.step}
                      maxValue={endPoint.maxValue}
                      minValue={endPoint.minValue}
                      fillOffset={endPoint.fillOffset}
                      defaultValue={endPoint.defaultValue}
                      formatOptions={endPoint.formatOptions}
                    />
                  );
                if (endPoint.elementType === "input")
                  return (
                    <Input
                      type={endPoint.type}
                      labelPlacement={endPoint.labelPlacement}
                      label={endPoint.label}
                      placeholder={endPoint.ParagraphHeader}
                      value={endPoint.value}
                      size={endPoint.size}
                      color={endPoint.color}
                      className={endPoint.className}
                    />
                  );
              })
            : ToolsEndPoints[1].chat.map((endPoint) => {
                if (endPoint.elementType === "select")
                  return (
                    <Select
                      items={endPoint.items}
                      label={endPoint.label}
                      placeholder={endPoint.placeholder}
                      size={endPoint.size}
                      className={endPoint.className}
                      color={endPoint.color}
                      value={endPoint.value}
                    >
                      {(items) => (
                        <SelectItem key={items.value}>{items.value}</SelectItem>
                      )}
                    </Select>
                  );
                if (endPoint.elementType === "button")
                  return (
                    <Button
                      variant={endPoint.variant}
                      className={endPoint.className}
                    >
                      {endPoint.innerText}
                    </Button>
                  );
                if (endPoint.elementType === "slider")
                  return (
                    <Slider
                      label={endPoint.label}
                      placeholder={endPoint.placeholder}
                      items={endPoint.items}
                      size={endPoint.size}
                      color={endPoint.color}
                      className={endPoint.className}
                      step={endPoint.step}
                      maxValue={endPoint.maxValue}
                      minValue={endPoint.minValue}
                      fillOffset={endPoint.fillOffset}
                      defaultValue={endPoint.defaultValue}
                      formatOptions={endPoint.formatOptions}
                    />
                  );
                if (endPoint.elementType === "input")
                  return (
                    <Input
                      type={endPoint.type}
                      labelPlacement={endPoint.labelPlacement}
                      label={endPoint.label}
                      placeholder={endPoint.ParagraphHeader}
                      value={endPoint.value}
                      size={endPoint.size}
                      color={endPoint.color}
                      className={endPoint.className}
                    />
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
