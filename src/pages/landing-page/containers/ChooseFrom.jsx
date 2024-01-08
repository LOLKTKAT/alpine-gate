import React from 'react';
import { SectionHeader } from '../../../components/TextComponents';
import BlurredCirculs from '../../../components/BlurredCirculs';
import UseCaseComponents from '../../../components/UseCaseComponents';

function ChooseFrom() {
  return (
    <article className="prompt-engineering relative flex w-full flex-col items-center text-white light:bg-white  light:text-black">
      <BlurredCirculs />
      <SectionHeader>
        Choose from a range of prompt tools for optimal results
      </SectionHeader>
      <div className="flex w-full items-center ">
        <UseCaseComponents />
      </div>
    </article>
  );
}

export default ChooseFrom;
