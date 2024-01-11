import React, { useEffect, useContext } from 'react';
import { logo, paintbrush, vector, search, users, avatar } from '../assets/';
import {
  Tooltip,
  Button,
  Card,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import {
  AlpineLogo,
  ChatIcon,
  ImageGeneratorIcon,
  LogOut,
  MoonIcon,
  SearchIcon,
  SettingsIcon,
  SunIcon,
  UsersIcon
} from '../assets/icons';
import { ParagraphHeader } from './TextComponents';
import MyContext from '../data';
const NAV_ITEMS = [
  {
    file: logo,
    name: 'Home',
    path: '',
    icon: (
      <div className="scale-75">
        <AlpineLogo />
      </div>
    )
  },
  {
    file: paintbrush,
    name: 'Image Generator',
    path: 'image',
    icon: <ImageGeneratorIcon />
  },
  { file: vector, name: 'Chat', path: 'chat', icon: <ChatIcon /> },
  { file: search, name: 'Search', path: 'search', icon: <SearchIcon /> },
  { file: users, name: 'friends', path: 'friends', icon: <UsersIcon /> },
  {
    file: avatar,
    name: 'account',
    path: 'accoutn',
    icon: <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
  }
];

function Sidebar({ activeBtn, setActiveBtn }) {
  const navigate = useNavigate();
  const { themeValue, setThemeValue } = useContext(MyContext);

  function handleClick(index) {
    setActiveBtn(index - 1);
  }
  const handleThemeChange = () => {
    if (themeValue == 'dark') setThemeValue('light');
    else if (themeValue == 'light') setThemeValue('dark');
    else setThemeValue('dark');
  };
  useEffect(() => {
    setActiveBtn(activeBtn);
  }, [activeBtn]);

  return (
    <Card className={`sidebar hidden rounded-l-sm lg:flex`}>
      <section className="sidebar-section">
        {NAV_ITEMS.slice(0, 4).map((item, i) => {
          if (activeBtn === -1) {
            navigate('/');
          }
          return (
            <Tooltip
              showArrow={true}
              content={`${item.name}`}
              placement="right"
              className="dark"
              delay={0}
              key={i}
            >
              <Button
                onClick={() => handleClick(i)}
                color={activeBtn === i - 1 ? 'secondary' : ''}
                className={activeBtn === i - 1 ? 'dark' : ''}
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
        {NAV_ITEMS.slice(4, 5).map((item, i) => {
          return (
            <Tooltip
              showArrow={true}
              content={`${item.name}`}
              placement="right"
              delay={0}
              key={i}
              className="dark"
            >
              <Button
                key={i + 4}
                onClick={() => handleClick(i + 4)}
                isIconOnly
                color={activeBtn === i + 3 ? 'secondary' : ''}
                className={activeBtn === i + 3 ? 'dark' : ''}
                aria-label="Like"
                size="md"
              >
                {item.icon}
              </Button>
            </Tooltip>
          );
        })}
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
      </section>
    </Card>
  );
}

export default Sidebar;
