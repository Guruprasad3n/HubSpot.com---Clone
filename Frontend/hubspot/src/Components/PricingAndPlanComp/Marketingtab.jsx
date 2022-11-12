import { Box } from "@chakra-ui/react";
import React from "react";
import CustomCards from "./CustomCards";
import { Show, Hide } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
export const Marketingtab = () => {
  const style = {
    color: "black",
    bg: "#dfe3eb",
    border: "2px solid #00A4BE",
  };
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
  return (
    <Show breakpoint="(max-width: 1200px)">
      <Box flex justifyItems={"center"}>
        <Tabs variant="unstyled" size="lg" align="center" mt="2rem">
          <TabList>
            <Tab
              _selected={style}
              bg="white"
              fontSize="0.8rem"
              p="1.7em 6em"
              border={"1px solid #00A4BE"}
            >
              Starter
            </Tab>
            <Tab
              _selected={style}
              fontSize="0.8rem"
              p="1.7em 6em"
              border={"1px solid #00A4BE"}
            >
              Professional
            </Tab>
            <Tab
              _selected={style}
              fontSize="0.8rem"
              p="1.7em 6em"
              border={"1px solid #00A4BE"}
            >
              Enterprise
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
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
            </TabPanel>
            <TabPanel>
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
            </TabPanel>
            <TabPanel>
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Show>
  );
};
