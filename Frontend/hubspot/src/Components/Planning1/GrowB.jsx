import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Button,
} from "@chakra-ui/react";
import FAQ from "../ToolsRequire/FAQ";
import FreeTools from "../ToolsRequire/FreeTools"
import Guarantee from "../ToolsRequire/Gurantee";
import TopBar from "../Navbar/TopBar";
import Navbar from "../Navbar/Navbar";


export default function GrowBetter() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div >
        <Box
          bgColor="rgb(0, 189, 165)"
          backgroundImage="linear-gradient(-303deg, rgb(0, 164, 189), 0%, rgb(0, 175, 178) 56%, rgb(0, 189, 165) 100%)"
          h="220"
          mb="2100px"
        >
          <Heading
            fontSize="28px"
            textAlign="center"
            pt="40px"
            color="white"
            alignItems="center"
          >
            Grow Better with the right plan
          </Heading>
          <Text pt="10px" color="white" textAlign="center">
            Pay for what you need (when you need it).
          </Text>
          <Tabs
            bgColor="white"
            w="480px"
            m="auto"
            mt="33px"
            isFitted
            variant="enclosed"
          >
            <TabList className="tab_1">
              <Tab color="#2E475D" fontSize="18px" p="25px 0px">
                Products & Plans
              </Tab>
              <Tab color="#2E475D" fontSize="18px" p="25px 0px">
                Bundles
              </Tab>
            </TabList>
            <TabPanels>
              <Tabs defaultIndex={0} ml="-400px" isFitted w="1300px">
                <TabList>
                  <Tab
                    _selected={{
                      background: "rgb(229, 245, 248)",
                      borderBottom: "3px solid #2E475D",
                    }}
                    fontWeight="bold"
                    color="#2E475D"
                    fontSize="18px"
                    p="25px 0px"
                  >
                    Free Tools
                  </Tab>
                  <Tab
                    color="#2E475D"
                    _selected={{
                      background: "rgb(229, 245, 248)",
                      borderBottom: "3px solid #2E475D",
                    }}
                    fontWeight="bold"
                    fontSize="18px"
                    p="25px 0px"
                  >
                    Marketing
                  </Tab>
                  <Tab
                    _selected={{
                      background: "rgb(229, 245, 248)",
                      borderBottom: "3px solid #2E475D",
                    }}
                    fontWeight="bold"
                    color="#2E475D"
                    fontSize="18px"
                    p="25px 0px"
                  >
                    Sales
                  </Tab>
                  <Tab
                    _selected={{
                      background: "rgb(229, 245, 248)",
                      borderBottom: "3px solid #2E475D",
                    }}
                    fontWeight="bold"
                    color="#2E475D"
                    fontSize="18px"
                    p="25px 0px"
                  >
                    Customer Service
                  </Tab>
                  <Tab
                    _selected={{
                      background: "rgb(229, 245, 248)",
                      borderBottom: "3px solid #2E475D",
                    }}
                    fontWeight="bold"
                    color="#2E475D"
                    fontSize="18px"
                    p="25px 0px"
                  >
                    CMS
                  </Tab>
                  <Tab
                    _selected={{
                      background: "rgb(229, 245, 248)",
                      borderBottom: "3px solid #2E475D",
                    }}
                    fontWeight="bold"
                    color="#2E475D"
                    fontSize="18px"
                    p="25px 0px"
                  >
                    Operations
                  </Tab>
                </TabList>
                <TabPanels>
                  <Box w="800px" m="auto" mt="50px" mb="30px">
                    <Heading fontSize="35px">
                      Start growing today with HubSpot’s free tools.
                    </Heading>
                    <Text mt="20px">
                      Get access to all of HubSpot's free marketing, sales,
                      customer service, CMS, and operations tools.
                    </Text>
                    <Button
                      marginLeft="250px"
                      bgColor="#ff8f73"
                      color="white"
                      mt="30px"
                      p="30px 40px"
                      borderRadius="3px"
                      _hover={{ background: "#ff8f73", color: "white" }}
                    >
                      Get Started Free
                    </Button>
                  </Box>
                  <FreeTools />
                  <Guarantee />
                  <FAQ />
                </TabPanels>
              </Tabs>
            </TabPanels>
          </Tabs>
        </Box>
      </div>
    </div>
  );
}
