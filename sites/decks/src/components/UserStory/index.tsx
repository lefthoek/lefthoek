/** @jsx jsx */
import { FunctionComponent } from "react";
import { titleCase, capitalize } from "voca";
import { jsx, Card, Heading, Text } from "theme-ui";
import { cardStyles, titleStyles, ruleStyles } from "./styles";

const UserStory: FunctionComponent<{
  className?: string;
  title: string;
}> = ({ children, className, title, ...props }) => {
  return (
    <Card sx={cardStyles} className={className}>
      <section sx={titleStyles}>
        <Heading as="h1">{titleCase(title)}</Heading>
      </section>
      {Object.entries(props).map(([k, v]) => {
        return (
          <section key={k} sx={ruleStyles}>
            <Text>
              <strong>{capitalize(k)}</strong> {v}
            </Text>
          </section>
        );
      })}
    </Card>
  );
};

export default UserStory;
