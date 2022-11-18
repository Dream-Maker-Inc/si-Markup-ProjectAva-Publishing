import useMediaQuery from "@mui/material/useMediaQuery";
import { MediaQueries } from "./Limit";

export const useCustomMediaQuery = () => {
  const isSmall = useMediaQuery(MediaQueries.xs);
  const isMobile = useMediaQuery(MediaQueries.sm);
  const isMedium = useMediaQuery(MediaQueries.md);
  const isLarge = useMediaQuery(MediaQueries.lg);
  const isTablet = useMediaQuery(MediaQueries.xl);
  const isLaptop = useMediaQuery(MediaQueries.xxl);

  return {
    isSmall,
    isMobile,
    isMedium,
    isLarge,
    isTablet,
    isLaptop,
  };
};
