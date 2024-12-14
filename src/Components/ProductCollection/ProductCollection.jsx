import React from 'react';
import OnPageTitle from "../UI Components/OnPageTitle.jsx";
import Timer from "../Timer/Timer.jsx";
import leftArrow from "../../Images/Icons/Fill With Left Arrow.png";
import rightArrow from "../../Images/Icons/Fill with Right Arrow.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import StoreItem from "../StoreItem/StoreItem.jsx";

const ProductCollection = ({collection, isArrows,arrowLeft, arrowRight, isTopButton, isBotButton, titleTop, titleBot, isSale, deadline,}) => {
    return (
        <div className={"flex flex-col w-[100%] max-w-[1430px] mt-28 border-b border-b-neutral-300 pb-4 mb-1"}>
            <OnPageTitle title={titleTop}/>
            <div className={"flex flex-row mt-5 gap-20 justify-between"}>
                    {isSale &&
                        <div className={"flex mb-10 flex-row items-end gap-20"}>
                            <p className={"text-4xl font-bold"}>{titleBot}</p>
                            <Timer deadline={deadline} type={"dots"}/>
                        </div>
                    }
                {isTopButton &&
                    <div className={"flex flex-row items-center mb-10 w-full justify-between gap-20"}>
                        <p className={"text-4xl font-bold"}>{titleBot}</p>
                        <div className={"ml-96 flex mt-4"}>
                            <button
                                className={'flex items-center justify-center text-white font-medium w-[234px] h-[56px] bg-red-500'}>View
                                All Products
                            </button>
                        </div>
                    </div>
                }
                {!isSale && !isTopButton && titleTop &&
                    <p className={"text-4xl font-bold"}>{titleBot}</p>
                }
                {isArrows &&
                    <div>
                    <button className={`${arrowLeft}`}>
                                    <img src={leftArrow} alt="transition left"/>
                                </button>
                                <button className={`${arrowRight}`}>
                                    <img src={rightArrow} alt="transition right"/>
                                </button>
                            </div>}
                    </div>
                    <div className={"flex flex-col mt-8"}>
                <Swiper className={"2xl:w-[100%]"} style={{
                    "--swiper-pagination-color": "#972bcf",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    paddingRight: "4em"
                }}
                        slidesPerView={4}
                        spaceBetween={0}
                        observer={true}
                        observeParents={true}
                        loop={true}
                        navigation={{nextEl: `.${arrowRight}`, prevEl: `.${arrowLeft}`}}
                        modules={[Pagination, Navigation]}>
                    {collection.map((item, index) => (
                        <SwiperSlide key={index}>
                            <StoreItem key={item.title + index} onSaleTop={item.type && item.type === "sale"}
                                       onSaleBot={item.onDiscount || item.type === "sale"} sale={item.sale}
                                       isNew={item.isNew}
                                       image={item.image} price={item.price} title={item.title} rate={item.rate}
                                       totalRates={item.totalRates}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {isBotButton &&
                <div className={"ml-52 flex w-full justify-center items-center mt-4"}>
                    <button
                        className={'flex items-center mr-80 justify-center text-white font-medium w-[234px] h-[56px] bg-red-500'}>View
                        All Products
                    </button>
                </div>}

        </div>
    );
};
export default ProductCollection;