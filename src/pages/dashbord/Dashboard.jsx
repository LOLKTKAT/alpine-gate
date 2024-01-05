import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ImageGenerator from "../image-generator/ImageGenerator";
import Chat from "../chat/Chat";
import Search from "../search/Search";
import Friends from "../friends/Friends";

const Tabs = [<ImageGenerator />, <Chat />, <Search />, <Friends />];

const Dashboard = ({ activeBtn, setActiveBtn }) => {
  useEffect(() => {
    localStorage.setItem("activeBtn", activeBtn.toString());
  }, [activeBtn]);

  return (
    <div className=" dashboard flex gap-5 w-svh bg-neutral-950 py-5 pr-0 lg:pr-5">
      <Sidebar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
      {Tabs[activeBtn]}
    </div>
  );
};

export default Dashboard;
