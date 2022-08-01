import React from 'react'
import './header.css'
import { Box } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MyCart from '../mycart/myCart';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const [searchTarm, setSearchTarm] = React.useState("");

    const navigate = useNavigate();

    const openMyCart = () => {
        navigate("/myCart")
    }

    const openMyProfile=()=>{
        navigate('/profile')
    }

    const goToBookList=()=>{
        navigate('/dashbord')
    }
    // const handelChange=()=>{

    // }
console.log(searchTarm)

// console.log(props.allbooks.filter(books=>books.bookName.includes("")))

return (
        <Box className='main_One'>
            <Box style={{ height: '15vh' ,width:'100%'}}>
                <Box className="main">
                    <Box className="firstbox">
                        <Box></Box>
                        <Box><MenuBookIcon fontSize="large" color="action" onClick={goToBookList}/></Box>
                        <Box><h2 className="bookstore">Bookstore</h2></Box>
                    </Box >
                    <Box className="secoundbox">

                        <SearchIcon />
                        <input type="text" onChange={(event) => {
                            setSearchTarm(event.target.value)
                            props.listenToHeader(event.target.value)
                        }}
                            class='searchField'
                            placeholder="Search"
                            size='small'
                            style={{ height: '40px' }}></input>
                    </Box>
                    <Box className="thirdbox">
                        <Box ><PermIdentityIcon fontSize="large" onClick={openMyProfile}/></Box>
                        <Box ><ShoppingCartIcon fontSize="large" onClick={openMyCart} /></Box>
                        <Box ></Box>

                    </Box>
                </Box>
                {/* <Box style={{ hight: '2vh', width: '76%', display: 'flex', justifyContent: 'space-between', marginLeft: '210px' }}>
                    <h2>Books</h2>
                    <p style={{ border: '1px solid black', borderRadius: '10px black', width: '15%' }}>Sort by relevence <ArrowDropDownIcon /></p>
                </Box> */}
            </Box>
        </Box>
    );
}

export default Header;