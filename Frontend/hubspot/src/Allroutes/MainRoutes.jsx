import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route } from "react-router-dom"
import CartPage from '../Components/CartPage/CartPage'
import CheckOut from '../Components/CheckoutPage/CheckOut'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Signup from '../Components/Login/signup'
import Payment from '../Components/PaymentPage/Payment'
import Pricing from '../Components/Pricing/Pricing'
import PricingPage from '../Components/PricingPage/PricingPage'
import Resources from '../Components/Resources/Resources'


const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
            <Route path='/resource' element={<Resources />}></Route>
            <Route path="/login" element={<Login />} />
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/cart' element={<CartPage />}></Route>
            <Route path='/payment' element={<Payment />}></Route>
            <Route path='/softwarepage' element={<PricingPage />}></Route>
            <Route path='/checkoutpage' element={<CheckOut />}></Route>
        </Routes>
    )
}

export default Mainroutes