import React, { useContext, useState } from 'react';
import Tools from './Tools';
import { AnimatePresence, motion } from 'framer-motion';
import {
  AlpineLogo,
  ChatIcon,
  ImageGeneratorIcon,
  LogOut,
  MoonIcon,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  ToolsIcon,
  UsersIcon,
  XIcon
} from '../assets/icons';
import {
  Avatar,
  Button,
  Card,
  Listbox,
  ListboxItem,
  Accordion,
  AccordionItem,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';
import { ParagraphHeader, SubHeader, TinyText } from './TextComponents';
import MyContext from '../data';
import { useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  {
    name: 'Home',
    path: '',
    icon: (
      <div className="scale-75">
        <AlpineLogo />
      </div>
    )
  },
  {
    name: 'Image Generator',
    path: 'image',
    icon: <ImageGeneratorIcon />
  },
  { name: 'Chat', path: 'chat', icon: <ChatIcon /> },
  { name: 'Search', path: 'search', icon: <SearchIcon /> },
  { name: 'friends', path: 'friends', icon: <UsersIcon /> },
  {
    name: 'account',
    path: 'accoutn',
    icon: <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
  }
];
export default function Menu({ activeBtn, setActiveBtn }) {
  const [showMenu, setShowMenu] = useState();
  const { themeValue, setThemeValue } = useContext(MyContext);
  const navigate = useNavigate();

  const handleThemeChange = () => {
    if (themeValue == 'dark') setThemeValue('light');
    else if (themeValue == 'light') setThemeValue('dark');
    else setThemeValue('dark');
  };
  return (
    <>
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
            className="absolute right-0  top-0 z-50 h-svh w-80  lg:hidden"
          >
            <Card className="absolute right-0 flex h-full w-[350px] flex-col overflow-y-scroll p-3 ">
              <div className="flex justify-between">
                <Button
                  isIconOnly
                  variant="bordered"
                  onClick={() => setShowMenu(!showMenu)}
                  className=" border-1"
                >
                  <XIcon />
                </Button>
                <Popover placement="top" triggerType="tree">
                  <PopoverTrigger>
                    <Avatar
                      className="cursor-pointer"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    className={`flex flex-col items-start gap-2 p-3 ${themeValue}`}
                  >
                    <div className="cursor-pointer">
                      {themeValue === 'light' ? (
                        <div
                          onClick={() => handleThemeChange()}
                          className="flex items-center gap-1 text-foreground"
                        >
                          <MoonIcon />
                          <ParagraphHeader>Dark</ParagraphHeader>
                        </div>
                      ) : (
                        <div
                          onClick={() => handleThemeChange()}
                          className="flex items-center gap-1 text-foreground"
                        >
                          <SunIcon />
                          <ParagraphHeader>Light</ParagraphHeader>
                        </div>
                      )}
                    </div>
                    <div className="flex cursor-pointer items-center gap-1  text-foreground">
                      <SettingsIcon />
                      <ParagraphHeader>settings</ParagraphHeader>
                    </div>
                    <div className="flex cursor-pointer items-center gap-1  text-foreground">
                      <LogOut />
                      <ParagraphHeader>log out</ParagraphHeader>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <Accordion className="">
                <AccordionItem
                  key="1"
                  aria-label="Tools"
                  title={
                    <div className="flex items-center gap-1">
                      <ToolsIcon />
                      <ParagraphHeader>Tools</ParagraphHeader>
                    </div>
                  }
                >
                  <Tools page={activeBtn} />
                </AccordionItem>
              </Accordion>
              <Listbox aria-label="Actions">
                <ListboxItem
                  key="1"
                  color="secondary"
                  onClick={() => navigate('/')}
                >
                  <div className="flex items-center gap-1">
                    <Button isIconOnly color="none">
                      <div className="scale-75">
                        <AlpineLogo />
                      </div>
                    </Button>
                    <TinyText>Home</TinyText>
                  </div>
                </ListboxItem>
                {NAV_ITEMS.slice(1, 5).map((item, i) => {
                  return (
                    <ListboxItem
                      color="secondary"
                      className={
                        activeBtn == i ? 'bg-purple-500 text-slate-50 dark' : ''
                      }
                      onClick={() => setActiveBtn(i)}
                      key={item.name}
                    >
                      <div className="flex items-center gap-1">
                        <Button isIconOnly color="none">
                          {item.icon}
                        </Button>
                        <TinyText>{item.name}</TinyText>
                      </div>
                    </ListboxItem>
                  );
                })}
              </Listbox>
            </Card>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
