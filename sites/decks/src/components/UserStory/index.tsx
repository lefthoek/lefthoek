/** @jsx jsx */
import { FunctionComponent } from "react";
import { Card } from "@lefthoek/atoms";
import { titleCase, capitalize } from "voca";
import { jsx } from "theme-ui";
import { cardStyles, titleStyles, ruleStyles } from "./styles";

const UserStory: FunctionComponent<{
  className?: string;
  title: string;
}> = ({ children, className, title, ...props }) => {
  return (
    <Card sx={cardStyles} className={className}>
      <h1 sx={titleStyles}>{titleCase(title)}</h1>
      {Object.entries(props).map(([k, v]) => {
        return (
          <p sx={ruleStyles}>
            <strong>{capitalize(k)}</strong> {v}
          </p>
        );
      })}
    </Card>
  );
};

export default UserStory;
