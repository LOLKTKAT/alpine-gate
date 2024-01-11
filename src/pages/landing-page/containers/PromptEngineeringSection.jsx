import React from 'react';
import { generatedImage7 } from '../../../assets';
import { Card, Button } from '@nextui-org/react';
import { Paragraph, SectionHeader } from '../../../components/TextComponents';
import { SectionsCopy } from '../../../data';
import { MagicWandIcon } from '../../../assets/icons';
import BlurredCirculs from '../../../components/BlurredCirculs';

function PromptEngineeringSection({ sectionId }) {
  const { header, paragraphCopy } = SectionsCopy.value[sectionId];
  return (
    <article className="prompt-engineering relative flex w-full flex-col items-center justify-around  light:bg-white">
      <BlurredCirculs />
      <SectionHeader>{header}</SectionHeader>
      <Paragraph>{paragraphCopy}</Paragraph>
      <div className="z-10 flex w-full flex-col items-center justify-around gap-10 lg:flex-row">
        <section className="">
          <div className="h-80 lg:h-96">
            <img
              className="aspect-1 h-full w-full rounded-xl object-cover"
              src={generatedImage7}
              alt="blog image"
            />
          </div>
        </section>
        <section className="flex w-full flex-col gap-10 lg:w-2/5">
          <Card className="landing__chat-output h-[500px] w-full bg-background/100 p-5 dark:bg-default-100/30">
            <Paragraph>
              The painting depicts a tranquil scene of a man and woman seated
              opposite each other at a wooden table, deeply engrossed in
              studying. The man, to the left, leans forward with his elbows on
              the table, holding a pen in his right hand and resting his chin on
              his left, suggesting a moment of thoughtful consideration. The
              woman, on the right, sits upright with a book open in front of
              her, her left hand steadying the pages while her right hand
              appears to be taking notes. Both figures are surrounded by an
              array of books, papers, and scholarly materials, indicating a
              serious academic endeavor. The man is dressed in a casual,
              long-sleeved shirt with rolled-up sleeves, and trousers, his
              attire suggesting a relaxed yet focused demeanor. His hair is
              neatly combed, and he wears glasses that reflect the concentration
              in his eyes. The woman wears a comfortable blouse and her hair is
              pulled back, keeping it out of her face as she studies. The light
              source, coming from the upper left of the composition, casts soft
              shadows and highlights the textures of the paper and the fabric of
              their clothing, adding depth to the scene. The background of the
              painting is subdued, featuring a neutral wall that allows the
              viewer's focus to remain on the central figures. A bookshelf
              brimming with books is partially visible behind the man,
              reinforcing the academic setting. The color palette is warm and
              inviting, with earthy tones that evoke a sense of calm and quiet
              intellectual pursuit. The artist's brushwork is precise, capturing
              the serene concentration of the subjects and the intimate
              atmosphere of shared study.
            </Paragraph>
          </Card>
          <div className="relative flex" action="">
            <Button
              type="submit"
              color="secondary"
              endContent={<MagicWandIcon />}
            >
              Enhance Prompt
            </Button>
          </div>
        </section>
      </div>
    </article>
  );
}

export default PromptEngineeringSection;
