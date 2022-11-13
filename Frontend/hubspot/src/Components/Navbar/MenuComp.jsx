import { MenuButton, Menu, MenuList, MenuItem, IconButton,  Text } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import {Link} from "react-router-dom";

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
                    <Link textDecoration='none' to='/softwarepage'>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Software</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link textDecoration='none' to='/pricing'>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Pricing</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                <Link textDecoration='none' to='/resource'>
                <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Resources</Text>
                </Link>
                </MenuItem>
                <MenuItem>
                    <Link textDecoration='none' to='https://help.hubspot.com/?_ga=2.23678194.978470726.1592315215-1192486389.1556035228'>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>Customer Support</Text>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='https://www.hubspot.com/our-story' target='_blank'>
                        <Text fontSize='1.4rem' fontWeight='500' color='#2e475d'>About</Text>
                    </Link>
                </MenuItem>
            </MenuList>
        </Menu >
    )
}

export default MenuComp;