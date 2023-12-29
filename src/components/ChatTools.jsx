import React from "react";
import { Button, Slider, Select, SelectItem, Card } from "@nextui-org/react";
import { useCaseData } from "../data";

const Tools = () => {
  return (
    <Card className="tools">
      <div className="header">
        <div>AGIImageAi</div>
      </div>
      <br />
      <Button variant="flat">Turn on mic</Button>
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
      <br />
      <br />
      <Button color="secondary">Download images</Button>
    </Card>
  );
};

export default Tools;
