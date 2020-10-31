import useSwipeParent from "gatsby-theme-mdx-deck/src/hooks/use-swipe";

const useSwipe = { ...useSwipeParent, onSwipedUp: useSwipeParent.onSwipedDown };

export default useSwipe;
