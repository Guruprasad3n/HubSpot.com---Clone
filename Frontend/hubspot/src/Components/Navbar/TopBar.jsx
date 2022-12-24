import { Box, Flex, Text } from '@chakra-ui/react';
import { BsFillMicFill } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { RiUserFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <Box w='100%' display={['none', 'none', 'none', 'inline-block']}>
            <Flex w={['100%', '100%', '100%', '80%']} h={['6vh']} m='auto' justifyContent='space-between' alignItems='center' >
                <Flex w={{ lg: '16vw' }} justifyContent='space-between' alignItems='center'>
                    <Flex gap={['3']} justifyContent='center' alignItems='center'>
                        <BsFillMicFill />
                        <Link>
                            <Text cursor='pointer' fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>
                                English
                            </Text>
                        </Link>
                        <FiChevronDown />
                    </Flex>
                    <Flex gap={['3']} justifyContent='center' alignItems='center'>
                        <RiUserFill />
                        <Link target='_blank'>
                            <Text fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>Contact Sales</Text>
                        </Link>
                    </Flex>
                </Flex>

                <Flex w={['20vw']} justifyContent='space-between' alignItems='center'>
                    <BiSearch cursor='pointer' color='blue' />
                    <Link textDecoration='none' to='/login'>
                        <Text cursor='pointer' fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>Log in</Text>
                    </Link>
                    <Link textDecoration='none' to='/signup'>
                        <Text cursor='pointer' fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>Customer Support</Text>
                    </Link>
                    <Flex gap={['0.5rem']} cursor='pointer' justifyContent='space-between' alignItems='center'>
                        <Link target='_blank'>
                            <Text fontSize={['.75rem']} color='#2e475d' fontFamily='sans-serif' fontWeight='600'>About</Text>
                        </Link>
                        <FiChevronDown />
                    </Flex>
                </Flex>
            </Flex>

        </Box >
    )
}

export default TopBar;