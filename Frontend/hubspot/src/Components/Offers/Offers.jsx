import { Button, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckIcon } from '@chakra-ui/icons'
import "./Offers.css"
import axios from "axios"

// const cartitems = JSON.parse(localStorage.getItem('cartitems'))||{};


const Offers = () => {
    const [data, SetData] = useState([]);

    // const AddtoCart=(gt)=>{
    //     localStorage.setItem('cartitems', JSON.stringify(gt));
    // }    

    useEffect(() => {
        axios.get('https://unit5project.onrender.com/software')
            .then((response) => {
                SetData(response.data);
            });        
    }, [])


    console.log(data);
    return (
        <>
            <div className='BigOfferDiv'>
                {
                    data.map((gt, index) => (
                        <div key={index} >
                            <div style={{ padding: '0px 16px ' }}>
                                <div className='firstdiv'>
                                    <img src={gt.image} alt='starter logo' />
                                    <p >{gt.software_name}</p>
                                </div>
                                <p className='simpleTextDiv'>Starts at</p>
                                <p className='secTextDiv'>{gt.monthlyprice}</p>
                                <p className='simpleTextDiv'>billed at  <span style={{ textDecoration: 'line-through' }}>${30 * (index + 1)}</span><span style={{ fontWeight: "600", color: '#516f90', fontSize: '12px', }}> ${40 * (index + 10)}/yr</span></p>
                                <div className='numberBox'>
                                    <NumberInput maxW='100px' defaultValue={300 * index} step={1000} min={1000}>
                                        <NumberInputField />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                    <p>Marketing Contacts</p>
                                </div>
                                <p className='simpleTextDiv'>{gt.description} <span style={{ color: ' #0091ae' }}>More details.</span></p>
                                <div style={{ marginTop: '15px' }}></div>
                                <Link to='/cart'><Button colorScheme='orange' height='40px' width='100%' variant='solid'>Buy Now</Button></Link>
                                <div style={{ margin: '15px 0px 15px 0px' }}></div>
                                <Link to="/contactsales"><Button colorScheme='orange' height='40px' width='100%' variant='outline'>Talk to sales</Button></Link>
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='lastText'>
                <div>See More</div>
                <div>See More</div>
                <div>See More</div>
            </div>
            <div className='lastdiv'><span style={{ color: 'black', fontWeight: '600' }}>All paid plans includes :   </span>
                <p><CheckIcon />Storage for up to 15 million overall contacts</p>
                <p><CheckIcon />1:1 technical support</p>
            </div>
        </>
    )
}

export default Offers