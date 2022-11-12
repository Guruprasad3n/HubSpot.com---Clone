import React from 'react'
import './RecomendedBundles.css'
import { PhoneIcon } from '@chakra-ui/icons'
import { Button, Divider, Image, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const RecomendedBundles = () => {
    return (
        <>
            <div>
                <h1 className='heading'>Recommended Bundles</h1>
                <div className='recomendedDiv'>
                    <p className='recomend1'>Starter CRM Suite</p>
                    <p style={{ color: '#33475b', fontSize: '14px', fontWeight: '400', lineHeight: '24px', wordSpacing: '5px' }}>Our Starter CRM Suite includes all the marketing, sales, content management, operations, and customer service tools your growing business needs.<span style={{ color: '#0091ae', fontSize: '14px', fontWeight: '600' }}> See bundled pricing details</span></p>
                    <div style={{ marginTop: '15px', marginBottom: '15px'  }}>
                        <p>Ideal for:</p>
                        <ul>
                            <li>Creating content and generating leads</li>
                            <li>Streamlining your outreach, connecting with prospects, and tracking and improving performance</li>
                            <li>Organizing and tracking customer communications, maximizing productivity, and measuring efficiency</li>
                        </ul>
                    </div>
                    <div className='midDiv'>
                        <p style={{ fontSize: '12px', color: '#516f90!important', fontWeight: '400', margin: '0px 0px 10px 0px' }}>Starts at</p>
                        <p>$45/mo</p>
                        <p style={{ fontSize: '12px', color: '#516f90!important', fontWeight: '400', margin: '0px 0px 10px 0px' }}>builled at <span style={{ textDecoration: 'line-through' }}>$600</span><span style={{ color: '#0091ae' }}> $540/yr</span></p>
                        <Link to="/cart">        <Button colorScheme='orange' height='50px' width='50%'>Buy Now</Button></Link>
                        <p style={{ margin: '10px 0px 10px 0px', color: '#0091ae', fontWeight: '600' }}>See all Features</p>
                    </div>
                    <div >

                        <p width="100%" style={{ textAlign: 'center !important', marginBottom: '-5px', marginTop: '25px', fontWeight: '600', }} >Includes free tools,plus:</p>
                        <Stack direction='row' h='60px' p={18} justifyContent="center">
                            <div className='logotextDiv'><Image src='https://static.hsappstatic.net/ui-addon-upgrades/static-9.6877/js/img/MarketingHub_Icon.svg' alt='logo' boxSize='13px'></Image><p>Marketing Hub Starter</p></div>
                            <Divider orientation='vertical' />
                            <div className='logotextDiv'><Image src='https://static.hsappstatic.net/ui-addon-upgrades/static-9.6877/js/img/CMSHub_Icon.svg' alt='logo' boxSize='13px' /><p>CMS Hub Starter</p></div>
                            <Divider orientation='vertical' />
                            <div className='logotextDiv'><Image src='https://static.hsappstatic.net/ui-addon-upgrades/static-9.6877/js/img/SalesHub_Icon.svg' alt='logo' boxSize='13px' /><p>Sales Hub Starter</p></div>
                            <Divider orientation='vertical' />
                            <div className='logotextDiv'><Image src='https://static.hsappstatic.net/ui-addon-upgrades/static-9.6877/js/img/SalesHub_Icon.svg' alt='logo' boxSize='13px' /><p>Service Hub Starter</p></div>
                            <Divider orientation='vertical' />
                            <div className='logotextDiv'> <Image src='https://static.hsappstatic.net/ui-addon-upgrades/static-9.6877/js/img/OperationsHub_Icon.svg' alt='logo' boxSize='13px' /><p>Operations Hub Starter</p></div>
                        </Stack>
                    </div>
                </div>
                <p style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.15em', lineHeight: '1.8', color: '#33475b' }}>Not sure which plan is right for you?</p>
                <p style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.15em', lineHeight: '1.8', color: '#33475b' }}>Give us a call</p>.
                <div className='phonediv'><PhoneIcon /><p style={{ fontWeight: '600', fontSize: '20px', cursor: 'pointer', color: '#0091ae', lineHeight: '15px' }}>See phone number</p></div>
                <div className='divWithImageofMen'>
                    <div className='divWithImage'><Image width={"100%"} height="100%" src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/peopleBlobs/payments-smiling-person.png' alt='menImage' /></div>
                    <div className='divWithText'>
                        <p style={{ fontWeight: '600', fontSize: '20px', color: '#33475b' }}>Transform your customers’ buying experience with built-in payments powered by the CRM.</p>
                        <div style={{ fontWeight: '400', fontSize: '14px', color: '#33475b !important', lineHeight: '24px', marginTop: '20px', marginBottom: '29px' }}>
                            <ul>
                                <li>Unlock new revenue streams with more ways to collect payment</li>
                                <li>Get paid faster with digital payments</li>
                                <li>Give front office teams a 360-degree view of the customer</li>
                                <li>Currently available in the U.S. only</li>
                            </ul>
                        </div>
                        <Button colorScheme='teal' variant='solid'>Learn More</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecomendedBundles