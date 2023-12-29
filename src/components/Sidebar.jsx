import React, { useEffect, useState } from "react";
import { logo, paintbrush, vector, search, users, avatar } from "../assets/";
import { Tooltip, Button, Card } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const NAV_ITEMS = [
  { file: logo, name: "Home", path: "home" },
  { file: paintbrush, name: "Image Generator", path: "image" },
  { file: vector, name: "Chat", path: "chat" },
  { file: search, name: "Search", path: "search" },
  { file: users, name: "friends", path: "friends" },
  { file: avatar, name: "account", path: "accoutn" },
];

function Sidebar() {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState(0);

  function handleClick(index, path) {
    setActiveBtn(index);
    navigate(`/${path}`);
  }
  useEffect(() => {
    setActiveBtn(activeBtn);
  }, [activeBtn]);
  return (
    <Card className="sidebar ">
      <section>
        {NAV_ITEMS.slice(0, 4).map((item, i) => {
          return (
            <Tooltip
              showArrow={true}
              content={`${item.name}`}
              placement="right"
              delay={0}
            >
              <Button
                onClick={() => handleClick(i, item.path)}
                key={i}
                isIconOnly
                color={activeBtn === i ? "secondary" : ""}
                aria-label="Like"
                size="lg"
              >
                <img
                  className="nav-image"
                  src={item.file}
                  alt={`${item.name}`}
                />
              </Button>
            </Tooltip>
          );
        })}
      </section>

      <section>
        {NAV_ITEMS.slice(4, 6).map((item) => {
          return (
            <Tooltip
              showArrow={true}
              content={`${item.name}`}
              placement="right"
              delay={0}
            >
              <Button isIconOnly variant="light" aria-label="Like" size="lg">
                <img
                  className="nav-image"
                  src={item.file}
                  alt={`${item.name}`}
                />
              </Button>
            </Tooltip>
          );
        })}
      </section>
    </Card>
  );
}

export default Sidebar;
