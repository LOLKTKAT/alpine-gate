import React from "react";
import {
  Button,
  Input,
  Slider,
  Select,
  SelectItem,
  Card,
} from "@nextui-org/react";
import { useCaseData, NumOfImgs, sizes } from "../data";

const Tools = () => {
  return (
    <Card className="tools">
      <div className="header flex justify-between">
        <div>AGIImageAi</div>
        <div>histroy</div>
      </div>
      <Input
        type="text"
        labelPlacement="outside"
        label="Text to insert"
        className="text-gray-50"
        size="sm"
      />
      <br />
      <Select
        items={["top", "middle", "buttom"]}
        label="text location"
        placeholder="select a location"
        size="sm"
      >
        <SelectItem></SelectItem>
      </Select>
      <br />
      <Slider
        label="Creativity"
        size="sm"
        step={0.01}
        maxValue={5}
        minValue={-5}
        fillOffset={0}
        defaultValue={1.5}
        className="max-w-md"
        formatOptions={{ signDisplay: "always" }}
        color="secondary"
      />
      <br />
      <Select
        items={useCaseData}
        label="Tone"
        placeholder="Select a Tone"
        size="sm"
      >
        {(useCaseData) => (
          <SelectItem key={useCaseData.value}>{useCaseData.value}</SelectItem>
        )}
      </Select>
      <br />
      <div className="tool-form-row">
        <Select
          items={sizes}
          label="size"
          placeholder="select a size"
          size="sm"
        >
          {(sizes) => <SelectItem key={sizes.value}>{sizes.value}</SelectItem>}
        </Select>
        <Select
          items={NumOfImgs}
          label="number of images"
          placeholder="select a number"
          size="sm"
        >
          {(NumOfImgs) => (
            <SelectItem key={NumOfImgs.value}>{NumOfImgs.value}</SelectItem>
          )}
        </Select>
      </div>
      <br />
      <br />
      <Button color="secondary">Download images</Button>
    </Card>
  );
};

export default Tools;
