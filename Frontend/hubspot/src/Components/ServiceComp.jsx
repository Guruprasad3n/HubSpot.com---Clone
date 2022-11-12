import { Box, Checkbox, Text } from "@chakra-ui/react";

export default function ServiceComp({ header, price }) {
  return (
    <Box>
      <Box
        border={"1px solid cyan"}
        width={["100%", "50%", "50%"]}
        ml={["0", "6%", "6%"]}
        mt="3%"
        mb={"3%"}
        p="1% 0 1% 0"
      >
        <Checkbox colorScheme="green" textAlign={"left"} ml="3%">
          <Text
            fontSize={["small", "medium", "medium"]}
            fontWeight={"semibold"}
          >
            {header}/mo
          </Text>
          <Text fontSize={["small", "medium", "medium"]} fontWeight={"light"}>
            ${price}
          </Text>
          <Text fontSize={["small", "medium", "medium"]} fontWeight={"light"}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad facere
            ipsam sunt itaque autem veritatis dignissimos eaque harum est
          </Text>
        </Checkbox>
      </Box>
    </Box>
  );
}
