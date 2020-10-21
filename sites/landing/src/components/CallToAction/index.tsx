/** @jsx jsx */
import { FunctionComponent } from "react";
import { Input } from "@lefthoek/atoms";
import { jsx, Button, Heading } from "theme-ui";
import { useForm } from "@formspree/react";
import { outerWrapperStyles, inputStyles, buttonStyles } from "./styles";

const CallToAction: FunctionComponent<{
  className?: string;
  callToAction: string;
  disabled?: boolean;
  variant?: string;
}> = ({ className, callToAction, variant = "midnight" }) => {
  const [state, handleSubmit] = useForm("contactForm");
  const buttonsVariants = {
    skyBlue: "midnight",
    midnight: "skyBlue",
    lobster: "midnight",
  };
  if (state.succeeded) {
    return <Heading variant="titoletto">Thanks for Contacting Us!</Heading>;
  }

  return (
    <form onSubmit={handleSubmit} className={className} sx={outerWrapperStyles}>
      <Input
        type="email"
        name="email"
        sx={inputStyles}
        variant={variant}
        placeholder="Enter Email"
      />
      <Button
        type="submit"
        disabled={state.submitting}
        sx={buttonStyles}
        variant={buttonsVariants[variant]}
      >
        {callToAction}
      </Button>
    </form>
  );
};

export { CallToAction };
