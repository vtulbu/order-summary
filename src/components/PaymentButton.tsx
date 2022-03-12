import { FC } from "react";
import { Button as ChakraButton } from "@chakra-ui/react";
import { theme } from "@/utils/theme";

interface Props {
  content: string;
}

export const PaymentButton: FC<Props> = ({ content }) => {
  return (
    <ChakraButton
      bg={theme.colors.brightBlue}
      color="#fff"
      fontSize="14px"
      width="100%"
      boxShadow="0 25px 25px 1px rgba(78, 89, 157, 0.3)"
      padding="25px"
      borderRadius="xl"
      fontWeight="900"
      _hover={{ backgroundColor: "#6e63e9" }}
      _active={{ backgroundColor: "#2b1dc8" }}
      _focus={{ boxShadow: "0 25px 25px 1px rgba(78, 89, 157, 0.3)" }}
    >
      {content}
    </ChakraButton>
  );
};
