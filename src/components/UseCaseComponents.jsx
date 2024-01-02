import React, { useEffect, useState } from "react";
import {
  FilePlusCaseIcon,
  ToolCaseIcon,
  BookOpenCaseIcon,
  DataFlowCaseIcon,
  PhoneCallCaseIcon,
  FilmCaseIcon,
  AnnotationPlusCaseIcon,
} from "../assets/icons";
import { Listbox, ListboxItem, ListboxSection } from "@nextui-org/react";
import { Paragraph } from "./TextComponents";
const promptUseCases = [
  { value: "Ad Content", icon: <FilePlusCaseIcon />, color: "yellow" },
  { value: "AIDA Copywriting", icon: <FilePlusCaseIcon />, color: "yellow" },
  { value: "Albert Search Engine", icon: <ToolCaseIcon />, color: "violet" },
  { value: "Analyze Expert", icon: <ToolCaseIcon />, color: "violet" },
  { value: "Article", icon: <FilePlusCaseIcon />, color: "yellow" },
  {
    value: "Article (Scientific)",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
  },
  { value: "Blog Content", icon: <FilePlusCaseIcon />, color: "yellow" },
  {
    value: "Bullet Points Extractor",
    icon: <ToolCaseIcon />,
    color: "violet",
  },
  { value: "Chat with Albert", icon: <ToolCaseIcon />, color: "violet" },
  { value: "Today's News", icon: <BookOpenCaseIcon />, color: "green" },
  { value: "Code Implementation", icon: <ToolCaseIcon />, color: "violet" },
  {
    value: "Content Rewriter Pro",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
  },
  { value: "Design a Database", icon: <ToolCaseIcon />, color: "violet" },
  { value: "Day Planner", icon: <DataFlowCaseIcon />, color: "red" },
  { value: "Doctor AGI", icon: <DataFlowCaseIcon />, color: "red" },
  { value: "Email", icon: <PhoneCallCaseIcon />, color: "orange" },
  { value: "Financial Advisor", icon: <FilePlusCaseIcon />, color: "yellow" },
  { value: "Food Recipes", icon: <DataFlowCaseIcon />, color: "red" },
  { value: "Math Proof", icon: <DataFlowCaseIcon />, color: "red" },
  { value: "Prompt Engineer", icon: <ToolCaseIcon />, color: "violet" },
  { value: "Movie Scenario", icon: <FilmCaseIcon />, color: "pink" },
  { value: "News Writer", icon: <FilePlusCaseIcon />, color: "yellow" },
  { value: "Poem", icon: <FilePlusCaseIcon />, color: "yellow" },
  { value: "Presentation", icon: <AnnotationPlusCaseIcon />, color: "blue" },
  {
    value: "Product Description",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
  },
  { value: "Redact and Edit", icon: <FilePlusCaseIcon />, color: "yellow" },
  { value: "Story", icon: <FilePlusCaseIcon />, color: "yellow" },
  { value: "Train Me", icon: <DataFlowCaseIcon />, color: "red" },
  { value: "Translator", icon: <ToolCaseIcon />, color: "violet" },
  {
    value: "Travel Planner",
    icon: <BookOpenCaseIcon />,
    color: "green",
  },
  { value: "Weather of Today", icon: <BookOpenCaseIcon />, color: "green" },
  { value: "Workout Planner", icon: <BookOpenCaseIcon />, color: "green" },
];
const UseCaseComponents = () => {
  return (
    <Listbox color="secondary">
      {promptUseCases.map((caseItem) => {
        const classNameColor = `bg-${caseItem.color}-900/20`;
        console.log(classNameColor);
        return (
          <ListboxSection showDivider>
            <ListboxItem>
              <div className="flex items-center gap-1">
                <div className={`bg-${caseItem.color}-900/20 p-2 rounded-full`}>
                  {caseItem.icon}
                </div>
                <Paragraph>{caseItem.value}</Paragraph>
              </div>
            </ListboxItem>
          </ListboxSection>
        );
      })}
    </Listbox>
  );
};

export default UseCaseComponents;
