/** @jsx jsx */
import { FunctionComponent, ReactNode, ReactNodeArray } from "react";
import { jsx, Image, Box } from "theme-ui";
import { Basic } from "../Basic";
import { outerWrapper, innerWrapper } from "./styles";

const Feature: FunctionComponent<{
  before: string;
  after: string;
  index: number;
  variant?: string;
  className?: string;
}> = ({ before, children, after, index, className }) => {
  return (
    <Basic index={index} sx={outerWrapper} className={className}>
      {children}
      <Box sx={innerWrapper}>
        <Image src={before} />
        <Image src={after} />
      </Box>
    </Basic>
  );
};

export { Feature };
