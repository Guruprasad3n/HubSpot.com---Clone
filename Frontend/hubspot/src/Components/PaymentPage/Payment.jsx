import React, { useState } from 'react'
import { Button, Image, Input } from '@chakra-ui/react'
import paymentSlider from './hubSpot.png'
import './Payment.css'
import { InfoIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import Navabr1 from '../Navbar1/Navabr1'
import Footer1 from '../footerg/Footer1'

const Payment = () => {
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate()
    return (
        <>  
            <Navabr1 />
            <p style={{ margin: 'auto', fontSize: '32px', fontWeight: '600', color: '#33475b', marginTop: '30px', marginBottom: '15px', marginLeft: '70px' }}>Checkout</p>
            <div style={{ width: '90%', textAlign: 'center', borderTop: '1px solid rgb(203,214,226)', justifyContent: 'center', margin: 'auto' }}></div>
            <div><img className='paymentNavImg' src={paymentSlider} alt='payment' /></div>
            <div className='paymentDiv'>
            <div className='paymentpage2div'>
                    <div className='SubscriptionDiv'>Subscription</div>
                    <div style={{ display: 'flex', padding: '16px' }}>
                        <div style={{ marginRight: '5px', marginTop: '5px' }}><Image width='34px' src='https://static.hsappstatic.net/buying-experience-components/static-1.1498/images/productIcons/Marketing.svg' alt='image' /></div>
                        <div >
                            <p style={{ fontWeight: '500', fontSize: '14px' }}>Marketing Hub Starter - Marketing Contacts (1,000 Marketing Contacts Included)</p>
                            <p style={{ fontWeight: '400', fontSize: '12px', lineHeight: '18px', color: 'rgb(0,163,141)' }}>Starter product discount (64%)</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ color: 'rgb(81,111,144)', fontSize: '12px', textDecoration: 'line-through' }}>$600.00</p>
                            <p style={{ color: 'rgb(0,163,141)', fontSize: '12px' }}>−$384.00</p>
                            <p>$216.00</p>
                        </div>
                    </div>
                    <div className='SubscriptionDiv' style={{ borderTop: '1px solid rgb(203, 214, 226)' }}>Summary</div>
                    <div style={{ display: 'flex', padding: '16px', color: '#33475b', fontSize: '14px', fontWeight: '400', gap: '48px' }}>
                        <div style={{ marginBottom: "5px" }}>
                            <p style={{ marginBottom: "5px" }}>1 year subscription, billed annually</p>
                            <p>GST<InfoIcon marginLeft='5px' /></p>
                        </div>
                        <div style={{ textAlign: 'right!important' }}>
                            <p style={{ marginBottom: "5px" }}>$216.00</p>
                            <p> $0.00</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '2px dashed rgb(223, 227, 235)', margin: '0px 16px' }}></div>

                    <div style={{ fontWeight: '600', fontSize: '16px', display: 'flex', justifyContent: 'space-between', padding: '16px' }}><p >Order total (including tax)</p><p>$216.00</p></div>
                    <div style={{ fontWeight: '600', fontSize: '14px', display: 'flex', justifyContent: 'space-between', padding: '16px', color: 'rgb(0,163,141)' }}><p>You save</p><p>$384.00</p></div>

                </div>
                <div style={{ padding: '20px' }} className="paymentDiv1">
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <p className='detailDivText'>Company details</p><p style={{ color: 'rgb(0,163,141' }}>Change</p>
                    </div>
                    <p style={{ fontWeight: '400', fontSize: '14px', color: '#33475', lineHeight: '24px', marginBottom: '10px' }}>Used to calculate tax and will appear on billing documents.</p>
                    <p style={{ fontWeight: '400', fontSize: '14px', color: 'rgb(124,152,182)', marginBottom: '20px' }}>Address</p>
                    <p className='detailDivText'>Payment details</p>
                    <div className='detailsDivInfo'>
                        <p style={{ fontWeight: '600' }}>Some payments from Indian-issued credit cards can't be accepted due to a new directive from the Reserve Bank of India.</p>
                        <p>If you're paying with this type of card, click <span style={{ fontWeight: '600', color: '#0091ae' }}>Learn More</span> <span style={{ fontWeight: '200' }}>to see next steps.</span></p>
                    </div>
                    <p style={{ fontWeight: '600', fontSize: '14px', marginBottom: '20px' }}>Add a debit or credit card</p>
                    <form>
                        <div className='cardInputDiv'><p>Card Number*</p>
                            <div style={{ display: 'flex', gap: '2px' }}>
                                <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1498/images/cardTypes/amex.png' alt='cardimg' />
                                <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1752/images/cardTypes/Maestro.png' alt='cardimg' />
                                <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1752/images/cardTypes/mastercard.png' alt='cardimg' />
                                <Image src='https://static.hsappstatic.net/buying-experience-components/static-1.1498/images/cardTypes/visa.png' alt='cardimg' />
                            </div></div>
                        <Input
                            backgroundColor=' #f5f8fa'
                            name='number'
                            type='number'
                            label='Credit Card Number'
                            placeholder='0000111100001111'
                            marginBottom='20px'
                        />
                        <p style={{ marginBottom: '8px' }}>Expiration date*</p>
                        <Input backgroundColor=' #f5f8fa' htmlSize={4} width='auto' placeholder='MM/YY' marginBottom='20px' />
                        <p style={{ marginBottom: '8px' }}>Name on card*</p>
                        <Input backgroundColor=' #f5f8fa' marginBottom='20px' />
                        <p style={{ marginBottom: '8px' }}>Security code*</p>
                        <div style={{ display: 'flex', gap: '30px' }}><Input marginBottom='20px' backgroundColor=' #f5f8fa' htmlSize={4} width='auto' /><div style={{ display: 'flex', gap: '4px' }}><Image src='https://static.hsappstatic.net/ui-images/static-2.422/optimized/credit-card-back.svg' alt='securityImg' width='34px' /><p style={{ lineHeight: '3' }}>3 digit on back of card</p></div></div>
                    </form>
                    <Button colorScheme='orange' onClick={() => {
                        setIsloading(true)
                        setTimeout(() => {
                            setIsloading(false)

                            setTimeout(() => { navigate("/checkout", { replace: true }) }, 1500)

                        }, 2500)

                    }}
                        isLoading={isLoading}>Save & continue</Button>
                </div>
            </div>
            <Footer1 />
        </>
    )
}

export default Payment

