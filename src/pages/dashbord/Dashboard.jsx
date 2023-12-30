import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ImageGenerator from "../image-generator/ImageGenerator";
import Chat from "../chat/Chat";
import Search from "../search/Search";

const Tabs = [<ImageGenerator />, <Chat />, <Search />];
const Dashboard = ({ activeBtn, setActiveBtn }) => {
  useEffect(() => {
    localStorage.setItem("activeBtn", activeBtn.toString());
  }, [activeBtn]);
  return (
    <div className="flex dark gap-5 bg-neutral-950 py-5 pr-5">
      <Sidebar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
      {Tabs[activeBtn]}
    </div>
  );
};

export default Dashboard;
