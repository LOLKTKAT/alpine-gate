import React from 'react';
import { SectionHeader } from '../../../components/TextComponents';
import BlurredCirculs from '../../../components/BlurredCirculs';
import UseCaseComponents from '../../../components/UseCaseComponents';

function ChooseFrom() {
  return (
    <article className=" relative flex w-full flex-col items-center text-white light:bg-white  light:text-black">
      <BlurredCirculs />
      <SectionHeader>
        Choose from a range of prompt tools for optimal results
      </SectionHeader>
      <div className="flex w-full w-full items-center lg:w-3/4">
        <UseCaseComponents />
      </div>
    </article>
  );
}

export default ChooseFrom;
