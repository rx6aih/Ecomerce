import React, {useState} from 'react';
import Categories from "../Components/Categories/Categories.jsx";
import iphone from '/src/Images/HomePage/Frame 560.png'
import HomeTopSwiper from "../Components/Swiper/HomeTopSwiper.jsx";
import gamepad from '/src/Images/StoreItems/Gamepad.png'
import Sale from "../Components/Sale/Sale.jsx";
import categoryPhone from "../Images/HomePage/BrowseByCategory/Category-Phone.png";
import BrowseByCategory from "../Components/BrowseByCategory/BrowseByCategory.jsx";

const Home = () => {
    const test = () => console.log('test');
    const multipleButtons = [
        {title:"Woman’s Fashion", singles:[{title:"single",onClick: test},{title:"single1",onClick:test},{title:"single2",onClick:test}]},
        {title:"Men’s Fashion", singles:[{title:"single3",onClick: test},{title:"single4",onClick:test},{title:"single5",onClick:test}]},
    ];
    const singles = [{title:"Electronics",onClick: test},{title:"Home & Lifestyle",onClick:test},{title:"Medicine",onClick:test}
        ,{title:"Sports & Outdoor",onClick:test},{title:"Baby’s & Toys",onClick:test},{title:"Groceries & Pets",onClick:test},{title:"Health & Beauty",onClick:test}]

    const [slides, setSlides] = useState([
        {image: iphone, link:"#"},{image: iphone, link:"#"},{image: iphone, link:"#"},
    ])

    const [saleItems, setSaleItems] = useState([
        {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 4.5, totalRates:100},
        {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 3.5, totalRates:100},
        {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100},
        {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100},
        {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100},
        {sale: 40, image:gamepad, title:"HAVIT HV-G92 Gamepad", price: 200, rate: 5, totalRates:100},
    ]);
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
    return (
        <div className={"flex flex-col w-[100%] ml-[12%]"}>
            <div className={"flex flex-row"}>
                <Categories multiple={multipleButtons} singles={singles}/>
                <HomeTopSwiper images={slides}/></div>
            <Sale title={"Today's"} deadline={"December, 31, 2024"} sellingCollection={saleItems} />
            <BrowseByCategory categories={squareCategoryCollection}/>
        </div>
    );
};

export default Home;