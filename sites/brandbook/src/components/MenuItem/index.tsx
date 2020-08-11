/** @jsx jsx */
import { useState } from "react";
import { jsx, Box, Heading, Text } from "theme-ui";
import { Entry, Link } from "docz";
import { FunctionComponent } from "react";
type Doc =
  | Entry
  | {
      name: string;
      route?: string;
      entries: Entry[] | Doc;
    };

const linkStyles = {
  color: "background",
  textDecoration: "none",
};

const margins = {
  0: 6,
  1: 5,
  2: 0,
};

const MenuHeading: FunctionComponent<{
  className?: string;
  level: number;
  onClick?: () => void;
  title: string;
}> = ({ className, level, onClick, title }) => {
  const isSubheading = level === 2;
  return (
    <Heading
      onClick={onClick}
      sx={{
        color: "background",
        fontWeight: isSubheading ? 600 : 700,
        fontSize: isSubheading ? 3 : 4,
        lineHeight: isSubheading ? 2 : "heading",
        mb: margins[level],
      }}
      className={className}
    >
      {title}
    </Heading>
  );
};

const MenuEntry: FunctionComponent<{
  title: string;
  isActive: boolean;
  to: string;
}> = ({ title, isActive, to }) => {
  return (
    <Link key={title} sx={linkStyles} to={to}>
      <Text
        sx={{
          fontSize: 3,
          fontWeight: "body",
          lineHeight: 2,
          color: isActive ? "accent" : "background",
        }}
      >
        {title}
      </Text>
    </Link>
  );
};

export const MenuItem: FunctionComponent<{
  menu: Doc;
  currentDoc: { name: string; menu: string };
  level?: number;
  className?: string;
}> = ({ menu, level = 0, currentDoc, className }) => {
  if (!menu.entries || !menu.entries.length) {
    return (
      <Link sx={linkStyles} to={menu.route || ""}>
        <MenuHeading level={level} title={menu.name} />
      </Link>
    );
  }
  const isCurrentDoc =
    currentDoc.menu === menu.name ||
    menu.entries
      .map(({ name }: { name: string }) => name)
      .includes(currentDoc.name);

  const [isOpen, setIsOpen] = useState(isCurrentDoc);

  return (
    <Box sx={{ mb: level === 0 ? 6 : 4 }} className={className} key={menu.name}>
      <MenuHeading
        level={level + 1}
        onClick={() => setIsOpen(!isOpen)}
        title={menu.name}
      />
      <Box sx={{ display: isOpen ? "block" : "none" }}>
        {menu.entries.map((entry: Entry) => {
          return entry.entries ? (
            <MenuItem
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
      </Box>
    </Box>
  );
};
