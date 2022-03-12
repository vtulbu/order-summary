import { FC } from "react";
import { Heading } from "@chakra-ui/react";
import { theme } from "@/utils/theme";

interface Props {
  title: string;
}

export const Title: FC<Props> = ({ title }) => {
  return (
    <Heading
      fontSize={{ base: "25px", lg: "30px" }}
      color={theme.colors.darkBlue}
      fontWeight="900"
    >
      {title}
    </Heading>
  );
};
