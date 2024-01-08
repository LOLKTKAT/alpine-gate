import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ImageGenerator from '../image-generator/ImageGenerator';
import Chat from '../chat/Chat';
import Search from '../search/Search';
import Friends from '../friends/Friends';
import Tools from '../../components/Tools';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from '../../assets/icons';
import { Button } from '@nextui-org/react';
import { SubHeader } from '../../components/TextComponents';
import { theme } from '../../data';

const Dashboard = ({ activeBtn, setActiveBtn }) => {
  const [showMenu, setShowMenu] = useState();

  useEffect(() => {
    localStorage.setItem('activeBtn', activeBtn.toString());
  }, [activeBtn]);
  useEffect(() => {}, [theme.value]);

  useEffect(() => {
    setActiveBtn(0);
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
        className={`dashboard w-svh relative flex gap-2 bg-background py-5 pr-2   lg:gap-5 lg:pr-5`}
      >
        <Sidebar setActiveBtn={setActiveBtn} activeBtn={activeBtn} />
        {Tabs[activeBtn]}
        <Button
          isIconOnly
          variant="bordered"
          className="border-1  lg:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <SubHeader>☰</SubHeader>
        </Button>
        <AnimatePresence>
          {showMenu ? (
            <motion.div
              key={showMenu}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className="w absolute right-0  top-0 z-50 h-svh w-80  lg:hidden"
            >
              <Button
                isIconOnly
                variant="bordered"
                onClick={() => setShowMenu(!showMenu)}
                className="absolute -left-4 top-5 border-1"
              >
                <XIcon />
              </Button>
              <Tools
                page={1}
                showMenu={showMenu}
                activeBtn={activeBtn}
                setActiveBtn={setActiveBtn}
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Dashboard;
