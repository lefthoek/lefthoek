/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";

const DisplayText: FunctionComponent = ({ children }) => {
  return <h1>{children}</h1>;
};

export default DisplayText;
