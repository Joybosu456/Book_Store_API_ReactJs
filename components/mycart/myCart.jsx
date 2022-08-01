import React from 'react'
import './myCart.css'
import { Box, CardContent, Container, Typography } from '@mui/material'
import image from "../image/Image 11.png"
import Card from '@mui/material/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import Header from '../header/header';
import { useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CustomerDetails from '../customerdetails/customerDetails';
import OrderSummery from '../ordersummery/orderSummery';
import { getCarts } from '../../services/dataServices';
import { putCarts } from '../../services/dataServices';
import { useNavigate } from 'react-router-dom';
import { deleteBooks } from '../../services/dataServices';

function MyCart(props) {

    const [disprPlaceOrder, setDisprPlaceOrder] = React.useState(true);
    const [vieworderSum, setVieworderSum] = React.useState(true);
    const [listOfItem, setListOfItem] = React.useState([]);
    const [quantity, setQuantity] = React.useState(1)
    const [bookArray, setBookArray] = React.useState([])
    const [cartId, setCartId] = React.useState([])

    const navigate = useNavigate();

    const clickPlaceOrder = () => {
        setDisprPlaceOrder(false)
    }

    const listenToCstrdet = () => {
        setVieworderSum(false)
    }

    useEffect(() => {
        getBooksList()
    }, [])


    const gotoHome = () => {
        navigate('/Dashbord')
    }

    const gotoWishList = () => {
        navigate('/wishList')
    }

    const getBooksList = () => {
        getCarts()
            .then((resp) => {
                console.log(resp); navigate('/MyCart')
                let filterArray = resp.data.result.filter(function (books) {
                    if (props.currentBook._id == books.product_id._id) {
                        setQuantity(books.quantityToBuy)
                        setCartId(books._id)
                        return books
                    }

                })
                setBookArray(filterArray)
            })
            .catch((error) => { console.log(error) })
    }

    const clickToRemove = (id) => {
        deleteBooks(id)
            .then((resp) => { console.log(resp);getBooksList() })
            .catch((error) => { console.log(error) })
    }

    const handelIncriment = (obj) => {
        console.log(obj)
        let data = {
            // id:cartId,

            quantityToBuy: obj.quantityToBuy + 1
        }
        putCarts(obj._id, data)
            .then((resp) => { console.log(resp) })
            .catch((error) => { console.log(error) })
    }

    const handelDecriment = (obj) => {
        let data = {
            // id:cartId,

            quantityToBuy: obj.quantityToBuy - 1
        }
        putCarts(obj._id, data)
            .then((resp) => { console.log(resp); getBooksList() })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        // console.log("Hello Joy...")
        getCarts()
            .then((resp) => { console.log(resp); setListOfItem(resp.data.result) })
            .catch((error) => { console.log(error) })
    }, [])


    return (
        <div>
            <Header />
            <Container  >
                <Box style={{ height: '35px', display: 'flex', width: '80%', marginLeft: 28 }}>
                    <h4 onClick={gotoHome}>Home /</h4>
                    <h4 onClick={gotoWishList}>My Wishlist</h4>
                </Box>
                <Box className="myCart_Continer" >
                    <Card className='myCartMedia' >
                        <Box style={{ width: '90%', height: '9%', display: 'flex', justifyContent: 'space-between', marginLeft: '45px' }}>
                            <h2 className="cartOne">My Cart(1)</h2>
                            <p className="location" style={{ border: '1px solid #707070', height: 33, width: 200 }}><LocationOnIcon />Use current location <ArrowDropDownIcon /></p>
                        </Box>

                        {
                            listOfItem.map((bDetails) => (<Box className="myCartMediaQu"  style={{ width: '65%', height: 'auto', display: 'flex', justifyContent: 'flex-start' }}>
                                <Box style={{ height: '30vh', width: '15vw' }}>
                                    <img src={image} alt="" className="mycartbooks" />
                                </Box>
                                <CardContent className='allTextName' style={{ height: '13vh', width: '30vw' }}>
                                    <Typography className="bookName">
                                        {/* Dont't Make Me Think */}
                                        {bDetails.product_id.bookName}

                                    </Typography>
                                    <Typography className='bookQuantity'>
                                        {/* Quantity */}
                                        {bDetails.product_id.quantity}
                                    </Typography>
                                    <Typography className="bookPrice">
                                        <h3>
                                            {/* Rs.1500 */}
                                            {bDetails.product_id.price}
                                        </h3>
                                    </Typography>
                                    <Box className='buttonInDicRe' style={{ width: 200, height: 30, display: 'flex', justifyContent: 'space-evenly', marginLeft: '-15px' }}>
                                        <DoDisturbOnIcon fontSize="medium" onClick={() => handelDecriment(bDetails)} />
                                        <Box style={{ width: 25, height: 20, border: '1px solid black' }} >{bDetails.quantityToBuy}</Box>
                                        <AddCircleOutlineIcon fontSize="medium" onClick={() => handelIncriment(bDetails)} />
                                        <button className="bookPrice" onClick={() => clickToRemove(bDetails._id)}>Remove</button>
                                    </Box>


                                </CardContent>

                            </Box>
                            ))}

                        <Box className='orderButton' style={{ width: '85%', height: "10vh", display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', marginBottom: '115px' }}>
                            {
                                disprPlaceOrder ? <Button variant="contained" onClick={clickPlaceOrder} >PLACE ORDER</Button>
                                    : null
                            }
                        </Box>

                    </Card>

                    {
                        disprPlaceOrder ? <Card className="address">
                            Address Details
                        </Card>
                            : <CustomerDetails listenToCstrdet={listenToCstrdet} />

                    }

                    <Box style={{ border: '1px solid black', width: '90%', marginLeft: 26, marginTop: 20 }}>
                        <h2 style={{ width: '60%', display: 'flex', justifyContent: 'flex-start', marginLeft: 26 }}>Order Summery</h2>
                        {
                            vieworderSum ? <Card >

                            </Card>
                                : listOfItem.map((book) => <OrderSummery book={book} />)
                        }

                    </Box>
                    
                </Box>
            </Container>
        </div>

    )
}
export default MyCart