import React, { useState } from "react";
import {
  FilePlusCaseIcon,
  ToolCaseIcon,
  BookOpenCaseIcon,
  DataFlowCaseIcon,
  PhoneCallCaseIcon,
  FilmCaseIcon,
  AnnotationPlusCaseIcon,
} from "../assets/icons";
import { Listbox, ListboxItem, ListboxSection, Card } from "@nextui-org/react";
import { Paragraph, SubHeader } from "./TextComponents";

export const promptUseCases = [
  {
    value: "Ad Content",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "Ad Content is a prompt tool that helps in creating compelling advertisements for various platforms. It provides suggestions and ideas for writing effective ad copy that can grab the attention of the target audience. With Ad Content, you can craft engaging and persuasive ad campaigns to promote your products or services.",
  },
  {
    value: "AIDA Copywriting",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "AIDA Copywriting is a technique used to create persuasive and attention-grabbing copy. AIDA stands for Attention, Interest, Desire, and Action, which are the four stages of the customer journey. This prompt tool helps in structuring your copy in a way that captures the reader's attention, generates interest, creates desire for your product or service, and prompts them to take action.",
  },
  {
    value: "Albert Search Engine",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription: "",
  },
  {
    value: "Analyze Expert",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription:
      " Analyze Expert is a prompt tool that helps in analyzing data and providing insights. It can assist in data interpretation, statistical analysis, trend identification, and pattern recognition. With Analyze Expert, you can make informed decisions based on data-driven insights.",
  },
  {
    value: "Article",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The Article prompt tool helps in generating well-written informations on a wide range of topics. It provides suggestions, outlines, and ideas to create informative and engaging informations. Whether you need content for a blog, website, or publication, Information can assist you in writing high-quality informations.",
  },
  {
    value: "Article (Scientific)",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The Scientific Information prompt tool is specifically designed for writing scientific informations. It helps in structuring the information, organizing the content, and ensuring accuracy and clarity. Whether you are conducting research or writing a scientific paper, this prompt tool can guide you in creating a comprehensive and well-structured scientific information.",
  },
  {
    value: "Blog Content",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "Blog Content is a prompt tool that assists in generating creative and engaging content for blogs. It provides ideas, outlines, and suggestions for writing blog posts that resonate with the target audience. Whether you are a professional blogger or just starting out, Blog Content can help you create compelling blog content.",
  },
  {
    value: "Bullet Points Extractor",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription:
      "The Bullet Points Extractor prompt tool helps in extracting key points and important information from a given text. It can summarize lengthy informations, reports, or documents into concise bullet points. This tool is useful for quickly understanding the main ideas and key takeaways from a piece of content. ",
  },
  {
    value: "Chat with Albert",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription:
      "The Bullet Points Extractor prompt tool helps in extracting key points and important information from a given text. It can summarize lengthy informations, reports, or documents into concise bullet points. This tool is useful for quickly understanding the main ideas and key takeaways from a piece of content. ",
  },
  {
    value: "Today's News",
    icon: <BookOpenCaseIcon />,
    color: "green",
    discription:
      "Today's News is a prompt tool that provides up-to-date news and information on current events. It covers a wide range of topics including politics, business, technology, entertainment, and more. With Today's News, you can stay informed about the latest happenings around the world.",
  },
  {
    value: "Code Implementation",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription:
      "Code Implementation is a prompt tool that helps in writing and implementing code for various programming languages. It provides code snippets, examples, and suggestions for solving coding problems or implementing specific functionalities. Whether you are a beginner or an experienced programmer, Code Implementation can assist you in writing efficient and effective code.  ",
  },
  {
    value: "Content Rewriter Pro",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "Content Rewriter Pro is a prompt tool that helps in rewriting and paraphrasing content. It can generate alternative versions of a given text while maintaining the original meaning. This tool is useful for avoiding plagiarism, creating unique content, or improving the readability of existing content.",
  },
  {
    value: "Design a Database",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription:
      "The Design a Database prompt tool assists in designing and structuring a database for storing and managing data. It provides guidance, suggestions, and best practices for creating an efficient and scalable database schema. Whether you are building a small application or a large-scale system, this tool can help you design a robust database.",
  },
  {
    value: "Day Planner",
    icon: <DataFlowCaseIcon />,
    color: "red",
    discription:
      "The Day Planner prompt tool helps in organizing and planning daily activities and tasks. It provides a user-friendly interface to create schedules, set reminders, and track progress. With Day Planner, you can effectively manage your time and stay organized throughout the day. ",
  },
  {
    value: "Doctor AGI",
    icon: <DataFlowCaseIcon />,
    color: "red",
    discription:
      "Doctor AGI is a prompt tool that simulates a conversation with an AI-powered doctor. It can provide medical advice, answer health-related questions, and offer suggestions for managing common ailments. Please note that Doctor AGI is not a substitute for professional medical advice and should be used for informational purposes only. ",
  },
  {
    value: "Email",
    icon: <PhoneCallCaseIcon />,
    color: "orange",
    discription:
      "The Email prompt tool helps in composing and writing professional emails. It provides templates, suggestions, and guidelines for crafting effective email messages. Whether you are writing a business email, a job application, or a personal message, this tool can assist you in creating well-written and impactful emails.",
  },
  {
    value: "Financial Advisor",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The Financial Advisor prompt tool provides guidance and suggestions for managing personal finances. It can assist in budgeting, investment planning, debt management, and financial goal setting. With Financial Advisor, you can make informed decisions about your money and work towards achieving financial stability.",
  },
  {
    value: "Food Recipes",
    icon: <DataFlowCaseIcon />,
    color: "red",
    discription:
      "The Food Recipes prompt tool offers a wide range of recipes for various cuisines and dietary preferences. It provides step-by-step instructions, ingredient lists, and cooking tips for preparing delicious meals. Whether you are a beginner cook or an experienced chef, this tool can help you discover new recipes and enhance your culinary skills.",
  },
  {
    value: "Math Proof",
    icon: <DataFlowCaseIcon />,
    color: "red",
    discription:
      "The Math Proof prompt tool assists in writing mathematical proofs and solving complex mathematical problems. It provides suggestions, formulas, and step-by-step explanations for proving mathematical theorems or solving equations. Whether you are a student or a professional mathematician, this tool can help you in your mathematical endeavors.",
  },
  {
    value: "Prompt Engineer",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription: "",
  },
  {
    value: "Movie Scenario",
    icon: <FilmCaseIcon />,
    color: "pink",
    discription:
      "The Movie Scenario prompt tool assists in creating storylines and scenarios for movies or screenplays. It provides suggestions, plot ideas, and character development prompts to help you craft compelling narratives. Whether you are a screenwriter or a movie enthusiast, this tool can inspire your creativity and storytelling skills. ",
  },
  {
    value: "News Writer",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The News Writer prompt tool helps in generating news informations on a wide range of topics. It provides suggestions, headlines, and outlines for writing informative and engaging news content. Whether you are a journalist or a content creator, this tool can assist you in creating timely and relevant news informations.",
  },
  {
    value: "Poem",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The Poem prompt tool assists in writing poetry and creating poetic expressions. It provides suggestions, rhyming words, and poetic devices to enhance your writing. Whether you are a seasoned poet or a beginner, this tool can inspire your creativity and help you craft beautiful poems.",
  },
  {
    value: "Presentation",
    icon: <AnnotationPlusCaseIcon />,
    color: "blue",
    discription:
      "The Presentation prompt tool helps in creating visually appealing and impactful presentations. It provides templates, slide designs, and content suggestions for delivering effective presentations. Whether you are a student, a professional, or a public speaker, this tool can assist you in creating engaging and persuasive presentations. ",
  },
  {
    value: "Product Description",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The Product Description prompt tool assists in writing compelling descriptions for products or services. It provides suggestions, features, and benefits to highlight the unique selling points of the product. Whether you are an e-commerce seller or a marketer, this tool can help you create persuasive product descriptions that drive sales.",
  },
  {
    value: "Redact and Edit",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The Redact and Edit prompt tool helps in reviewing and editing written content. It provides suggestions for improving grammar, sentence structure, and overall readability. Whether you are writing an essay, a report, or a blog post, this tool can assist you in refining your writing and ensuring clarity and coherence.",
  },
  {
    value: "Story",
    icon: <FilePlusCaseIcon />,
    color: "yellow",
    discription:
      "The Story prompt tool assists in creating fictional stories and narratives. It provides prompts, plot ideas, and character development suggestions to inspire your storytelling. Whether you are a writer, a storyteller, or simply enjoy creating narratives, this tool can help you unleash your imagination and craft captivating stories.",
  },
  {
    value: "Train Me",
    icon: <DataFlowCaseIcon />,
    color: "red",
    discription:
      "The Train Me prompt tool helps in learning and acquiring new skills or knowledge. It provides interactive lessons, tutorials, and practice exercises to enhance your learning experience. Whether you want to learn a new language, improve your coding skills, or acquire any other skill, this tool can guide you through the learning process.",
  },
  {
    value: "Translator",
    icon: <ToolCaseIcon />,
    color: "violet",
    discription:
      "The Translator prompt tool assists in translating text from one language to another. It provides accurate translations and suggestions for improving the quality of the translated content. Whether you need to translate a document, a website, or a piece of text, this tool can help you overcome language barriers and communicate effectively.",
  },
  {
    value: "Travel Planner",
    icon: <BookOpenCaseIcon />,
    color: "green",
    discription:
      "The Travel Planner prompt tool helps in planning and organizing travel itineraries. It provides suggestions for destinations, attractions, accommodations, and activities based on your preferences. Whether you are planning a vacation, a business trip, or an adventure, this tool can assist you in creating a memorable travel experience.",
  },
  {
    value: "Weather of Today",
    icon: <BookOpenCaseIcon />,
    color: "green",
    discription:
      "The Weather of Today prompt tool provides current weather information for a specific location. It gives details about temperature, humidity, wind speed, and other weather conditions. Whether you are planning outdoor activities or simply want to stay informed about the weather, this tool can provide you with up-to-date weather forecasts.",
  },
  {
    value: "Workout Planner",
    icon: <BookOpenCaseIcon />,
    color: "green",
    discription:
      "The Workout Planner prompt tool helps in creating personalized workout plans and fitness routines. It provides exercise suggestions, training tips, and progress tracking features. Whether you are a fitness enthusiast or a beginner, this tool can assist you in achieving your fitness goals and maintaining a healthy lifestyle.",
  },
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
  const [activeBtn, setActiveBtn] = useState(0);
  return (
    <section className="flex small-screen  justify-between w-full ">
      <Card className="bg-background/100 dark:bg-default-100/30 sm:w-full md:w-2/5 lg:w-2/5  h-96 p-5">
        <SubHeader>Use Cases</SubHeader>
        <section className="flex flex-col gap-4 landing__chat-output">
          <List activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
        </section>
      </Card>
      <CardComponent activeBtn={activeBtn} />
    </section>
  );
};

const List = ({ setActiveBtn }) => {
  function handleClick(idx) {
    setActiveBtn(idx);
  }
  return (
    <div>
      <Listbox>
        {promptUseCases.map((caseItem, i) => {
          return (
            <ListboxSection showDivider>
              <ListboxItem textValue={caseItem.value}>
                <div
                  onClick={() => handleClick(i)}
                  className="flex items-center  h-full"
                >
                  <div
                    className={`${bgColor(caseItem.color)} p-2 rounded-full`}
                  >
                    {caseItem.icon}
                  </div>
                  <Paragraph>{caseItem.value}</Paragraph>
                </div>
              </ListboxItem>
            </ListboxSection>
          );
        })}
      </Listbox>
    </div>
  );
};

const CardComponent = ({ activeBtn }) => {
  return (
    <Card className="p-5 sm:w-full md:w-2/5 lg:w-2/5  flex bg-background/100 dark:bg-default-100/30 flex-col justify-between">
      <section>
        <div
          className={`${bgColor(
            promptUseCases[activeBtn].color
          )} transition w-20 h-20 flex items-center justify-center p-2 rounded-full`}
        >
          <div className="scale-200">{promptUseCases[activeBtn].icon}</div>
        </div>
      </section>
      <section className="transition">
        <SubHeader>{promptUseCases[activeBtn].value}</SubHeader>
        <Paragraph>{promptUseCases[activeBtn].discription}</Paragraph>
      </section>
    </Card>
  );
};

export default UseCaseComponents;
