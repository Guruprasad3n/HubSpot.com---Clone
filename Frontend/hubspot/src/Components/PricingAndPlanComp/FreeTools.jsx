import React from "react";
import { Box, Button, Flex, Text, Spacer, Image }
from "@chakra-ui/react";
import { useState } from "react";
    import {
      PhoneIcon,
      AddIcon,
      CheckIcon,
      ExternalLinkIcon,
    } from "@chakra-ui/icons";
    import communiy from "../../Assets/community.png";
    import collar from "../../Assets/collar.png";
    import graph from "../../Assets/graph.png";
   import svgfordiv from "../../Assets/svgfordiv.png";
   import Faq from "../FaqComp";
  
export default function FreeTools() {
  const [underline, setUnderline] = useState(false);
  const [link, setLink] = useState(false);

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
  const data = [
    [
      "Forms",
      "Email marketing",
      "Ad management",
      "Landing pages",
      "Shared inbox",
    ],
    [
      "Live chat",
      "Basic bots",
      "Team email",
      "Customizable quotes",
      "Email scheduling",
    ],
    [
      "Ticketing",
      "Email scheduling",
      "Live chat",
      "Shared inbox",
      "Basic bots",
    ],
    [
      "Drag-and-drop editor",
      "Mobile optimization",
      "Blog",
      "Standard SSL certificate",
      "Website pages",
    ],
    [
      "Data sync",
      "Historical sync",
      "Default field mappings",
      "App Marketplace integrationss",
      "Contact management",
    ],
  ];
  const headings = [
    "FREE MARKETING TOOLS:",
    "FREE SALES/CRM TOOLS:",
    "FREE SERVICE TOOLS:",
    "FREE CMS TOOLS:",
    "FREE OPERATIONS TOOLS:",
  ];
  const buttonStyle = {
    bgColor: "#FF7A59",
    color: "black",
    pl: "2em",
    pr: "2em",
    pt: "2em",
    pb: "2em",
    mb: "1em",
    borderRadius: "2px",
    marginLeft: "45%",
  };

  return (
    <Box>
      <Flex justifyContent={"center"} direction={"column"}>
        <Text
          fontWeight={"600"}
          fontSize={["32px", "32px", "32px", "32px"]}
          marginLeft={["30%"]}
        >
          Start growing today with HubSpot’s free tools.
        </Text>
        <Text
          color={"gray"}
          pt={"1.4em"}
          fontWeight={"400"}
          marginLeft={["30%"]}
          marginTop={"0.8em"}
          marginBottom={"2em"}
          fontSize={["14px", "14px", "14px", "14px"]}
        >
          Get access to all of HubSpot's free marketing, sales, customer
          service, CMS, and operations tools.
        </Text>
      </Flex>
      <Button sx={buttonStyle}>Get started free</Button>
      <br />
      {/* ----------------------     FIVE    DIVS    BELOW    BUTTON    -------------------------------        */}
      <Flex
        alignItems={"center"}
        w={"100%"}
        justifyContent={"center"}
        wrap="wrap"
      >
        <Divs heading={headings[0]} array={data[0]} />
        <Divs heading={headings[1]} array={data[1]} />
        <Divs heading={headings[2]} array={data[2]} />
        <Divs heading={headings[3]} array={data[3]} />
        <Divs heading={headings[4]} array={data[4]} />
      </Flex>
      {/* ----------------------     The            HubSpot           Guarantee     -------------------------------        */}

      <Flex justifyContent={"center"}>
        <Box
          p={5}
          bgSize={["400%", "400%", "400%", "100%"]}
          objectFit={"fill"}
          bgPosition="center"
          bgRepeat="no-repeat"
          w={"80%"}
          h={"auto"}
          bgImage={svgfordiv}
        >
          <Text
            mb={"3em"}
            color={"#33475B"}
            mt={"2.3em"}
            fontWeight={"900"}
            textAlign={"center"}
            fontSize={["21px", "25px", "28px", "30px"]}
          >
            The HubSpot Guarantee
          </Text>

          <Flex
            justifyContent={"space-evenly"}
            alignItems="center"
            direction={["column", "column", "row", "row"]}
          >
            <Box></Box>
            <Box
              w={["100%", "100%", "20%", "20%"]}
              textAlign={"center"}
              marginLeft={["10%"]}
              marginRight={["25px"]}
            >
              <Image
                w={"4em"}
                style={{ display: "block", margin: "0 auto" }}
                src={communiy}
              />
              <Text fontWeight={"bold"}>Full Team Visibility</Text>
              <Text p={2}>
                Invite your entire team to collaborate in one place.
              </Text>
            </Box>
            <Box w={["100%", "100%", "20%", "20%"]} textAlign={"center"}>
              <Image
                w={"4em"}
                style={{ display: "block", margin: "0 auto" }}
                src={collar}
              />
              <Text fontWeight={"bold"}>Free Access</Text>
              <Text p={2}>
                This isn't a trial. Your free access never expires.
              </Text>
            </Box>
            <Box w={["100%", "100%", "20%", "18%"]} textAlign={"center"}>
              <Image
                w={"4em"}
                style={{ display: "block", margin: "0 auto" }}
                src={graph}
              />
              <Text fontWeight={"bold"}>All Your Data</Text>
              <Text p={2}>
                Store as many as one million contacts and companies.
              </Text>
            </Box>
            <Box></Box>
          </Flex>
          <br />
          <br />
          <Button sx={buttonStyle} marginTop={["-30px"]}>
            Get started free
          </Button>
          <br />
          <br />
        </Box>
      </Flex>

      {/* ----------------------       Give         us          a              call      -------------------------------        */}

      <Flex mt={"3em"} justifyContent={"center"} direction={"column"}>
        <Text fontWeight={"bold"} textAlign={"center"}>
          Not sure which plan is right for you?
        </Text>
        <Text fontWeight={"bold"} textAlign={"center"}>
          Give us a call.
        </Text>
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
            <Text
              onMouseLeave={() => setUnderline(false)}
              onMouseEnter={() => {
                setUnderline(true);
              }}
              as={!underline ? "" : "u"}
              fontSize={"1.2em"}
              color={"#1F91AE"}
            >
              +91 11712-79211
            </Text>
          </Button>
        </Box>
      </Flex>

      {/* ----------------------      Frequently                     Asked                   Questions      -------------------------------        */}
      <Flex justifyContent={"center"} direction={"column"}>
        <Box
          pt={"2em"}
          bgSize={"contain"}
          h={["120vh", "100vh", "85vh", "100vh"]}
          w={"100%"}
          backgroundPosition={"center"}
          alignItems="center"
          bgRepeat={"no-repeat"}
          
        >
          <Text
            mb={"1em"}
            color={"#33475B"}
            textAlign={"center"}
            justifyContent={"center"}
            mt={["6em", "4em", "1em", "0.3em"]}
            fontWeight={"900"}
            fontSize={["21px", "25px", "28px", "30px"]}
          >
            Frequently Asked Questions
          </Text>
          <br />
          <Faq faqArray={faqArray} />

          <Box display={"flex"} justifyContent={"center"} alignItems="center">
            <Text pr={"0.4rem"} fontSize={"sm"}
              
            
            >
              For more detailed information on product packaging and the limits
              that apply, please see our{" "}
            </Text>

            <Text
              onMouseLeave={() => setLink(false)}
              onMouseEnter={() => {
                setLink(true);
              }}
              as={!link ? "" : "u"}
              fontSize={"sm"}
              color={"#1F91AE"}
            
            >
              Product and Services Catalog.
            </Text>
            <ExternalLinkIcon
              mt={"0.2em"}
              w={3}
              h={3}
              color={"gray"} />
          </Box>
        </Box>
      </Flex>

      <Text
        mb={"1em"}
        color={"#33475B"}
        textAlign={'center'}
        mt={["-6em", "-4em", "1em", "1em"]}
        fontWeight={"900"}
        fontSize={["21px", "25px", "28px", "30px"]}
      >
        Start growing today with HubSpot’s free tools.
      </Text>
      <Button sx={buttonStyle}>Get started free</Button>

      {/* <Footer /> */}
    </Box>
  );
};

function Divs({ heading, array }) {
  return (
    //
    <Flex
      direction={"column"}
      overflow={"hidden"}
      justifyContent={"space-evenly"}
      h="50vh"
      m="1.2rem"
      w={["93%", "93%", "33%", "16%"]}
      border={"0.001px solid gray"}
      rounded="md"
      bg="white"
      textAlign={"center"}
    >
      <Text textAlign={"center"} fontWeight={"700"} ml="1rem" fontSize="sm">
        {heading}
      </Text>
      {/*  */}
      <InsideText content={array[0]} />
      <InsideText content={array[1]} />
      <InsideText content={array[2]} />
      <InsideText content={array[3]} />
      <InsideText content={array[4]} />
      <hr style={{ color: "black", height: "1em" }} />
      <a style={{ color: "#1F91AE" }} href="">
        See all features
      </a>
    </Flex>
  );
}

function InsideText({ content }) {
  const textStyle = {
    color: "gray",
    ml: "1em",
    fontWeight: "400",
    textAlign: "start",
    fontSize: "sm",
  };
  return (
    <Flex
      direction={"row"}
      w={["50%", "50%", "50%", "100%"]}
      alignSelf={["center", "center", "center", "center"]}
    >
      <CheckIcon color={"gray"} mt={"0.2em"} ml="1rem" />
      <Text sx={textStyle}>{content}</Text>
    </Flex>
  );
}



