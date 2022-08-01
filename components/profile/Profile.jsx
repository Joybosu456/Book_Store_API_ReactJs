import { Container } from '@mui/system'
import React from 'react'
import { Box } from '@mui/system'
import { Card } from '@mui/material'
import Header from '../header/header'
import image from "../image/joy.png"

function Profile() {
    return (
        <Box  style={{background:'gray',height:'97.4vh'}}>
            <Header />
            <Container>
                <Card style={{ height: '70vh', width: '50vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', background: 'white', borderRadius: '20px' }}>
                    <Card style={{ height: '28%', width: '15%', border: '1px solid black', borderRadius: 150 }}>
                        <img src={image} alt="" style={{ height: '100%', width: '100%' }} />
                    </Card>
                    <Card style={{ border: '1px solid black', height: 50, width: '50%', display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
                        <p>Name:Joy Bosu</p>
                    </Card>
                    <Card style={{ border: '1px solid black', height: 50, width: '50%', display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
                        <p>Gmail:JoyBosu456@gmail.com</p>
                    </Card>
                    <Card style={{ border: '1px solid black', height: 50, width: '50%', display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
                        <p>Ph.No:+916296582055</p>
                    </Card>
                    <Card style={{ border: '1px solid black', height: 50, width: '50%', display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>
                        <p>Address:Gangnapur,Nadia,741238</p>
                    </Card>
                    <Card style={{ border: '1px solid black', height: 50, width: '50%', display: 'flex', justifyContent: 'flex-start', marginTop: 10 }}>

                    </Card>

                </Card>
            </Container>
        </Box>
    )
}

export default Profile