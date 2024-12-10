import React from 'react';
import {Button} from "@mui/material";

const MultipleButton = ({singles}) => {
    return (
        singles.map((single,index) => (
            <Button sx={{color:"black"}} onClick={single.onClick} key={index}>{single.title}</Button>
        ))
    );
};

export default MultipleButton;