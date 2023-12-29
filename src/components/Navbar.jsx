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

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["home", "contact", "about", "pricing"];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="" shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit ">ACME</p>
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
        <NavbarMenu>
          {navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                href="#"
                size="lg"
              >
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
