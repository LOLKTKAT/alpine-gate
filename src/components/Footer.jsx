import React from "react";
import { AlpineLogo } from "../assets/icons";
import { Input, Button } from "@nextui-org/react";
import { Paragraph } from "./TextComponents";
import {
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  tictokIcon,
} from "../assets";
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
          <Paragraph>
            <div className="cursor-pointer">dashboard</div>
          </Paragraph>
        </div>
      </section>
      <section className="flex lg:flex-row flex-col gap-10 justify-between w-full items-center  lg:items-end">
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
        <div className="flex items-center gap-3 flex-col">
          <div className="flex items-center gap-3">
            <a>
              <img className="h-7" src={facebookIcon} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/agimage.ai">
              <img className="h-7" src={instagramIcon} alt="instagram" />
            </a>
            <img className="h-7" src={linkedinIcon} alt="linkedin" />
            <img className="h-7" src={tictokIcon} alt="tiktok" />
          </div>
          <Paragraph>© 2023 - ALPINEGATE Technologies Inc </Paragraph>
        </div>
      </section>
    </article>
  );
}
