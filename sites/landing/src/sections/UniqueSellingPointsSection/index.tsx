/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { Section } from "../../components";
import { SellingPoint } from "@lefthoek/molecules";
import { outerWrapperStyles, listStyles } from "./styles";

type UniqueSellingPointsSectionProps = {
  title: string;
  takeAway: string;
  sellingPoints: Record<string, string>[];
};

const UniqueSellingPointsSection: FunctionComponent<UniqueSellingPointsSectionProps> = ({
  title,
  takeAway,
  sellingPoints,
}) => {
  return (
    <Section sx={outerWrapperStyles} title={title} takeAway={takeAway}>
      <Box as="ul" sx={listStyles}>
        {sellingPoints.map(({ title, description }, index) => (
          <SellingPoint
            as="li"
            className={`stat-${index}`}
            key={title}
            title={title}
          >
            {description}
          </SellingPoint>
        ))}
      </Box>
    </Section>
  );
};

export { UniqueSellingPointsSection };
