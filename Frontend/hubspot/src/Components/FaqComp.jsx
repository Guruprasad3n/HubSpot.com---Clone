import { Box, Icon, Text } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

export default function FaqComp() {
  return (
    <Box border={"1px solid grey"} width="70%" m={"auto"} mt="5%">
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <AccordionIcon />
              <Box flex="1" textAlign="left">
                <Text fontWeight={"semibold"}>
                  {" "}
                  How many users can I have with each CRM suite plan, and how
                  much do additional users cost?
                </Text>
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text textAlign={"left"}>
              Each CRM Suite edition includes a set number of paid users that
              you can increase on a per-user basis for an additional monthly
              cost. To see how much it costs to add additional users to each CRM
              Suite plan try our{" "}
            </Text>
            <Text textAlign={"left"} color={"cyan.700"}>
              {" "}
              pricing calculator. <Icon as={FiExternalLink} />
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
