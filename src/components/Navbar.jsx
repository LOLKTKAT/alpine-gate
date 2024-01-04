import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenu,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { AlpineLogo } from "../assets/icons";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["home", "contact", "about", "pricing"];
  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="justify-between capitalize  max-w-1440 lg:h-10 h-full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand>
          <div className="scale-75">
            <AlpineLogo />
          </div>
          <p className="font-bold text-inherit">Alpine Gate</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item) => {
          return (
            <NavbarItem isActive>
              <Link className="text-inherit" href="#">
                {item}
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
              <Link className="w-full capitalize text-white" href="#" size="lg">
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
