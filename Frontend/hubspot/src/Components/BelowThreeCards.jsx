import { Box, Flex, Text } from "@chakra-ui/layout";
import { PhoneIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { ListItem, UnorderedList, Button, Icon } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

export default function BelowThreeCards() {
  return (
    <Box color={"rgb(51, 71, 91)"} mt="5%" mb={"3%"}>
      <Box>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "large" }}
          fontWeight="semibold"
        >
          Not sure which plan is right for you?
        </Text>
        <Text fontSize={{ base: "small", md: "sm", lg: "md" }}>
          Give us a call.
        </Text>
        <Flex
          border={"1px solid grey"}
          width={{ base: "90%", md: "80%", lg: "35%" }}
          height={"60px"}
          borderRadius="25px"
          m={"auto"}
          justify="center"
          alignItems={"center"}
          gap="3%"
        >
          <PhoneIcon fontSize={{ base: "sm", md: "md", lg: "large" }} />
          <Text
            fontSize={{ base: "sm", md: "md", lg: "larger" }}
            color="cyan.700"
            fontWeight={"semibold"}
          >
            +91 11712-79211
          </Text>
        </Flex>
      </Box>
      <Flex
        m={{ base: "5% 0 3% 0", md: "5% 0 2% 2%", lg: "5% 0 2% 2%" }}
        direction={{ base: "column", md: "row", lg: "row" }}
      >
        <Image
          src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13794/js/img/peopleBlobs/payments-smiling-person.png"
          width={{ base: "80%", md: "50%", lg: "50%" }}
          height={{ base: "50%", md: "40%", lg: "40%" }}
          m="auto"
        />
        <Box mt={{ base: "5%", md: "0", lg: "0" }}>
          <Box width="110%">
            <Text
              fontSize={{ base: "sm", md: "md", lg: "larger" }}
              fontWeight="semibold"
            >
              Transform your customers’ buying experience with built-in
            </Text>
            <Text
              ml={"5%"}
              fontSize={{ base: "sm", md: "md", lg: "larger" }}
              fontWeight="semibold"
              textAlign={{ base: "center", md: "left", lg: "left" }}
            >
              payments powered by the CRM.
            </Text>
          </Box>
          <Box m={{ base: "5% 0 3% 0", md: "15% 0 0 5%", lg: "15% 0 0 5%" }}>
            <UnorderedList width="100%">
              <ListItem textAlign={"left"}>
                <Text fontSize={{ base: "small", md: "sm", lg: "md" }}>
                  Unlock new revenue streams with more ways to collect payment
                </Text>
              </ListItem>
              <ListItem
                textAlign={"left"}
                fontSize={{ base: "small", md: "sm", lg: "md" }}
              >
                Get paid faster with digital payments
              </ListItem>
              <ListItem
                textAlign={"left"}
                fontSize={{ base: "small", md: "sm", lg: "md" }}
              >
                Give front office teams a 360-degree view of the customer
              </ListItem>
              <ListItem
                textAlign="left"
                fontSize={{ base: "small", md: "sm", lg: "md" }}
              >
                Currently available in the U.S. only
              </ListItem>
            </UnorderedList>
          </Box>
          <Button
            size={"md"}
            padding="21px"
            m={{ base: "auto", md: "10% 50% 0 0", lg: "13% 65% 0 0" }}
            bgColor=" #425b76"
            color={"#fff"}
          >
            Learn more <Icon as={FiExternalLink} />
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
