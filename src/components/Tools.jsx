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
    <Card className="p-5 h-full w-72">
      <div className="header flex  dark justify-between">
        <div>AGIImageAi</div>
        <div>Histroy</div>
      </div>
      <section className="flex flex-col h-full  justify-between">
        <div className="flex flex-col justify-between h-full py-5">
          <Select
            items={useCaseData}
            label="Tone"
            placeholder="Select a Tone"
            size="sm"
          >
            {(useCaseData) => (
              <SelectItem key={useCaseData.value}>
                {useCaseData.value}
              </SelectItem>
            )}
          </Select>

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

          <Select
            items={sizes}
            label="size"
            placeholder="select a size"
            size="sm"
          >
            {(sizes) => (
              <SelectItem key={sizes.value}>{sizes.value}</SelectItem>
            )}
          </Select>
          <Select
            items={NumOfImgs}
            label="No. of images"
            placeholder="select a number"
            size="sm"
          >
            {(NumOfImgs) => (
              <SelectItem key={NumOfImgs.value}>{NumOfImgs.value}</SelectItem>
            )}
          </Select>
          <Input
            type="text"
            labelPlacement="inside"
            label="Text to insert"
            className="text-gray-50"
            size="sm"
          />
          <Select
            items={["top", "middle", "buttom"]}
            label="text location"
            placeholder="select a location"
            size="sm"
          >
            <SelectItem></SelectItem>
          </Select>
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
