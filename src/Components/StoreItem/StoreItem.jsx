import React from 'react';
import heart from "../../Images/StoreItems/Fill Heart.png";
import eye from "../../Images/StoreItems/Group.png";
import star from "../../Images/StoreItems/star.png";
import halfStar from "../../Images/StoreItems/star-half-filled.png";
import emptyStar from "../../Images/StoreItems/empty-star.png";

const StoreItem = ({onSaleTop, onSaleBot,sale, isNew, image, title, price, rate, totalRates}) => {
    const [hidden, setHidden] = React.useState("hidden");
    const addToCartShow = () =>{
        setHidden("");
    }
    const addToCartHide = () =>{
        setHidden("hidden")
    }
    const stars = {full:[], semi:[], empty:[]};
    for(let i=0;i<5;i++){
        if(Number.isInteger(rate)){
            if(i<rate)
                stars.full.push(1);
            else
                stars.empty.push(1);
        }
        else {
            if (i < Math.trunc(rate))
                stars.full.push(1);
            else if (i === Math.trunc(rate))
                stars.semi.push(1);
            else
                stars.empty.push(1);
        }
    }

    return (
        <div className={'flex flex-col w-[270px] h-[350px]'}>
            <div className={"w-[90%] h-[65%] bg-gray-100 flex flex-col justify-between"}
                 onMouseEnter={addToCartShow}
                 onMouseLeave={addToCartHide}
            >
                <div className={'relative flex flex-row justify-between'}>
                    <div className={"flex items-start"}>
                        {onSaleTop && <div
                            className={"bg-red-500 text-white text-center w-[55px] h-[26px] rounded-sm"}>-{sale}%</div>}
                        {isNew && <div
                            className={"bg-green-500 text-white text-center w-[55px] h-[26px] rounded-sm"}>New</div>}
                    </div>
                    <img src={image} alt={title} className={"absolute left-6 top-4 max-w-[190px] h-[180px]"}/>
                    <div className={"flex flex-col items-end"}>
                        <img src={heart} alt={"like"} className={"w-[34px] h-[34px] cursor-pointer"}/>
                        <div className={"w-[34px] h-[30px] flex items-center justify-center cursor-pointer"}>
                            <img src={eye} alt={"like"}/>
                        </div>
                    </div>
                </div>
                <div className={`flex justify-center items-center w-[100%] h-[41px] bg-black ${hidden} cursor-pointer`} >
                    <p className={"text-white font-medium"}>Add To Cart</p>
                </div>
            </div>
            <div className={"flex flex-col gap-2"}>
                <p>{title}</p>
                {onSaleBot ?
                    <div className={"flex flex-row gap-1"}>
                        <p className={"text-red-500"}>${price - price * (sale / 100)}</p>
                        <p className={"text-gray-600 line-through"}>${price}</p>
                    </div>
                    : <div className={"flex flex-row gap-1"}>
                        <p className={"text-red-500"}>${price}</p>
                    </div>}
                <div className={"flex flex-row gap-1"}>
                    {stars.full.map(fullStar =>
                        <img src={star} alt={"star"} className={"max-w-[20px] h-[20px]"}/>
                    )}
                    {stars.semi.map(semiStar=>
                        <img src={halfStar} alt={"half-star"} className={"max-w-[20px] h-[20px]"}/>
                    )}
                    {stars.empty.map(emptyS=>
                        <img src={emptyStar} alt={"empty-star"} className={"max-w-[20px] h-[20px]"}/>
                    )}
                    <p className={"text-gray-400"}>({totalRates})</p>
                </div>
            </div>
        </div>
    );
};

export default StoreItem;