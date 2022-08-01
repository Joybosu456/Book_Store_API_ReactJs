import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Box } from '@mui/material';

function AddToBag() {
    

    return (
        <Box style={{width:130,height:40,border:'1px solid red' ,display:'flex',justifyContent:'space-between',alignContent:'center'}}>
            <DoDisturbOnIcon fontSize='medium'/>
            <Box style={{width:40,height:30,border:'1px solid black' }}></Box>
            <AddCircleOutlineIcon fontSize='medium'/>
        </Box>
    )
}

export default AddToBag