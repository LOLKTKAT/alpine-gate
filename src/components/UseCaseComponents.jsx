import React from "react";
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

function bgColor(color) {
  switch (color) {
    case "green":
      return "bg-green-900/20";
    case "yellow":
      return "bg-yellow-900/20";
    case "pink":
      return "bg-pink-900/20";
    case "blue":
      return "bg-blue-900/20";
    case "violet":
      return "bg-violet-900/20";
    case "orange":
      return "bg-orange-900/20";
    case "red":
      return "bg-red-900/20";
    default:
      return "light:bg-black-900/20 dark:bg-gray-900/90";
  }
}
const UseCaseComponents = () => {
  return (
    <Listbox color="secondary">
      {promptUseCases.map((caseItem) => {
        console.log(bgColor(caseItem.color));
        return (
          <ListboxSection showDivider>
            <ListboxItem>
              <div className="flex items-center gap-1">
                <div className={`${bgColor(caseItem.color)} p-2 rounded-full`}>
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
