import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ImageGenerator from "../image-generator/ImageGenerator";
import Chat from "../chat/Chat";
import Search from "../search/Search";
import LandingPage from "../landing-page/LandingPage";

const Tabs = [<ImageGenerator />, <Chat />, <Search />];
const Dashboard = () => {
  const [activeBtn, setActiveBtn] = useState(1);

  return (
    <div className="flex gap-5">
      <Sidebar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />

      {Tabs[activeBtn]}
    </div>
  );
};

export default Dashboard;
