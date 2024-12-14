import React, {useEffect, useMemo, useState} from 'react';
import Categories from "../Components/Categories/Categories.jsx";
import iphone from '/src/Images/HomePage/Frame 560.png'
import HomeTopSwiper from "../Components/UI Components/Swiper/HomeTopSwiper.jsx";
import categoryPhone from "../Images/HomePage/BrowseByCategory/Category-Phone.png";
import BrowseByCategory from "../Components/BrowseByCategory/BrowseByCategory.jsx";
import shirt from "../Images/StoreItems/jacket.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../Store/ProductReducer.js";
import BigCategory from "../Components/BigCategory/BigCategory.jsx";
import speakerImg from '../Images/BigStore/speaker.png';
import ProductCollection from "../Components/ProductCollection/ProductCollection.jsx";
import ProductPoster from "../Components/UI Components/ProductPoster.jsx";
import ps5 from "../Images/Posters/ps5-Poster.png"
import Posters from "../Components/Posters/Posters.jsx";


const Home = () => {
    const dispatch = useDispatch();
    const saleItems = useSelector(state => state.product.items.filter(item => item.type === "sale"));
    useMemo(() =>{
        dispatch(fetchProducts());
    },[])
    const test = () => console.log("test")
    const multipleButtons = [
        {title:"Woman’s Fashion", singles:[{title:"single",onClick: test},{title:"single1",onClick:test},{title:"single2",onClick:test}]},
        {title:"Men’s Fashion", singles:[{title:"single3",onClick: test},{title:"single4",onClick:test},{title:"single5",onClick:test}]},
    ];
    const singles = [{title:"Electronics",onClick: test},{title:"Home & Lifestyle",onClick:test},{title:"Medicine",onClick:test}
        ,{title:"Sports & Outdoor",onClick:test},{title:"Baby’s & Toys",onClick:test},{title:"Groceries & Pets",onClick:test},{title:"Health & Beauty",onClick:test}]

    const [slides, setSlides] = useState([
        {image: iphone, link:"#"},{image: iphone, link:"#"},{image: iphone, link:"#"},
    ])


    const [squareCategoryCollection, setSquareCategoryCollection] = React.useState([
        {image: categoryPhone, link:"#"},
        {image: categoryPhone, link:"#"},
        {image: categoryPhone, link:"#"},
        {image: categoryPhone, link:"#"},
        {image: categoryPhone, link:"#"},
        {image: categoryPhone, link:"#"},
        {image: categoryPhone, link:"#"},
        {image: categoryPhone, link:"#"},
    ])

    const [bestSellingItems, setBestSellingItems] = useState([
        {sale: 45, image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 4.5, totalRates:120, onDiscount:true},
        {sale: 40, image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 3.5, totalRates:110, onDiscount:true},
        {sale: 12, image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:10, onDiscount:true},
        {sale: 65, image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:140, onDiscount:true},
        {sale: 25, image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:105, onDiscount:true},
        {sale: 45, image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:100, onDiscount:true},
    ]);

    const [ourCollection, setOurCollection] = useState([
        {image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 4.5, totalRates:120, isNew:true},
        {image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 3.5, totalRates:110, isNew:true},
        {image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:10, isNew:true},
        {image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:140, isNew:true},
        {image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:105, isNew:true},
        {image:shirt, title:"HAVIT HV-G92 Gamepad", price: 250, rate: 5, totalRates:100, isNew:true},
    ]);

    const posters = [
        {image: ps5, title:"PlayStation 5", description:"Black and White version of the PS5 coming out on sale."},
        {image: ps5, title:"Women’s Collections", description:"Featured woman collections that give you another vibe."},
        {image: ps5, title:"Speakers", description:"Amazon wireless speakers"},
        {image: ps5, title:"Perfume", description:"GUCCI INTENSE OUD EDP"},
    ]

    return (
        <div className={"flex flex-col w-[80%] ml-[12%]"}>
            <div className={"flex flex-row"}>
                <Categories multiple={multipleButtons} singles={singles}/>
                <HomeTopSwiper images={slides}/>
            </div>
            <ProductCollection titleTop={"Today's"} titleBot={"Flash Sales"} deadline={"December, 31, 2024"} isSale={true} collection={saleItems} isBotButton={true} isArrows={true} arrowLeft={"sale_arrow_left"} arrowRight={"sale_arrow_right"}/>
            <BrowseByCategory categories={squareCategoryCollection}/>
            <ProductCollection titleTop={"This Month"} titleBot={"Best Selling Products"} isTopButton={true} collection={bestSellingItems} isSale={false}/>
            <BigCategory title={"Enhance Your Music Experience"} deadline={"December, 31, 2024"} link={"#"} image={speakerImg}/>
            <ProductCollection titleTop={"Our Products"} titleBot={"Explore Our Products"} isArrows={true} isBotButton={true} arrowLeft={"our_arrow_left"} arrowRight={"our_arrow_right"} collection={ourCollection} isSale={false}/>
            <div>
                <Posters titleTop={"Featured"} titleBot={"New Arrival"} first={posters[0]} second={posters[1]} third={posters[2]} fourth={posters[3]}/>
            </div>
        </div>
    );
};

export default Home;