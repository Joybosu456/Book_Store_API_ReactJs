import React from "react";
import './orderSummery.css'
import { Box, CardContent, Container, Typography, useThemeProps } from '@mui/material'
import image from "../image/Image 11.png"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



function OrderSummery(props) {

    console.log(props)

    const navigate = useNavigate();

    const clickMeForChecOut = () => {
        navigate('/succes')
    }


    return (
        <div>
            <Container>
                {/* <Card style={{ border: '1px solid black', height: '40vh', width: '93.3%', marginTop: '20px', marginLeft: '7px' }}>
                <Box style={{ width: '90%', height: '9%', display: 'flex', justifyContent: 'space-between', marginLeft: '45px' }}>
                    <h2>Order Summery</h2>
                </Box> */}
                <Box style={{ marginTop: 20 }}>

                    <Box style={{ width: '90%', height: '25vh', display: 'flex', justifyContent: 'flex-start' }}>
                        <img src={image} alt="" className="photo" style={{ width: '12%', height: '18vh' }} />
                        <CardContent style={{ height: '25vh', width: '30vw' }}>
                            <Typography className="bookName">
                                {/* Dont't Make Me Think */}
                                {props.book.product_id.bookName}
                            </Typography>
                            <Typography className='bookQuantity'>
                                {/* Quantity */}
                                {props.book.product_id.quantity}
                            </Typography>
                            <Typography className="bookPrice"><h3>Rs.
                                {props.book.product_id.price}
                                {/* {props.book.product_id.price} */}
                            </h3></Typography>
                        </CardContent>

                        {/* <Box style={{ width: '30%', height: "5vh", display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', marginTop: '100px' }}>
                            <Button variant="contained" onClick={clickMeForChecOut} >CHECKOUT</Button>
                        </Box> */}
                    </Box>

                </Box>

            </Container>
            <Box style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                <Button variant="contained" onClick={clickMeForChecOut} >CHECKOUT</Button>
            </Box>
        </div>
    )
}
export default OrderSummery

