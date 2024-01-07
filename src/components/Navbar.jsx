import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle
} from '@nextui-org/react';
import { AlpineLogo } from '../assets/icons';
import { ParagraphHeader } from './TextComponents';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'contact', 'about', 'pricing'];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="max-w-1440 h-full  justify-between capitalize lg:h-10"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden "
        />
        <NavbarBrand>
          <div className="scale-75">
            <AlpineLogo />
          </div>
          <p className="font-bold text-inherit">
            <a href="/">Alpine Gate</a>
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {navItems.map((item) => {
          return (
            <NavbarItem isActive>
              <Link className="text-inherit" href="#">
                <ParagraphHeader>{item}</ParagraphHeader>
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="secondary"
            href="#"
            variant="bordered"
            className="border-0"
          >
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarMenu className="bg-black/80 ">
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full capitalize text-white" href="/" size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  );
}

export default NavBar;
