/** @jsx jsx */
import {
  FunctionComponent,
  ReactNodeArray,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import { jsx, Box } from "theme-ui";
import { Basic } from "../Basic";
import { outerWrapperStyles, listStyles, textStyles } from "./styles";

const Solution: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  variant?: string;
  className?: string;
}> = ({ children, className, index }) => {
  const [header, text, ...rest] = children;
  const items = Children.map(rest, (r: ReactElement, index: number) =>
    cloneElement(r, { className: `item item-${index}` })
  );
  return (
    <Basic className={className} index={index} sx={outerWrapperStyles}>
      {header}
      <Box sx={textStyles}>{text}</Box>
      <Box sx={listStyles}>{items}</Box>
    </Basic>
  );
};

export { Solution };
