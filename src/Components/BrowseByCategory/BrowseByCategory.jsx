import React from 'react';
import OnPageTitle from "../UI Components/OnPageTitle.jsx";
import {Swiper, SwiperSlide} from "swiper/react";
import SquareButton from "../UI Components/SquareButton.jsx";
import {Navigation, Pagination} from "swiper/modules";
import StoreItem from "../StoreItem/StoreItem.jsx";
import leftArrow from "../../Images/Icons/Fill With Left Arrow.png";
import rightArrow from "../../Images/Icons/Fill with Right Arrow.png";
const BrowseByCategory = ({categories}) => {
    return (
        <div className={"flex flex-col mt-5 w-[107%]  border-b border-b-neutral-300 pb-12 mb-1"}>
            <div className={"flex flex-row justify-between w-[87%] mb-16"}>
                <OnPageTitle title={"Categories"}/>
                <div>
                    <button className={"arrow-left-category"}>
                        <img src={leftArrow} alt="transition left"/>
                    </button>
                    <button className={"arrow-right-category"}>
                        <img src={rightArrow} alt="transition right"/>
                    </button>
                </div>
            </div>
            <div className={"flex w-[87%]"}>
                <Swiper className={"2xl:w-[100%]"} style={{
                    "--swiper-pagination-color": "#972bcf",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    paddingRight:"4em"
                }}
                        slidesPerView={7}
                        spaceBetween={0}
                        observer={true}
                        observeParents={true}
                        navigation={{nextEl:".arrow-right-category", prevEl:".arrow-left-category"}}
                        modules={[Pagination, Navigation]}>
                    {categories.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SquareButton image={item.image}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default BrowseByCategory;