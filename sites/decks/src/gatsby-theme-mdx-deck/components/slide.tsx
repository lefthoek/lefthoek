/** @jsx jsx */
import {
  Children,
  cloneElement,
  Fragment,
  FunctionComponent,
  ReactElement,
} from "react";
import { Global } from "@emotion/core";
import { jsx } from "theme-ui";
import { Slide as ParentSlide } from "gatsby-theme-mdx-deck/src/components/slide";
import { motion, AnimatePresence } from "framer-motion";

const SlideWrapper: FunctionComponent<{
  uri: string;
}> = ({ children, ...props }) => {
  const x = Children.map(children, (child: ReactElement) =>
    cloneElement(child, props)
  );
  return (
    <AnimatePresence>
      <motion.div
        sx={{
          width: "100vw",
          height: "100vh",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        key={props.uri}
      >
        {x}
      </motion.div>
    </AnimatePresence>
  );
};

const Slide = ({ slide, ...props }: any) => {
  return (
    <Fragment>
      <Global
        styles={(theme) => {
          return { ...theme.globals, body: { margin: 0 } };
        }}
      />
      <ParentSlide
        slide={<SlideWrapper {...props}>{slide}</SlideWrapper>}
        {...props}
      />
    </Fragment>
  );
};

export { Slide };
export default Slide;
