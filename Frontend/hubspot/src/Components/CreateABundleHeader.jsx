import { Box, Text } from "@chakra-ui/react";

export default function CreateABundleHeader() {
  return (
    <Box>
      <Box>
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight={"semibold"}
          color="rgb(51, 71, 91);"
          m={"5% 0 0 0"}
        >
          Choose products for your bundle.
        </Text>
        <Text
          fontSize={{ base: "smaller", md: "small", lg: "medium" }}
          fontWeight={"light"}
          color="rgb(51, 71, 91);"
        >
          Add the marketing, sales, and customer service software that your
          growing business needs.
        </Text>
      </Box>
    </Box>
  );
}
