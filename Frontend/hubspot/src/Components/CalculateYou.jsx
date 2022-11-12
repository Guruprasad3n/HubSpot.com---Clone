import { Button } from "@chakra-ui/button";
import { Box, Divider, Flex, Text } from "@chakra-ui/layout";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import { FiShare } from "react-icons/fi";



export default function CalculateYourPrice() {
  return (
    <Box
      bgColor={"gray.50"}
      width={{ base: "95%", md: "100%", lg: "100%" }}
      color="#33475b"
    >
      <a id="cyp">
        <Text
          fontSize={{ base: "xl", md: "2xl", lg: "4xl" }}
          fontWeight="bold"
          color="#33475b"
        >
          Calculate Your Price
        </Text>
      </a>
      <a href="#header">
        <Text
          color={"cyan.700"}
          fontSize={{ base: "sm", md: "md", lg: "md" }}
          fontWeight="semibold"
          textAlign={"right"}
          mr="5%"
          mb={"2%"}
        >
          <ArrowUpIcon /> Back to top
        </Text>
      </a>
      <Flex direction={{ base: "column", md: "row", lg: "row" }}>
        <Box
          width={{ base: "100%", md: "65%", lg: "65%" }}
          bgColor="white"
          border={"1px solid gray"}
        >
          <Text
            textAlign={"left"}
            fontSize={{ base: "sm", md: "md", lg: "md" }}
            fontWeight="semibold"
            mb={"2%"}
            mt="2%"
            ml={"5%"}
          >
            Select a CRM Suite plan:
          </Text>
          <Flex width={{ base: "100%", md: "90%", lg: "95%" }}>
            <Box
              width={{ base: "31%", md: "28%", lg: "28%" }}
              height="90px"
              border={"2px solid cyan"}
              bgColor="cyan.100"
              ml={"5%"}
            >
              <Text
                fontSize={{ base: "small", md: "sm", lg: "md" }}
                mt={{ base: "25%", md: "15%", lg: "5%" }}
              >
                Starter
              </Text>
              <Text fontSize={{ base: "small", md: "sm", lg: "md" }}>
                $50/month
              </Text>
            </Box>
            <Box
              className="pricebox"
              width={"28%"}
              height="90px"
              border={"1px solid cyan"}
            >
              <Text
                fontSize={{ base: "small", md: "sm", lg: "md" }}
                mt={{ base: "25%", md: "15%", lg: "5%" }}
              >
                Professional
              </Text>
              <Text fontSize={{ base: "small", md: "sm", lg: "md" }}>
                $1,780/month
              </Text>
            </Box>
            <Box
              className="pricebox"
              width={"28%"}
              height="90px"
              border={"1px solid cyan"}
            >
              <Text
                fontSize={{ base: "small", md: "sm", lg: "md" }}
                mt={{ base: "25%", md: "15%", lg: "5%" }}
              >
                Enterprise
              </Text>
              <Text fontSize={{ base: "small", md: "sm", lg: "md" }}>
                $5,000/month
              </Text>
            </Box>
          </Flex>
          <Box m="5% 0 5% 5%" width={"84%"}>
            <Divider width={"100%"} borderColor={"1px solid grey"} />
          </Box>
          <Flex gap={"18%"}>
            <Box>
              <Text
                fontSize={{ base: "small", md: "sm", lg: "md" }}
                fontWeight={"semibold"}
                textAlign="left"
                m="2% 0 2% 5%"
              >
                Marketing Contacts
              </Text>
              <Text
                fontSize={{ base: "small", md: "sm", lg: "md" }}
                width="100%"
                m="2% 0 1% 5%"
                textAlign={{ base: "left", md: "none", lg: "none" }}
              >
                Includes 1,000 marketing contacts. Additional marketing contacts
                are sold in{" "}
              </Text>

              <Flex
                width={{ base: "150%", md: "100%", lg: "100%" }}
                m={{ base: "2% 2% 1% 4%", md: "1% 0 2% 0%", lg: "1% 0 2% 5%" }}
                justifyContent={{ base: "space-evenly" }}
              >
                <Text
                  width={"50%"}
                  fontSize={{ base: "small", md: "sm", lg: "md" }}
                  textAlign={{ base: "left", md: "none", lg: "none" }}
                >
                  increments of 1,000 from $50.00/month.
                </Text>
                <Text
                  width={"50%"}
                  color={"cyan.700"}
                  fontSize={{ base: "x-small", md: "small", lg: "small" }}
                  fontWeight="semibold"
                  mt={"0.7%"}
                  ml="1%"
                >
                  More details.
                </Text>
              </Flex>
            </Box>
            <Button
              variant={"outline"}
              border="1px solid lightgrey"
              size={"lg"}
              width="150px"
              mt={"4%"}
              mr="3%"
            >
              1,000
            </Button>
          </Flex>
          <Slider
            aria-label="slider-ex-2"
            colorScheme="gray"
            defaultValue={30}
            width="90%"
            mr={"4.5%"}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Flex
            justifyContent={"space-between"}
            width="90%"
            ml={"3%"}
            mb="3%"
            fontWeight="light"
          >
            <Text>1,000</Text>
            <Text>10,000</Text>
          </Flex>
          <Box
            border="1px solid
                        lightgrey"
            height="70px"
            width={{ base: "95%", md: "90%", lg: "90%" }}
            ml={"3%"}
          >
            <Text
              fontSize={{ base: "small", md: "sm", lg: "md" }}
              fontWeight={"semibold"}
            >
              All non-marketing contacts are free, up to a limit of 15 million
              overall contacts.
            </Text>
            <Text
              fontSize={{ base: "small", md: "sm", lg: "md" }}
              fontWeight={"light"}
            >
              Only pay for the contacts you want to market to.
            </Text>
          </Box>
          <Box m="5% 0 5% 5%" width={"84%"}>
            <Divider width={"100%"} borderColor={"1px solid grey"} />
          </Box>
          <Text
            fontSize={{ base: "md", md: "large", lg: "large" }}
            fontWeight={"semibold"}
            textAlign="left"
            ml={"4%"}
            mb="5%"
          >
            Paid Users
          </Text>

          {/* sales hub users */}

          <Flex>
            <Box>
              <Text
                fontSize={{ base: "md", md: "large", lg: "large" }}
                fontWeight={"semibold"}
                textAlign="left"
                ml={"4%"}
              >
                Sales Hub users
              </Text>
              <Text
                fontSize={{ base: "smaller", md: "small", lg: "small" }}
                fontWeight={"light"}
                width="80%"
                textAlign={"left"}
                ml="4%"
              >
                Choose how many users can access the Sales Hub Starter features.
                2 paid users included. $25/month per additional user.
              </Text>
            </Box>

            {/* button for up and down */}

            <Flex
              border={"1px solid lightgrey"}
              width={{ base: "60px", md: "100px", lg: "110px" }}
              height={"45px"}
              borderTopRightRadius="7px"
              justify={"space-between"}
              mr={"3%"}
              borderBottomRightRadius="7px"
            >
              <Text m="5% 0 0 15%">2</Text>
              <Flex direction={"column"}>
                <Button
                  width={"25px"}
                  height="22px"
                  borderBottomRightRadius={"none"}
                  border="1px solid lightgrey"
                >
                  <ChevronUpIcon color={"cyan.700"} />
                </Button>
                <Button
                  width={"25px"}
                  height="22px"
                  borderTopRightRadius={"none"}
                  border="1px solid lightgrey"
                >
                  <ChevronDownIcon color={"grey"} />
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex mt="5%">
            <Box>
              <Text
                fontSize={{ base: "md", md: "large", lg: "large" }}
                fontWeight={"semibold"}
                textAlign="left"
                ml={"4%"}
              >
                Sales Hub users
              </Text>
              <Text
                fontSize={{ base: "smaller", md: "small", lg: "small" }}
                fontWeight={"light"}
                width="80%"
                textAlign={"left"}
                ml="4%"
              >
                Choose how many users can access the Sales Hub Starter features.
                2 paid users included. $25/month per additional user.
              </Text>
            </Box>
            <Flex
              border={"1px solid lightgrey"}
              width={{ base: "60px", md: "100px", lg: "110px" }}
              height={"45px"}
              borderTopRightRadius="7px"
              justify={"space-between"}
              mr={"3%"}
              borderBottomRightRadius="7px"
            >
              <Text m="5% 0 0 15%">2</Text>
              <Flex direction={"column"}>
                <Button
                  width={"25px"}
                  height="22px"
                  borderBottomRightRadius={"none"}
                  border="1px solid lightgrey"
                >
                  <ChevronUpIcon color={"cyan.700"} />
                </Button>
                <Button
                  width={"25px"}
                  height="22px"
                  borderTopRightRadius={"none"}
                  border="1px solid lightgrey"
                >
                  <ChevronDownIcon color={"grey"} />
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            border={"1px solid lightgrey"}
            direction={{ base: "column", md: "row", lg: "row" }}
            width="80%"
            height="55px"
            ml={"2.5%"}
            justify="center"
            alignItems={"center"}
            mt="3%"
          >
            <Text fontSize={"small"} fontWeight={"semibold"}>
              Free access.
            </Text>
            <Text
              fontSize={"small"}
              textAlign={{ base: "left", md: "none", lg: "none" }}
              fontWeight={"light"}
              ml="1%"
            >
              Everyone in your company gets access to HubSpot’s free features.
            </Text>
          </Flex>
          <Text
            fontSize={{ base: "small", md: "md", lg: "md" }}
            fontWeight={"semibold"}
            textAlign="left"
            ml={"3%"}
            mt="3.5%"
          >
            Add-ons
          </Text>
          <Text
            fontSize={{ base: "small", md: "md", lg: "md" }}
            textAlign={"left"}
            ml={"3%"}
            fontWeight="light"
            mt={"2%"}
          >
            Customize and enhance your plan with additional features.
          </Text>
          <Box
            border={"1px solid cyan"}
            width={{ base: "95%", md: "85%", lg: "80%" }}
            ml={"3%"}
            mt="3%"
            mb={"3%"}
            p="1% 0 1% 0"
          >
            <Checkbox
              colorScheme="green"
              defaultChecked
              textAlign={"left"}
              ml="3%"
            >
              <Text
                fontSize={{ base: "small", md: "md", lg: "md" }}
                fontWeight={"semibold"}
              >
                API Limit Increase
              </Text>
              <Text
                fontSize={{ base: "small", md: "md", lg: "md" }}
                fontWeight={"light"}
              >
                $500.00/mo
              </Text>
              <Text
                fontSize={{ base: "small", md: "md", lg: "md" }}
                fontWeight={"light"}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
                facere ipsam sunt itaque autem veritatis dignissimos eaque harum
                est
              </Text>
            </Checkbox>
          </Box>
        </Box>
        <Box
          bgColor={"white"}
          border="1px solid grey"
          borderTop="2px solid cyan"
          width={{ base: "100%", md: "35%", lg: "35%" }}
          mt={{ base: "3%", md: "0%", lg: "0%" }}
          height={{ base: "90vh", md: "100vh", lg: "135vh" }}
        >
          <Box>
            <Flex
              width={{ base: "85%", md: "85%", lg: "75%" }}
              height={"50px"}
              bgColor={"gray.300"}
              m="auto"
              mt={"4%"}
              borderRadius={"25px"}
            >
              <Box ml="5%" width={"48%"}>
                <Text
                  fontSize={{ base: "x-small", md: "x-small", lg: "small" }}
                  fontWeight={"semibold"}
                  color="rgb(51, 71, 91)"
                  mt={{ base: "15%", md: "8%", lg: "5%" }}
                >
                  Pay Monthly
                </Text>
                <Text
                  color="rgb(51, 71, 91)"
                  fontSize={{ base: "x-small", md: "x-small", lg: "small" }}
                  fontWeight="light"
                >
                  Commit Annually
                </Text>
              </Box>
              <Box
                width="65%"
                ml={"15%"}
                backgroundColor="white"
                border={"1px solid teal"}
                borderRadius={"25px"}
              >
                <Text
                  fontSize={{ base: "x-small", md: "x-small", lg: "small" }}
                  fontWeight={"semibold"}
                  color="rgb(51, 71, 91)"
                  mt={{ base: "12%", md: "8%", lg: "4%" }}
                >
                  Pay Upfront
                </Text>
                <Text
                  color="rgb(51, 71, 91)"
                  fontSize={{ base: "x-small", md: "x-small", lg: "small" }}
                  fontWeight="light"
                >
                  Commit Annually
                </Text>
              </Box>
            </Flex>
          </Box>
          <Flex justify={"center"} alignItems="center" mt={"2%"}>
            <Text
              fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
              fontWeight="bold"
            >
              $45
            </Text>
            <Text
              fontSize={{ base: "md", md: "large", lg: "large" }}
              fontWeight="semibold"
            >
              /mo
            </Text>
          </Flex>
          <Flex justify={"center"} gap="1.5%">
            <Text fontSize={"small"}>billed at</Text>
            <Text
              textDecoration={"line-through"}
              fontSize="small"
              fontWeight={"semibold"}
            >
              $600
            </Text>
            <Text fontSize={"small"} fontWeight="semibold">
              $540
            </Text>
          </Flex>
          <Box m="5% 0 5% 5%" width={"84%"}>
            <Divider width={"100%"} borderColor={"1px solid grey"} />
          </Box>
          <Text
            fontSize={{ base: "small", md: "md", lg: "md" }}
            fontWeight={"semibold"}
            textAlign="left"
            m="2% 0 3% 0"
            ml={"5%"}
          >
            CRM Suite cost: $45/mo
          </Text>
          <Flex
            direction={"column"}
            height="50%"
            gap="5%"
            alignItems={"center"}
          >
            <Flex
              direction={"column"}
              bgColor={"cyan.50"}
              width={{ base: "90%", md: "80%", lg: "80%" }}
              height={"70px"}
              justifyContent="center"
              alignItems={"center"}
              ml="5%"
            >
              <Text
                fontSize={{ base: "small", md: "md", lg: "md" }}
                fontWeight={"semibold"}
              >
                Marketing Hub Starter
              </Text>
              <Text fontSize={{ base: "small", md: "md", lg: "md" }}>
                1,000 contacts
              </Text>
            </Flex>
            <Flex
              fontSize={{ base: "small", md: "md", lg: "md" }}
              direction={"column"}
              bgColor={"cyan.50"}
              width={{ base: "90%", md: "80%", lg: "80%" }}
              height={"70px"}
              justifyContent="center"
              alignItems={"center"}
              ml="5%"
            >
              <Text fontWeight={"semibold"}>Sales Hub Starter</Text>
              <Text>2 users</Text>
            </Flex>
            <Flex
              fontSize={{ base: "small", md: "md", lg: "md" }}
              direction={"column"}
              bgColor={"cyan.50"}
              width={{ base: "90%", md: "80%", lg: "80%" }}
              height={"70px"}
              justifyContent="center"
              alignItems={"center"}
              ml="5%"
            >
              <Text fontWeight={"semibold"}>Service Hub Starter</Text>
              <Text>2 users</Text>
            </Flex>
            <Flex
              fontSize={{ base: "small", md: "md", lg: "md" }}
              direction={"column"}
              bgColor={"cyan.50"}
              width={{ base: "90%", md: "80%", lg: "80%" }}
              height={"70px"}
              justifyContent="center"
              alignItems={"center"}
              ml="5%"
            >
              <Text fontWeight={"semibold"}>CMS Hub Starter</Text>
            </Flex>
            <Flex
              fontSize={{ base: "small", md: "md", lg: "md" }}
              direction={"column"}
              bgColor={"cyan.50"}
              width={{ base: "90%", md: "80%", lg: "80%" }}
              height={"70px"}
              justifyContent="center"
              alignItems={"center"}
              ml="5%"
            >
              <Text fontWeight={"semibold"}>Operations Hub Starter</Text>
            </Flex>
            <Box m="5% 0 5% 5%" width={"84%"}>
              <Divider width={"100%"} borderColor={"1px solid grey"} />
            </Box>
          </Flex>

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
        </Box>
      </Flex>
    </Box>
  );
}
