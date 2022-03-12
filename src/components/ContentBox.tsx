import { Flex } from "@chakra-ui/react";
import { FC, ReactChild } from "react";

interface Props {
  children: ReactChild[];
}

export const ContentBox: FC<Props> = ({ children }) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      p="40px 30px 20px"
      flexDirection="column"
      gap={{ base: "20px", lg: "25px" }}
    >
      {children}
    </Flex>
  );
};
