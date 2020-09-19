/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";
import { Slide as ParentSlide } from "gatsby-theme-mdx-deck/src/components/slide";

const AnimatedSlide = ({ slide }) => {
  return (
    <motion.div
      sx={{
        width: "100vw",
        height: "100vh",
      }}
      initial={{ opacity: 0, scale: 0.8, x: 0 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
    >
      {slide}
    </motion.div>
  );
};
const Slide = ({ slide, ...props }) => {
  return <ParentSlide slide={<AnimatedSlide slide={slide} />} {...props} />;
};

export { Slide };
export default Slide;
