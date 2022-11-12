import { Box, Button, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import PlanBox from "../Components/PlanBox";
import { FiShare } from "react-icons/fi";
import { PhoneIcon } from "@chakra-ui/icons";

export default function CRARightSideComp() {
  return (
    <Box
      borderTop="2px solid cyan"
      ml={["-2%", "0", "0"]}
      width={["100%", "35%", "35%"]}
      boxShadow={"base"}
      height={["184vh", "150vh", "184vh"]}
    >
      <Box
        width={{ base: "90%", md: "100%", lg: "75%" }}
        ml={{ base: "3%", md: "5%", lg: "15%" }}
        mt={"4%"}
      >
        <Flex
          height={{ base: "50px", md: "65px", lg: "50px" }}
          bgColor={"gray.300"}
          m="auto"
          borderRadius={"25px"}
        >
          <Box ml="5%" width={"50%"}>
            <Text
              fontSize={["x-small", "x-small", "small"]}
              fontWeight={"semibold"}
              color="rgb(51, 71, 91)"
              mt={["5%", "0", "5%"]}
              width="100%"
            >
              Pay Monthly
            </Text>
            <Text
              color="rgb(51, 71, 91)"
              fontSize={["x-small", "smaller", "small"]}
              fontWeight="light"
            >
              Commit Annually
            </Text>
          </Box>
          <Box
            width="65%"
            height={{ base: "50px", md: "65px", lg: "50px" }}
            ml={"15%"}
            backgroundColor="white"
            border={"1px solid teal"}
            borderRadius={"25px"}
          >
            <Text
              fontSize={["x-small", "x-small", "small"]}
              fontWeight={"semibold"}
              color="rgb(51, 71, 91)"
              mt={"5%"}
            >
              Pay Upfront
            </Text>
            <Text
              color="rgb(51, 71, 91)"
              fontSize={["x-small", "x-small", "small"]}
              fontWeight="light"
            >
              Commit Annually
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        m={["1% 0 1% 32%", "5% 0 1% 32%", "1% 0 1% 32%"]}
        width={["45%", "55%", "45%"]}
      >
        <Flex justify={"center"} alignItems="center" mr="42%">
          <Text fontSize={["xl", "2xl", "4xl"]} fontWeight="bold">
            $45
          </Text>
          <Text fontSize={["small", "medium", "large"]} fontWeight="semibold">
            /mo
          </Text>
        </Flex>
        <Flex gap={"2%"}>
          <Text fontSize={["sm", "medium", "medium"]} fontWeight={"light"}>
            billed at
          </Text>
          <Text
            fontSize={["sm", "medium", "medium"]}
            textDecoration={"line-through"}
            fontWeight="semibold"
          >
            $600
          </Text>
          <Text fontSize={["sm", "medium", "medium"]} fontWeight={"semibold"}>
            $540
          </Text>
        </Flex>
      </Box>
      <Box m="5% 2% 1% 0">
        <Text fontSize={["small", "medium", "medium"]} fontWeight={"semibold"}>
          ESTIMATED COST TO GET STARTED:
        </Text>
        <Text fontSize={["small", "medium", "medium"]}>$6,040</Text>
      </Box>
      <Box m="5% 0 5% 0%" width={"100%"}>
        <Divider width={"100%"} borderColor={"1px solid grey"} />
      </Box>
      <Text fontWeight={"semibold"} textAlign="left" ml={"5%"} mt="3%">
        CRM Suite cost: $45/mo
      </Text>
      <Flex
        direction={"column"}
        justifyContent="space-around"
        height={["100vh", "45vh", "100vh"]}
      >
        <PlanBox desc={"Marketing Hub Starter"} nums="1,000 contacts" />
        <PlanBox desc={"Sales Hub Starter"} nums="2 users" />
        <PlanBox desc={"Service Hub Starter"} nums="2 users" />
        <PlanBox desc={"CMS Hub Starter"} />
        <PlanBox desc={"Operations Hub Starter"} />
      </Flex>
      <Box m="5% 0 5% 0%" width={"100%"}>
        <Divider width={"100%"} borderColor={"1px solid grey"} />
      </Box>
      <Button bgColor={"#ff7a59"} size="lg" color={"white"} width={"80%"}>
        Buy Now
      </Button>
      <Text fontWeight={"semibold"} color="cyan.700" mt={"4%"}>
        View price breakdown
      </Text>
      <Text fontWeight={"semibold"} color="cyan.700" mt={"2%"}>
        <Icon as={FiShare} /> Share this price
      </Text>
      <Text color={"grey"} mt="15%" fontSize={"small"}>
        Disclaimer
      </Text>
      <Box>
        <Text
          marginLeft={["50%"]}
          fontSize={["small", "medium", "large"]}
          fontWeight="semibold"
          mr="10%"
        >
          Not sure which plan is right for you?
        </Text>
        <Text fontSize={["small", "medium", "large"]} fontWeight="semibold">
          Give us a call.
        </Text>
        <Text
          color={"cyan.700"}
          fontSize={["small", "medium", "large"]}
          fontWeight={"semibold"}
          mt="4%"
        >
          <PhoneIcon color={"#33475b"} mr="2%" />
          +91 11712-79211{" "}
        </Text>
      </Box>
    </Box>
  );
}
