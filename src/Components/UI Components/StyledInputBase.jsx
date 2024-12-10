import React from 'react';
import {styled} from "@mui/material";
import InputBase from "@mui/material/InputBase";

const StyledInputBase = ({value, onChange, placeholder}) => {
    const StyledInputBase = styled(InputBase)(({theme})=>({
        color:"white",
        width:'100%',
        height:'2em',
        borderRadius: '5px',
        backgroundColor: "gray",
        '& .MuiInputBase-input': {
            padding: 2,
            paddingLeft:"2em",
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
                width: '200px',
                '&:focus':{
                    width: '230px',
                }
            }
        }
    }))
    return (
        <StyledInputBase placeholder={placeholder}/>
    );
};

export default StyledInputBase;