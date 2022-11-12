import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Flex,
} from "@chakra-ui/react";
import BelowThreeCards from "../../Components/BelowThreeCards";
import BelowHeader from "../../Components/BelowHeader";
import CABAfterHeader from "../../Components/CABAfterHeader";
import CalculateYou from "../../Components/CalculateYou"
import Card from "../../Components/Cart";
import CreateABundleHeader from "../../Components/CreateABundleHeader";
import CrmSuiteHeader from "../../Components/CrmSuiteHeader";
import CurrencyBar from "../../Components/CurrencyBar";
import CustomerSupport from "../../Components/CustomerSupport";
import Footer from "../Footer/Footer";
 
import ReacommendedServices from "../../Components/ReacommendedServices";
import FrequentlyAskedQue from "../../Components/FrequentyAskQu"
import "./TabsPage.css";


export default function TabPage() {
  return (
    <Box>
      <Tabs>
        <Box className="tabNav" width="100%" bgColor="white">
          <TabList height={"80px"}>
            <Flex w="15%" m="auto" justifyContent={"space-evenly"}>
              <Box>
                <Tab className="tab" width="150px" type="cyan">
                  CRM Suite
                </Tab>
              </Box>

              <Box>
                <Tab className="tab" width="150px" type="cyan">
                  Create a Bundle
                </Tab>
              </Box>
            </Flex>
          </TabList>
        </Box>
        <TabPanels>
          <TabPanel>
            {/* <Text fontSize={"xl"}>Tab One</Text> */}
            <CurrencyBar />
            <Box
              bgColor={"rgb(245, 248, 250);"}
              height={{ base: "28vh", md: "30vh", lg: "50vh" }}
            >
              <CrmSuiteHeader />
              <BelowHeader />
            </Box>
            <Flex
              direction={{ base: "column", md: "column", lg: "row" }}
              ml={{ base: "5%", md: "6%", lg: "7%" }}
            >
              <Card
                headOne={"Starter"}
                pOne="$45/mo"
                p2={"$600"}
                p3="$540"
                desc1={
                  "Essential marketing, sales, customer service, CMS, and operations software."
                }
                tOne="Marketing Hub Starter"
                tTwo={"Starts at 1,000 marketing contacts"}
                tThree={"Sales Hub Starter"}
                tFour="Starts at 2 paid users"
                tFive={"Service Hub Starter"}
                tSix="Starts at 2 paid users"
                disp1={"block"}
                disp2="block"
                ml={"0%"}
                ml2="7%"
                ml4={"-7%"}
                gap2="5%"
                gap3={"5%"}
              />

              <Card
                headOne={"Professional"}
                pOne="$1,600/mo"
                p2={"t $21,360"}
                p3="$19,200"
                desc1={
                  "Advanced marketing, sales, customer service, CMS, and operations software."
                }
                tOne="Marketing Hub Professional"
                tTwo={"Starts at 2,000 marketing contacts"}
                tThree="Sales Hub Professional"
                tFour="Starts at 5 paid users"
                tFive={"Service Hub Professional"}
                tSix="Starts at 5 paid users"
                disp2={"block"}
                gap1="4%"
                gap2={"4%"}
                gap3="4%"
                ml={{ base: "5%", md: "0.5%", lg: "0" }}
                ml3={"-13%"}
                ml4={"-15%"}
              />

              <Card
                headOne={"Enterprise"}
                pOne="$5,000/mo"
                p3="$60,000"
                desc1={
                  "Our marketing, sales, customer service, CMS, and operations software."
                }
                tOne="Marketing Hub Enterprise"
                tTwo={"Starts at 10,000 marketing contacts"}
                tThree="Sales Hub Enterprise"
                tFour={"Starts at 10 paid users"}
                tFive="Service Hub Enterprise"
                tSix={"Starts at 10 paid users"}
                disp2="block"
                gap1={"3%"}
                ml2="4%"
                gap2={"5%"}
                ml3="-6%"
                gap3={"5%"}
                ml={{ base: "5%", md: "0.5%", lg: "0" }}
                ml4="-11%"
              />
            </Flex>
            <BelowThreeCards />
            <CalculateYou />
            <CustomerSupport />
           <FrequentlyAskedQue/>
          </TabPanel>
          <TabPanel>
            <CurrencyBar />
            <Box>
              <CreateABundleHeader />
              <CABAfterHeader />
            </Box>
            {/* <ReacommendedServices /> */}
            <ReacommendedServices />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Footer />
    </Box>
  );
}
