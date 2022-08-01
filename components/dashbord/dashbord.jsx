import React from 'react'
import './dashbord.css'
import Books from '../books/books';
import BooksDesign from '../booksdesign/booksDesign';
import Header from '../header/header';
import { getBooks } from '../../services/dataServices'
import { Grid } from '@mui/material';
import { Container } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { Box } from '@mui/material';


function Dashbord() {
    const [books, setBooks] = React.useState(true)
    const [allBooks, setAllBooks] = React.useState([])
    const [currentBook, setCurrentBook] = React.useState({})
    const [page, setPage] = React.useState(1)
    let pageCount = 4;
    const [pagiNation, setPagiNation] = React.useState({ count: 0, from: 0, to: pageCount })
    const [pageNumber, setPageNumber] = React.useState([])
    const [search,setSearch]=React.useState('')


    const listentoBooks = (books) => {
        setBooks(false)
        setCurrentBook(books)
    }

    const countPage = (pagiNation.count);

    const listentoBooksDesign = () => {
        setBooks(false)
    }

    console.log(pagiNation.count)

    const pageChange = (event, page) => {
        const from = (page - 1) * pageCount;
        const to = (page - 1) * pageCount + pageCount;
        setPagiNation({ ...pagiNation, from: from, to: to })
        setPage(page)
    }

    console.log(allBooks.length)
    React.useEffect(() => {
        GetBooks()
    }, [])

    console.log(Math.ceil(allBooks.length / pageCount))


    const listenToPage = () => {
        const pageNum = [];
        for (let i = 1; i <= Math.ceil(allBooks.length / pageCount); i++) {
            pageNum.push(i)
        }
        setPageNumber(pageNum)
        console.log(pageNum)
    }

    // const bookList = allBooks.map(books =>
    // <Grid item> <Books listentoBooks={listentoBooks} books={books} /></Grid>)

    React.useEffect(() => {
        listenToPage()
    }, [])

    const listenToBookDesign=()=>{
        setBooks(true)
    }


    const GetBooks = () => {
        getBooks()
            .then((resp) => { console.log(resp.data.result); setAllBooks(resp.data.result) })
            .catch((error) => { console.log(error) })
    }
    const listenToHeader=(data)=>{
        setSearch(data)
    }
    console.log(search)

    return (
        <div className='header_book' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Header listenToHeader={listenToHeader}/>
            <div className='listRendring'>
                {books
                    ? allBooks
                   
                       .filter(book=>book.bookName.toLowerCase().includes((search)))
                       .slice(pagiNation?.from, pagiNation?.to)
                        .map(books =>
                            <Grid item> <Books listentoBooks={listentoBooks} books={books} /></Grid>)
                            
                    : <BooksDesign  listentoBooksDesign={listentoBooksDesign} listenToBookDesign={listenToBookDesign} pageCount={pageCount} currentBook={currentBook} />}
            </div>
            <div style={{ width: '100%', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 70 }}>
                <Stack spacing={2}>

                    <Pagination
                        count={Math.ceil(allBooks.length / pageCount)}
                        page={page} variant="outlined" shape="rounded" onChange={pageChange} />
                </Stack>
            </div>
            <Box style={{ border: '1px solid black', width: '100%', height: '60px', marginTop: 134, background: '#2E1D1E' }}>
                <p style={{ color: 'white', display: 'flex', justifyContent: 'flex-start', width: '60%', marginLeft: 220 }}>
                    Copyright © 2020, Bookstore Private Limited. All Rights Reserved
                </p>
            </Box>
        </div>
    )
}

export default Dashbord