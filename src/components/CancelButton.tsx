import { FC } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

import { theme } from "@/utils/theme";

interface Props {
  content: string;
}

export const CanceltButton: FC<Props> = ({ content }) => {
  return (
    <ChakraButton
      color={theme.colors.desaturatedBlue}
      fontSize="14px"
      padding="10px"
      borderRadius="xl"
      bg="none"
      _hover={{ color: "#909cbb" }}
      _active={{ color: "#58668d" }}
      _focus={{ color: "#58668d" }}
      fontWeight="900"
    >
      {content}
    </ChakraButton>
  );
};
