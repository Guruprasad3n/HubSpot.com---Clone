// import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Routes, Route } from "react-router-dom"
import CartPage from '../Components/CartPage/CartPage'
import CheckOut from '../Components/CheckoutPage/CheckOut'
import Home from '../Components/Home/Home'
import Login from '../Components/Login/Login'
import Signup from '../Components/Login/signup'
import Payment from '../Components/PaymentPage/Payment'
import Planning from '../Components/Planning/Planning'
import PricingPage from '../Components/PricingPage/PricingPage'
import RequireAuth from '../Components/RequireAuth/RequireAuth'
import Resources from '../Components/Resources/Resources'


const Mainroutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Planning />}></Route>

        <Route path="/resource" element={<Resources />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <CartPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/payment"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/softwarepage"
          element={
            <RequireAuth>
              <PricingPage />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    );
}

export default Mainroutes