import { useBreakpointIndex } from "@theme-ui/match-media";
import { useState } from "react";

export const useAppState = () => {
  const breakpointIndex = useBreakpointIndex();
  const isMobile = breakpointIndex === 0;
  return useState(isMobile ? false : true);
};
