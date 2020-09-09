/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { Card, Background } from "@lefthoek/atoms";

const CardModal: FunctionComponent = () => {
  return (
    <Background>
      <Card variant="lobster" title="Bla Bla" />
    </Background>
  );
};

export { CardModal };
