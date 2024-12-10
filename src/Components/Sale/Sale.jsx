import React, {useEffect, useState} from 'react';
import OnPageTitle from "../UI Components/OnPageTitle.jsx";
import Timer from "../Timer/Timer.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import StoreItem from "../StoreItem/StoreItem.jsx";
import rightArrow from "../../Images/Icons/Fill with Right Arrow.png";
import leftArrow from "../../Images/Icons/Fill With Left Arrow.png";
const Sale = ({deadline, title, sellingCollection, settings}) => {
    return (
        <div className={"flex flex-col w-[70%] max-w-[1400px] mt-40 border-b border-b-neutral-300 pb-4 mb-1"}>
            <OnPageTitle title={title}/>
            <div className={"flex flex-row gap-20 justify-between"}>
                <div className={"flex flex-row items-end gap-20"}>
                    <p className={"text-4xl font-bold"}>Flash Sales</p>
                    <Timer deadline={deadline}/>
                </div>
                <div>
                    <button className={"arrow-left"}>
                        <img src={leftArrow} alt="transition left"/>
                    </button>
                    <button className={"arrow-right"}>
                        <img src={rightArrow} alt="transition right"/>
                    </button>
                </div>
            </div>
            <div className={"flex flex-col mt-8"}>
                <Swiper className={"2xl:w-[100%]"} style={{
                    "--swiper-pagination-color": "#972bcf",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    paddingRight:"4em"
                }}
                        slidesPerView={4}
                        spaceBetween={0}
                        observer={true}
                        observeParents={true}
                        loop={true}
                        navigation={{nextEl:".arrow-right", prevEl:".arrow-left"}}
                        modules={[Pagination, Navigation]}>
                    {sellingCollection.map((item, index) => (
                        <SwiperSlide key={index}>
                            <StoreItem key={item.title + index} onSale={true} sale={item.sale} isNew={false}
                                       image={item.image} price={item.price} title={item.title} rate={item.rate}
                                       totalRates={item.totalRates}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={"ml-52 flex w-1/1 justify-center items-center mt-4"}>
                <button className={'flex items-center justify-center text-white font-medium w-[234px] h-[56px] bg-red-500'}>View All Products</button>
            </div>
        </div>
    );
};

export default Sale;