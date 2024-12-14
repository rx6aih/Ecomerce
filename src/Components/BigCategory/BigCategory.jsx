import React from 'react';
import Timer from "../Timer/Timer.jsx";

const BigCategory = ({title, deadline, link, image}) => {
    return (
        <div className={"flex justify-center items-center bg-black max-w-[1440px] h-[500px]"}>
            <div className={"flex flex-row w-[90%] h-[80%]"}>
                <div className={"flex flex-col w-[50%] gap-8"}>
                    <p className={"text-green-400 font-bold text-2xl"}>Categories</p>
                    <h1 className={"text-white text-[55px] text-wrap font-bold"}>{title}</h1>
                    <Timer deadline={deadline} type={""}/>
                    <button className={"w-[260px] h-[56px] flex justify-center items-center bg-green-400"}>
                        <a href={link} className={"flex w-full h-full justify-center items-center text-white text-lg font-bold"}>Buy Now!</a>
                    </button>
                </div>
                <div className={"flex w-[50%] justify-center items-center  rounded-full"}>
                    <img src={image} alt={"category"} className={"w-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white from-0% to-black to-70%"}/>
                </div>
            </div>
        </div>
    );
};

export default BigCategory;