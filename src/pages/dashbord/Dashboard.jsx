import React, { useEffect, useContext } from 'react';
import Sidebar from '../../components/Sidebar';
import ImageGenerator from '../image-generator/ImageGenerator';
import Chat from '../chat/Chat';
import Search from '../search/Search';
import Friends from '../friends/Friends';
import Menu from '../../components/Menu';
import MyContext from '../../data';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
const Dashboard = ({ activeBtn, setActiveBtn }) => {
  const { themeValue } = useContext(MyContext);

  useEffect(() => {
    localStorage.setItem('activeBtn', activeBtn.toString());
  }, [activeBtn]);

  useEffect(() => {
    activeBtn == -1 && setActiveBtn(0);
  }, []);

  const Tabs = [
    <ImageGenerator setActiveBtn={setActiveBtn} activeBtn={activeBtn} />,
    <Chat setActiveBtn={setActiveBtn} activeBtn={activeBtn} />,
    <Search setActiveBtn={setActiveBtn} activeBtn={activeBtn} />,
    <Friends />
  ];

  return (
    <>
      <div
        className={`dashboard ${themeValue} w-svh relative flex gap-2 bg-background py-5 pr-2   lg:gap-5 lg:pr-5`}
      >
        <Sidebar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
        {Tabs[activeBtn]}
        <Menu activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
      </div>
    </>
  );
};

export default Dashboard;
