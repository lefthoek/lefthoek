/** @jsx jsx */
import { jsx } from "theme-ui";
import { Listing } from "@lefthoek/layouts";

export default ({ decks }) => {
  console.log(decks);
  return <Listing entries={decks} />;
};
