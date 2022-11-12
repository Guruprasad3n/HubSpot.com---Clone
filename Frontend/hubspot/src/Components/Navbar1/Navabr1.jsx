import React from 'react';
// import { ReactNode } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Img,
    Text
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { HamburgerIcon, CloseIcon, UnlockIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logout from '../redux/auth/auth.action';




// const Links = ['Dashboard', 'Projects', 'Team'];

// const NavLink = ({ children }) => (
//     <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700'), }} href={'#'}>
//         {children}
//     </Link>
// );

const iU={
    name:"Guddu Tiwari",
    Websitename:"https://gr7800.github.io",
    email:"gr7800@gmail.com",
    Companyname:"MASAI"

}

const Navabr1 = () => {
    const [user,setUser]=useState(iU)
    const { isOpen, onOpen, onClose } = useDisclosure();


    const isAuth =useSelector(store =>store.auth.isAuth);
    const dispatch =useDispatch();
    const navigate = useNavigate()


    const handleLoginClick = () => {
        // login screen
        if (isAuth) {
          dispatch(logout())
          // he wants to logout
        } else {
          // he wants to login
          navigate("/login");
        }
      };
    

    
    // if(User){
    //     setUser(User);
    // }
     const User=useSelector((store)=>(store.auth.user));
    useEffect(()=>{
        if(User.length!==0){
            setUser(User);
        }
    },[User])
    console.log("USER",User)
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box ><Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'/'}>
                        <Img src="https://i.ibb.co/jW2PNH3/free-logo-2nozrs0d3q-9018fh8aco.jpg" alt="Logo" border="0" width={"80%"} />
                            </Link></Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/company/contact'}>
                                Contacts
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/conversation'}>
                                Conversations
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/marketing'}>
                                Marketing
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/sales'}>
                                Sales
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/services'}>
                                Services
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/automation'}>
                                Automation
                            </Link>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            mr={4}
                            leftIcon={<UnlockIcon />}
                            onClick={handleLoginClick}>
                            {isAuth?"Logout":"Login"}
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://i.ibb.co/vPYv4n9/icon.jpg'
                                    }
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }}>Name:- <Text color={"#ff5c35"} >{user.name}</Text></MenuItem>
                                <MenuItem _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }}>Email:- <Text color={"#ff5c35"} >{user.email}</Text></MenuItem>
                                <MenuDivider />
                                <MenuItem _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }}>CompanyName:- <Text color={"#ff5c35"} >{user.Companyname}</Text></MenuItem>
                                <MenuItem _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }}>WebsiteName:- <Text color={"#ff5c35"} >{user.Websitename}</Text></MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                        <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/company/contact'}>
                                Contacts
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/conversation'}>
                                Conversations
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/marketing'}>
                                Marketing
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/sales'}>
                                Sales
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/services'}>
                                Services
                            </Link>
                            <Link px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: "gray.700", color:"white" }} to={'https://www.hubspot.com/products/automation'}>
                                Automation
                            </Link>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}

export default Navabr1