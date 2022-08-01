import React from 'react'
import './books.css'
import { Box, CardContent, Typography } from '@mui/material'
import image from "../image/Image 11.png"
import Card from '@mui/material/Card';
import { addBooks } from '../../services/dataServices';

function Books(props) {


    const clickForDetails = (books) => {
        props.listentoBooks(books)
    };

    return (
        <div>
            <Box className='listOfBook' >
                <Card className='books' onClick={() => clickForDetails(props.books)}>
                    <Box className='booksphoto'>
                        <img src={image} alt="" className="bookPhoto" />
                    </Box>
                    <CardContent className="bookspriceContiner">
                        <Typography className="bookName">
                            {props.books.bookName}
                        </Typography>
                        <Typography className="bookAuthor">
                            {props.books.author}
                        </Typography>
                        <Typography className="bookRating">
                            4.5*(20)
                        </Typography>
                        <Typography className='bookQuantity'>
                        Quantity.{props.books.quantity}
                        </Typography>
                        <Typography className="bookPrice">
                            Rs.{props.books.price}
                        </Typography>
                    </CardContent>
                </Card>

            </Box>
        </div>

    )
}
export default Books