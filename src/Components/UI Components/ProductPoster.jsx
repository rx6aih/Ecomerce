import React from 'react';
import {Card, CardHeader} from "@nextui-org/react";

const ProductPoster = ({type, image, title, description}) => {
    let height, width, descr_width;
    switch (type) {
        case "big_sq":
            height="709px"
            width="770px"
            descr_width="22em"
            break
        case "sm_sq":
            height="300px"
            width="320px"
            descr_width="16em"
            break
        case "rect":
            height = "400px";
            width="642px"
            descr_width="16em"
            break
        default:
            height="270px";
            width="284px"
            descr_width="16em"
            break
    }
    return (
        <Card className={`bg-black p-4 rounded-md`} style={{width: width ,height: height}}>
            <CardHeader className={`absolute z-10 p-10 bottom-0 flex-col !items-start w-[${descr_width}]`}>
                <p className="text-white mb-2 font-bold text-3xl">{title}</p>
                <h4 className={"text-white mb-2 "}>{description}</h4>
                <p className={"underline mt-2 text-white text-xl text-bold"}>Shop Now</p>
            </CardHeader>
            <img src={image} alt={title} className={`max-w-[${height}] max-h-[${width}]`}/>
        </Card>
    );
};

export default ProductPoster;