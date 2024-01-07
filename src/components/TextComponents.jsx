import React from "react";
export const Header = ({ children }) => {
  return <h1 className="lg:text-6xl text-4xl font-medium">{children}</h1>;
};
export const SectionHeader = ({ children }) => {
  return (
    <h2 className="lg:text-4xl text-3xl text-center lg:text-start font-semibold">
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
  return (
    <p className="lg:text-base text-foreground/80 font-light">{children}</p>
  );
};
export const TinyText = ({ children }) => {
  return <p className="text-xs font-semibold">{children}</p>;
};
