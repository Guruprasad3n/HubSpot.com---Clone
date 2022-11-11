import { MenuButton, Menu, MenuList, MenuItem, IconButton, Link, Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';

const MenuComp = () => {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
                width='4rem'
                h='3rem'
            />
            <MenuList w='20vw'>
                <MenuItem>
                    <Link textDecoration='none' href=''>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Software</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link textDecoration='none' href=''>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Pricing</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Resources</Text>
                </MenuItem>
                <MenuItem>
                    <Link textDecoration='none' href=''>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Customer Support</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href='https://www.hubspot.com/our-story' target='_blank'>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>About</Text>
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu >
    )
}

export default MenuComp;