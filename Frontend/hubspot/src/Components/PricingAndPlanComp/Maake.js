import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../AllData/MarketingIcon.png";
import styles from "../CSS/OverviewOfAllProducts.module.css";

const Marketing = () => {
  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/");
  };
  return (
    <Flex gap="1.5rem" w="95%" m="auto">
      <Box w="60%">
        <Flex my="1.1rem" gap={"1rem"} justifyContent={"center"}>
          <Img w="47px" h="55px" src={icon} alt="icon" />
          <Text position={"relative"} fontSize={"26px"} fontWeight="700">
            Marketing Hub{" "}
            <Text fontSize={"14px"} position="absolute" top="4px" right="-22px">
              TM
            </Text>
          </Text>
        </Flex>
        <Text lineHeight={"27px"}>
          Marketing software to help you attract the <br /> right audience,
          convert more visitors into <br /> customers, and run complete inbound{" "}
          <br /> marketing campaigns at scale.
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
          Premium Features
        </Text>
        <Flex>
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Premium versions of <br />{" "}
              <span className={styles.spantTag}> all free tools, plus ...</span>
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Marketing automation
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> SEO tools
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Video hosting &{" "}
              <span className={styles.spantTag}>management</span>
            </Text>
          </Box>
          <Box align="left">
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Social media tools
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Blog & content{" "}
              <span className={styles.spantTag}>creation tools</span>
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Analytics dashboards
            </Text>
            <Text mb="11px">
              {" "}
              <CheckIcon w="14px" /> Over 30 additional{" "}
              <span className={styles.spantTag}>features</span>
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Marketing;
