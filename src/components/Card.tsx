import { FC, ReactChild } from "react";
import { Box, Image } from "@chakra-ui/react";

interface Props {
  children: ReactChild;
  image: string;
  alt: string;
}

export const Card: FC<Props> = ({ children, image, alt }) => {
  return (
    <Box
      boxShadow="xl"
      borderRadius="3xl"
      display="flex"
      flexDirection="column"
      bg="white"
      maxWidth="450px"
    >
      <Image
        src={image}
        objectFit="contain"
        alt={alt}
        borderTopRadius="3xl"
        width={{ base: "300px", sm: "350px", lg: "450px" }}
        height={{ base: "147px", sm: "171px", lg: "220px" }}
      />
      {children}
    </Box>
  );
};
