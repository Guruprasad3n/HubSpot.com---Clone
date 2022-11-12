import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import FaqComp from "./FaqComp";
import { PhoneIcon } from "@chakra-ui/icons";
import "./FrequentlyAskQ.css";

export default function FrequentlyAskedQue() {
  return (
    <Box
      className="faq"
      height={{ base: "85vh", md: "65vh", lg: "100vh" }}
      color={"rgb(51, 71, 91)"}
      width={"auto"}
    >
      <Text fontSize={{ base: "xl", md: "2xl", lg: "4xl" }} fontWeight="bold">
        Frequently Asked Questions
      </Text>
      <FaqComp />
      <Flex
        gap={"1%"}
        direction={{ base: "column", md: "column", lg: "row" }}
        m={{ base: "5% 1% 2% 1%", md: "3% 0  1% 2%", lg: "3% 0  1% 20%" }}
      >
        <Text
          fontSize={{ base: "x-small", md: "small", lg: "small" }}
          fontWeight="light"
        >
          For more detailed information on product packaging and the limits that
          apply, please see our{" "}
        </Text>
        <Text
          fontSize={{ base: "x-small", md: "small", lg: "small" }}
          fontWeight="semibold"
          color={"cyan.700"}
        >
          {" "}
          Product and Services Catalog.{" "}
          <Icon as={FiExternalLink} color="grey" />
        </Text>
      </Flex>
      <Flex
        direction={{ base: "column", md: "column", lg: "row" }}
        mt={"13%"}
        gap="7%"
        ml={"10%"}
        alignItems="center"
      >
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          width={{ base: "100%", md: "95%", lg: "65%" }}
          textAlign={{ base: "center", md: "center", lg: "left" }}
          fontWeight="bold"
        >
          Still have questions about how HubSpot's software can help your
          business?
        </Text>
        <Text
          fontSize={{ base: "md", md: "large", lg: "xl" }}
          mt={{ base: "7%", md: "3%", lg: "auto" }}
          color="cyan.700"
        >
          <PhoneIcon color={"rgb(51, 71, 91)"} /> +91 11712-79211
        </Text>
      </Flex>
    </Box>
  );
}
