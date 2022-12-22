
import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

export default function Guarantee() {
  return (
    <Box
      className="Bx1"
      w="1000px"
      m="auto"
      mt="100px"
      h="500px"
      bgImage="url('//static.hsappstatic.net/pricing-pages-unified-ui/static-1.14028/js/img/bottom-blob.svg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={30}
    >
      <Box textAlign="center" >
        <Heading>The Hubspot Guarantee</Heading>
      </Box>
      <Flex justify="space-between" mt="50px">
        <Box textAlign="center">
          <Image
            m="auto"
            w="50px"
            src="https://cdn-icons-png.flaticon.com/128/1307/1307714.png"
          />
          <Text pt="10px" color="#2E475D" fontWeight="bold">
            Full Team Visiblilty
          </Text>
          <Box w="300px">
            <Text pt="10px">
              Invite your entire team to collaborate in one place.
            </Text>
          </Box>
        </Box>
        <Box textAlign="center">
          <Image
            m="auto"
            w="50px"
            src="https://cdn-icons-png.flaticon.com/128/2343/2343222.png"
          />
          <Text pt="10px" color="#2E475D" fontWeight="bold">
            Free Access
          </Text>
          <Box w="300px">
            <Text pt="10px">
              This isn't a trial. Your free access never expires.
            </Text>
          </Box>
        </Box>
        <Box textAlign="center">
          <Image
            m="auto"
            w="50px"
            src="https://cdn-icons-png.flaticon.com/128/7971/7971872.png"
          />
          <Text pt="10px" color="#2E475D" fontWeight="bold">
            All your data
          </Text>
          <Box w="300px">
            <Text pt="10px">
              Store as many as one million contacts and companies.
            </Text>
          </Box>
        </Box>
      </Flex>
      <Button
        marginLeft="400px"
        mt="60px"
        bgColor="#ff7a59"
        color="white"
        _hover={{ background: "#ff7a59", color: "white" }}
        p="30px 40px"
      >
        Get Started Free
      </Button>
      <Box w="500px" m="auto" textAlign="center" mt="150px">
        <Text fontWeight="bold" color="#2E475D">
          Not sure which plan is right for you?
        </Text>
        <Text pt="10px" fontWeight="bold" color="#2E475D">
          Give us a call
        </Text>
        <Flex
          mt="20px"
          p="20px 50px"
          border="1px solid grey"
          borderRadius="50px"
          justify="center"
          align="center"
          gap={5}
        >
          <PhoneIcon />
          <Text fontSize="22px" color="teal.500" fontWeight="bold">
            <Link> +91 11712-79211</Link>
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
