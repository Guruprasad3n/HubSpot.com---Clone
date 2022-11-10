import React from 'react'
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
import Navbar from "../../Components/Navbar/Navbar";
import PriceAndPlans from "../../Components/Pricing/PriceAndPlans"
function Pricing() {
  const mainNav = {
    position: "sticky",
    top: "",
    backgroundColor: "white",
    zIndex: 1000,
    marginBottom: "",
  };
  const bs = "";
  return (
    <Box>
      <Box pb="10px">
        <Navbar s={mainNav} bs={bs} />
      </Box>
      <Box bgColor={"#00B6AB"}>
        <Flex
          w={"100%"}
          color={"white"}
          direction={"column"}
          justifyContent={"center"}
          h={"auto"}
        >
          <Text fontWeight={"bold"} fontSize={["30px", "30px", "30px", "26px"]}>
            Grow better with the right plan.
          </Text>
          <Text
            marginTop={"0.8em"}
            marginBottom={"2em"}
            fontSize={["14px", "14px", "14px", "14px"]}
          >
            Pay for what you need (when you need it).
          </Text>
        </Flex>
      </Box>
      <Box bgColor={"#00B6AB"} w={"100%"}>
        <Tabs variant="enclosed-colored" w={"100%"} colorScheme="gray">
          <Flex justifyContent={"center"} direction={"row"} w={"100%"}>
            <TabList bgColor={"white"} border={"0px solid white"}>
              <Tab p={"1.2em"} paddingLeft={"4em"} paddingRight={"4em"}>
                Product & Plans
              </Tab>
              <Tab p={"1.2em"} paddingLeft={"4em"} paddingRight={"4em"}>
                Bundles
              </Tab>
            </TabList>
          </Flex>
          <TabPanels>
            <TabPanel bgColor={"white"}>
              {/* <p>two!</p> */}
              <PriceAndPlans />
            </TabPanel>
            <TabPanel bgColor={"white"}>
            
              {/* <p>two!</p> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
}

export default Pricing