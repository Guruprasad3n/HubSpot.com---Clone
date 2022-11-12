import { Box, Image, Text } from "@chakra-ui/react";

export default function TextPlusImage({ src, text }) {
  return (
    <Box mt={"2%"}>
      <Image
        src={src}
        height={{ base: "14px", md: "25px", lg: "32px" }}
        width={{ base: "14px", md: "25px", lg: "32px" }}
        m="auto"
      />
      <Text
        color={"rgb(51, 71, 91);"}
        fontSize={{ base: "x-small", md: "small", lg: "md" }}
        fontWeight="light"
      >
        {text}
      </Text>
    </Box>
  );
}
