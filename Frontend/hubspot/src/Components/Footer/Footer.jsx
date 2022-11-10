import React from 'react'
import { Box, Flex, Text, Image, Link } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMediumM, FaTiktok } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

function Footer() {
  return (
    <Box h={['87vh']} bgColor='#213343' color='white'>
      <Flex w={['80%']} m='auto' direction='column'>

        <Flex h='58vh' alignItems='center' >
          <Flex borderRight='1px solid #b6c7d6' w='45%' justifyContent='space-around'>
            <Flex h='43vh' direction='column' justifyContent='space-between' >
              <Text as='b' fontSize='0.9rem'>Popular Features</Text>

              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Free Meeting Scheduler App</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Social Media Tools</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Email Tracking Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Sales Email Automation</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Ads Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Email Marketing Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Lead Management Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Pipeline Mangemenet Tools</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Free Website Builder</Text>
            </Flex>
            <Flex direction='column' fontSize='0.8rem' as='b' color='#b6c7d6' mt='1.4rem'>
              <Text>Sales Email Templates</Text>
              <Text>Help Desk Software</Text>
              <Text>Free Chatbot Builder</Text>
              <Text>Free Live Chat Software</Text>
              <Text>Marketing Analytics</Text>
              <Text>Free Landing Page Builder</Text>
              <Text>Free Web Hosting</Text>
            </Flex>
          </Flex>

          <Flex w='55%' justifyContent='space-around'>
            <Flex h='43vh' direction='column' justifyContent='space-between' >
              <Text as='b' fontSize='0.9rem'>Popular Features</Text>

              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Free Meeting Scheduler App</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Social Media Tools</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Email Tracking Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Sales Email Automation</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Ads Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Email Marketing Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Lead Management Software</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Pipeline Mangemenet Tools</Text>
              <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Free Website Builder</Text>
            </Flex>
            <Flex direction='column' fontSize='0.8rem' as='b' color='#b6c7d6'>
              <Text as='b' fontSize='0.9rem' color='white'>Company</Text>
              <Text>About Us</Text>
              <Text>Careers</Text>
              <Text>Management Team</Text>
              <Text>Board of Directors</Text>
              <Text>Investor Relations</Text>
              <Text>Blog</Text>
              <Text>Contact Us</Text>
            </Flex>
            <Flex direction='column' fontSize='0.8rem' as='b' color='#b6c7d6'>
              <Text as='b' fontSize='0.9rem' color='white'>Partners</Text>
              <Text>All Partner</Text>
              <Text>Solutions Partner Program</Text>
              <Text>App Partner Program</Text>
              <Text>HubSpot for Startups</Text>
              <Text>Affiliate Program</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex gap={['2rem']} color='#b6c7d6' alignItems='center' m='auto'>
          <FaFacebookF size='1.4rem' />
          <BsInstagram size='1.4rem' />
          <BsYoutube size='1.4rem' />
          <FaTwitter size='1.4rem' />
          <FaLinkedinIn size='1.4rem' />
          <FaMediumM size='1.4rem' />
          <FaTiktok size='1.4rem' />
        </Flex>

        <Flex direction='column' gap={['1.3rem']} m='auto' mt={['2rem']} alignItems='center'>
          <Image w='6rem' src='https://upload.wikimedia.org/wikipedia/commons/7/71/HubSpot_Logo.png?20160320023850' />
          <Text fontSize='0.8rem' as='b' color='#b6c7d6'>Copyright @ 2022 HubSpot, Inc.</Text>
          <Flex gap='1rem'>
            <Link as='b' cursor='pointer' fontSize='0.9rem' textDecoration='underline' target='_blank'>Legal Stuff</Link>
            <Link as='b' cursor='pointer' fontSize='0.9rem' textDecoration='underline' target='_blank'>Privacy Policy</Link>
            <Link as='b' cursor='pointer' fontSize='0.9rem' href='' textDecoration='underline' target='_blank'>Security</Link>
          </Flex>
        </Flex>

      </Flex>
    </Box >
  )
}

export default Footer;