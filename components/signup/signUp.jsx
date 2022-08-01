import React from 'react'
import './signUp.css'
import imgage from "../image/2766594@2x.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, useThemeProps } from '@mui/material';
import { SignUp } from '../../services/userServices';


const firstnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneNumberRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;


function Signup(props) {


    const [signUpObj, setSignUpObj] = React.useState({ firstName: '', email: '', password: '', phoneNumber: '', service: 'advance' })
    const [objRegex, setRegexObj] = React.useState({
        firstNameBorder: false, firstNameHelper: '', emailBorder: false, emailHelper: '',
        passwordBorder: false, passwordHelper: '', phoneNumberBorder: false, phoneNumberHelper: '',
    })

    const takeFirstName = (event) => {
        setSignUpObj({ ...signUpObj, firstName: event.target.value })
    }
    const takeEmail = (event) => {
        setSignUpObj({ ...signUpObj, email: event.target.value })
    }
    const takePassword = (event) => {
        setSignUpObj({ ...signUpObj, password: event.target.value })
    }
    const takePhoneNumber = (event) => {
        setSignUpObj({ ...signUpObj, phoneNumber: event.target.value })
    }


    const clickMeOnce = () => {
        props.listentoSignup()
    };

    const ClickMeForSignup = () => {
        let firstNameTest = firstnameRegex.test(signUpObj.firstName)
        let emailTest = emailRegex.test(signUpObj.email)
        let passwordTest = passwordRegex.test(signUpObj.password)
        let phoneNumberTest = phoneNumberRegex.test(signUpObj.phoneNumber)

        if (firstNameTest === true) {
            setRegexObj(prevState => ({ ...prevState, firstNameBorder: false, firstNameHelper: '' }))
        } 
        else {
            setRegexObj(prevState => ({ ...prevState, firstNameBorder: true, firstNameHelper: "" }))
        }

        if (emailTest === true) {
            setRegexObj(prevState => ({ ...prevState, emailBorder: false, emailHelper: '' }))
        }
         else {
            setRegexObj(prevState => ({ ...prevState, emailBorder: true, emailHelper: "" }))
        }

        if (passwordTest === true) {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: '' }))
        }
         else {
            setRegexObj(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: "" }))
        }

        if (phoneNumberTest === true) {
            setRegexObj(prevState => ({ ...prevState, phoneNumberBorder: false, phoneNumberHelper: '' }))
        } 
        else {
            setRegexObj(prevState => ({ ...prevState, phoneNumberBorder: true, phoneNumberHelper: "" }))
        }


        if (firstNameTest === true && emailTest === true && passwordTest === true && phoneNumberTest === true) {
            SignUp(signUpObj)
                .then((resp) => { console.log(resp); localStorage.setItem('token', resp.data.result.accessToken)})
                .catch((error) => { console.log(error) })
        }
    }

    return (
        <Box className='bookstorecontinersignup'>
            <Box className='maincontiner_signup'>
                <Box >SIGNUP</Box>
                <Box onClick={clickMeOnce}>LOGIN</Box>
            </Box>

            <Box className='textfieldsignup'>
                <TextField id="outlined-basic" className='name' error={objRegex.firstNameBorder} helperText={objRegex.firstNameHelper} onChange={takeFirstName} label="First name" variant="outlined" size='small' />
                <TextField id="outlined-basic" className='mail' error={objRegex.emailBorder} helperText={objRegex.emailHelper} onChange={takeEmail} label="Email id" variant="outlined" size='small' />
                <TextField
                    id="outlined-password-input"
                    className='password'
                    error={objRegex.passwordBorder} helperText={objRegex.passwordHelper} onChange={takePassword}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    size='small'
                />
                <TextField id="outlined-basic" className='num' error={objRegex.phoneNumberBorder} helperText={objRegex.phoneNumberHelper} onChange={takePhoneNumber} label="Mobile Number" variant="outlined" size='small' />
            </Box>

            <Box className='Continer_signup'>
                <Button variant="outlined" onClick={ClickMeForSignup}>Signup</Button>
            </Box>

        </Box>
    )
}

export default Signup