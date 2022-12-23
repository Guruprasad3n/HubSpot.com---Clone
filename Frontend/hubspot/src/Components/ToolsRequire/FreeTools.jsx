import {
  Image,
  Flex,
  Box,
  Heading,
  Text,
  Divider,
  Link,
  Button,
} from "@chakra-ui/react";
import FreeT from "./FreeT.css"

export default function FreeTools() {
  return (
    <Flex
       columns={6}
      gap={3}
      w="1300px"
      justifyContent={"center"}
      
    >
      <Box
        bgPosition="center"
        border="1px solid grey"
        w="250px"
        py={5}
        px={2}
        borderRadius="5px"
      >
        <Box
          bgPosition="center"
          textAlign="center"
          w="250px"
          m="auto"
          mb="20px"
        >
          <Heading fontSize="16px">FREE MARKETING TOOLS:</Heading>
        </Box>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Forms</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Email Marketing</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Ad Management</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Landing Pages</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Shared Inbox</Text>
        </Flex>
        <Divider mt="80px" color="grey" />
        <Button
          _hover={{ background: "white" }}
          bgColor="white"
          mb="-20px"
          as={Link}
        >
          See All Features
        </Button>
      </Box>
      <Box border="1px solid grey" w="250px" py={5} px={2} borderRadius="5px">
        <Box textAlign="center" w="250px" m="auto" mb="20px">
          <Heading fontSize="16px">FREE SALES/CRM TOOLS:</Heading>
        </Box>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Live Chat</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Basic Bots</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Team Email</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Customizable Quotes</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Email Scheduling</Text>
        </Flex>
        <Divider mt="80px" color="grey" />
        <Button
          _hover={{ background: "white" }}
          bgColor="white"
          mb="-20px"
          as={Link}
        >
          See All Features
        </Button>
      </Box>
      <Box border="1px solid grey" w="250px" py={5} px={2} borderRadius="5px">
        <Box textAlign="center" w="250px" m="auto" mb="20px">
          <Heading fontSize="16px">FREE SERVICE TOOLS:</Heading>
        </Box>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Ticketing</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Email Scheduling</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Live Chat</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Shared Inbox</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Basic Bots</Text>
        </Flex>
        <Divider mt="80px" color="grey" />
        <Button
          _hover={{ background: "white" }}
          bgColor="white"
          mb="-20px"
          as={Link}
        >
          See All Features
        </Button>
      </Box>
      <Box border="1px solid grey" w="250px" py={5} px={2} borderRadius="5px">
        <Box textAlign="center" w="250px" m="auto" mb="20px">
          <Heading fontSize="16px">FREE CMS TOOLS:</Heading>
        </Box>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Drag and Drop Editor</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Mobile Optimisation</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Blog</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Standard SSL Certificate</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Website Pages</Text>
        </Flex>
        <Divider mt="80px" color="grey" />
        <Button
          _hover={{ background: "white" }}
          bgColor="white"
          mb="-20px"
          as={Link}
        >
          See All Features
        </Button>
      </Box>
      <Box border="1px solid grey" w="250px" py={5} px={2} borderRadius="5px">
        <Box textAlign="center" w="250px" m="auto" mb="20px">
          <Heading fontSize="16px">FREE OPERATIONS TOOLS:</Heading>
        </Box>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Data sync</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Historical sync</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Default Field Mappings</Text>
        </Flex>
        <Flex pb="10px" w="250px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>App Marketplace Integrations</Text>
        </Flex>
        <Flex pb="10px" gap={3} align="center">
          <Image
            w="20px"
            src="https://cdn-icons-png.flaticon.com/128/2791/2791684.png"
          />
          <Text>Contact Management</Text>
        </Flex>
        <Divider mt="80px" color="grey" />
        <Button
          _hover={{ background: "white" }}
          bgColor="white"
          mb="-20px"
          as={Link}
        >
          See All Features
        </Button>
      </Box>
    </Flex>
  );
}
