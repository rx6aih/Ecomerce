import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {AppBar, Box, Button, IconButton, styled, Toolbar, Typography} from "@mui/material";
import StyledInputBase from "./StyledInputBase.jsx";
import basket from '/src/Images/Navbar/basket.png';
import heart from '/src/Images/Navbar/heart.png';
import {Link} from "react-router-dom";
const Navbar = ({isSale, saleTitle}) => {
    const pages = ["Home", "Contact", "About", "Sign Up"];

    return (
        <Box className={"border-b-2 border-solid border-zinc-300 pb-2"} id={"navbar"}>
            {isSale&&
            <div className={"w-[100%] bg-black text-white h-10 flex text-center items-center justify-center"}>{saleTitle}</div>}
            <Box  className={"ml-48 w-[78%] pt-4"}>
                <AppBar position="static" sx={{boxShadow:"none"}}>
                    <Toolbar className={"bg-white"} sx={{flexGrow: 1,boxShadow:"",justifyItems:"space-between"}}>
                        <div className={"w-40 flex items-start"}>
                            <Typography sx={{flexGrow: 1,fontSize:24,fontWeight:"bold"}} className={"text-center text-black "}>
                                Exclusive
                            </Typography></div>
                        <Box sx={{flexGrow:1, marginLeft:"10em"}}>
                            {pages.map((page) => (
                                <Button key={page} sx={{color:"black", mx:3}}><Link to={page}>{page}</Link></Button>
                            ))}
                        </Box>
                        <Box sx={{display: "flex"}}>
                            <Box sx={{display: 'flex', position: "relative"}}>
                                <div className={"h-10 w-10 top-1 left-1  absolute z-10"}>
                                    <SearchIcon/>
                                </div>
                                <StyledInputBase placeholder={"Search..."}/>
                            </Box>
                            <button className={"ml-5"}>
                                <img src={heart} className={"min-w-[35px] h-[35px]"} alt={"likes"}/>
                            </button>
                            <button className={"ml-5"}>
                                <img src={basket} className={"min-w-[35px] h-[35px]"} alt={"likes"}/>
                            </button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    );
};

export default Navbar;