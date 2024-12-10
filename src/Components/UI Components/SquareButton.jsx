import React from 'react';

const SquareButton = ({image, link}) => {
    return (
        <a href={link} className={"flex w-fit cursor-pointer border border-neutral-300 hover:bg-red-400 transition-all duration-200 transform hover:scale-105"}>
            <img src={image} alt={"category"} className={"min-w-[170px] h-[145px]"} />
        </a>
    );
};

export default SquareButton;