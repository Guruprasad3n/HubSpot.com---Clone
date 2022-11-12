import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const BundleVariants = ({ price1, price2, price3 }) => {
  const stylesObj = {
    marL: ["0", "10%", "10%"],
    hubHeadings: ["xl", "2xl", "4xl"],
    variants: ["small", "md", "md"],
    variantsTwo: ["x-small", "small", "medium"],
    margins: ["15%", "8%", "6%"],
    variantMargin: ["10%", "6%", "5%"],
  };

  return (
    <>
      <Flex ml={stylesObj.marL} border="1px solid teal" width={"100%"}>
        <Box
          width={"38%"}
          height="90px"
          border={"2px solid cyan"}
          bgColor="cyan.100"
        >
          <Flex justifyContent={"center"} mt={["15%", "8%", "6%"]} gap="2%">
            <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Starter.svg" />
            <Text fontSize={stylesObj.variantsTwo}>Starter</Text>
          </Flex>
          <Text fontSize={stylesObj.variantsTwo}>${price1}/month</Text>
        </Box>
        <Box
          className="pricebox"
          width={"38%"}
          height="90px"
          border={"1px solid cyan"}
        >
          <Flex justifyContent={"center"} mt={["15%", "8%", "6%"]} gap="2%">
            <Image src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Pro.svg" />
            <Text fontSize={stylesObj.variantsTwo}>Professional</Text>
          </Flex>
          <Text fontSize={stylesObj.variantsTwo}>${price2}/month</Text>
        </Box>
        <Box
          className="pricebox"
          width={"38%"}
          height="90px"
          border={"1px solid cyan"}
        >
          <Flex justifyContent={"center"} mt={["15%", "8%", "6%"]} gap="2%">
            <Image
              src="https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13808/js/img/productIcons/MarketingHub_Ent.svg"
              mt={"5%"}
            />
            <Text fontSize={stylesObj.variantsTwo}>Enterprise</Text>
          </Flex>
          <Text fontSize={stylesObj.variantsTwo}>${price3}/month</Text>
        </Box>
      </Flex>
    </>
  );
};

export default BundleVariants;
