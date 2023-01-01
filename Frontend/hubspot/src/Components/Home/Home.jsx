import { Box, Button, Flex, Image, Text,  SimpleGrid, Stack } from '@chakra-ui/react';
import Footer from '../Footer/Footer';
import Footer1 from '../footerg/Footer1';
import Navbar from '../Navbar/Navbar';
import TopBar from '../Navbar/TopBar';
import {Link} from "react-router-dom";

function Home() {
  return (
    
    <>
    <TopBar />
    <Navbar />
    <Box>
      <Flex direction={['column', 'column', 'row', 'row']} h={['80vh', '100vh', '80vh', '80vh']} w='100%' bgColor='#ff5c35'>
        <Flex w={['100%', '100%', '50%', '50%']} direction='column' color='whitesmoke' justifyContent='center' alignItems='center'>
          <Flex direction='column' gap={['0.8rem', '1rem', '1.4rem', '1.4rem']} mt={['1.7rem', '0', '0', '0']}>
            <Text fontSize={['0.830rem', '0.820rem', '.875rem', '.875rem']} fontWeight='700'>HUBSPOT CRM PLATFORM</Text>

            <Box fontFamily='Queens Medium, serif' fontSize={['2.3rem', '2.8rem', '3rem', '3.5rem']} lineHeight='1.13' fontWeight='600'>
              <Text>Powerful,</Text>
              <Text>not overpowering</Text>
            </Box>

            <Box fontSize={['0.775rem', '0.9rem', '1rem', '1.1rem']} fontWeight='600'>
              <Text>Finally, a CRM platform that’s both powerful and easy to use.</Text>
              <Text>Create delightful customer experiences. Have a delightful time doing it.</Text>
            </Box>

            <Flex gap={['0.6rem', '0.6rem', '1rem', '1rem']} direction={['column', 'column', 'row', 'row']}>
              <Link style={{ textDecoration: 'none' }}  to='/signup'>
                <Button padding={['1.3rem 2.2rem', '1.8rem 2.2rem', '1.8rem 2.2rem', '1.8rem 2.2rem']} borderRadius='3' fontSize='1.1rem' color='#2e475d'>Get a demo</Button>
              </Link>
              <Link style={{ textDecoration: 'none' }}  to='/signup'hubspot>
                <Button padding={['1.2rem 1.2rem', '1.8rem 2.2rem', '1.8rem 2.2rem', '1.8rem 2.2rem']} borderRadius='3' fontSize='1.1rem' bgColor='transparent' color='whitesmoke' border='1px solid white' colorScheme='red'>Get started free</Button>
              </Link>
            </Flex>

            <Box display={['none', 'none', 'inline-block', 'inline-block']}>
              <Text fontSize={['0.9rem', '0.9rem', '1rem', '1.1rem']} fontWeight='600'>Get started with free tools, or get</Text>
              <Text fontSize={['0.9rem', '0.9rem', '1rem', '1.1rem']} fontWeight='600'>more with our premium software.</Text>
            </Box>
          </Flex>
        </Flex>

        <Flex direction='column' w={['100%', '80%', '50%', '50%']} m='auto' justifyContent='center' alignItems='center'>
          <Image src='https://www.hubspot.com/hubfs/SUI-Homepage-Header-Mobile@2x.png' />
        </Flex>
      </Flex>

      {/*SECTION-2*/}
      <Flex direction='column' bgColor='#f6f9fc'>
        <Flex padding={['1.3rem', '2rem', '3.9rem', '3.9rem']} gap={['2rem']} w={['100%', '100%', '95%', '54%']} m='auto' direction='column'>
          <Text fontSize={['1.3rem', '1.8rem', '2.1rem', '1.8rem']} textAlign='center' fontWeight='600' color='#2e475d'>
            The CRM Platform Your Whole Business Will Love
          </Text>

          <Text fontSize={['.925rem', '1rem', '1rem', '1rem']}>
            HubSpot’s CRM platform has all the tools and integrations you need for marketing, sales, content management, and customer service. Each product in the platform is powerful alone, but the real magic happens when you use them together.
          </Text>

          <Flex gap={['1rem', '2rem', '2rem', '2rem']} m='auto' direction={['column', 'row', 'row', 'row']} justifyContent='center'>
            <Link style={{ textDecoration: 'none' }}  to='/signup'>
              <Button cursor='pointer' colorScheme='red' bgColor='#ff5c35' fontSize='0.8rem' fontWeight='600' border='1px solid #ff5c35' color='white' borderRadius='0.2rem' w={['100%', '29vw', '19vw', '14vw']} h={['5vh', '4.5vh', '4.5vh', '4.5vh']} fontFamily='sans-serif'>Get free CRM</Button>
            </Link>
            <Link style={{ textDecoration: 'none' }}  to='/signup'>
              <Button cursor='pointer' border='1px solid #ff5c35' bgColor='white' color='#ff5c35' fontSize={['0.8rem', '0.8rem', '0.8rem', '0.8rem']} fontWeight='600' borderRadius='0.2rem' w={['100%', '29vw', '19vw', '14vw']} h={['5vh', '4.5vh', '4.5vh', '4.5vh']} fontFamily='sans-serif'>Demo premium CRM</Button>
            </Link>
          </Flex>
        </Flex>

        {/*Section-2 B*/}
        <SimpleGrid w={['100%', '100%', '90%', '70%']} m='auto' paddingBottom={['4rem']} columns={['1', '1', '2', '3']} spacing={8} color='#ff5c35'>
          <Box bgColor='white' m='auto' borderRadius='0.3rem' boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' w={['90vw', '90vw', '40vw', '21vw']}>
            <Flex w='88%' h={['49vh']} m='auto' direction='column' justifyContent='space-around'>
              <Flex gap={['0.7rem']} alignItems='center'>
                <Image w='1.8rem' src='https://www.hubspot.com/hubfs/product_icons_2022/ServiceHub_Icon_Gradient_RGB_24px.svg' />
                <Text color='#2e475d' fontSize='1.55rem' fontWeight='600'>
                  Marketing Hub</Text>
              </Flex>
              <Text color='#2e475d' fontSize={['0.9rem']}>Marketing software to help you grow traffic, convert more visitors, and run complete inbound marketing campaigns at scale.</Text>
              <Flex gap={['1rem']} direction='column'>
                <Text color='#2e475d' fontSize={['1rem']}>Popular Features</Text>
                <Stack spacing={2} fontSize={['0.8rem']} as='b'>
                  <Text color='#2e475d'>Lead generation</Text>
                  <Text color='#2e475d'>Marketing automation</Text>
                  <Text color='#2e475d'>Analytics</Text>
                </Stack>
              </Flex>
              <Button bgColor='#ff5c35' color='whitesmoke' borderRadius='0.2rem'>Get started</Button>
            </Flex>
          </Box>

          <Box bgColor='white' m='auto' borderRadius='0.3rem' boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' w={['90vw', '90vw', '40vw', '21vw']}>
            <Flex w='88%' h={['46vh']} m='auto' direction='column' justifyContent='space-around'>
              <Flex gap={['0.7rem']} alignItems='center'>
                <Image w='1.8rem' src='https://www.hubspot.com/hubfs/product_icons_2022/SalesHub_Icon_Gradient_RGB_24px.svg' />
                <Text color='#2e475d' fontSize='1.55rem' fontWeight='600'>
                  Sales Hub</Text>
              </Flex>              <Text color='#2e475d' fontSize={['0.9rem']}>Sales CRM software to help you get deeper insights into prospects, automate the tasks you hate, and close more deals faster.</Text>
              <Flex gap={['1rem']} direction='column'>
                <Text color='#2e475d' fontSize={['1rem']}>Popular Features</Text>
                <Stack spacing={2} fontSize={['0.8rem']} as='b'>
                  <Text color='#2e475d'>Advanced CRM</Text>
                  <Text color='#2e475d'>Meeting scheduling</Text>
                  <Text color='#2e475d'>Payments</Text>
                </Stack>
              </Flex>
              <Button bgColor='#ff5c35' color='whitesmoke' borderRadius='0.2rem'>Get started</Button>
            </Flex>
          </Box>

          <Box bgColor='white' m='auto' borderRadius='0.3rem' boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' w={['90vw', '90vw', '40vw', '21vw']}>
            <Flex w='88%' h={['46vh']} m='auto' direction='column' justifyContent='space-around'>
              <Flex gap={['0.7rem']} alignItems='center'>
                <Image w='1.8rem' src='https://www.hubspot.com/hubfs/product_icons_2022/MarketingHub_Icon_Gradient_RGB_24px.svg' />
                <Text color='#2e475d' fontSize='1.55rem' fontWeight='600'>
                  Service Hub</Text>
              </Flex>              <Text color='#2e475d' fontSize={['0.9rem']}>Customer service software to help you connect with customers, exceed expectations, and turn them into promoters who grow your business.</Text>
              <Flex gap={['1rem']} direction='column'>
                <Text color='#2e475d' fontSize={['1rem']}>Popular Features</Text>
                <Stack spacing={2} fontSize={['0.8rem']} as='b'>
                  <Text color='#2e475d'>Tickets</Text>
                  <Text color='#2e475d'>Customer feedback</Text>
                  <Text color='#2e475d'>Knowledge base</Text>
                </Stack>
              </Flex>
              <Button bgColor='#ff5c35' color='whitesmoke' borderRadius='0.2rem'>Get started</Button>
            </Flex>
          </Box>

          <Box bgColor='white' m='auto' borderRadius='0.3rem' boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' w={['90vw', '90vw', '40vw', '21vw']}>
            <Flex w='88%' h={['46vh']} m='auto' direction='column' justifyContent='space-around'>
              <Flex gap={['0.7rem']} alignItems='center'>
                <Image w='1.8rem' src='https://www.hubspot.com/hubfs/product_icons_2022/CMSHub_Icon_Gradient_RGB_24px.svg' />
                <Text color='#2e475d' fontSize='1.55rem' fontWeight='600'>
                  CMS Hub</Text>
              </Flex>              <Text color='#2e475d' fontSize={['0.9rem']}>Content management software that’s flexible for marketers, powerful for developers, and gives customers a personalized, secure experience.</Text>
              <Flex gap={['1rem']} direction='column'>
                <Text color='#2e475d' fontSize={['1rem']}>Popular Features</Text>
                <Stack spacing={2} fontSize={['0.8rem']} as='b'>
                  <Text color='#2e475d'>Drag-and-drop editor</Text>
                  <Text color='#2e475d'>SEO recommendations</Text>
                  <Text color='#2e475d'>Website themes</Text>
                </Stack>
              </Flex>
              <Button bgColor='#ff5c35' color='whitesmoke' borderRadius='0.2rem'>Get started</Button>
            </Flex>
          </Box>

          <Box bgColor='white' m='auto' borderRadius='0.3rem' boxShadow='rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px' w={['90vw', '90vw', '40vw', '21vw']}>
            <Flex w='88%' h={['46vh']} m='auto' direction='column' justifyContent='space-around'>
              <Flex gap={['0.7rem']} alignItems='center'>
                <Image w='1.8rem' src='https://www.hubspot.com/hubfs/product_icons_2022/OperationsHub_Icon_Gradient_RGB_24px.svg' />
                <Text color='#2e475d' fontSize='1.55rem' fontWeight='600'>
                  Operations Hub</Text>
              </Flex>
              <Text color='#2e475d' fontSize={['0.9rem']}>Operations software that syncs your apps, cleans and curates customer data, and automates processes — so all your systems and teams work better together.</Text>
              <Flex gap={['1rem']} direction='column'>
                <Text color='#2e475d' fontSize={['1rem']}>Popular Features</Text>
                <Stack spacing={2} fontSize={['0.8rem']} as='b'>
                  <Text color='#2e475d'>Data sync</Text>
                  <Text color='#2e475d'>Programmable automation</Text>
                  <Text color='#2e475d'>Data quality automation</Text>
                </Stack>
              </Flex>
              <Button bgColor='#ff5c35' color='whitesmoke' borderRadius='0.2rem'>Get started</Button>
            </Flex>
          </Box>

        </SimpleGrid>
      </Flex>

      {/*Section 3*/}
      <Flex direction='column' h={['40vh', '50vh', '50vh', '70vh']} backgroundImage='linear-gradient(45deg,#0fbfbf,#4fb06d)'>

        <Flex padding={['1.1rem', '2rem', '3.9rem', '3.8rem']} gap={['2rem']} w={['100%', '100%', '95%', '60%']} m='auto' direction='column'>
          <Text fontSize={['1.3rem', '1.8rem', '2.1rem', '2.1rem']} textAlign='center' fontWeight='600' color='white'>
            Learn and grow with award-winning support and a thriving community behind you.
          </Text>

          <Text fontSize={['.930rem', '1rem', '1rem', '1rem']} color='white' textAlign='center'>
            You don't have to go it alone. Master the inbound methodology and get the most out of your tools with HubSpot's legendary customer support team and a community of thousands of marketing and sales pros just like you.
          </Text>
        </Flex>

      </Flex>

      {/*Section 4*/}
      <Flex direction='column' h={['100vh', '110vh', '80vh', '90vh']} justifyContent='center' alignItems='center'>
        <SimpleGrid w={['99%', '90%', '95%', '80%']} columns={1} spacing={['2.4rem']}>

          <Flex justifyContent='space-between' gap={['2rem', '3rem', '2.2rem', '0']} alignItems='center' direction={['column', 'column', 'column', 'row']}>
            <Stack w={['90vw', '90vw', '90vw', '28vw']} alignItems={['center', 'flex-start', 'flex-start', 'flex-start']} spacing={['1.5rem']}>
              <Text fontSize='2.4rem' fontWeight='600' color='#2e475d'>150,000+</Text>
              <Text fontSize='1.1rem' color='#2e475d'>customers in over 120 countries growing their businesses with HubSpot</Text>
            </Stack>

            <SimpleGrid columns={1} spacing={['0.9rem', '1rem', '1.5rem', '1.5rem']}>
              <Flex gap={['0.6rem', '0.7rem', '2rem', '2rem']} alignItems='center' justifyContent='center'>
                <Image w={['5rem']} maxH={['4.8vh', '5vh', '7vh', '7vh']} src='https://f.hubspotusercontent00.net/hubfs/53/1200px-WWF_logo_svg%20(1).png' />
                <Image w={['4.8rem']} maxH={['2.9vh', '3vh', '4vh', '4vh']} src='https://f.hubspotusercontent00.net/hubfs/53/trello-logo-blue%20(1).png' />
                <Image w={['5.8rem']} maxH={['5.8vh']} src='https://www.hubspot.com/hubfs/Reddit%20Logo%20for%20HS%20website%20(1).png' />
                <Image w={['5.7rem']} maxH={['5vh']} src='https://www.hubspot.com/hubfs/WW%20Logo%20for%20HS%20Website%20(2).png' />
              </Flex>
              <Flex gap={['0.1rem', '1.1rem', '2rem', '2rem']} alignItems='center' justifyContent='center'>
                <Image maxH={['1.4vh', '1.2vh', '1.1vh', '1.7vh']} src='https://f.hubspotusercontent00.net/hubfs/53/soundcloud.png' />
                <Image maxH={['4.2vh', '4vh', '5vh', '6vh']} src='https://www.hubspot.com/hubfs/Momentive%20Logo%20for%20HS%20website.png' />
                <Image maxH={['4.2vh', '5vh', '5.2vh', '6vh']} src='https://www.hubspot.com/hubfs/DoorDash%20Logo%20for%20HS%20Website-1.png' />
                <Image maxH={['3.8vh', '4vh', '5vh', '5.8vh']} src='https://www.hubspot.com/hubfs/Eventbrite%20Logo%20for%20HS%20Website-1.png' />
              </Flex>
            </SimpleGrid>
          </Flex>

          <Flex gap={['0.8rem', '1rem', '1rem', '0']} justifyContent='space-between' alignItems='center' direction={['column-reverse', 'column-reverse', 'row', 'row']}>
            <Flex gap={['1.2rem', '1.7rem', '1.7rem', '1.7rem']} direction='column' w={['90%', '90%', '50%', '50%']}>
              <Text fontSize={['1.4rem', '1.7rem', '1.7rem', '1.7rem']} fontWeight='600' color='#2e475d'>Start Growing With HubSpot Today</Text>
              <Text>With tools to make every part of your process more human and a support team excited to help you, getting started with inbound has never been easier.</Text>

              <Flex gap={['0.6rem', '1rem', '1rem', '1rem']} direction={['row', 'row', 'row', 'row']}>
                <Link style={{ textDecoration: 'none' }}  to='/signup'>
                  <Button padding={['1.3rem 1.8rem', '1.8rem 2.2rem', '1.8rem 2.2rem', '1.8rem 2.2rem']} bgColor='#ff5c35' borderRadius='3' fontSize='1.1rem' color='white'>Get a demo</Button>
                </Link>
                <Link style={{ textDecoration: 'none' }}  to='/signup'>
                  <Button padding={['1.2rem 0.8rem', '1.8rem 2.2rem', '1.8rem 2.2rem', '1.8rem 2.2rem']} borderRadius='3' fontSize='1.1rem' color='#ff5c35' bgColor='white' border='1px solid #ff5c35'>Get started free</Button>
                </Link>
              </Flex>
              <Text>Get started with free tools, or get more with our premium software.</Text>
            </Flex>

            <Box>
              <Image w={['12rem', '18rem', '19rem', '21rem']} src='https://www.hubspot.com/hubfs/CSOL/module-assets/_cta_contentblock_headshots_headshot_6.png' />
            </Box>
          </Flex>

        </SimpleGrid>
      </Flex >

    </Box >
    <Footer/>
    </>
  )
}

export default Home;