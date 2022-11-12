import { Box, Text } from "@chakra-ui/react";
import ServiceComp from "../Components/ServiceComp";

export default function ReacommendedServices() {
  const detailsOfRecommendedServices = [
    {
      header: "Inbound Consulting: Monthly",
      price: "450.00",
    },
    {
      header: "Inbound Consulting: Ongoing",
      price: "1,100.00",
    },
    {
      header: "Technical Consulting: Ongoing",
      price: "1,100",
    },
    {
      header: "Premium Consulting",
      price: "1,900.00",
    },
    {
      header: "Onboarding Foundations",
      price: "350.00",
    },
    {
      header: "Inbound Consulting: Standard",
      price: "1,500.00",
    },
    {
      header: "Inbound Consulting: Advanced",
      price: "3,000.00",
    },
    {
      header: "Inbound Consulting: Premium",
      price: "4,500",
    },
    {
      header: "Technical Consulting: Standard",
      price: "1,500.00",
    },
    {
      header: "Technical Consulting: Advanced",
      price: "3,000.00",
    },
    {
      header: "Technical Consulting: Premium",
      price: "4,500.00",
    },
    {
      header: "Marketing Fundamentals Training",
      price: "1,000.00",
    },
  ];

  return (
    <Box color="#33475b">
      <Box width="60%" ml={["0", "6%", "6%"]}>
        <Text
          fontSize={["xl", "2xl", "4xl"]}
          fontWeight="bold"
          textAlign={"left"}
        >
          Recommeded Services
        </Text>
        <Text
          fontSize={["x-small", "small", "small"]}
          fontWeight={"light"}
          textAlign="left"
          m={"2% 0 2$ 0"}
        >
          Upgrade your plan with these premium services for expert help and
          guidance.
        </Text>
      </Box>

      {detailsOfRecommendedServices.map((elem) => (
        <ServiceComp header={elem.header} price={elem.price} />
      ))}
    </Box>
  );
}
