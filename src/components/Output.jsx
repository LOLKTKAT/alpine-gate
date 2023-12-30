import React from "react";
import { Card, Button, Tooltip } from "@nextui-org/react";
import { XIcon } from "../assets/icons";

function Output() {
  return (
    <Card className="output overflow-y-scroll ">
      <div className="flex sticky pl-6 pr-6 pt-3 top-0 gap-2 justify-end ">
        <Tooltip content="Clear Prompt" delay={1000}>
          <Button
            variant="flat"
            className="border-1 outline-none focus:outline-none"
            isIconOnly
            endContent={<XIcon />}
            radius="sm"
          ></Button>
        </Tooltip>
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
