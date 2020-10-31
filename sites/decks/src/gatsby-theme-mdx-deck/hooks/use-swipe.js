import { useSwipeable } from "react-swipeable";
import useDeck from "gatsby-theme-mdx-deck/src/hooks/use-deck";
import { previous, next } from "gatsby-theme-mdx-deck/src/navigate";
import { modes } from "gatsby-theme-mdx-deck/src/constants";

export const useSwipe = () => {
  const context = useDeck();

  const onSwipedLeft = (_e) => {
    next(context);
  };

  const onSwipedRight = (_e) => {
    previous(context);
  };

  const onSwipedUp = (_e) => {
    context.setState({ mode: modes.normal });
  };

  const onSwipedDown = (_e) => {
    context.setState({ mode: modes.normal });
  };

  const props = useSwipeable({
    onSwipedLeft,
    onSwipedRight,
    onSwipedUp,
    onSwipedDown,
  });

  return props;
};

export default useSwipe;
