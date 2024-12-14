import React from 'react';
import tagImage from "../../Images/TagList/Services.png"
import pageUp from "../../Images/TagList/Fill with Up Arrow.png"
const TagList = () => {
    return (
        <div className={"flex w-full justify-center pr-40 mt-40 mb-10 relative"}>
            <div className={"flex flex-row gap-20"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <img src={tagImage} alt={"service"} className={"w-20 mb-7"}/>
                    <h1 className={"uppercase mb-2 font-bold text-2xl"}>Free and fast delivery</h1>
                    <p className={'text-[18.2px]'}>Free delivery for all orders over 140$</p>
                </div>
                <div className={"flex flex-col justify-center items-center"}>
                    <img src={tagImage} alt={"service"} className={"w-20 mb-7"}/>
                    <h1 className={"uppercase mb-2 font-bold text-2xl"}>Free and fast delivery</h1>
                    <p className={'text-[18.2px]'}>Free delivery for all orders over 140$</p>
                </div>
                <div className={"flex flex-col justify-center items-center"}>
                    <img src={tagImage} alt={"service"} className={"w-20 mb-7"}/>
                    <h1 className={"uppercase mb-2 font-bold text-2xl"}>Free and fast delivery</h1>
                    <p className={'text-[18.2px]'}>Free delivery for all orders over 140$</p>
                </div>
            </div>
            <a href={"#navbar"} className={"w-10 h-10  absolute right-10 bottom-0"} onClick={() => scrollUp}>
                <img src={pageUp} alt={"scroll up"}/>
            </a>
        </div>
    );
};

export default TagList;