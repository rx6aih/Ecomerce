import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
const HomeTopSwiper = ({images}) => {
    return (
        <div className={"2xl:min-w-[992px] xl:w-[750px] lg:w-[550px] md:w-[500px] flex h-fit m-8"}>
            <Swiper className={"2xl:w-[892px]"} style={{
                "--swiper-pagination-color": "#972bcf",
                "--swiper-pagination-bullet-inactive-color": "#999999",
                "--swiper-pagination-bullet-inactive-opacity": "1",
                "--swiper-pagination-bullet-size": "12px",
                "--swiper-pagination-bullet-horizontal-gap": "6px"
            }}

                    spaceBetween={0}
                pagination={{clickable: true,}}
                modules={[Pagination]}>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.image} className={"w-[992px] h-[376px] pb-1"} alt={image.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HomeTopSwiper;