import React from 'react'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Button, Checkbox, Image, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { AddIcon, ExternalLinkIcon, MinusIcon } from '@chakra-ui/icons'
import './Calculate.css'
import { Link } from 'react-router-dom'


const CalculatePrice = () => {
    return (
        <>
            <p style={{ margin: 'auto', textAlign: 'center', marginBottom: '20px', marginTop: '20px', fontWeight: '700', fontSize: '32px', color: '#33475b' }}>Calculate Your Price</p>
            <div className='CalculateDiv'>
                <div >
                    <p style={{ fontSize: '16px', fontWeight: '600', color: '#33475b', marginBottom: '30px' }}>Select a Marketing Hub plan:</p>
                    <div className='CalculateButtonDiv'>
                        <Box
                            as='button'
                            height='74px'
                            width='100%'
                            lineHeight='1.2'
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            border='1px'
                            px='8px'
                            // borderRadius='2px'
                            fontSize='14px'
                            fontWeight='semibold'
                            bg='white'
                            borderColor='#7fd1de'
                            color='#4b4f56'
                            _hover={{
                                boxShadow: '0 0 0 1px #7fd1de',
                                border: '1px solid #7fd1de',
                                bg: 'white'
                            }}
                            _active={{
                                bg: '#e5f5f8',
                                transform: 'scale(0.98)',
                                boxShadow: '0 0 0 1px #00a4bd',
                                border: '1px solid #00a4bd'
                            }}
                            _focus={{
                                bg: '#e5f5f8', boxShadow: '0 0 0 1px #00a4bd',
                                border: '1px solid #00a4bd'
                            }}>
                            <div className='styleInButton'><Image src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Starter.svg' alt='LogoImage' /><p className='styleInButtonP'>Starter</p></div>
                            <p className='styleInButton2P'>$50/month</p>
                        </Box>
                        <Box
                            as='button'
                            height='74px'
                            width='100%'
                            lineHeight='1.2'
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            border='1px'
                            px='8px'
                            // borderRadius='2px'
                            fontSize='14px'
                            fontWeight='semibold'
                            bg='white'
                            borderColor='#7fd1de'
                            color='#4b4f56'
                            _hover={{
                                boxShadow: '0 0 0 1px #7fd1de',
                                border: '1px solid #7fd1de',
                                bg: 'white'
                            }}
                            _active={{
                                bg: '#e5f5f8',
                                transform: 'scale(0.98)',
                                boxShadow: '0 0 0 1px #00a4bd',
                                border: '1px solid #00a4bd'
                            }}
                            _focus={{
                                bg: '#e5f5f8', boxShadow: '0 0 0 1px #00a4bd',
                                border: '1px solid #00a4bd'
                            }}>
                            <div className='styleInButton'><Image src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Pro.svg' alt='' /><p className='styleInButtonP'>Professional</p></div>
                            <p className='styleInButton2P'>$890/month</p>
                        </Box>
                        <Box
                            as='button'
                            height='74px'
                            width='100%'
                            lineHeight='1.2'
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            border='1px'
                            px='8px'
                            // borderRadius='2px'
                            fontSize='14px'
                            fontWeight='semibold'
                            bg='white'
                            borderColor='#7fd1de'
                            color='#4b4f56'
                            _hover={{
                                boxShadow: '0 0 0 1px #7fd1de',
                                border: '1px solid #7fd1de',
                                bg: 'white'
                            }}
                            _active={{
                                bg: '#e5f5f8',
                                transform: 'scale(0.98)',
                                boxShadow: '0 0 0 1px #00a4bd',
                                border: '1px solid #00a4bd'
                            }}
                            _focus={{
                                bg: '#e5f5f8', boxShadow: '0 0 0 1px #00a4bd',
                                border: '1px solid #00a4bd'
                            }}>
                            <div className='styleInButton'><Image src='https://static.hsappstatic.net/pricing-pages-unified-ui/static-1.13240/js/img/productIcons/MarketingHub_Ent.svg' alt='' /><p className='styleInButtonP'>Enterprise</p></div>
                            <p className='styleInButton2P'>$3,200/month</p>
                        </Box>

                    </div>
                    <div style={{ borderBottom: '1px solid rgb(223,227,235)', width: '99%', marginBottom: '30px' }}></div>
                    <p style={{ fontWeight: '600', fontSize: '16px', color: '#33475b', marginBottom: '15px' }}>Marketing Contacts</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <p className='styleInButton2P'>Includes 1,000 marketing contacts. Additional marketing contacts are sold in increments of 1,000 from $45.00/month. <span style={{ color: '#0091ae', fontWeight: '600' }}>More details.</span></p>
                        <Input type='number' padding='9px 10px' borderRadius='3px' bg='#f5f8fa' color='#33475b' height='40px' maxWidth='100px' border='1px solid grey' variant='outline' placeholder='1000' defaultValue={1000} marginLeft='50px' />
                    </div>
                    <Slider aria-label='slider-ex-2' colorScheme='teal' defaultValue={10}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <div className='styleInButton2P' style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}><p>1,000</p><p>100,000</p></div>
                    <div style={{ padding: '12px', marginTop: '16px !important', borderRadius: '3px', border: '1px solid rgb(223,227,235)', textAlign: 'center', marginBottom: '30px' }}>
                        <p style={{ fontWeight: '600', fontSize: '12px', lineHeight: '18px', textAlign: 'center', color: '#33475b' }}>All non-marketing contacts are free, up to a limit of 15 million overall contacts.</p>
                        <p className='styleInButton2P' >Only pay for the contacts you want to market to.</p>
                    </div>
                    <p style={{ fontWeight: '600', fontSize: '16px', color: '#33475b', marginBottom: '20px' }}>Add-ons</p>
                    <div>
                        <Accordion allowMultiple>
                            <AccordionItem>
                                {({ isExpanded }) => (
                                    <>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    <p>Customize and enhance your plan with additional features.</p>
                                                </Box>
                                                {isExpanded ? (
                                                    <MinusIcon fontSize='12px' />
                                                ) : (
                                                    <AddIcon fontSize='12px' />
                                                )}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <div style={{ display: 'flex', border: '1px solid rgb(223,227,235)', padding: '15px', gap: '10px' }}>
                                                <div><Checkbox ></Checkbox></div>
                                                <div>
                                                    <p>API Limit increase</p>
                                                    <p>$500.00/mo</p>
                                                    <p>Increase your included API call volume for your integration between your HubSpot account and other services to up to 1,000,000 calls per day.</p>
                                                </div>
                                            </div>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
                <div style={{ height: '430px', borderTop: '3px solid rgb(0, 164, 189)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px' }}>
                    <p style={{ fontSize: '45px', fontWeight: 'bold', textAlign: 'center', color: '#33475b' }}>$45<span style={{ fontSize: '26px', fontWeight: '600' }}>/mo</span></p>
                    <p style={{ fontSize: '12px', color: 'rgb(81,111,144)', textAlign: 'center', marginBottom: '20px' }}>billed at <span style={{ textDecoration: 'line-through', color: '#33475b' }}>$600</span><span style={{ color: '#33475b' }}> $540/yr</span></p>
                    <div style={{ width: '99%', borderTop: '2px solid rgb(223,227,235)', marginBottom: '15px' }}></div>
                    <div style={{ width: '99%', backgroundColor: 'rgb(223,227,235)', padding: '10px', textAlign: 'center', marginBottom: '15px' }}>
                        <p style={{ fontWeight: '600', fontSize: '14px', color: '#33475b', lineHeight: '24px' }}>Marketing Hub Starter</p>
                        <p style={{ fontWeight: '400', fontSize: '14px', color: '#33475b', lineHeight: '24px' }}>$45 per month | 1,000 contacts</p>
                    </div>
                    <div style={{ width: '99%', borderTop: '2px solid rgb(223,227,235)', marginBottom: '15px' }}></div>
                    <Link to="/cart">   <Button width='100%' height='50px' colorScheme='orange' marginBottom='15px'>

                        Buy Now </Button></Link>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: '#0091ae', lineHeight: '24px', textAlign: 'center', marginBottom: '20px' }}>View price breakdown</p>
                    <p style={{ fontWeight: '600', fontSize: '14px', color: '#0091ae', lineHeight: '24px', textAlign: 'center', marginBottom: '20px' }}><ExternalLinkIcon /> <span style={{ marginLeft: '5px' }}>Share this price</span></p>
                </div>
            </div>
        </>
    )
}

export default CalculatePrice