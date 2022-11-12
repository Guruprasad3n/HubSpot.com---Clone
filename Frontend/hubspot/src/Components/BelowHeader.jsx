import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import TextPlusImage from "../Components/TextPlusImage";
import { FiExternalLink } from "react-icons/fi";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { GrCircleInformation } from "react-icons/gr";
import "./BelowHeader.css";

export default function BelowHeader() {
  return (
    <Box>
      <Flex width="60%" height={"80px"} m="auto" justify={"space-around"}>
        <TextPlusImage
          src={
            "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/MarketingHub_Icon.svg"
          }
          text={"Marketing Hub"}
        />
        <TextPlusImage
          src={
            "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/SalesHub_Icon.svg"
          }
          text={"Sales Hub"}
        />
        <TextPlusImage
          src={
            "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/ServiceHub_Icon.svg"
          }
          text={"Service Hub"}
        />
        <TextPlusImage
          src={
            "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/CMSHub_Icon.svg"
          }
          text={"CMS Hub"}
        />
        <TextPlusImage
          src={
            "https://static.hsappstatic.net/ui-addon-upgrades/static-9.7033/js/img/OperationsHub_Icon.svg"
          }
          text={"Operations Hub"}
        />
      </Flex>
      <Box>
        <Flex
          m="auto"
          width={"75%"}
          direction={{ base: "column", md: "row", lg: "row" }}
          justify="space-around"
        >
          <Text
            fontSize={{ base: "x-small", md: "small", lg: "md" }}
            fontWeight={"light"}
          >
            Get access to every Starter, Professional, or Enterprise product,
            bundled together at a discounted rate.
          </Text>
          <Text
            className="cyanText"
            fontSize={{ base: "x-small", md: "small", lg: "md" }}
            color={"cyan.700"}
            fontWeight="semibold"
          >
            See bundled pricing details
          </Text>
          <Icon
            as={FiExternalLink}
            fontSize={{ base: "x-small", md: "small", lg: "md" }}
            m="0.5% 0 0 0"
          />
        </Flex>
        <Flex m="auto" mt={"1%"} width={"75%"} justify="center" gap={"5%"}>
          <Text
            fontSize={{ base: "x-small", md: "small", lg: "md" }}
            fontWeight={"light"}
          >
            Each plan comes with unlimited free users
          </Text>
          <Icon as={GrCircleInformation} m="0.7% 0 0 -3%" />

          <a href="#cyp">
            <Text
              className="cyanText"
              fontSize={{ base: "x-small", md: "small", lg: "md" }}
              color={"cyan.700"}
              fontWeight="semibold"
            >
              Calculate your price
            </Text>
          </a>
          <ArrowDownIcon
            color={"cyan.700"}
            m="0.8% 0 0 -4.5%"
            fontSize={{ base: "x-small", md: "small", lg: "md" }}
            fontWeight={"extrabold"}
          />
        </Flex>
      </Box>
    </Box>
  );
}
