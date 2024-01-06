import React, { useState } from "react";
import { Input, Button, Card } from "@nextui-org/react";
import { search } from "../../assets";
import Output from "../../components/Output";

const Search = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <>
      <section className="flex flex-col px-4 w-full gap-6">
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
