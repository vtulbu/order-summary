import { FC, ReactChild } from "react";

import { Box } from "@chakra-ui/react";
import { theme } from "@/utils/theme";

import { MobileBackground } from "./SvgIcons";
import { DesktopBackground } from "./SvgIcons";

interface Props {
  children: ReactChild;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center" h="100vh" alignItems="center">
      <Box
        display={{ xl: "none" }}
        position="absolute"
        zIndex="-1000"
        bg={theme.colors.paleBlue}
        h="100vh"
        width="100vw"
      >
        <MobileBackground />
      </Box>
      <Box
        display={{ base: "none", xl: "block" }}
        position="absolute"
        zIndex="-1000"
        bg={theme.colors.paleBlue}
        h="100vh"
        width="100vw"
      >
        <DesktopBackground />
      </Box>
      {children}
    </Box>
  );
};
