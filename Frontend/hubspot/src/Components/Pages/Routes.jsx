import React from 'react'

import Pricing from '../Pricing/Pricing' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function ALLRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/pricing" element = {<Pricing/>}></Route>
        </Routes>
     </Router>
    </div>
  )
}

export default ALLRoutes