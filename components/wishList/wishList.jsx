import React from 'react'
import './wishList.css';
import { Box, CardContent, Typography } from '@mui/material'
import image from "../image/Image 11.png"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useEffect } from 'react';
import { getWishList } from '../../services/dataServices';
import { deleteWishList } from '../../services/dataServices';
import Header from '../header/header';
import { useNavigate } from 'react-router-dom';


function WishList(props) {

    const [gwishList, setWishList] = React.useState([])
    const navigate = useNavigate();

    const addWishList = (props) => {
        props.currentBook()
    }

    const goToHome = () => {
        navigate('/Dashbord')
    }

    const getWishListBooks = () => {
        getWishList()
            .then((resp) => { console.log(resp); setWishList(resp.data.result) })
            .catch((error) => { console.log(error) })
    }

    const onDelete = (id) => {
        deleteWishList(id)
            .then((resp) => { console.log(resp); getWishListBooks() })
            .catch((error) => { console.log(error) })
    }

    useEffect(() => {
        getWishListBooks()
    }, [])
    console.log(gwishList)


    return (
        <div >
            <Header />
            <Container className="myWish">
                <Box style={{ height: '30px', display: 'flex' }}>
                    <h4 onClick={goToHome}>Home /</h4>
                    <h4>My Wishlist</h4>
                </Box>
                <Card onClick={() => addWishList()} style={{ width: '90%', height: '7%', display: 'flex', justifyContent: 'space-between', background: 'gray', marginTop: 20 }}>
                    <h2>My WishList(1)</h2>
                </Card>
                {
                    gwishList.map((gbook) => (

                        <Card className='wishBooksOne' style={{ border: '1px solid white', height: 'auto', width: '90%' }}>
                            <Box  className='wishBooks'  style={{ width: '90%', height: '15vh', display: 'flex', justifyContent: 'flex-start', marginLeft: '45px' }}>
                                <img src={image} className="wishPhoto" alt="" style={{ width: '12%', height: '18vh', marginTop: 50 }} />
                                <CardContent className='wishDetails' style={{ height: '25vh', width: '30vw', marginTop: '50px', marginLeft: '60px' }}>
                                    <Typography className="bookName">
                                        {/* Dont't Make Me Think */}
                                        <h3>{gbook.product_id.bookName}</h3>
                                    </Typography>
                                    <Typography className='bookQuantity'>
                                        {/* Quantity */}
                                        {gbook.product_id.quantity}
                                    </Typography>
                                    <Typography className="bookPrice"><h3>Rs.
                                        {gbook.product_id.price}
                                    </h3></Typography>
                                </CardContent>
                            </Box>
                            <Box className='deleteButton' style={{ height: '10vh', width: '80%', display: 'flex', justifyContent: 'flex-end' }}>
                                <DeleteOutlineIcon onClick={() => onDelete(gbook.product_id._id)} />
                            </Box>

                        </Card>
                    ))}
            </Container>
            <Box style={{ border: '1px solid black', width: '100%', height: '60px', marginTop: '18rem', background: '#2E1D1E',position:'fixed' }}>
                <p style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', width: '60%', marginLeft: 220 }}>
                    Copyright © 2020, Bookstore Private Limited. All Rights Reserved
                </p>
            </Box>
        </div>
    )
}

export default WishList;