import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";

export default function FAQ() {
  return (
    <Box w="1100px" m="auto" mt="300px" mb="70px">
      <Heading pb="50px" color="#2E475D" textAlign="center">
        Frequently Asked Questions
      </Heading>
      <Accordion w="1100px" defaultIndex={[0]} allowMultiple>
        <AccordionItem pb={5}>
          <h2>
            <AccordionButton>
              <AccordionIcon color="blue" />
              <Box flex="1" textAlign="left">
                Are HubSpot’s free tools really free?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left" w="1000px" m="auto" pb={4}>
            Yes! This is not a free trial. HubSpot’s free tools are 100% free —
            simple as that. You can add 1,000,000 contacts, unlimited free
            users, and your free access has no time limit. Just be aware that if
            you use HubSpot’s free CRM tools with Marketing Hub, the contacts
            you add to your free CRM tools end up in both places, which could
            affect your Marketing Hub subscription’s contact tier pricing.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem pb={5}>
          <h2>
            <AccordionButton>
              <AccordionIcon color="blue" />
              <Box textAlign="left">
                Does HubSpot’s free tools integrate with my email?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left" w="1000px" m="auto" pb={4}>
            Yes, you can connect HubSpot’s free CRM tools to Gmail, G Suite, and
            many versions of Outlook.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem pb={5}>
          <h2>
            <AccordionButton>
              <AccordionIcon color="blue" />
              <Box textAlign="left">
                What are the limits of my free HubSpot account?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left" w="1000px" m="auto" pb={4}>
            HubSpot’s free tools offer many “lite” versions of select tools
            featured in our paid products. There are limits to your free HubSpot
            account, which differ by feature. Learn more about limits.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem pb={5}>
          <h2>
            <AccordionButton>
              <AccordionIcon color="blue" />
              <Box textAlign="left">
                What is a user, and how many can I have with my free HubSpot
                account?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left" w="1000px" m="auto" pb={4}>
            You can think of a user as any person who has access to use the
            HubSpot software. You can always have unlimited free users, whether
            or not you decide to upgrade some users to a paid version of Sales
            Hub or Service Hub. That means even if you upgrade, you only need to
            pay for the users who need access to paid features — and your other
            free users will still remain free! Paid plans, however, include a
            set number of paid users that you can increase on a per-user basis.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem pb={5}>
          <h2>
            <AccordionButton>
              <AccordionIcon color="blue" />
              <Box textAlign="left">
                How many contacts can I upload into my free HubSpot account?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left" w="1000px" m="auto" pb={4}>
            You can add up to 1,000,000 contacts to your free HubSpot account.
            Just be aware that if you use HubSpot’s free CRM tools with
            Marketing Hub, the contacts you add to your free CRM tools end up in
            both places, which could affect your Marketing Hub subscription’s
            contact tier pricing.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem pb={5}>
          <h2>
            <AccordionButton>
              <AccordionIcon color="blue" />
              <Box textAlign="left">
                What types of support are available to free HubSpot users?
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign="left" w="1000px" m="auto" pb={4}>
            There are several types of support available to free HubSpot CRM
            users. HubSpot offers support for many languages including English,
            French, German, Japanese, and Portuguese. For the full list of
            languages HubSpot supports, view HubSpot’s language offering. Free
            HubSpot users can chat with fellow software users in HubSpot
            Community, sharpen their skills in HubSpot Academy, and get expert
            advice on HubSpot tools in the Knowledge Base.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
