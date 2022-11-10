import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { BsFillMicFill } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { RiUserFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';

const TopBar = () => {
    return (
        <Box bgColor='white'>
            <Flex w={['80%', '80%', '80%', '80%']} h={['6vh']} m='auto' justifyContent='space-between' alignItems='center' >
                <Flex w='14vw' justifyContent='space-between' alignItems='center'>
                    <Flex gap={['3']} cursor='pointer' justifyContent='center' alignItems='center'>
                        <BsFillMicFill />
                        <Text cursor='pointer' fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>
                            English
                        </Text>
                        <FiChevronDown />
                    </Flex>
                    <Flex gap={['3']} justifyContent='center' alignItems='center'>
                        <RiUserFill />
                        <Text cursor='pointer' fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>Contact Sales</Text>
                    </Flex>
                </Flex>

                <Flex w={['20vw']} justifyContent='space-between' alignItems='center'>
                    <BiSearch cursor='pointer' />
                    <Link textDecoration='none' href=''>
                        <Text cursor='pointer' fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>Log in</Text>
                    </Link>
                    <Link textDecoration='none' href=''>
                        <Text cursor='pointer' fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>Customer Support</Text>
                    </Link>
                    <Flex gap={['0.5rem']} cursor='pointer' justifyContent='space-between' alignItems='center'>
                        <Text fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>About</Text>
                        <FiChevronDown />
                    </Flex>
                </Flex>
            </Flex>

        </Box >
    )
}

export default TopBar