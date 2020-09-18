/** @jsx jsx */
import { jsx } from "theme-ui";
import { motion } from "framer-motion";

const Slide = ({ slide }) => {
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

export { Slide };
export default Slide;
