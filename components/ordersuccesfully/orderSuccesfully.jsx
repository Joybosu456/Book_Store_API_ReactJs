import { Container } from '@mui/system'
import React from 'react'
import './orderSuccesFull.css'
import { Box } from '@mui/system'
import image from "../image/Orderplacedsuccessfully (1).png"
import { Button, useThemeProps } from '@mui/material'
import OrderSummery from '../ordersummery/orderSummery'
import { useNavigate } from 'react-router-dom';
import Header from '../header/header'

function OrderSuccesFull() {

    const navigate = useNavigate();
    const goToMainPage = () => {
        navigate('/Dashbord')
    }

    return (
        <Box>

            <Header />
            <Box className="succesMedia" style={{ height: '56vh', width: '80%', marginTop: '20px', marginLeft: 170 }}>
                <Box>
                    <img src={image} alt="" />
                </Box>
                <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box style={{ height: '15vh', width: '30%', display: 'flex', }}>
                        <h4>hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..</h4>
                    </Box>
                </Box>
                <Box  className="detailsMedia">
                    <Box>
                        <Box style={{ height: '5vh', width: '79.7%', border: '1px solid black', background: '#DCDCDC', display: 'flex', justifyContent: 'space-between', justifyContent: 'space-around', marginLeft: 140, marginTop: 10 }}>
                            <p>Email us</p>
                            <p>Contact us</p>
                            <p>Address</p>
                        </Box>

                    </Box>
                    <Box style={{ height: '15vh', width: '80%', display: 'flex', marginLeft: 140 }}>
                        <Box style={{ height: '10vh', border: '1px solid black', width: '33%' }}>
                           <p> joy56@gmail.com</p>
                        </Box>
                        <Box style={{ height: '10vh', border: '1px solid black', width: '33%' }}>
                            <p>6296582044</p>
                        </Box>
                        <Box style={{ height: '10vh', border: '1px solid black', width: '33%' }}>
                          <p> Nadia,W.B,741238</p> 
                        </Box>
                    </Box>
                </Box>
                <Box className='continueShop' style={{ marginTop: 0 }}>
                    <Button variant="contained" onClick={goToMainPage}>CONTINUE SHOPPING</Button>
                </Box>


            </Box>
            <Box className="footer" style={{ border: '1px solid black', width: '100%', height: '60px', marginTop: 134, background: '#2E1D1E' }}>
                <p style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', width: '60%' }}>
                    Copyright © 2020, Bookstore Private Limited. All Rights Reserved
                </p>
            </Box>
        </Box>
    )
}

export default OrderSuccesFull