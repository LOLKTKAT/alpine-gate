import { signal } from '@preact/signals-react';

// MyContext.js
import React from 'react';

// Creating a context
const MyContext = React.createContext();

export default MyContext;

export const theme = signal('');

export const SectionsCopy = signal([
  {
    sectionName: 'hero',
    header: 'The Future Of Content Creation',
    paragraphCopy:
      'Transform your text into captivating images, compelling articles, and explore limitless possibilities with agimageAi.'
  },
  {
    sectionName: 'unleash',
    header: 'With AGImageAi: Transform Text into Stunning Visuals!',
    paragraphCopy: ''
  },
  {
    sectionName: 'generate articles',
    header: 'Effortlessly generate captivating articles With AlbertAi',
    paragraphCopy:
      "With Albert's intuitive AI-powered features, writing articles becomes a breeze. Say goodbye to writer's block and time-consuming brainstorming sessions. Simply input your preferences, and Albert swiftly crafts tailored articles on-demand."
  },
  {
    sectionName: 'promptEngineering',
    header: 'Elevate your content with AI-driven prompts',
    paragraphCopy:
      'The more detailed your prompt, the more impressive your results. Utilize our prompt engineering feature to effortlessly generate enriched outputs at the click of a button'
  },
  {
    sectionName: 'Choose from',
    header: 'Choose from a range of prompt tools for optimal results',
    paragraphCopy:
      'Transform your short, less detailed prompts into longer, more detailed ones for superior output results. Our prompt engineeringtool specializes in optimizing and expanding your prompts. By refining and adding specifics, it ensures clearer instructions, leading to improved outcomes and enhanced efficiency in your processes.'
  },
  {
    sectionName: 'features to',
    header: 'Features to make your life easier',
    paragraphCopy:
      'Transform your short, less detailed prompts into longer, more detailed ones for superior output results. Our prompt engineeringtool specializes in optimizing and expanding your prompts. By refining and adding specifics, it ensures clearer instructions, leading to improved outcomes and enhanced efficiency in your processes.'
  }
]);

export const toneData = [
  {
    label: 'Focused Plus',
    value: 'Focused plus'
  },
  {
    label: 'Focused',
    value: 'Focused'
  },
  {
    label: 'Focused Less',
    value: 'Focused Less'
  },
  {
    label: 'Focused and Balanced',
    value: 'Focused and Balanced'
  },
  {
    label: 'Balanced',
    value: 'Balanced'
  },
  {
    label: 'Balanced and Creative',
    value: 'Balanced and Creative'
  },
  {
    label: 'Creative',
    value: 'Creative'
  },
  {
    label: 'Creative Less',
    value: 'Creative Less'
  },
  {
    label: 'Creative Plus',
    value: 'Creative Plus'
  },
  {
    label: 'Crazy',
    value: 'Crazy'
  },
  {
    label: 'Crazy Plus',
    value: 'Crazy Plus'
  }
];

export const NumOfImgs = [
  { value: '1' },
  { value: '2' },
  { value: '3' },
  { value: '4' },
  { value: '6' },
  { value: '8' },
  { value: '16' },
  { value: '24' },
  { value: '32' }
];
export const sizes = [
  { value: '1792x1024' },
  { value: '1024x1024' },
  { value: '2048x2048' },
  { value: '4096x4096' },
  { value: '6144x6144' },
  { value: '8K' }
];
export const textLocation = [
  { value: 'top' },
  { value: 'center' },
  { value: 'buttom' }
];
