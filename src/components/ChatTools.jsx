import React from "react";
import { Button, Slider, Select, SelectItem, Card } from "@nextui-org/react";
import { useCaseData } from "../data";
import { SubHeader } from "./TextComponents";

const Tools = () => {
  return (
    <Card className="p-5 h-full w-72 flex flex-col gap-5">
      <div className="header">
        <SubHeader>AGIImageAi</SubHeader>
      </div>
      <div className="flex flex-col justify-between h-full">
        <section className="flex flex-col gap-5">
          <Button variant="flat" className="w-full">
            Turn on mic
          </Button>
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
        </section>
        <section>
          <Button className="w-full" color="secondary">
            Download images
          </Button>
        </section>
      </div>
    </Card>
  );
};

export default Tools;
