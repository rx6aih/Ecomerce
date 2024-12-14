import React, {useState} from 'react';
import {Button, Menu} from "@mui/material";
import MultipleButton from "../UI Components/MultipleButton.jsx";
import rightButton from "../../Images/HomePage/rightArrow.png"
import {Accordion, AccordionItem} from "@nextui-org/react";

const Categories = ({singles, multiple}) => {
    const [anchorElBtn, setAnchorElBtn] = useState(null);
    const handleOpenMenu = (event) => {
        setAnchorElBtn(event.currentTarget);
    }
    const handleCloseMenu = () => {
        setAnchorElBtn(null);
    }
    return (
        <div className={"flex flex-col gap-1  border-zinc-300 border-solid border-r-2 w-[18%] max-h-[404px] overflow-scroll"}>
            <Accordion selectionMode="multiple" >
            {
                multiple.map((item,index) =>
                    <AccordionItem key={index+100} aria-label="Accordion 1" title={item.title}>
                        <div className={"flex flex-col justify-start items-start gap-3"}>
                            {item.singles.map((single, index) =>
                                <button className={"pl-2"}  key={index+10} onClick={single.onClick}>{single.title}</button>
                            )}
                        </div>
                    </AccordionItem>)
            }
            </Accordion>

            {
                singles.map((item, index) =>
                    <div>
                        <Button sx={{color:"black"}} key={index} onClick={item.onClick}>{item.title}</Button>
                    </div>
                )
            }
        </div>
    );
};

export default Categories;