import React from 'react';
import OnPageTitle from "../UI Components/OnPageTitle.jsx";
import ProductPoster from "../UI Components/ProductPoster.jsx";
import ps5 from "../../Images/Posters/ps5-Poster.png";

const Posters = ({first,second,third,fourth,titleTop,titleBot}) => {
    return (
        <div className={"flex flex-col w-full"}>
            <div className={"mb-5 mt-10"}>
                <OnPageTitle title={titleTop}/>
                <p className={"text-4xl font-bold"}>{titleBot}</p>
            </div>
            <div className={"flex flex-row gap-40 w-full"}>
                <div className={"w-[40%]"}>
                    <ProductPoster image={first.image} title={first.title} description={first.description} type={"big_sq"}/>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <div className={"w-full"}>
                        <ProductPoster image={second.image} title={second.title} description={second.description} type={"rect"}/>
                    </div>
                    <div className={"flex gap-1 flex-row"}>
                        <ProductPoster image={third.image} title={third.title} description={third.description} type={"sm_sq"}/>
                        <ProductPoster image={fourth.image} title={fourth.title} description={fourth.description} type={"sm_sq"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posters;