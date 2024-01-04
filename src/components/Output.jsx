import React from "react";
import { Card, Button, Tooltip, Link } from "@nextui-org/react";
import { XIcon } from "../assets/icons";
import { SubHeader, ParagraphHeader, Paragraph } from "./TextComponents";
function Output({ height }) {
  return (
    <Card className={`overflow-y-scroll ${height}`}>
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
        <p>
          <SubHeader>
            How Forests Communicate Underground The Wood Wide Web Forests
          </SubHeader>

          <ParagraphHeader>The Wood Wide Web</ParagraphHeader>
          <Paragraph>
            Forests are complex ecosystems where trees are interconnected in a
            myriad of ways, particularly through an underground network often
            referred to as the "Wood Wide Web." This network consists of
            mycorrhizal fungi, which form symbiotic relationships with the roots
            of trees. Through these connections, trees can exchange nutrients,
            water, and chemical signals with one another, effectively
            communicating and sharing resources. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Laboriosam laborum, obcaecati soluta
            nulla beatae porro, cumque excepturi tempora corporis quas
            doloremque labore? Nam ipsum necessitatibus molestiae nisi at
            voluptates laboriosam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nemo iusto, omnis aliquid inventore sint earum
            eius rem nobis. Quo saepe perferendis, officia labore vel, nisi
            cumque, animi optio quisquam officiis facere? Temporibus facilis
            quis aut nisi cupiditate! Odit cumque animi dignissimos, blanditiis
            consequuntur sit quae! Doloribus, provident perferendis iusto rerum
            ipsam doloremque? Obcaecati neque porro laborum sint harum
            consectetur dolore?
          </Paragraph>
          <ParagraphHeader>For further information</ParagraphHeader>
          <Paragraph>
            on how trees communicate through underground networks, you can
            explore the resources provided in the links below: -
          </Paragraph>

          <Link showAnchorIcon href="#" color="foreground">
            <li>
              How Trees Secretly Talk to Each Other in the Forest | Decoder
            </li>
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default Output;
