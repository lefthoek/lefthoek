/** @jsx jsx */
import { FunctionComponent } from "react";
import { capitalize, slugify } from "voca";
import { jsx, Card } from "theme-ui";
import { cardStyles, canvasStyles } from "./styles";

type Personalia = {
  name: string;
  gender: "male" | "female" | "other";
  age: number;
  education: string;
};

const UserPersona: FunctionComponent<{
  className?: string;
  personalia: Personalia;
  company: any;
  motivation: any;
  values: any;
  responsibilities: any;
  information: any;
  ambition: any;
  frustrations: any;
}> = ({ className, ...rest }) => {
  return (
    <Card sx={canvasStyles} className={className}>
      {Object.entries(rest).map(([k, v]) => {
        return (
          <Card className={slugify(k)} key={k} sx={cardStyles}>
            <ul sx={{ listStyle: "none", m: 0, p: 0 }}>
              {v.map ? (
                v.map((i: string) => <li sx={{ mb: 2 }}>{capitalize(i)}</li>)
              ) : typeof v === "string" ? (
                <li sx={{ mb: 2 }}>{capitalize(v)}</li>
              ) : (
                Object.entries(v).map(([k, v]: [string, string]) => (
                  <li sx={{ mb: 2 }}>
                    <strong>{capitalize(k)}</strong> {capitalize(v)}
                  </li>
                ))
              )}
            </ul>
          </Card>
        );
      })}
    </Card>
  );
};

export { UserPersona };
