/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

const PageLayout: FunctionComponent = ({ children }) => {
  const siteMetaData = {
    siteName: "TEST",
    links: [],
    callToAction: { href: "", title: "test" },
    callToActionVisible: false,
    contactInfo: {
      street: "TEST",
      zipCode: "TEST",
      city: "TEST",
      country: "TEST",
      email: "TEST",
    },
  };
  return <div>{children}</div>;
};

export default PageLayout;
