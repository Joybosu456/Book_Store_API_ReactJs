import React from 'react'
import './login.css'
import imgage from "../image/2766594@2x.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { LogIn } from '../../services/userServices';
import { useNavigate } from 'react-router-dom';

const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;



function Login(props) {
    const navigate = useNavigate();
    const [login, setLogin] = React.useState({ email: "", password: "" })
    const [regex, setRegex] = React.useState({
        emailBorder: false, emailHelper: "",
        passwordBorder: false, passwordHelper: ""
    })

    const takeEmail = (event) => {
        setLogin(prevState => ({ ...prevState, email: event.target.value }))
        //  setNumber(12)
        //setSignObj({email:event.target.value})
    }

    const takePassword = (event) => {
        setLogin(prevState => ({ ...prevState, password: event.target.value }))
        // setSignObj({password:event.target.value})
    }

    const submit = () => {

        console.log(login)
        let emailTest = emailRegex.test(login.email)
        let passwordTest = passwordRegex.test(login.password)
        console.log(emailTest, passwordTest)

        if (emailTest === false) {
            setRegex(prevState => ({ ...prevState, emailBorder: true, emailHelper: " " }))
        } else if (emailTest === true) {
            setRegex(prevState => ({ ...prevState, emailBorder: false, emailHelper: " " }))
        }

        if (passwordTest === false) {
            setRegex(prevState => ({ ...prevState, passwordBorder: true, passwordHelper: " " }))
        } else if (passwordTest === true) {
            setRegex(prevState => ({ ...prevState, passwordBorder: false, passwordHelper: " " }))
        }

        if (emailTest === true && passwordTest === true) {
            LogIn(login)
                .then((resp) => { console.log(resp);localStorage.setItem('token', resp.data.result.accessToken);navigate('/Dashbord')})
                .catch((error) => { console.log(error) })
        }
    }

    const clickMeForLogin = () => {
        props.listentoLogin()
    };

    return (

        <div>
            <Box className='bookstorecontiner'>

                <Box className='maincontiner_login'>
                    <Box onClick={clickMeForLogin}>SIGNUP</Box>
                    <Box >LOGIN</Box>
                </Box>

                <Box className='textfield'>
                    <TextField className='mailAddressContiner' id="outlined-basic" error={regex.emailBorder} helperText={regex.emailHelper} onChange={takeEmail} label="Email id" variant="outlined" size='small' />
                    {/*<TextField className="passwordContiner" id="outlined-basic" label="Password" variant="outlined" size='small' />*/}
                    <TextField
                        id="outlined-password-input"
                        error={regex.passwordBorder} onChange={takePassword}
                        className="passwordContiner"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        size='small'
                    />
                </Box>

                <Box >
                    <button className='maincontiner_loginOne' onClick={submit} style={{ background: 'red' }}>LOGIN</button>
                </Box>

                <Box>................OR.................</Box>

                <Box className='fbandGoogleCont'>
                    <Button variant="contained">Facebook</Button>
                    <Button variant="outlined">Google</Button>
                </Box>

            </Box>
        </div>
    )
}

export default Login