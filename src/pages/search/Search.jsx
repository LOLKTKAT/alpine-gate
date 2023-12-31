import React from "react";
import { Input, Button } from "@nextui-org/react";
import { search } from "../../assets";
import Output from "../../components/Output";

const Search = () => {
  return (
    <>
      <section className="flex flex-col w-full gap-6">
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
        <Output height="h-full" />
      </section>
    </>
  );
};

export default Search;
