import React from 'react'
import './mainPage.css'
import { Box } from '@mui/material';
import Signup from '../signup/signUp';
import Login from '../login/login';
import imgage from "../image/2766594@2x.png"

function MainPage() {

    const [registration, setRegrstration] = React.useState(true)

    const listentoSignup = () => {
        setRegrstration(false)
    }

    const listentoLogin = () => {
        setRegrstration(true)
    }

    return (
        <Box className="maincontiner">
                <Box className="mainpageContiner">
                    <Box className='imagecontiner'>
                        <img src={imgage} alt="" className="img" />
                        <h>ONLINE BOOK SHOPPING</h>
                    </Box>

                    <Box className='nextcontiner'>
                        {registration ? <Signup listentoSignup={listentoSignup} /> : <Login listentoLogin={listentoLogin} />}
                    </Box>
                </Box>
        </Box>
    )
}

export default MainPage