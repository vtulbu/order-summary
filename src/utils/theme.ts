import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "375px",
  md: "768px",
  lg: "960px",
  xl: "1440px",
  "2xl": "1536px",
});

export const theme = extendTheme({
  colors: {
    paleBlue: "hsl(225, 100%, 94%)",
    brightBlue: "hsl(245, 75%, 52%)",
    veryPaleBlue: "hsl(225, 100%, 98%)",
    desaturatedBlue: "hsl(224, 23%, 55%)",
    darkBlue: "hsl(223, 47%, 23%)",
  },
  fonts: {
    body: "'Red Hat Display', sans-serif",
    heading: "'Red Hat Display', sans-serif",
    mono: "'Red Hat Display', sans-serif",
  },
  breakpoints,
});
