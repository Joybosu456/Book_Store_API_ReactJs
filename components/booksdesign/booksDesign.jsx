import React from 'react'
import './booksDesign.css';
import { Box } from '@mui/system';
import image from "../image/Image 11@2x.png"
import { Button } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AddToBag from '../addtobag/addToBag';
import { getCarts, wishList } from '../../services/dataServices';
import { useEffect } from 'react';
import { postCarts, putCarts } from '../../services/dataServices';
import { useNavigate } from 'react-router-dom';
import {Typography} from '@mui/material';

function BooksDesign(props) {
    console.log(props)
    const navigate = useNavigate();
    const [addTobag, setAddTobag] = React.useState(true)
    const [quantity, setQuantity] = React.useState(0)
    const [bookArray, setBookArray] = React.useState([])
    const [cartId, setCartId] = React.useState([])
    // const[wishList,setWishList]=React.useState(true)
    

    useEffect(() => {
        getBooksList()
    }, [])

    const getBooksList = () => {
        getCarts()
            .then((resp) => {
                console.log(resp);
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

    const ClickForAddBag = () => {

        postCarts(props.currentBook._id)
            .then((resp) => { console.log(resp) ;getBooksList()})
            .catch((error) => { console.log(error) })

    }

    console.log(bookArray)

    const handelIncriment = () => {
        let data = {
            // id:cartId,
            quantityToBuy: quantity + 1
        }
        putCarts(cartId, data)
            .then((resp) => { console.log(resp); getBooksList() })
            .catch((error) => { console.log(error) })
    }

    const handelDecriment = () => {
        let data = {
            // id:cartId,
            quantityToBuy: quantity - 1
        }
        putCarts(cartId, data)
            .then((resp) => { console.log(resp); getBooksList() })
            .catch((error) => { console.log(error) })
    }

    const handelWishList = () => {

        wishList(props.currentBook._id)
            .then((resp) => { console.log(resp); navigate('/wishList') })
            .catch((error) => { console.log(error) })
    }

   
    const listenToHomePage=()=>{
        // navigate('/Dashbord')
        props.listenToBookDesign()
    }

    return (
        <Box className="bookDetails" style={{height:'100vh',width:'100vw'}}>
            <Box style={{ height: '35px', display: 'flex', width: '80%',marginLeft:'7rem' }}>
                <h4 onClick={listenToHomePage}>Home /</h4>
                <h4>Book(01)</h4>
            </Box>
            <Card className="booksContinerMain">

                <Box className='firstContiner'>
                    <Card className='firstPhotoContiner'>
                        <img src={image} alt="" className="bookPhotoContiner"/>
                    </Card>

                    <Box className='ButtonContiner'>
                        <Box>
                            {
                                bookArray.length == 0
                                    ? <Button variant="contained"  className='Addbtn'  style={{ background: ' #A03037' }} onClick={ClickForAddBag}>ADD TO BAG</Button>
                                    : <Box style={{ width: 130, height: 40, display: 'flex', justifyContent: 'space-between', justifyContent: 'space-evenly', alignContent: 'center' }}>
                                        <DoDisturbOnIcon fontSize="large" onClick={handelDecriment} />
                                        <Box style={{ width: 40, height: 25, border: '1px solid black', marginTop: 5 }} >{quantity}</Box>
                                        <AddCircleOutlineIcon fontSize="large" onClick={handelIncriment} />
                                    </Box>
                            }

                        </Box>
                        <Box>
                            <Button variant="contained" className='wishBtn' style={{ background: 'black' }} onClick={handelWishList}> <FavoriteBorderIcon />WISHLIST</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='secoundContiner'>
                    <Box className='textContiner'>
                        <h2>
                            {props.currentBook.bookName}
                        </h2>

                    </Box>
                    <Box className="smallText">
                        <p> {props.currentBook.author}</p>

                    </Box>
                    <Typography className="bookRating1">
                            4.5*(20)
                        </Typography>
                    <Box className="amountCounter">
                        <h2>Rs.{props.currentBook.price}</h2>
                    </Box>
                    <Box className="hading">Book Detail</Box>
                    <Card className="smallDetails">
                        {props.currentBook.description}
                    </Card>
                    <Box className='ratingPart'>
                        <Box className="feedback">
                            <h3>Customer Feedback</h3>
                        </Box>
                        <Box className="rateIcon">
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                            <GradeIcon />
                        </Box>
                        <Box className='writeSomething'>

                        </Box>
                        <Box className='submitButton'>
                            <Button variant="contained">Submit</Button>
                        </Box>
                    </Box>
                </Box>
            </Card>

        </Box>
    )
}

export default BooksDesign