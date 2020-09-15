import { Fragment } from "react";
//  @ts-ignore
import { Slide as ParentSlide } from "gatsby-theme-mdx-deck/src/components/slide";
import Layout from "../../components/Layout";

import { Global } from "@emotion/core";

const Slide = ({ slide, ...props }: any) => {
  console.log(slide);
  console.log(props);
  return (
    <Fragment>
      <Global
        styles={(theme) => {
          return { ...theme.globals, body: { margin: 0 } };
        }}
      />
      <ParentSlide slide={slide} {...props} />
    </Fragment>
  );
};

export { Slide };
export default Slide;
