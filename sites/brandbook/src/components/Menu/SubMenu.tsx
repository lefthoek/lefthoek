/** @jsx jsx */
import { useState } from "react";
import { jsx, Box } from "theme-ui";
import { Entry } from "docz";
import { FunctionComponent } from "react";
import { MenuHeading } from "./MenuHeading";
import { MenuEntry } from "./MenuEntry";
import { SlideOpen } from "./animations";
import { subMenuStyles } from "./styles";
import { Doc } from "../../types";

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

  return (
    <Box sx={subMenuStyles({ level })} className={className} key={menu.name}>
      <MenuHeading
        level={level + 1}
        onClick={() => setIsOpen(!isOpen)}
        title={menu.name}
      />
      <SlideOpen isOpen={isOpen}>
        {menu.entries.map((entry: Entry) => {
          return entry.entries ? (
            <SubMenu
              level={level + 1}
              currentDoc={currentDoc}
              key={entry.name}
              menu={entry}
            />
          ) : (
            <MenuEntry
              title={entry.name}
              to={entry.route}
              isActive={currentDoc.name === entry.name}
            />
          );
        })}
      </SlideOpen>
    </Box>
  );
};
