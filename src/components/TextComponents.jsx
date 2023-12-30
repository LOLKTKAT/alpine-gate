import React from "react";
import { Button } from "@nextui-org/react";
import { star } from "../assets/icons";
export const Header = ({ children }) => {
  return <h1 className="text-6xl font-semibold ">{children}</h1>;
};
export const SectionHeader = ({ children }) => {
  return <h2 className="text-4xl font-semibold">{children}</h2>;
};
export const SubHeader = ({ children }) => {
  return <div className="text-xl font-semibold">{children}</div>;
};
export const ParagraphHeader = ({ children }) => {
  return <p className="text-base font-medium">{children}</p>;
};
export const Paragraph = ({ children }) => {
  return <p className="text-base font-light">{children}</p>;
};
export const GenerateButton = ({ children }) => {
  return (
    <Button endContent={<img src={star} className="h-4 stroke-red-500" />}>
      {children}
    </Button>
  );
};
