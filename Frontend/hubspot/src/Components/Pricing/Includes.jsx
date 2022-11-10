import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

export default function Includes({ src, tOne, tTwo, gap, ml, disp = "none" }) {
  return (
    <Flex m={"1% 0 1.5% 10%"} gap={gap}>
      <Image src={src} width={"13px"} height="13px" mt={"2%"} />
      <Box>
        <Text
          fontSize={{ base: "smaller", md: "small", lg: "md" }}
          fontWeight={"semibold"}
        >
          {tOne}
        </Text>
        <Text
          fontSize={{ base: "smaller", md: "small", lg: "sm" }}
          fontWeight={"light"}
          ml={ml}
          width={"100%"}
        >
          {tTwo}
        </Text>
      </Box>
      <Badge
        variant={"solid"}
        colorScheme="green"
        height={"16px"}
        mt="2%"
        display={disp}
      >
        NEW
      </Badge>
    </Flex>
  );
}
