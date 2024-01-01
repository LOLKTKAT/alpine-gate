import React from "react";
import {
  SectionHeader,
  Paragraph,
  SubHeader,
} from "../../../components/TextComponents";
import { Card, Link } from "@nextui-org/react";
import { SectionsCopy } from "../../../data";
import { landingPageImages } from "../../../assets";
import BlurredCirculs from "../../../components/BlurredCirculs";
function UnleashSection({ sectionId }) {
  const { header } = SectionsCopy.value[sectionId];

  const CardsInfo = [
    {
      title: "Group of students",
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatibus aperiam incidunt error, officia quisquam illo pariatur sit voluptatem provident totam temporibus suscipit enim quam blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.",
      path: "",
      img: landingPageImages[10],
    },
    {
      title: "Abstract Image",
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatibus aperiam incidunt error, officia quisquam illo pariatur sit voluptatem provident totam temporibus suscipit enim quam blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.",
      path: "",
      img: landingPageImages[1],
    },
    {
      title: "Anime character",
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatibus aperiam incidunt error, officia quisquam illo pariatur sit voluptatem provident totam temporibus suscipit enim quam blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.",
      path: "",
      img: landingPageImages[5],
    },
    {
      title: "Monalisa painted by AI",
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatibus aperiam incidunt error, officia quisquam illo pariatur sit voluptatem provident totam temporibus suscipit enim quam blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.",
      path: "",
      img: landingPageImages[13],
    },
    {
      title: "Pixar Royals",
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatibus aperiam incidunt error, officia quisquam illo pariatur sit voluptatem provident totam temporibus suscipit enim quam blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.",
      path: "",
      img: landingPageImages[6],
    },
    {
      title: "Landscape",
      discreption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea voluptatibus aperiam incidunt error, officia quisquam illo pariatur sit voluptatem provident totam temporibus suscipit enim quam blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.blanditiis reiciendis exercitationem nulla harum. blanditiis reiciendis exercitationem nulla harum.",
      path: "",
      img: landingPageImages[3],
    },
  ];

  return (
    <article className=" w-full light:bg-white pt-40 px-22 flex flex-col relative items-center">
      <BlurredCirculs />
      <div className="seaction-header text-3xl z-10">
        <SectionHeader>{header}</SectionHeader>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {CardsInfo.map((card) => {
          return (
            <Card className=" bg-background/100 dark:bg-default-100/20 examples-card rounded-2xl ">
              <section>
                <SubHeader className="smaller-header">{card.title}</SubHeader>
                <Paragraph>{card.discreption.slice(0, 213)}...</Paragraph>
                <Link href="#">
                  <Paragraph>Read full prompt</Paragraph>
                </Link>
              </section>
              <section>
                <div className="example-card__image  rounded-2xl">
                  <img
                    className="h-full w-full object-cover rounded-2xl"
                    src={card.img}
                    alt={card.title}
                  />
                </div>
              </section>
            </Card>
          );
        })}
      </div>
    </article>
  );
}

export default UnleashSection;
