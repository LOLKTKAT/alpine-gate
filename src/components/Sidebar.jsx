import React, { useEffect } from "react";
import { logo, paintbrush, vector, search, users, avatar } from "../assets/";
import {
  Tooltip,
  Button,
  Card,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import {
  AlpineLogo,
  ChatIcon,
  ImageGeneratorIcon,
  SearchIcon,
  UsersIcon,
} from "../assets/icons";
import { Paragraph, ParagraphHeader, TinyText } from "./TextComponents";
const NAV_ITEMS = [
  {
    file: logo,
    name: "Home",
    path: "",
    icon: (
      <div className="scale-75">
        <AlpineLogo />
      </div>
    ),
  },
  {
    file: paintbrush,
    name: "Image Generator",
    path: "image",
    icon: <ImageGeneratorIcon />,
  },
  { file: vector, name: "Chat", path: "chat", icon: <ChatIcon /> },
  { file: search, name: "Search", path: "search", icon: <SearchIcon /> },
  { file: users, name: "friends", path: "friends", icon: <UsersIcon /> },
  {
    file: avatar,
    name: "account",
    path: "accoutn",
    icon: <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />,
  },
];

function Sidebar({ activeBtn, setActiveBtn }) {
  const navigate = useNavigate();
  function handleClick(index) {
    setActiveBtn(index - 1);
  }
  useEffect(() => {
    setActiveBtn(activeBtn);
  }, [activeBtn]);

  return (
    <Card className="sidebar hidden lg:flex rounded-l-sm">
      <section className="sidebar-section">
        {NAV_ITEMS.slice(0, 4).map((item, i) => {
          if (activeBtn === -1) {
            navigate("/");
          }
          return (
            <Tooltip
              showArrow={true}
              content={`${item.name}`}
              placement="right"
              className="dark"
              delay={0}
            >
              <Button
                onClick={() => handleClick(i)}
                color={activeBtn === i - 1 ? "secondary" : ""}
                className={activeBtn === i - 1 ? "dark" : ""}
                key={i}
                isIconOnly
                aria-label="Like"
                size="md"
              >
                {item.icon}
              </Button>
            </Tooltip>
          );
        })}
      </section>

      <section className="sidebar-section">
        {NAV_ITEMS.slice(4, 5).map((item, i) => {
          return (
            <Tooltip
              showArrow={true}
              content={`${item.name}`}
              placement="right"
              delay={0}
              className="dark"
            >
              <Button
                key={i + 4}
                onClick={() => handleClick(i + 4)}
                isIconOnly
                color={activeBtn === i + 3 ? "secondary" : ""}
                className={activeBtn === i + 3 ? "dark" : ""}
                aria-label="Like"
                size="md"
              >
                {item.icon}
              </Button>
            </Tooltip>
          );
        })}
        <Popover placement="top" triggerType="tree">
          <PopoverTrigger>
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          </PopoverTrigger>
          <PopoverContent className="dark p-3 items-start flex flex-col gap-2">
            <div className="cursor-pointer">
              <ParagraphHeader>theme</ParagraphHeader>
            </div>
            <div className="cursor-pointer">
              <ParagraphHeader>settings</ParagraphHeader>
            </div>
            <div className="cursor-pointer">
              <ParagraphHeader>log out</ParagraphHeader>
            </div>
          </PopoverContent>
        </Popover>
      </section>
    </Card>
  );
}

export default Sidebar;
