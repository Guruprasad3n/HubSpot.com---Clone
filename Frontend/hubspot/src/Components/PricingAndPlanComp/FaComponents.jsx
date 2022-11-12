import {
  Box,
  Button,
  Flex,
  Text,
  Spacer,
  Image,
  chakra,
  textDecoration,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
export default function Faq({ faqArray }) {
  return (
    <Box w={["87%", "87%", "87%", "52%"]} m="auto">
      <Accordion allowToggle>
        {faqArray.map((item) => (
          <AccordionItem
            py={["0em", "0em", "0em", "1rem"]}
            background="white"
            border="1px solid gray"
            mb="1rem"
          >
            <Text>
              <AccordionButton>
                <AccordionIcon color="cyan.600" fontSize="20px" />
                <Box
                  ml="1rem"
                  flex="1"
                  textAlign="left"
                  fontWeight="600"
                  fontSize="12px"
                >
                  {item.title}
                </Box>
              </AccordionButton>
            </Text>
            <AccordionPanel
              color="gray.600"
              mx="1.5rem"
              align="left"
              pb={4}
              fontSize={"12px"}
            >
              {item.desc}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}
