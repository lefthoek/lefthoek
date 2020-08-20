/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { FunctionComponent } from "react";

const heading: (tagName: any) => FunctionComponent = (tagName) => {
  const TagName = Styled[tagName];
  return (props) => {
    return <TagName {...props} />;
  };
};

export const h1 = heading("h1");
export const h2 = heading("h2");
export const h3 = heading("h3");
export const h4 = heading("h4");
export const h5 = heading("h5");
export const h6 = heading("h6");
