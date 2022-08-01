import React from "react";
import './customerDetails.css'
import { Box, CardContent, Container, Typography } from '@mui/material'
import image from "../image/Image 11.png"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Header from '../header/header';
import TextField from '@mui/material/TextField';
import { editAddress } from "../../services/dataServices";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';



function CustomerDetails(props) {

    const [disprcon, setDisprCon] = React.useState(true);
    
    const [adresType, setAdresType] = React.useState("");
    const [fullAdd, setFullAdd] = React.useState("");
    const [addCity, setAdaCity] = React.useState("");
    const [addState, setAddState] = React.useState("");

    let addressData = {
        "addressType": fullAdd,
        "fullAddress": adresType,
        "city": addCity,
        "state": addState
    }

    const clickContinue = () => {
        listenToContinue()
        setDisprCon(false)
        editAddress(addressData)
            .then((resp) =>  console.log(resp) )
            .catch((error) => { console.log(error) })
    }

    const takeCity = (event) => {
        setAdaCity(event.target.value)
    }

    const takeState = (event) => {
        setAddState(event.target.value)
    }

    const takeAddress = (event) => {
        setAdresType(event.target.value)
    }

    const takeAddType = (event) => {
        setFullAdd(event.target.value)
    }

    const listenToContinue = () => {
        props.listenToCstrdet()
    }
  

    return (
        <Container>
            <Card className="details" style={{ border: '1px solid black', height: '70vh', width: '100%', marginTop: '20px',marginLeft:'-40px' }}>
                <Box style={{ marginLeft: 50 }}>
                    <Box className="newAddress" style={{ display: 'flex', justifyContent: 'space-between', width: '95%' }}>
                        <h3 >Customer Details</h3>
                        <p className="Address" style={{ border: '1px solid red', width: '22%', color: 'red', borderRadius: '5px' }}>Add new adderss</p>
                    </Box>

                    <Box style={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginTop: 20 }}>
                        <Box >
                            <TextField id="outlined-basic" label="Full Name" variant="outlined" style={{ width:'17vw'}}/>
                        </Box>
                        <Box>
                            <TextField id="outlined-basic" label="Mobile Number" variant="outlined" style={{ width:'17vw'}}/>
                        </Box>
                    </Box>
                    <Card style={{ height: '3vh', width: '20%', marginTop: 10, display: 'flex', justifyContent: 'flex-start' }}>

                    </Card >

                    <Box style={{ height: '10vh', width: '60%' }}>
                        <TextareaAutosize placeholder="address" style={{ height: '100%', width: '100%' }} onChange={takeAddress}></TextareaAutosize>
                    </Box>
                    <Box style={{ display: 'flex', justifyContent: 'space-between', width: '60%', marginTop: 40 }}>
                        <Box>
                            <TextField id="outlined-basic" label="City/Town" variant="outlined" onChange={takeCity} style={{ width:'17vw'}}/>
                        </Box>
                        <Box>
                            <TextField id="outlined-basic" label="State" variant="outlined" onChange={takeState} style={{ width:'17vw'}}/>
                        </Box>
                    </Box>

                    <Box style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 20}}>
                        <FormControl style={{ display: 'flex', justifyContent: 'space-between' }} >
                            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ position: 'relative', right: '115px', fontStyle: 'bold', color: 'black' }}>Type</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"

                                onClick={takeAddType} >
                                <FormControlLabel value="Home" control={<Radio />} label="Home" sx={{ position: 'relative'}} />
                                <FormControlLabel value="Work" control={<Radio />} label="Work" sx={{ position: 'relative',left:'180px'  }} />
                                <FormControlLabel value="Other" control={<Radio />} label="Other" sx={{ position: 'relative' ,left:'360px' }} />

                            </RadioGroup>
                        </FormControl>
                    </Box>

                    {
                        disprcon ? <Box style={{ display: 'flex', justifyContent: 'flex-end', width: '90%' }}>
                            <Button variant="contained" onClick={clickContinue} >CONTINUE</Button>
                        </Box>
                            : null
                    }

                </Box>
            </Card >

        </Container>
    )
}

export default CustomerDetails