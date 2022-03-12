import { FC } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { MusicIcon } from "@/components/SvgIcons";

import { theme } from "@/utils/theme";

interface Props {
  content: string;
  price: string;
}

export const PlanBox: FC<Props> = ({ content, price }) => {
  return (
    <Flex
      padding={{ base: "15px 10px", lg: "20px 15px" }}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      bg={theme.colors.veryPaleBlue}
      borderRadius="2xl"
    >
      <MusicIcon />
      <Box marginRight={{ base: "30px", lg: "90px" }}>
        <Text
          fontWeight="700"
          fontSize={{ base: "15px", lg: "17px" }}
          color={theme.colors.darkBlue}
        >
          {content}
        </Text>
        <Text
          fontSize={{ base: "14px", lg: "16px" }}
          color={theme.colors.desaturatedBlue}
        >
          {price}
        </Text>
      </Box>
      <Button
        background="none"
        padding="0"
        fontSize={{ base: "13px", lg: "14px" }}
        textDecoration="underline"
        color={theme.colors.brightBlue}
        _hover={{ bg: "none", textDecoration: "none" }}
        _active={{ backgroundColor: "transparent" }}
        _focus={{}}
      >
        Change
      </Button>
    </Flex>
  );
};
