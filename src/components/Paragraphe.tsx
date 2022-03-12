import { FC } from "react";
import { Text } from "@chakra-ui/react";

import { theme } from "@/utils/theme";

interface Props {
  content: string;
}

export const Paragraphe: FC<Props> = ({ content }) => {
  return (
    <Text
      color={theme.colors.desaturatedBlue}
      textAlign="center"
      width={{ base: "240px", sm: "250px", lg: "390px" }}
      fontSize={{ base: "16px", lg: "18px" }}
    >
      {content}
    </Text>
  );
};
