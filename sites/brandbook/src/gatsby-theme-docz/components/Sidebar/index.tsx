/** @jsx jsx */
import { useState } from "react";
import { jsx, Box, Heading, Text } from "theme-ui";
import { Entry, Link, useCurrentDoc } from "docz";
import { Logo } from "@lefthoek/atoms";
import { FunctionComponent } from "react";

type Doc =
  | Entry
  | {
      name: string;
      route?: string;
      entries: Entry[] | Doc;
    };

const linkStyles = {
  color: "inherit",
  textDecoration: "none",
};

const MenuItem: FunctionComponent<{
  menu: Doc;
  currentDoc: { name: string; menu: string };
  className?: string;
}> = ({ menu, currentDoc, className }) => {
  if (!menu.entries || !menu.entries.length) {
    return (
      <Link sx={linkStyles} to={menu.route || ""}>
        <Heading className={className}>{menu.name}</Heading>
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
    <Box className={className} key={menu.name}>
      <Heading onClick={() => setIsOpen(!isOpen)} sx={{ mb: 3 }}>
        {menu.name}
      </Heading>
      <Box sx={{ display: isOpen ? "block" : "none" }}>
        {menu.entries.map((entry: Entry) => {
          if (!entry.entries) {
            return (
              <Link
                key={entry.name}
                sx={{
                  ...linkStyles,
                  color: currentDoc.name === entry.name ? "primary" : "text",
                }}
                to={entry.route}
              >
                <Text>{entry.name}</Text>
              </Link>
            );
          }
          return (
            <MenuItem
              currentDoc={currentDoc}
              key={entry.name}
              sx={{ mb: 3, h2: { fontSize: 3, mb: 1 } }}
              menu={entry}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export const Sidebar: FunctionComponent<{
  menus: Doc[];
  className?: string;
}> = ({ menus, className}) => {
  const currentDoc = useCurrentDoc();
  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "space-between",
        flexDirection: "column",
        bg: "muted",
        p: 4,
      }}
    >
      <Box>
        {menus.map((menu: Doc) => (
          <MenuItem
            currentDoc={currentDoc}
            sx={{ mb: 4 }}
            key={menu.name}
            menu={menu}
          />
        ))}
      </Box>
      <Box>
        <Logo>Lefthoek</Logo>
      </Box>
    </Box>
  );
};
