import React from 'react';
import OnPageTitle from "../UI Components/OnPageTitle.jsx";
import Timer from "../Timer/Timer.jsx";
import leftArrow from "../../Images/Icons/Fill With Left Arrow.png";
import rightArrow from "../../Images/Icons/Fill with Right Arrow.png";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import StoreItem from "../StoreItem/StoreItem.jsx";

const BestSelling = ({title, sellingCollection}) => {
    return (
        <div className={"flex flex-col w-[70%] max-w-[1400px] mt-40 border-b border-b-neutral-300 pb-4 mb-1"}>
            <OnPageTitle title={title}/>
            <div>
                <div className={"flex flex-row items-center mt-8 mb-10 gap-20 justify-between"}>
                    <p className={"text-3xl font-bold"}>Best Selling Products</p>
                    <div className={"ml-52 flex w-1/1 justify-center items-center mt-4"}>
                        <button
                            className={'flex items-center justify-center text-white font-medium w-[234px] h-[56px] bg-red-500'}>View
                            All Products
                        </button>
                    </div>
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
                            <StoreItem key={item.title + index} onSaleTop={false} onSaleBot={true} sale={item.sale} isNew={false}
                                       image={item.image} price={item.price} title={item.title} rate={item.rate}
                                       totalRates={item.totalRates}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default BestSelling;