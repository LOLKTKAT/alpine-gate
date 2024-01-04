import React from "react";
import { AlpineLogo } from "../assets/icons";
import { Input, Button } from "@nextui-org/react";
import { Paragraph } from "./TextComponents";
export function Footer() {
  return (
    <article className="pricing-section w-full light:bg-white flex flex-col gap-6 capitalize items-center">
      <section className="flex flex-col gap-1 cursor-pointer items-center">
        <div className="p-2 w-fit bg-purple-700/30  rounded-full">
          <AlpineLogo />
        </div>
        <div>ALPINEGATE</div>
      </section>
      <section className="text-center">
        <div className="flex gap-20">
          <Paragraph>
            <div className="cursor-pointer">privacy</div>
          </Paragraph>
          <Paragraph>
            <div className="cursor-pointer">features</div>
          </Paragraph>
          <Paragraph>
            <div className="cursor-pointer">contact</div>
          </Paragraph>
          <Paragraph>
            <div className="cursor-pointer">about</div>
          </Paragraph>
        </div>
      </section>
      <section className="flex justify-between w-full items-end">
        <div className="flex items-end gap-3">
          <Input
            type="email"
            label="Subscribe to out news letter"
            placeholder="Enter your email"
            labelPlacement="outside"
            size="lg"
          />

          <Button size="lg" color="secondary" className="rounded-lx">
            Subscribe
          </Button>
        </div>
        <div>
          <Paragraph>© 2023 - ALPINEGATE Technologies Inc </Paragraph>
        </div>
      </section>
    </article>
  );
}
