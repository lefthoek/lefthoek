import {SxStyleProp} from "theme-ui";

export const outerWrapperStyles: ({
  numberOfElements,
}: {
  numberOfElements: number;
}) => SxStyleProp = ({numberOfElements}) => {
  return {
    display: "grid",
    gridGap: ["1rem"],
    gridTemplateColumns: `repeat(${numberOfElements}, 1fr)`,
  };
};
