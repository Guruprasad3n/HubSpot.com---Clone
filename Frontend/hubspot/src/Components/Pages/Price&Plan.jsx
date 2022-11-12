import {
  Box,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import React from "react";
import FreeTools from "../PricingAndPlanComp/FreeTools";
import Marketing from "../../Components/PricingAndPlanComp/Marketing";

export default function PriceAndPlans() {
  const tabStyle = {
    fontSize: ["sm", "sm", "lg", "18px"],
    fontWeight: "600",
  };

  return (
    <Box>
      <Flex w={"100%"} direction={"row"} justifyContent={"center"}>
        <Tabs
          size={"sm"}
          orientation={["vertical", "vertical", "horizontal", "horizontal"]}
          w={"100%"}
          variant="line"
          colorScheme="gray"
        >
          <Box className="pricingTab" w={"100%"} p="6" rounded="md" bg="white">
            <Flex>
              <TabList
                w={"100%"}
                bgColor={"white"}
                border={"1px solid white"}
                justifyContent={"space-evenly"}
              >
                <Box></Box>
                <Tab sx={tabStyle}>Free Tools</Tab>
                <Tab sx={tabStyle}>Marketing</Tab>
                <Tab sx={tabStyle}>Sales</Tab>
                <Tab sx={tabStyle}>Customer Service</Tab>
                <Tab sx={tabStyle}>CMS</Tab>
                <Tab sx={tabStyle}>Operations</Tab>
                <Box></Box>
              </TabList>
            </Flex>
          </Box>
          <TabPanels>
            <TabPanel bgColor={"white"}>
              <FreeTools />
            </TabPanel>
            <TabPanel bgColor={"white"}>
              <Marketing />
            </TabPanel>
            <TabPanel bgColor={"white"}>
              <FreeTools />
            </TabPanel>
            <TabPanel bgColor={"white"}>
              <Marketing />
            </TabPanel>
            <TabPanel bgColor={"white"}>
              <FreeTools />
            </TabPanel>
            <TabPanel bgColor={"white"}>
              <Marketing />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
}
