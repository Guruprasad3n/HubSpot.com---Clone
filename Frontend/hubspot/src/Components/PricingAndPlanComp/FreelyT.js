import { CheckIcon, InfoIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../CSS/OverviewOfAllProducts.module.css";

const FreeTools = () => {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/");
  };
  return (
    <Flex gap="1.5rem" w="95%" m="auto">
      <Box w="60%">
        <Flex my="1.1rem" gap={"1rem"} justifyContent={"center"}>
          <Text position={"relative"} fontSize={"26px"} fontWeight="700">
            FreeTools Hub{" "}
            <Text fontSize={"14px"} position="absolute" top="4px" right="-22px">
              <InfoIcon />
            </Text>
          </Text>
        </Flex>
        <Text lineHeight={"27px"}>
          All of HubSpot's free marketing, sales,
          <br /> customer service, CMS, and operations <br /> tools. Your access
          to free tools is not a trial <br /> and never expires.
        </Text>
        <Button
          onClick={handleDemo}
          my="1.3rem"
          borderRadius="3px"
          color="white"
          background={"#FF5C35"}
          py="1.6rem"
          px="5rem"
          _hover={{ background: "orange.300" }}
        >
          Get a demo
        </Button>
      </Box>
      <Box>
        <Text
          fontWeight={"700"}
          color="gray.600"
          align="left"
          ml="1.3rem"
          my="1rem"
        >
          MARKETING
        </Text>
        <Flex gap="2px">
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Forms
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Email marketing
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Ad management
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Landing pages
            </Text>
          </Box>
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Contact management
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Deal pipeline
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Quotes
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Meeting scheduling
            </Text>
          </Box>
        </Flex>
        <Text
          fontWeight={"700"}
          color="gray.600"
          align="left"
          ml="1.3rem"
          my="1rem"
        >
          Customer Services
        </Text>
        <Flex gap="2px">
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Ticketing
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Email scheduling
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Live chat / basic bots
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Shared inbox
            </Text>
          </Box>
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Website pages
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Blog
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Drag-and-drop editor
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Basic SEO{" "}
              <span className={styles.spantTag}>recommendations</span>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FreeTools;
