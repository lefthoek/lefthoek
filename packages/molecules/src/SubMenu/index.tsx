/** @jsx jsx */
import { useState } from "react";
import { jsx, Heading, Box } from "theme-ui";
import { FunctionComponent } from "react";
import { NavLink } from "@lefthoek/atoms";
import { Doc, Entry } from "@lefthoek/types";
import { SlideOpen } from "./animations";
import { subMenuStyles, headingStyles } from "./styles";

export const SubMenu: FunctionComponent<{
  level?: number;
  currentDoc: { name: string; menu: string };
  menu: Doc;
  className?: string;
}> = ({ level = 0, currentDoc, menu, className }) => {
  const isCurrentDoc =
    currentDoc.menu === menu.name ||
    menu.entries
      .map(({ name }: { name: string }) => name)
      .includes(currentDoc.name);

  const [isOpen, setIsOpen] = useState(isCurrentDoc);
  const headingVariant = level === 1 ? "subHeading" : "heading";
  return (
    <Box sx={subMenuStyles({ level })} className={className} key={menu.name}>
      <Heading
        variant={headingVariant}
        sx={headingStyles({ level: level + 1, isActive: isCurrentDoc })}
        onClick={() => setIsOpen(!isOpen)}
      >
        {menu.name}
      </Heading>
      <SlideOpen isOpen={isOpen}>
        {menu.entries.map((entry: Entry) => {
          const isActive = currentDoc.name === entry.name;
          return entry.entries ? (
            <SubMenu
              level={level + 1}
              currentDoc={currentDoc}
              key={entry.name}
              menu={entry}
            />
          ) : (
            <NavLink
              title={entry.name}
              sx={{ color: isActive ? "accent" : "background" }}
              to={entry.route}
            />
          );
        })}
      </SlideOpen>
    </Box>
  );
};
