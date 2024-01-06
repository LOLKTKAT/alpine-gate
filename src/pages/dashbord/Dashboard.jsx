import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ImageGenerator from "../image-generator/ImageGenerator";
import Chat from "../chat/Chat";
import Search from "../search/Search";
import Friends from "../friends/Friends";

const Dashboard = ({ activeBtn, setActiveBtn }) => {
  useEffect(() => {
    localStorage.setItem("activeBtn", activeBtn.toString());
  }, [activeBtn]);
  const Tabs = [
    <ImageGenerator setActiveBtn={setActiveBtn} activeBtn={activeBtn} />,
    <Chat setActiveBtn={setActiveBtn} activeBtn={activeBtn} />,
    <Search setActiveBtn={setActiveBtn} activeBtn={activeBtn} />,
    <Friends />,
  ];

  return (
    <div className="dark dashboard flex gap-5 w-svh bg-background py-5 pr-0 lg:pr-5">
      <Sidebar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
      {Tabs[activeBtn]}
    </div>
  );
};

export default Dashboard;
