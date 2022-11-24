import { Slide, useScrollTrigger } from "@mui/material";

type HideOnScrollProps = {
  window?: () => Window;
  children: React.ReactElement;
};

export const HideOnScroll = ({ children, window }: HideOnScrollProps) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};
