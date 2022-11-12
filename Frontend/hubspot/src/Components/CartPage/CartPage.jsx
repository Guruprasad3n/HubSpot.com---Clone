import React from 'react'
import './Cart.css'
import { Button, Center, Checkbox, Divider, Input, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Navabr1 from '../Navbar1/Navabr1'
import Footer1 from '../footerg/Footer1'
const CartPage = () => {
    // console.log(id);
    return (
        <>
            <Navabr1 />
            <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: '400', color: '#33475b', marginTop: '20px', marginBottom: '20px' }}>Confirm your contact tier</p>
            <div className='confirmationMainDiv'>
                <div style={{ display: 'flex', textAlign: 'center', marginBottom: '40px' }}>
                    <div className='confirmMAin1' style={{ borderRight: '1px solid rgb(203,214,226)' }}>
                        <p className='confirm1div'>1,000</p>
                        <p className='confirm1div1'>Marketing contacts</p>
                        <p className='confirm1div2'>Total number of contacts you want to market to.</p>
                    </div>
                    <div style={{ borderRight: '1px solid rgb(203,214,226)' }} className='confirmMAin1'>
                        <p className='confirm1div'>5,000</p>
                        <p className='confirm1div1'>Email sends</p>
                        <p className='confirm1div2'>Total emails you can send per calendar month.</p>
                    </div>
                    <div className='confirmMAin1'>
                        <p className='confirm1div'>$0</p>
                        <p className='confirm1div1'>Additional monthly cost</p>
                        <p className='confirm1div2'>Price of adding additional marketing contacts to your plan.</p>
                    </div>
                </div>
                <p className='confirmAlltext'>Once you select a contact tier, you cannot downgrade until your contract renews. However, you can change marketing contacts to non-marketing contacts at any time. Their status will be updated once a month.</p>
                <p className='confirmAlltext'>You can store your non-marketing contacts for free, up to a limit of 15 million overall contacts, but you can't target them with emails or ads.</p>
                <p className='confirmBoldText'>Contacts</p>
                <div style={{ display: 'flex', gap: '100px', justifyContent: 'space-between' }}>
                    <p className='confirmAlltext'>Your plan includes 1,000 marketing contacts. After that, you can buy more marketing contacts in increments of 1K starting at $50/month. <span>More details</span></p>
                    <Input htmlSize={4} width='auto' defaultValue={1000} />
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '10px', marginBottom: '20px' }}>
                    <p className='confirmBoldNum'>1,000</p>
                    <Slider aria-label='slider-ex-1' colorScheme='teal' defaultValue={0}>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <SliderThumb />
                    </Slider>
                    <p className='confirmBoldNum'>100,00</p>
                </div>
                <p className='confirmBoldText'>Contact overages and setup</p>
                <p className='confirmAlltext'>For Marketing Hub Starter, HubSpot automatically adjusts your bill as your marketing contact database grows beyond your current tier.</p>
                <p className='confirmAlltext'>After purchasing Marketing Hub Starter, we’ll automatically mark all of your contacts as non-marketing. This means that marketing efforts (such as scheduled emails) previously set up in your free account or a Marketing Hub trial won’t be sent until applicable contacts are set as marketing.</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <Checkbox></Checkbox>
                    <p className='confirmAlltext' style={{ marginTop: '6px' }}>I understand how contact overages work and that I will need to set contacts I wish to market to as marketing contacts</p>
                </div>
            </div>
            <div style={{ textAlign: 'center', margin: 'auto', marginTop: '20px', marginBottom: '50px' }}><Button colorScheme='orange' borderRadius='3px'><Link to="/payment">Continue</Link></Button></div>

            <Footer1 />
        </>
    )
}

export default CartPage