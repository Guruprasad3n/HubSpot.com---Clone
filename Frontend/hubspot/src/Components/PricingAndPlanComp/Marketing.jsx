import React from "react";
import {
  AddIcon,
  ArrowDownIcon,
  CheckIcon,
  ExternalLinkIcon,
  Icon,
  PhoneIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Input,
  Spacer,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  TagLabel,
  Link,
  SliderMark,
} from "@chakra-ui/react";
import { useState } from "react";
import { Show, Hide } from "@chakra-ui/react";
import "./customStyle.css";
import CustomCards from "./CustomCards";
import { Marketingtab } from "./Marketingtab";
import Faq from "../FaqComp"

const Marketing = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const freeTools = [
    "Forms",
    "Email marketing",
    "Ad management",
    "Live chat",
    "Reporting dashboard",
  ];
  const starter = [
    {
      id: 1,
      name: "MARKETING AUTOMATION",
      tasks: ["Form automation", "Email automation"],
    },
    {
      id: 2,
      name: "REMOVE HUBSPOT BRANDING FROM",
      tasks: ["Forms", "Email marketing", "Landing pages", "Live chat"],
    },
    { id: 3, name: "GET HELP FAST", tasks: ["Email and in-app chat support"] },
  ];

  const professional = [
    {
      id: 1,
      name: "AUTOMATE & PERSONALIZE ENGAGEMENT ACROSS CHANNELS",
      tasks: [
        "Omni-channel marketing automation",
        "ABM tools and automation",
        "Dynamic personalization",
        "Multi-language content",
        "Social media",
        "Video hosting & management",
        "Contact and company scoring",
      ],
    },
    {
      id: 2,
      name: "ORCHESTRATE EFFICIENT CAMPAIGNS",
      tasks: ["Collaboration tools", "Campaign management", "Teams"],
    },

    {
      id: 3,
      name: "OPTIMIZE CAMPAIGN CONVERSION",
      tasks: [
        "A/B testing",
        "Ad conversion events",
        "Contact create attribution",
      ],
    },
    {
      id: 3,
      name: "BUILD CUSTOM REPORTS",
      tasks: [
        "Website traffic analytics",
        "Campaign reporting",
        "Custom reporting",
        "Salesforce integration",
      ],
    },
    {
      id: 3,
      name: "GET ADVANCED SUPPORT",
      tasks: ["Phone support"],
    },
  ];
  const enterprise = [
    {
      id: 1,
      name: "MARKETING AUTOMATION",
      tasks: ["Form automation", "Email automation"],
    },
    {
      id: 2,
      name: "REMOVE HUBSPOT BRANDING FROM",
      tasks: ["Forms", "Email marketing", "Landing pages", "Live chat"],
    },
    { id: 3, name: "GET HELP FAST", tasks: ["Email and in-app chat support"] },
  ];

  const trasformData = [
    "Unlock new revenue streams with more ways to collect payment",
    "Get paid faster with digital payments",
    "Give front office teams a 360-degree view of the customer",
    "Currently available in the U.S. only",
  ];
  const faqArray = [
    {
      title: "Are HubSpot's free tools are really free?",
      desc: `Yes! This is not a free trial. HubSpot’s free tools are 100% free — simple as that. 
    You can add 1,000,000 contacts, unlimited free users, and your free access has no time limit. 
    Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, 
    which could affect your Marketing Hub subscription’s contact tier pricing.`,
    },
    {
      title: "What are the limits of free HubSpot account?",
      desc: `HubSpot’s free tools offer many “lite” versions of select tools featured in our paid products. 
    There are limits to your free HubSpot account, which differ by feature. Learn more about limits.
    `,
    },
    {
      title: "Does HubSpot's free tools integrate with my email?",
      desc: `Yes, you can connect HubSpot’s free CRM tools to Gmail, G Suite, and many versions of Outlook.
    `,
    },
    {
      title:
        "What is user, and how many can I have with my free HubSpot Account?",
      desc: `You can think of a user as any person who has access to use the HubSpot software. 
    You can always have unlimited free users, whether or not you decide to upgrade some users to a paid version of Sales Hub or Service Hub. That means even if you upgrade, you only need to pay for the users who need access to paid features — and your other free users will still remain free!

    Paid plans, however, include a set number of paid users that you can increase on a per-user basis.
    `,
    },
    {
      title: "How many contact can I upload into my fee HubSpot account",
      desc: `You can add up to 1,000,000 contacts to your free HubSpot account. Just be aware that if you use HubSpot’s free CRM tools with Marketing Hub, the contacts you add to your free CRM tools end up in both places, which could affect your Marketing Hub subscription’s contact tier pricing.
    `,
    },
    {
      title: "What type of support are available to free HubSpot users?",
      desc: `There are several types of support available to free HubSpot CRM users. HubSpot offers support for many languages including English, French, German, Japanese, and Portuguese. For the full list of languages HubSpot supports, view HubSpot’s language offering.

    Free HubSpot users can chat with fellow software users in HubSpot Community, sharpen their skills in HubSpot Academy, and get expert advice on HubSpot tools in the Knowledge Base.
    
    `,
    },
  ];
  const [link, setLink] = useState(false);
  return (
    <Flex direction={"column"}>
      <Flex justifyContent={"center"}>
        <Image
          src={
            "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/MarketingHub_Icon.svg"
          }
        />
        <Text
          color={"#33475B"}
          pl={"0.4em"}
          fontSize={"35px"}
          fontWeight={"600"}
        >
          Marketing Hub
        </Text>
        <Text>TM</Text>
      </Flex>
      <Box display={"flex"} justifyContent={"center"}>
        <Text pr={"3px"} fontSize={"12px"}>
          Everything you need to capture leads and turn them into customers.
        </Text>
        <Text
          onMouseLeave={() => setLink(false)}
          onMouseEnter={() => {
            setLink(true);
          }}
          as={!link ? "" : "u"}
          fontSize={"12px"}
          color={"#1F91AE"}
        >
          Calculate your price
        </Text>
        <ArrowDownIcon mt={"0.2em"} w={6} h={5} color={"#1F91AE"} />
      </Box>
      <Flex
        p={"1em"}
        bgColor={"#E5F5F8"}
        justifyContent={"center"}
        alignSelf={"center"}
        w={"75%"}
        border={"1px solid black"}
      >
        <Text fontSize={"14px"} fontWeight={"700"}>
          On September 1st, the price of Marketing Hub Enterprise will increase
          to $3,600/month.
        </Text>
        <Text mt={"0.1em"} fontSize={"13px"} pl={"0.7em"} pr={"0.7em"}>
          Buy now at the current price, and save.
        </Text>
        <Button
          mt={"0.1em"}
          fontSize={"10px"}
          borderRadius={"2px"}
          color={"white"}
          h={"2em"}
          bgColor={"#425B76"}
        >
          Talk to Sales
        </Button>
      </Flex>
      {/* =====================   C       A   R   D  S     =================================== */}
      <Marketingtab />
      <Show breakpoint="(min-width: 1200px)">
        <Flex
          m={6}
          overflow="hidden"
          maxH={"95em"}
          direction={["column", "column", "column", "row"]}
        >
          <CustomCards
            headOne={"Starter"}
            price={"$45/mo"}
            btnContent="Buy Now"
            defaultValue={1000}
            marketing1="Includes 1,000 marketing contacts. Additional marketing"
            marketing2="contacts are sold in increments of 1,000 from"
            marketing3="$45.00/month."
            belowBtnContent="Free tools with increased limits,"
            link={true}
            employees={starter}
          />
          <CustomCards
            headOne={"Professional"}
            price={"$890/mo"}
            btnContent="Talk to Sales"
            defaultValue={2000}
            marketing1="Includes 2,000 marketing contacts. Additional marketing"
            marketing2="contacts are sold in increments of 5,000 from"
            marketing3="$224.72/month."
            belowBtnContent={"Starter"}
            employees={professional}
          />

          <CustomCards
            headOne={"Enterprise"}
            price={"$3,200/mo"}
            btnContent="Talk to Sales"
            defaultValue={10000}
            marketing1="Includes 10,000 marketing contacts. Additional marketing"
            marketing2="contacts are sold in increments of 10,000 from"
            marketing3="$100.00/month."
            belowBtnContent={"Professional"}
            employees={enterprise}
          />
        </Flex>
      </Show>

      {/* ================== FREE    COMPONENTS     ======================= */}
      {/* <Show breakpoint='(min-width: 1200px)'> */}
      <Flex
        p={"1em"}
        direction="column"
        alignSelf={"center"}
        w={"75%"}
        border={"3px solid #F5F8FA"}
      >
        <Flex m={6} justifyContent={"space-between"}>
          <Text fontSize={"18px"}>Free Tools</Text>
          <Button
            p={4}
            border="1px solid #FF7A59"
            mt={"0.1em"}
            fontWeight={"300"}
            fontSize={"13px"}
            borderRadius={"2px"}
            color={"#FF7A59"}
            h={"2em"}
            bgColor={"white"}
          >
            Get started free
          </Button>
        </Flex>
        <hr />
        <Flex direction={["column", "column", "column", "row"]}>
          {freeTools.map((item) => (
            <Box mt={4} display={"flex"}>
              <CheckIcon ml={8} color={"gray"} mt={"0.2em"} />
              <Text
                textAlign={"start"}
                mt={"0.1em"}
                fontSize={"sm"}
                pl={"0.7em"}
                pr={"0.7em"}
              >
                {item}
              </Text>
            </Box>
          ))}
          <Text
            fontWeight={"600"}
            className="underline"
            textAlign={"start"}
            mt={"1.3em"}
            fontSize={"13px"}
            pl={["2em", "2em", "2em", "0.7em"]}
            pr={"0.7em"}
          >
            See all features
          </Text>
        </Flex>
      </Flex>
      {/* </Show> */}
      <Text
        mt={10}
        color={"#33475B"}
        pl={"0.4em"}
        fontSize={"30px"}
        fontWeight={"800"}
      >
        Recommended Bundles
      </Text>

      {/*  ===================               S T A R T E R    C R M     S U I T E S */}

      <Flex
        direction={"column"}
        alignSelf={"center"}
        w={"75%"}
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
      >
        <Flex mt={6} p={8} direction={["column", "column", "column", "row"]}>
          <Flex
            w={"70%"}
            textAlign={"start"}
            direction={"column"}
            justifyContent={["center", "center", "center", "start"]}
            alignSelf={["center", "center", "center", "start"]}
          >
            <Text ml={2} fontSize={"md"} fontWeight={"bold"}>
              Starter CRM Suite
            </Text>
            <Text ml={2} mt={2} color={"#425B76"} fontSize={"xs"}>
              Our Starter CRM Suite includes all the marketing, sales, content
              management, operations, and customer{" "}
            </Text>
            <Text m={2} color={"#425B76"} fontSize={"xs"}>
              service tools your growing business needs.
              <span className="underline">See bundled pricing details</span>
            </Text>
            <MediumDark content={"Ideal for:"} />
            <CheckIconWithText
              content={"Creating content and generating leads"}
            />
            <CheckIconWithText
              content={
                "Streamlining your outreach, connecting with prospects, and tracking and improving performance"
              }
            />
            <CheckIconWithText
              content={
                "Organizing and tracking customer communications, maximizing productivity, and measuring efficiency"
              }
            />
          </Flex>
          <Flex
            w={["55%", "55%", "55%", "25%"]}
            direction={"column"}
            justifyContent={["center", "center", "center", "end"]}
            alignSelf={["center", "center", "center", "end"]}
          >
            <Text fontSize={"xs"} color={"#425B76"} fontWeight={"light"}>
              start at
            </Text>
            <Text fontSize={"lg"} color="rgb(51, 71, 91)" fontWeight={"600"}>
              $50/mo
            </Text>
            <Text fontSize={"xs"} color={"#425B76"} fontWeight={"light"}>
              billed monthly
            </Text>
            <Box>
              {/*  **********************    SWITCH      ********************* */}
              <Flex
                height={"50px"}
                bgColor={"gray.300"}
                m="auto"
                mt={"4%"}
                borderRadius={"25px"}
              >
                <Box
                  width={["100%", "100%", "100%", "52%"]}
                  backgroundColor="white"
                  border={"1px solid teal"}
                  borderRadius={"25px"}
                >
                  <Text
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    color="rgb(51, 71, 91)"
                    mt={"4%"}
                  >
                    Pay Upfront
                  </Text>
                  <Text
                    color="rgb(51, 71, 91)"
                    fontSize={"10px"}
                    fontWeight="light"
                  >
                    Commit Annually
                  </Text>
                </Box>
                <Box ml="5%" width={["82%", "82%", "82%", "52%"]}>
                  <Text
                    fontSize={"xs"}
                    fontWeight={"semibold"}
                    color="rgb(51, 71, 91)"
                    mt={"5%"}
                  >
                    Pay Monthly
                  </Text>
                  <Text
                    color="rgb(51, 71, 91)"
                    fontSize={"10px"}
                    fontWeight="light"
                  >
                    Commit Annually
                  </Text>
                </Box>
              </Flex>
              <OrangeButton
                btnContent={"Buy now"}
                bgColor={"#ff7a59"}
                color="white"
                border={"2px"}
              />
              <OrangeButton
                btnContent={"See all features"}
                bgColor={"white"}
                color="#00AFB2"
                border={"0px"}
              />
            </Box>
          </Flex>
        </Flex>

        <MediumDark content={"Includes free tools, plus:"} ml={10} />
        {/*   ICONS WITH TEXT  */}
        <Flex direction={["column", "column", "column", "row"]}>
          <IconWithText
            src={
              "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/MarketingHub_Icon.svg"
            }
            content="Marketing Hub Starter"
            varticleBar={"|"}
          />
          <IconWithText
            src={
              "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/CMSHub_Icon.svg"
            }
            content="CMS Hub Starter"
            varticleBar={"|"}
          />
          <IconWithText
            src={
              "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/SalesHub_Icon.svg"
            }
            content="Sales Hub Starter"
            varticleBar={"|"}
          />
          <IconWithText
            src={
              "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/ServiceHub_Icon.svg"
            }
            content="Service Hub Starter"
            varticleBar={"|"}
          />
          <IconWithText
            src={
              "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7120/js/img/OperationsHub_Icon.svg"
            }
            content="Operations Hub Starter"
          />
        </Flex>
        <Flex></Flex>
      </Flex>

      {/*        -----------------------     Not sure which plan is right for you?     --------------------------- */}

      <Flex
        mt={"3em"}
        direction={"column"}
        alignSelf={"center"}
        justifyContent={"center"}
      >
        <MediumDark
          textAlign={"center"}
          content={"Not sure which plan is right for you?"}
        />
        <MediumDark textAlign={"center"} content={"Give us a call."} />
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            isActive
            colorScheme="white"
            border={"1px solid gray"}
            borderRadius={"3em"}
            p={7}
            mt={"2em"}
            mb={"2em"}
            pl={"7em"}
            pr={"7em"}
          >
            {/* ml={"42em"} mr={"42em"} */}
            <PhoneIcon mt={"0.1em"} mr={"0.6em"} w={3} h={3} color={"gray"} />
            <Text className="underline" fontSize={"1.2em"} color={"#1F91AE"}>
              +91 11712-79211
            </Text>
          </Button>
        </Box>
      </Flex>

      {/* --------------------  FLEX WITH IMAGE ------------------ */}
      <Flex w={"75%"} alignSelf={"center"} justifyContent="space-evenly">
        <Image
          ml={10}
          w={["0em", "0em", "0em", "33em"]}
          src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/peopleBlobs/payments-smiling-person.png"
        />
        <Flex direction={"column"} justifyContent="center">
          <Text fontSize={"1.1em"} fontWeight="bold">
            Transform your customers’ buying experience with built-in{" "}
          </Text>
          <Text
            mb={"2em"}
            textAlign={"start"}
            fontSize={"1.1em"}
            fontWeight="bold"
          >
            payments powered by the CRM.
          </Text>
          <ul
            style={{
              textAlign: "start",
              color: "#425B76",
              fontSize: "13px",
              marginLeft: "1em",
            }}
          >
            {trasformData.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          <Button
            w={"10em"}
            p={4}
            mt={"2em"}
            fontWeight={"300"}
            fontSize={"13px"}
            borderRadius={"5px"}
            color={"white"}
            h={"2em"}
            bgColor={"#425B76"}
          >
            Learn more
            <Icon ml={1} as={ExternalLinkIcon} />
          </Button>
        </Flex>
      </Flex>

      {/*  *******************************           CALCULATE YOUR PRICE         **************************************** */}
      <Flex
        mt={"3em"}
        h={"auto"}
        bgImage="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/middle-blob.svg"
        pt={"2em"}
        bgSize={"contain"}
        // h={"auto"}
        minH={"52em"}
        // w={"100%"}
        backgroundPosition={"center"}
        bgRepeat={"no-repeat"}
        w={"75%"}
        alignSelf={"center"}
        justifyContent="center"
        direction={"column"}
      >
        <Text
          fontWeight={"800"}
          color="#33475B"
          fontSize={"3xl"}
          mt="3em"
          textAlign={"center"}
        >
          Calculate Your Price
        </Text>

        <Flex
          alignSelf={"center"}
          justifyContent="center"
          direction={["column", "column", "column", "row"]}
        >
          <Flex
            p={4}
            bgColor={"white"}
            borderRadius={"0.7em"}
            shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            mt="4em"
            direction={"column"}
          >
            <MediumDark content={"Select a Marketing Hub plan:"} />
            {/*   3 BUTTONS INSIDE ROW FLEX */}
            <Flex mb={"1.8em"} ml={"0.5em"}>
              <BigButton
                contentForText="$50/month"
                content={"Starter"}
                src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Starter.svg"
              />
              <BigButton
                iconWidth={"1em"}
                contentForText="$89/month"
                content={"Professional"}
                src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Pro.svg"
              />
              <BigButton
                iconWidth={"1.3em"}
                contentForText="$3200/month"
                content={"EnterPrice"}
                src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Ent.svg"
              />
            </Flex>

            {/* ---------------------           Marketing Contacts              ----------------------- */}
            <hr />
            <br />
            <Box ml="0.7em" textAlign={"start"}>
              <MediumDark content={"Marketing Contacts"} />
              <BrownSmallText
                ml={"0.4em"}
                content={`Includes 10,000 marketing contacts. Additional marketing contacts are sold in `}
              />
              <Flex ml={"0.4em"}>
                <BrownSmallText
                  content={"increments of 10,000 from $100.00/month."}
                />
                <LinkText content={"More details"} />
                <Spacer />
                <Input
                  readOnly
                  maxW="100px"
                  mr="2rem"
                  value={(sliderValue + 1) * 1000}
                  mb={4}
                  w={"5em"}
                />
              </Flex>

              {/* =================================    SCROLL INPUT      ========================== */}
              {/* <CustomSlider handleChange={handleChange} value={value} />
               */}

              <Slider
                aria-label="slider-ex-8"
                onChange={(val) => setSliderValue(val)}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb fontSize="0" boxSize="18px" />
              </Slider>
              <Flex mt="1em">
                <BrownSmallText content={"10,000"} />
                <Spacer />
                <BrownSmallText content={"1,00,000"} />
              </Flex>

              {/* SMALL DIV */}
              <Flex
                justifyContent={"center"}
                textAlign={"center"}
                p={4}
                bgColor={"white"}
                borderRadius={"0.1em"}
                shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                mt="4em"
                direction={"column"}
              >
                <MediumBlack
                  content={
                    "All non-marketing contacts are free, up to a limit of 15 million overall contacts."
                  }
                />
                <BrownSmallText
                  content={"Only pay for the contacts you want to market to."}
                />
              </Flex>

              <br />
              <MediumDark ml={"0em"} content={"Add-ons"} />
              <Flex>
                <Text color={"#425B76"} fontSize={"xs"}>
                  Customize and enhance your plan with additional features.
                </Text>
                <Spacer />
                <AddIcon w={"0.7em"} mr={"2em"} color={"#425B76"} />
              </Flex>
            </Box>
            <br />
            <br />
            <br />
          </Flex>
          <CalculatePriceComp sliderValue={sliderValue} />
        </Flex>
      </Flex>

      <br />
      <br />
      <br />
      {/*  *******************************           FREQUENTLY     ASK     QUESTIONS          **************************************** */}

      <Flex justifyContent={"center"} direction={"column"}>
        <Box
          pt={"2em"}
          bgSize={"contain"}
          h={"auto"}
          minH={"52em"}
          w={"100%"}
          backgroundPosition={"center"}
          bgRepeat={"no-repeat"}
          bgImage={
            "//static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/bottom-blob.svg"
          }
        >
          <Text
            mb={"1em"}
            color={"#33475B"}
            mt={["6em", "4em", "1em", "0.3em"]}
            fontWeight={"900"}
            fontSize={["21px", "25px", "28px", "30px"]}
          >
            Frequently Asked Questions
          </Text>
          <br />
          {/* <Faq faqArray={faqArray} /> */}

          <Box display={"flex"} justifyContent={"center"}>
            <Text pr={"3px"} fontSize={"12px"}>
              For more detailed information on product packaging and the limits
              that apply, please see our{" "}
            </Text>

            <Text
              onMouseLeave={() => setLink(false)}
              onMouseEnter={() => {
                setLink(true);
              }}
              as={!link ? "" : "u"}
              fontSize={"12px"}
              color={"#1F91AE"}
            >
              Product and Services Catalog.
            </Text>
            <ExternalLinkIcon mt={"0.2em"} w={3} h={3} color={"gray"} />
          </Box>
        </Box>
      </Flex>

      <Flex direction={"column"}>
        <Text
          mt={10}
          color={"#33475B"}
          pl={"0.4em"}
          fontSize={["12px", "18px", "22px", "30px"]}
          fontWeight={"800"}
        >
          Still have questions about how HubSpot's software
        </Text>
        <Flex justifyContent={"space-around"}>
          <Text
            fontSize={["12px", "18px", "22px", "30px"]}
            ml={"6.7em"}
            color={"#33475B"}
            pl={"0.4em"}
            fontWeight={"800"}
          >
            can help your business?
          </Text>
          <Link fontSize={"md"} color={"#00AFB2"}>
            <Icon color={"black"} mr={2} as={PhoneIcon} />
            +91 11712-79211
          </Link>
        </Flex>
      </Flex>
      <div>
        {/* <Footer /> */}
      </div>
    </Flex>
  );
};

function CalculatePriceComp({ sliderValue }) {
  return (
    <Flex direction={"column"}>
      <Flex
        h={"34em"}
        bgColor={"white"}
        borderRadius={"0.7em"}
        shadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        mt="4em"
        direction={"column"}
      >
        <Box
          borderRadius={"0.7em"}
          bgColor={"#00AFB2"}
          h={"0.2em"}
          w={"100%"}
        ></Box>
        <Flex p={4} direction={"column"}>
          <Text
            ml={"2em"}
            mr={"2em"}
            color="#33475B"
            fontSize={"4xl"}
            fontWeight={"900"}
          >
            {`\$${Number(sliderValue) + 1 * 45}`}
            <span style={{ fontSize: "22px" }}>/mo</span>
          </Text>
          <Text color="#33475B" fontSize={"xs"}>
            billed at{" "}
            <span style={{ fontSize: "12px", fontWeight: "bold" }}>
              $38,400/yr
            </span>
          </Text>
        </Flex>
        <Text fontSize={"12px"} fontWeight={"600"}>
          ESTIMATED COST TO GET STARTED:
        </Text>
        <Text fontSize={"16px"} fontWeight={"300"}>
          $44,400*
        </Text>

        <hr style={{ margin: "1em", marginTop: "3em", color: "gray" }} />
        <Flex
          bgColor={"#F5F8FA"}
          direction={"column"}
          textAlign={"start"}
          p={"1em"}
          m="1em"
        >
          <MediumDark ml={"10px"} content={"Marketing Hub Enterprise"} />
          <BrownSmallText
            ml={"12px"}
            content={"$3,200 per month | 10,000 contacts"}
          />
        </Flex>
        <hr style={{ marginLeft: "1em", marginRight: "1em", color: "gray" }} />
        <Button
          alignSelf={"center"}
          m={""}
          border={"1em"}
          fontWeight={400}
          fontSize={"sm"}
          backgroundColor={"#FF7A59"}
          color={"white"}
          width={"80%"}
          height="50px"
          mt="5%"
        >
          Talk to sales
        </Button>
        {/* <MediumDark className={"underline"} ml={"0em"} content={"View price breakdown"} /> */}
        <Link mt={"1em"} color={"#00AFB2"}>
          View price breakdown
        </Link>
        {/* <ExternalLinkIcon/> */}
        {/* <Icon ml={1} as={ExternalLinkIcon} /> */}
        <Link mt={"1em"} color={"#00AFB2"}>
          <Icon mr={2} as={ExternalLinkIcon} />
          Share this price
        </Link>
        <BrownSmallText
          content={"*Includes required, one-time Enterprise Onboarding"}
        />

        <Flex justifyContent={"center"} alignSelf={"center"}>
          <BrownSmallText content={"for a fee of $6,000."} />
          <Link fontSize={"xs"} color={"#00AFB2"}>
            Learn more
            <Icon mr={2} as={ExternalLinkIcon} />
          </Link>
        </Flex>
      </Flex>
      <Link mt={"1em"} color={"#00AFB2"}>
        Disclaimer
      </Link>
    </Flex>
  );
}
function MediumBlack({ content }) {
  return <Text fontSize={"xs"}>{content}</Text>;
}

function CustomSlider({ handleChange, value }) {
  return (
    <Flex>
      <Slider
        step={10000}
        defaultValue={10000}
        max={100000}
        min={10000}
        flex="1"
        focusThumbOnChange={false}
        value={value}
        onChange={handleChange}
      >
        <SliderTrack border={"1px solid #A4A4A4"}>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb fontSize="0" boxSize="18px" children={value} />
      </Slider>
    </Flex>
  );
}

function LinkText({ content }) {
  return (
    <Text
      fontWeight={"600"}
      className="underline"
      fontSize={"xs"}
      color="#A4A4A4"
    >
      {content}
    </Text>
  );
}

function BrownSmallText({ content, ml }) {
  return (
    <Text ml={ml} fontSize={"xs"} color="#A4A4A4">
      {content}
    </Text>
  );
}

function BigButton({ content, contentForText, src, iconWidth }) {
  return (
    <Button
      border="1px solid #A4A4A4"
      bgColor={"white"}
      borderRadius={"0px"}
      h={"auto"}
      p={6}
      pl="3em"
      pr="3em"
      display={"inline"}
    >
      <Flex>
        {/* <IconWithText content={content} src={src}/> */}
        <Image w={!iconWidth ? "0.7em" : iconWidth} src={src} />
        <Text
          color={"#425B76"}
          textAlign={"start"}
          mt={"0.2em"}
          fontSize={"13px"}
          pl={"0.7em"}
          pr={"0.7em"}
        >
          {content}
        </Text>
      </Flex>
      <Text fontWeight={"200"} color="#A4A4A4" fontSize={"xs"}>
        {contentForText}
      </Text>
    </Button>
  );
}

function CheckIconWithText({ content }) {
  return (
    <Box mt={1} display={"flex"}>
      <CheckIcon ml={2} color={"gray"} mt={"0.2em"} />
      {/* <Icon  ml={2} as={MdSettings} /> */}
      <Text
        color={"#425B76"}
        textAlign={"start"}
        mt={"0.0em"}
        fontSize={"13px"}
        pl={"0.7em"}
        pr={"0.7em"}
      >
        {content}
      </Text>
    </Box>
  );
}

function IconWithText({ content, src, varticleBar }) {
  return (
    <Box ml={"1.5em"} mt={1} mb={"2em"} display={"flex"}>
      <Image w={"1em"} src={src} />
      <Text
        color={"#425B76"}
        textAlign={"start"}
        mt={"0.2em"}
        fontSize={"13px"}
        pl={"0.7em"}
        pr={"0.7em"}
      >
        {content}
      </Text>
      <Text ml={"1.5em"} color={["white", "white", "white", "#33475B"]}>
        {varticleBar}
      </Text>
      {/* {"|"} */}
    </Box>
  );
}
function MediumDark({ content, ml, textAlign, className }) {
  return (
    <Text
      className={className}
      textAlign={!textAlign ? "start" : textAlign}
      m={2}
      ml={ml}
      fontSize={"sm"}
      fontWeight={"bold"}
    >
      {content}
    </Text>
  );
}

function OrangeButton({ btnContent, color, bgColor, border, m }) {
  return (
    <Button
      m={!m ? "" : m}
      border={border}
      fontWeight={400}
      fontSize={"sm"}
      backgroundColor={bgColor}
      color={color}
      width={"100%"}
      height="50px"
      mt="5%"
    >
      {btnContent}
    </Button>
  );
}

export default Marketing;
