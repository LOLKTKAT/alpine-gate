import React, { useState } from 'react';
import {
  SectionHeader,
  Paragraph,
  SubHeader
} from '../../../components/TextComponents';
import {
  Card,
  Link,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  Textarea
} from '@nextui-org/react';
import { SectionsCopy } from '../../../data';
import { landingPageImages } from '../../../assets';
import BlurredCirculs from '../../../components/BlurredCirculs';
import { useNavigate } from 'react-router-dom';

const CardsInfo = [
  {
    title: 'Group of students',
    discreption:
      "The image depicts a group of students collaborating in a setting that is infused with the aesthetic elements of retrowave style. The scene is vibrant with neon colors, and the students are gathered around a futuristic table that glows with light. The background features a digital landscape reminiscent of 1980s computer graphics, with a grid floor that extends to a horizon beneath a purple and blue sky streaked with digital clouds. In the foreground, a diverse group of students is engaged in a collaborative effort. There are four students in total, two standing and two sitting. The standing students lean over the table, pointing at a holographic projection that emanates from the table's center. This projection displays abstract shapes and charts that suggest a digital interface or a virtual project the students are discussing. The seated students are interacting with tablet-like devices, swiping through screens with a touch of their fingers, possibly researching or contributing data to the group's project. All the students are dressed in attire that combines 1980s fashion with modern sensibilities. Their clothes feature sharp angles, neon accents, and geometric patterns that complement the retrowave environment. One student wears a jacket with shoulder pads and a digital watch that glows with the same neon hue as the surrounding environment. Another has on high-waisted pants and a headband, their hair styled in voluminous waves. The students' expressions are focused and animated, conveying a sense of engagement and enthusiasm for their collaboration. Their body language suggests a dynamic exchange of ideas as they gesture towards the hologram and their devices. The retrowave style is further emphasized by the lighting and color scheme. The scene is bathed in a palette of hot pinks, electric blues, and purples, with the occasional flare of neon green and yellow highlighting technological elements. The lighting casts dramatic shadows and gives the students a radiant outline, enhancing the futuristic feel. The walls around the students are adorned with posters and artwork that pay homage to the retro-futuristic theme, featuring images of classic cars with neon underglow, palm trees against a sunset, and pixelated video game characters. The overall mood is one of nostalgia mixed with a sense of forward-thinking innovation, encapsulating the essence of the retrowave style in this collaborative academic setting.",
    path: '',
    img: landingPageImages[10]
  },
  {
    title: 'Guernica Style Abstract Image',
    discreption:
      'The image presents a chaotic and powerful scene reminiscent of Pablo Picassos famous mural, "Guernica." It is a monochromatic tapestry of anguished figures, animals, and disjointed objects, all interwoven into a dynamic composition that conveys a sense of turmoil and distress. The lack of color enhances the dramatic impact of the scene, with its sharp contrasts of black, white, and shades of gray creating an oppressive atmosphere that is both haunting and evocative. In the foreground, a grieving woman cradles the lifeless body of a child, her eyes wide with despair, mouth open in a silent scream. To the right, a bull stands with a menacing presence, its body fragmented and abstracted, yet its gaze is penetrating and full of foreboding. Beneath these central figures, broken bodies and dismembered parts are scattered, suggesting the aftermath of a violent event. The background is a jumble of overlapping shapes and lines, some resembling buildings or machinery, others simply abstract forms that contribute to the overall sense of disarray. Above the chaos, a single light bulb glows ominously, casting stark shadows and serving as a harsh reminder of the scenes modern context. A horse in the mid-ground rears up in agony, pierced by a spear, while a warrior-like figure seems to fall in battle, adding to the narrative of conflict and suffering. The entire composition is a visual cacophony, with each element deliberately placed to evoke an emotional response, creating a powerful statement on the horrors of war and the universal pain it inflicts on humanity.',
    path: '',
    img: landingPageImages[1]
  },
  {
    title: 'Anime character',
    discreption:
      "The anime character is a striking figure with an ethereal quality, standing confidently with a slight, knowing smile. They have large, expressive eyes that are a deep, vibrant shade of violet, framed by long, dark eyelashes. Their hair is a cascade of azure blue, with bangs neatly swept to one side, revealing a smooth, fair forehead. The character's attire is a blend of traditional and futuristic elements, featuring a high-collared, sleeveless top with intricate patterns and a pair of form-fitting pants that complement their slender physique. Adorning their outfit, there are several accessories that add to the character's mystique. A pair of delicate, silver hoop earrings glint in their ears, catching the light with every subtle movement. Around their neck is a thin, black choker from which a small, sparkling gemstone pendant dangles. On their wrists, they wear matching cuffs that appear to be made of a polished, metallic material, each etched with runes or symbols that suggest a connection to a fantastical power or lineage. The character's pose and the environment around them suggest a narrative context. They stand on a grassy knoll, with a backdrop of a twilight sky painted in hues of pink and purple, the last rays of the sun casting a soft glow on their figure. One hand is resting on their hip, while the other holds what seems to be a magical staff, topped with an ornate, crystal-like structure that radiates a subtle light. Their attire flutters slightly in a gentle breeze, hinting at a serene yet potent energy that surrounds them. The overall impression is one of a character who is both a guardian of peace and a formidable force, ready to embark on an adventure or engage in a battle of wits or magic.",
    path: '',
    img: landingPageImages[5]
  },
  {
    title: 'Monalisa painted by AI',
    discreption:
      "The image depicts a rendition of the iconic Mona Lisa, but with noticeable differences that suggest it was created by artificial intelligence. The overall composition maintains the original's layout with Mona Lisa seated against a landscape backdrop. However, the AI has introduced variations in textures, colors, and brushstrokes that give the painting a unique, digitalized aesthetic. In this AI interpretation, Mona Lisa's face carries the familiar enigmatic smile, but her features are slightly altered, perhaps more symmetrical or with exaggerated proportions that deviate from the subtle realism of Leonardo da Vinci's work. Her eyes might seem more lifelike or, conversely, have an uncanny, glassy appearance that hints at their artificial origin. The AI's algorithm has replicated the soft sfumato technique but with a digital twist, creating a blend of sharp and blurred edges that are not typically found in traditional oil paintings. The background landscape, while still reminiscent of the rolling hills and winding paths of the original, may have surreal elements or a dreamlike quality, with colors that are either more vibrant or have an unnatural palette. The sky could be rendered with smooth gradients or in a pixelated style, and the vegetation might appear denser, sparser, or even stylized in a way that echoes the algorithm's processing patterns. The overall effect is a familiar yet distinctly modern take on one of the world's most famous artworks, showcasing how AI can both mimic and reinterpret human creativity.",
    path: '',
    img: landingPageImages[13]
  },
  {
    title: 'Pixar Royals',
    discreption:
      "The image features a Pixar-style animated prince and princess standing side by side. The prince is dressed in a regal outfit with a blue and gold tunic, brown trousers, and tall brown boots, complemented by a red cape that flows behind him. He has a confident smile, neatly styled brown hair, and is holding a silver sword with a golden hilt. The princess stands with grace, wearing a flowing gown that transitions from a light blue bodice to a deep blue skirt adorned with subtle sparkles, as if hinting at a magical quality. Her blonde hair is styled in an elegant updo with a few loose curls framing her face, and she wears a delicate tiara. Both characters exude a sense of nobility and charm, befitting their royal status. The prince's attire is detailed with intricate patterns and embroidery, suggesting his royal lineage and the kingdom's wealth. His broad shoulders and confident stance indicate his readiness to protect his realm. The princess's dress is equally detailed, with fine lace at the edges of her sleeves and neckline. She holds a book in one hand, suggesting intelligence and a love for knowledge, and her other hand rests gently on the prince's arm, showing their close bond. Their expressions are warm and inviting, making them approachable despite their royal bearings. The background of the image is a blurred representation of a grand castle with tall spires, indicating that the prince and princess are standing in their royal courtyard. The sky is a twilight blue with the last rays of the sun casting a soft glow on the scene, creating an atmosphere of peace and tranquility. The attention to detail in the image, from the characters' expressions to the textures of their clothing and the ambient lighting, conveys a storybook quality that is characteristic of Pixar's animation style.",
    path: '',
    img: landingPageImages[6]
  },
  {
    title: 'Landscape',
    discreption:
      'The image depicts a serene, minimalistic landscape with a vast, open sky dominating the upper portion of the scene. Below the expansive sky is a flat horizon line, with a single, small tree standing alone in the center. The trees sparse branches reach outward, creating a delicate silhouette against the sky. The color palette is muted, with soft pastel tones that suggest either dawn or dusk. In the foreground, the land is featureless and stretches out to meet the horizon in a gentle slope. The texture of the ground is smooth, lacking any distinct details such as rocks or grass, which contributes to the overall simplicity of the scene. The trees shadow, faint and elongated, stretches towards the viewer, hinting at the position of a distant, unseen light source. The sky is a canvas of gradient colors, transitioning from a warm, light hue near the horizon to a cooler, darker shade as it extends upward. There are no clouds to interrupt the vastness of the sky, reinforcing the minimalist nature of the image. The interaction between the tree and the surrounding space evokes a sense of solitude and calm, inviting contemplation from the viewer.',
    path: '',
    img: landingPageImages[3]
  }
];

function UnleashSection({ sectionId }) {
  const { header } = SectionsCopy.value[sectionId];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentPrompt, setCurrentPrompt] = useState('');
  const navigate = useNavigate();

  function handleReadingPrompt(text) {
    setCurrentPrompt(text);
    onOpen();
  }

  return (
    <article className=" px-22 relative flex w-full flex-col items-center  pt-40 light:bg-white">
      <Modal className="dark" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Prompt</ModalHeader>
              <ModalBody>
                <Textarea
                  isReadOnly
                  label="Description"
                  variant="bordered"
                  labelPlacement="outside"
                  placeholder="Enter your description"
                  value={currentPrompt}
                  className="max-w-md"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="secondary"
                  variant="solid"
                  onClick={() => {
                    navigate('/sign-up');
                  }}
                  onPress={onClose}
                >
                  Try now
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <BlurredCirculs />
      <div className="seaction-header z-10  text-3xl">
        <SectionHeader>{header}</SectionHeader>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {CardsInfo.map((card) => {
          return (
            <Card className=" h-[28rem] w-[22rem] rounded-2xl bg-background/100 p-5 dark:bg-default-100/20 ">
              <section>
                <SubHeader className="smaller-header">{card.title}</SubHeader>
                <div className="h-[9rem] overflow-hidden">
                  <Paragraph>{card.discreption}...</Paragraph>
                </div>
                <Link
                  className="cursor-pointer"
                  onClick={() => handleReadingPrompt(card.discreption)}
                >
                  Read full prompt
                </Link>
              </section>
              <section>
                <div className="example-card__image  rounded-2xl">
                  <img
                    className="h-full w-full rounded-2xl object-cover"
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
