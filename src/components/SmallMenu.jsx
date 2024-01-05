import React from "react";
import { ImageGeneratorIcon, SearchIcon, ChatIcon } from "../assets/icons";
import { Avatar, Button } from "@nextui-org/react";
import { TinyText } from "./TextComponents";
export function SmallMenu() {
  return (
    <>
      <section className="lg:hidden flex mb-4 justify-between">
        <div className="flex flex-col items-center">
          <Button color="none" isIconOnly className="mid ">
            <ImageGeneratorIcon />
          </Button>
          <TinyText>Image</TinyText>
        </div>
        <div className="flex flex-col items-center">
          <Button color="secondary" isIconOnly className="mid ">
            <SearchIcon />
          </Button>
          <TinyText>Chat</TinyText>
        </div>
        <div className="flex flex-col items-center">
          <Button color="none" isIconOnly className="mid ">
            <ChatIcon />
          </Button>
          <TinyText>Search</TinyText>
        </div>
        <div className="flex flex-col items-center">
          <Button color="none" isIconOnly className="mid rounded-full">
            <Avatar />
          </Button>
        </div>
      </section>
    </>
  );
}
