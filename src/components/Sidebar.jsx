import React, { useEffect } from "react";
import { logo, paintbrush, vector, search, users, avatar } from "../assets/";
import { Tooltip, Button, Card, Avatar } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import {
  ChatIcon,
  ImageGeneratorIcon,
  SearchIcon,
  UsersIcon,
} from "../assets/icons";
const NAV_ITEMS = [
  { file: logo, name: "Home", path: "", icon: <Avatar /> },
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
    icon: <Avatar />,
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
    <Card className="sidebar rounded-l-sm">
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
        {NAV_ITEMS.slice(4, 6).map((item, i) => {
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
                aria-label="Like"
                size="md"
              >
                {item.icon}
              </Button>
            </Tooltip>
          );
        })}
      </section>
    </Card>
  );
}

export default Sidebar;
