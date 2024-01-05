import React from "react";
import { Button } from "@nextui-org/react";
import { TOGGLE_MENU } from "../signals";

const ToggleBtn = ({ children }) => {
  function handleClick() {
    if (TOGGLE_MENU.value) {
      TOGGLE_MENU.value = false;
    } else TOGGLE_MENU.value = true;
  }
  return (
    <Button onClick={() => handleClick()} isIconOnly variant="bordered">
      {children}
    </Button>
  );
};

export default ToggleBtn;
