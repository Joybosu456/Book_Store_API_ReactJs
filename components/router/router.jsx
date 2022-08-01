
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Dashbord from '../dashbord/dashbord'
import MainPage from '../mainpage/mainPage'
import MyCart from '../mycart/myCart'
import OrderSuccesFull from '../ordersuccesfully/orderSuccesfully'
import Profile from '../profile/Profile';
import WishList from '../wishList/wishList'

function Routers() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                        <Route path="dashbord" element={<Dashbord />} />
                        <Route path='myCart' element={<MyCart />} />
                        <Route path='succes' element={<OrderSuccesFull />} />
                        <Route path='wishList' element={<WishList />} />
                        <Route path='profile' element={<Profile />} />
                </Routes>
            </Router>

        </div>
    )
}

export default Routers