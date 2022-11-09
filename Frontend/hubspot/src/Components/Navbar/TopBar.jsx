import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { BsFillMicFill } from 'react-icons/bs';
import { FiChevronDown } from 'react-icons/fi';
import { RiUserFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';

const TopBar = () => {
    return (
        <Box bgColor='green'>
            <Flex bgColor='pink' w={['80%']} m='auto' justifyContent='space-between' alignItems='center' >
                <Flex w='14vw' justifyContent='space-between' alignItems='center'>
                    <Flex gap={['3']} justifyContent='center' alignItems='center' border='1px solid blue'>
                        <BsFillMicFill />
                        <Text fontFamily='sans-serif' fontSize={['0.9rem']}>English</Text>
                        <FiChevronDown />
                    </Flex>
                    <Flex gap={['3']} justifyContent='center' alignItems='center' border='1px solid red'>
                        <RiUserFill />
                        <Text fontFamily='sans-serif' fontSize={['0.9rem']}>Contact Sales</Text>
                    </Flex>
                </Flex>

                <Flex border='1px solid green' w={['20vw']} justifyContent='space-between' alignItems='center'>
                    <BiSearch />
                    <Text>Log in</Text>
                    <Text>Customer Support</Text>
                    <Flex gap={['0.5rem']} justifyContent='space-between' alignItems='center'>
                        <Text>About</Text>
                        <FiChevronDown />
                    </Flex>
                </Flex>
            </Flex>

        </Box>
    )
}

export default TopBar