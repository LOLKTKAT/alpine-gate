import React from 'react';
export const Header = ({ children }) => {
  return <h1 className="text-4xl font-medium lg:text-6xl">{children}</h1>;
};
export const SectionHeader = ({ children }) => {
  return (
    <h2 className="text-center text-3xl font-semibold lg:text-start lg:text-4xl">
      {children}
    </h2>
  );
};
export const SubHeader = ({ children }) => {
  return <div className="text-xl  font-semibold">{children}</div>;
};
export const ParagraphHeader = ({ children }) => {
  return <p className="text-base font-medium">{children}</p>;
};
export const Paragraph = ({ children }) => {
  return <p className="font-light text-foreground lg:text-base">{children}</p>;
};
export const TinyText = ({ children }) => {
  return <p className="text-sm font-light">{children}</p>;
};
