import { Box, Flex, Text, Image, Button, Link } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi';

function Navbar() {
  return (
    <Box bgColor='white' position='sticky' top='0' zIndex='2'>
      <Flex h={['10vh']} w={['80%']} m='auto' justifyContent='space-between' alignItems='center' >
        <Flex w='33vw' justifyContent='space-between' alignItems='center'>
          <Box cursor='pointer'>
            <Image w={['6.7rem']} src='https://upload.wikimedia.org/wikipedia/commons/7/71/HubSpot_Logo.png?20160320023850' />
          </Box>
          <Flex fontSize='1.2rem' w='19vw' justifyContent='space-between' alignItems='center'>
            <Link textDecoration='none' href=''>
              <Text cursor='pointer' fontSize='1.1rem' fontWeight='500' color='#2e475d'>Software</Text>
            </Link>
            <Link textDecoration='none' href=''>
              <Text cursor='pointer' fontSize='1.1rem' fontWeight='500' color='#2e475d'>Pricing</Text>
            </Link>
            <Flex gap={['0.5rem']} cursor='pointer' justifyContent='space-between' alignItems='center'>
              <Text fontSize='1.1rem' fontWeight='500' color='#2e475d'>Resources</Text>
              <FiChevronDown />
            </Flex>
          </Flex>
        </Flex>

        <Flex w={['20vw']} justifyContent='space-between' alignItems='center'>
          <Link textDecoration='none' target='_blank' href='https://app.hubspot.com/signup-hubspot/crm?hubs_signup-url=www.hubspot.com&hubs_signup-cta=homepage-nav2-smart&uuid=7d8c0f06-26d6-47c9-91d1-028fd0d47bad&step=landing_page'>
            <Button cursor='pointer' bgColor='#ff5c35' fontSize='0.8rem' fontWeight='600' border='1px solid #ff5c35' color='white' borderRadius='0.2rem' w={['9.4vw']} h={['4.4vh']} fontFamily='sans-serif'>Get a demo</Button>
          </Link>
          <Link textDecoration='none' target='_blank' href='https://app.hubspot.com/signup-hubspot/crm?hubs_signup-url=www.hubspot.com&hubs_signup-cta=homepage-nav2-smart&uuid=428de45f-c97a-4e0f-a3aa-9f62821b69b2&step=landing_page'>
            <Button cursor='pointer' border='1px solid #ff5c35' bgColor='white' color=' #ff5c35' fontSize='0.8rem' fontWeight='600' borderRadius='0.2rem' w={['9.4vw']} h={['4.4vh']} fontFamily='sans-serif'>Get started free</Button>
          </Link>
        </Flex>
      </Flex>

    </Box >
  )
}

export default Navbar;