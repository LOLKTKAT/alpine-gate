import React, { useState } from 'react';
import { Input, Button } from '@nextui-org/react';
import { search } from '../../assets';
import Output from '../../components/Output';

const Search = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <>
      <section className="flex w-full flex-col gap-6 px-4">
        <Input
          type="text"
          label="Search"
          size="lg"
          placeholder="Search For Anything"
          labelPlacement="outside"
          startContent={<img src={search} />}
          endContent={
            <Button size="sm" color="secondary">
              Search
            </Button>
          }
        />
        <Output
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          height="h-full"
        />
      </section>
    </>
  );
};

export default Search;
