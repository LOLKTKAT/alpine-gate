import React from "react";
import {
  Card,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

function Output() {
  function handleAction(key) {
    if (key === "history") {
      alert("history");
    }
  }
  return (
    <Card className="output overflow-y-scroll ">
      <div className="flex sticky pl-6 pr-6 pt-3 top-0 gap-2 justify-end ">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="border-1 text-2xl"
              isIconOnly
              aria-label="Clear"
            >
              ⋮
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Action event example"
            onAction={(key) => handleAction(key)}
          >
            <DropdownItem key="new">Clear</DropdownItem>
            <DropdownItem key="history">History</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="pl-6 pr-6">
        pool FC for the 2020-21 season. See the last and upcoming matches of the
        first team, men, women, U23s and U18s. Liverpool FC - YouTube
        https://www.youtube.com/user/LiverpoolFC Get closer to the Reds than
        anyone else!Well, you're in the right place with new and exclusive
        uploads bringing you closer to the Reds, every week. Watch mat...
        Liverpool FC — Fixtures https://www.liverpoolfc.com/fixtures Find out
        the next match dates and times for Liverpool FC in the Emirates FA Cup,
        Europa League and other competitions. See the fixtures, results and
        stats for the club's matches in 2023 and 2024. pool FC for the 2020-21
        season. See the last and upcoming matches of the first team, men, women,
        U23s and U18s. Liverpool FC - YouTube
        https://www.youtube.com/user/LiverpoolFC Get closer to the Reds than
        anyone else!Well, you're in the right place with new and exclusive
        uploads bringing you closer to the Reds, every week. Watch mat...
        Liverpool FC — Fixtures https://www.liverpoolfc.com/fixtures Find out
        the next match dates and times for Liverpool FC in the Emirates FA Cup,
        Europa League and other competitions. See the fixtures, results and
        stats for the club's matches in 2023 and 2024. pool FC for the 2020-21
        season. See the last and upcoming matches of the first team, men, women,
        U23s and U18s. Liverpool FC - YouTube
        https://www.youtube.com/user/LiverpoolFC Get closer to the Reds than
        anyone else!Well, you're in the right place with new and exclusive
        uploads bringing you closer to the Reds, every week. Watch mat...
        Liverpool FC — Fixtures https://www.liverpoolfc.com/fixtures Find out
        the next match dates and times for Liverpool FC in the Emirates FA Cup,
        Europa League and other competitions. See the fixtures, results and
        stats for the club's matches in 2023 and 2024. pool FC for the 2020-21
        season. See the last and upcoming matches of the first team, men, women,
        U23s and U18s. Liverpool FC - YouTube
        https://www.youtube.com/user/LiverpoolFC Get closer to the Reds than
        anyone else!Well, you're in the right place with new and exclusive
        uploads bringing you closer to the Reds, every week. Watch mat...
        Liverpool FC — Fixtures https://www.liverpoolfc.com/fixtures Find out
        the next match dates and times for Liverpool FC in the Emirates FA Cup,
        Europa League and other competitions. See the fixtures, results and
        stats for the club's matches in 2023 and 2024.
      </div>
    </Card>
  );
}

export default Output;
