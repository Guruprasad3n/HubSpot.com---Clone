import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import "./CurrencyBar.css"


const CurrencyBar = () => {
  return (
    <Flex
      className="currencybar"
      color="rgb(51, 71, 91);"
      direction={"column"}
      border="1px solid teal"
      width={"65px"}
      height={{ base: "25%", md: "25%", lg: "50%" }}
      bgColor={"white"}
      ml="-1.2%"
      borderTopRightRadius={"10px"}
      borderBottomRightRadius="10px"
    >
      <Flex
        height={"50px"}
        borderBottom={"1px solid cyan"}
        justifyContent="center"
        alignItems={"center"}
        bgColor="cyan.200"
        border={"2px solid cyan"}
        borderTopRightRadius="10px"
      >
        <Text>USD</Text>$
      </Flex>
      <Flex
        height={"50px"}
        borderBottom={"1px solid cyan"}
        justifyContent="center"
        alignItems={"center"}
      >
        {" "}
        <Text>EUR</Text>€
      </Flex>
      <Flex
        height={"50px"}
        borderBottom={"1px solid cyan"}
        justifyContent="center"
        alignItems={"center"}
      >
        {" "}
        <Text>GPB</Text>£
      </Flex>
      <Flex
        height={"50px"}
        borderBottom={"1px solid cyan"}
        justifyContent="center"
        alignItems={"center"}
      >
        {" "}
        <Text>AUS</Text>$
      </Flex>
      <Flex
        height={"50px"}
        borderBottom={"1px solid cyan"}
        justifyContent="center"
        alignItems={"center"}
      >
        {" "}
        <Text>JPY</Text>¥
      </Flex>
      <Flex
        height={"50px"}
        borderBottom={"1px solid cyan"}
        justifyContent="center"
        alignItems={"center"}
      >
        {" "}
        <Text>SGD</Text>$
      </Flex>
      <Flex
        height={"50px"}
        borderBottom={"1px solid cyan"}
        justifyContent="center"
        alignItems={"center"}
      >
        {" "}
        <Text>COP</Text>$
      </Flex>
      <Flex height={"50px"} justifyContent="center" alignItems={"center"}>
        <Text>CAD</Text>$
      </Flex>
    </Flex>
  );
};

export default CurrencyBar;
