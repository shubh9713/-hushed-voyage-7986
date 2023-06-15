import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Registration from '../Pages/Registration'
import Home from '../Pages/Home'


import SignUp from '../Pages/Signup'


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignUp" element={<SignUp/>}/>
                
            </Routes>
        </div>
    )
}

export default AllRoutes