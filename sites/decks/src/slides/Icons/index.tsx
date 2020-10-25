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
import {
  outerWrapperStyles,
  longOuterWrapperStyles,
  shortListStyles,
  longListStyles,
} from "./styles";

const Icons: FunctionComponent<{
  children: ReactNodeArray;
  index: number;
  variant?: string;
  className?: string;
}> = ({ children, className, index }) => {
  const [header, ...rest] = children;
  const items = Children.map(rest, (r: ReactElement, index: number) =>
    cloneElement(r, { className: `item item-${index}` })
  );
  const isShortList = items.length < 4;
  return (
    <Basic
      className={className}
      index={index}
      sx={isShortList ? outerWrapperStyles : longOuterWrapperStyles}
    >
      {header}
      <Box sx={isShortList ? shortListStyles : longListStyles}>{items}</Box>
    </Basic>
  );
};

export { Icons };
