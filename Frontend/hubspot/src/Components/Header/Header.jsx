import { Box } from '@chakra-ui/react'
import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <div className='MainDiv'>
        <div className='firstRow'>Grow better with the right plan.</div>
        <div className='secRow'>Pay for what you need (when you need it).</div>
        <div style={{}}>
          <div style={{ textAlign: "center" }}>
            <button className='MainButton'>Products & Plans</button>
            <button className='MainButton' style={{ border: "1px solid grey" }}>Bunddles</button>
          </div>
          <div className='secButtonDiv'>
            <div>
              <Box as='button' height='64px' width='' lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                fontWeight='semibold' bg='white' color='#4b4f56'
                _hover={{ bg: "#ebedf0" }}
                _active={{
                  transition: 'scale(0.98)'
                }}
                _focus={{
                  bg: "#E5F5F8",
                  borderBottom: '4px'
                }}
              >
                Free Tools
              </Box>
            </div>
            <div>
              <Box as='button' width='' height='64px' lineHeight='1.2'
                transition='all 0.2s cubic-bezier(0.8,.52,.52,1)' px='8px'
                fontWeight='semibold' bg='white' color='#4b4f56'
                _hover={{ bg: "#ebedf0" }}
                _active={{
                  transform: 'scale(0.98)'
                }}
                _focus={{
                  bg: '#E5F5F8',
                  borderBottom: '4px'
                }}
              >Marketing</Box>
            </div>
            <div>
              <Box as='button' width='' height='64px' lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)' px='8px'
                fontWeight='semibold' bg='white' color='#4b4f56'
                _hover={{ bg: '#ebedf0' }}
                _active={{
                  transform: 'scale(0.98)',
                }}
                _focus={{
                  bg: '#E5F5F8',
                  borderBottom: '4px'
                }}
              >Sales</Box>
            </div>
            <div>
              <Box as='button' width='' height='64px' lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)' px='8px'
                fontWeight='semibold' bg='white' color='#4b4f56'
                _hover={{ bg: '#ebedf0' }}
                _active={{
                  transform: 'scale(0.98)',
                }}
                _focus={{
                  bg: '#E5F5F8',
                  borderBottom: '4px'
                }}
              >Services</Box>
            </div>
            <div>
              <Box as='button' width='' height='64px' lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)' px='8px'
                fontWeight='semibold' bg='white' color='#4b4f56'
                _hover={{ bg: '#ebedf0' }}
                _active={{
                  transform: 'scale(0.98)',
                }}
                _focus={{
                  bg: '#E5F5F8',
                  borderBottom: '4px'
                }}
              >CMS</Box>
            </div>
            <div>
              <Box as='button' width='' height='64px' lineHeight='1.2'
                transition='all 0.2s cubic-bezier(.08,.52,.52,1)' px='8px'
                fontWeight='semibold' bg='white' color='#4b4f56'
                _hover={{ bg: '#ebedf0' }}
                _active={{
                  transform: 'scale(0.98)',
                }}
                _focus={{
                  bg: '#E5F5F8',
                  borderBottom: '4px'
                }}
              >Operation</Box></div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header