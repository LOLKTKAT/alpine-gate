import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  Slider,
  Card,
  Tab,
  Tabs,
  Divider
} from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/select';
import { NumOfImgs, sizes, toneData } from '../data';
import { promptUseCases } from './UseCaseComponents';
import { ParagraphHeader, TinyText } from './TextComponents';
import {
  HistoryIcon,
  GridDotsBottomIcon,
  GridDotsTopIcon,
  GridDotsCenterIcon,
  EndpointsIcon
} from '../assets/icons';

const CreativitySlider = {
  placeholder: 'Select a Tone',
  value: '',
  items: [],
  size: 'sm',
  color: 'secondary',
  elementType: 'slider',
  className: 'max-w-md'
};

const ToolsEndPoints = [
  [
    CreativitySlider,
    {
      label: 'Size',
      placeholder: 'Select a Size',
      items: sizes,
      elementType: 'select'
    },
    {
      label: 'Number of images',
      placeholder: 'select a number',
      items: NumOfImgs,
      elementType: 'select'
    },
    {
      label: 'Text to insert',
      placeholder: '',
      elementType: 'input',
      labelPlacement: 'inside'
    }
  ],
  [
    {
      label: 'UseCase',
      placeholder: 'Select a Tone',
      items: promptUseCases,
      elementType: 'select'
    },
    CreativitySlider,
    {
      elementType: 'button',
      innerText: 'turn on mic'
    }
  ]
];

const Tools = ({ page }) => {
  const [showHistory, setShowHistory] = useState(false);
  const [sliderLabel, setSliderLabel] = useState('Balanced');
  const [sliderValue, setSliderValue] = useState(3);

  useEffect(() => {
    for (let i = 0; i < 11; i++) {
      if (sliderValue == i - 5) setSliderLabel(toneData[i].label);
    }
  }, [sliderValue]);

  if (page > 1) return;

  return (
    <>
      <Card
        className={`overflow-x-hiddenlg:block right-0 top-0 mb-4 h-full w-full p-5 pb-10 lg:relative lg:w-72`}
      >
        <div className="header mb-4 flex justify-between ">
          <div className="cursor-pointer">
            {page === 0 ? (
              <ParagraphHeader>AGImageAI</ParagraphHeader>
            ) : (
              <ParagraphHeader>Albert</ParagraphHeader>
            )}
          </div>
          <div onClick={() => setShowHistory(!showHistory)}>
            {showHistory ? (
              <div className="flex cursor-pointer items-center gap-1">
                <EndpointsIcon />
                <ParagraphHeader>Endpoints</ParagraphHeader>
              </div>
            ) : (
              <div className="flex cursor-pointer items-center gap-1">
                <HistoryIcon />
                <ParagraphHeader>History</ParagraphHeader>
              </div>
            )}
          </div>
        </div>
        {showHistory ? (
          <HistorySection />
        ) : (
          <EndpointsSection
            sliderLabel={sliderLabel}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            page={page}
          />
        )}
      </Card>
    </>
  );
};

export default Tools;

function HistorySection() {
  return (
    <section className="history landing__chat-output max-h-full overflow-y-scroll">
      <div className="flex cursor-pointer flex-col gap-4">
        <div>
          <ParagraphHeader>Prompt example NO.1</ParagraphHeader>
          <TinyText>12/09/2023 15:10</TinyText>
        </div>
        <Divider />
      </div>
    </section>
  );
}

function EndpointsSection({ page, sliderLabel, sliderValue, setSliderValue }) {
  return (
    <>
      <section className="flex h-full flex-col justify-between pb-4">
        <div className="flex flex-col gap-5 ">
          {ToolsEndPoints[page].map((endPoint) => {
            if (endPoint.elementType === 'select')
              return (
                <Select
                  items={endPoint.items}
                  label={endPoint.label}
                  placeholder={endPoint.placeholder}
                  size="sm"
                  className="danger"
                >
                  {(items) => (
                    <SelectItem key={items.value}>{items.value}</SelectItem>
                  )}
                </Select>
              );
            if (endPoint.elementType === 'slider')
              return (
                <Slider
                  label={sliderLabel}
                  placeholder={endPoint.placeholder}
                  items={endPoint.items}
                  size="sm"
                  step={1}
                  showSteps={true}
                  color="secondary"
                  maxValue={5}
                  minValue={-5}
                  fillOffset={0}
                  onChange={setSliderValue}
                  value={sliderValue}
                  formatOptions={{
                    signDisplay: 'always'
                  }}
                />
              );
            if (endPoint.elementType === 'input')
              return (
                <Input
                  type={endPoint.type}
                  labelPlacement="inside"
                  label={endPoint.label}
                  placeholder={endPoint.ParagraphHeader}
                  size="sm"
                  color=""
                />
              );
            if (endPoint.elementType === 'button')
              return (
                <Button variant="flat" className={endPoint.className}>
                  {endPoint.innerText}
                </Button>
              );
          })}
          {page === 0 && (
            <div className="flex justify-between">
              <TinyText>Text Location</TinyText>
              <Tabs aria-label="Options">
                <Tab
                  key="photos"
                  title={
                    <div title="Bottom">
                      <GridDotsBottomIcon />
                    </div>
                  }
                />
                <Tab
                  key="music"
                  title={
                    <div title="Center">
                      <GridDotsCenterIcon />
                    </div>
                  }
                />
                <Tab
                  key="videos"
                  title={
                    <div title="Top">
                      <GridDotsTopIcon />
                    </div>
                  }
                />
              </Tabs>
            </div>
          )}
        </div>
        <div className="w-full">
          <Button className="w-full" color="secondary">
            {page == 0 ? 'Download Images' : 'Download Output'}
          </Button>
        </div>
      </section>
    </>
  );
}
