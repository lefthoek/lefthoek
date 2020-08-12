/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import { FunctionComponent } from "react";
// @ts-ignore
import { Menu as MenuIcon } from "gatsby-theme-docz/src/components/Icons";
import { menuButtonStyles } from "./styles";

export const MenuButton: FunctionComponent<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <Button sx={menuButtonStyles} onClick={onClick}>
      <MenuIcon />
    </Button>
  );
};

