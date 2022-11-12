import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function PlanBox({ desc, nums }) {
  return (
    <Box>
      <Flex
        bgColor={"cyan.50"}
        width="80%"
        height={"80px"}
        justifyContent="space-between"
        alignItems={"center"}
        ml="5%"
      >
        <Box>
          <Text fontWeight={"semibold"} width="100%" ml="10%">
            {desc}
          </Text>
          <Text mr={"17%"}>{nums}</Text>
        </Box>
        <CloseIcon color={"grey"} mr={"5%"} mb="10%" />
      </Flex>
    </Box>
  );
}
