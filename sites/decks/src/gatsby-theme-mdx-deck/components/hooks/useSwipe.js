import useSwipeParent from "gatsby-theme-mdx-deck/src/hooks/use-swipe";

const useSwipe = { ...useSwipeParent, onSwipedDown: useSwipeParent.onSwipedUp };

export default useSwipe;
