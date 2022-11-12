import React from 'react'
import "./MarketingHub.css"
import {ArrowDownIcon} from '@chakra-ui/icons'
const MarketingHub = () => {
  return (
    <div>
            <div className='maketingFirstDiv'>
                <div style={{display:"flex",justifyContent:"center",marginTop:'40px'}} >
                    <img src='https://static.hsappstatic.net/ui-addon-upgrades/static-9.6877/js/img/MarketingHub_Icon.svg' alt='Marketing hub logo'/>
                    <p className='MArketing_text'>Product Details</p><span className='TMspan'>PD</span>
                    </div>
                <div style={{marginTop:'10px'}}>
                    <p className='textLineOFmkHub'>Everything you need to capture leads and turn them into customers. <span>Calculate your price<ArrowDownIcon w={5} h={7}/></span></p>
                </div>
            </div>
            <div style={{margin:"0px 120px 0px 120px"}}>
                <div className='offerDiv'>
                    <p className='BoldText'>New customer offer</p>
                    <p className='subOfferDivsec'>Buy Starter CRM Suite for as low as $30/month.</p>
                </div>
                <div className='offerDiv'>
                    <p className='BoldText'>On September 1st, the price of Marketing Hub Enterprise will increase to $3,600/month.</p>
                    <p className='subOfferDivsec'>Buy now at the current price, and save.</p>
                    <button className='offerdivButton'>Talk to sales</button>
                </div>
            </div>
    </div>
  )
}

export default MarketingHub