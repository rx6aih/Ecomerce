import React from 'react';
import {Input} from "@nextui-org/react";
import iconSend from "../../Images/Footer/icon-send.png"
import qrCode from "../../Images/Footer/Qrcode 1.png"
import appStore from "../../Images/Footer/AppStore.png";
import googlePlay from "../../Images/Footer/GooglePlay.png";
const Footer = () => {
    return (
        <div className={"flex justify-center w-[100%] h-fit bg-black"}>
            <div className={"flex w-[78%] ml-40 flex-col pb-10 pt-20"}>
                <div className={"flex flex-row gap-28 mb-20"}>
                    <div className={"flex text-white flex-col"}>
                        <h1 className={" font-bold text-3xl pb-4"}>Exclusive</h1>
                        <p className={"text-lg font-bold pb-5"}>Subscribe</p>
                        <p className={"pb-3"}>Get 10% off your first order</p>
                        <Input size={"lg"} placeholder={"Input email..."} style={{backgroundColor: "black"}}>
                            <img src={iconSend} alt={"Send"}/>
                        </Input>
                    </div>
                    <div className={"flex text-white flex-col"}>
                        <h1 className={" font-medium text-2xl pb-4"}>Support</h1>
                        <p className={"pb-3 w-48"}>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                        <p className={"pb-3"}>exclusive@gmail.com</p>
                        <p className={"pb-3"}>+88015-88888-9999</p>
                    </div>
                    <div className={"flex text-white flex-col gap-1"}>
                        <h1 className={" font-medium text-2xl pb-4"}>Account</h1>
                        <p className={"pb-3"}>My Account</p>
                        <p className={"pb-3"}>Login / Register</p>
                        <p className={"pb-3"}>Cart</p>
                        <p className={"pb-3"}>Wishlist</p>
                        <p className={"pb-3"}>Shop</p>
                    </div>
                    <div className={"flex text-white flex-col gap-1"}>
                        <h1 className={" font-medium text-2xl pb-4"}>Quick Link</h1>
                        <p className={"pb-3"}>Privacy Policy</p>
                        <p className={"pb-3"}>Privacy Policy</p>
                        <p className={"pb-3"}>FAQ</p>
                        <p className={"pb-3"}>Contact</p>
                    </div>
                    <div className={"flex text-white flex-col gap-1"}>
                        <h1 className={" font-medium text-2xl pb-4"}>Download App</h1>
                        <p className={"pb-3 text-zinc-400 pr-40"}>Save $3 with App New User Only</p>
                        <div className={"flex flex-row gap-5"}>
                            <button>
                                <img src={qrCode} alt={"Our App"} className={"w-[100px] h-[100px]"}/>
                            </button>
                            <div className={"flex flex-col gap-6"}>
                                <button>
                                    <img src={googlePlay} alt={"GooglePlay"}/>
                                </button>
                                <button>
                                    <img src={appStore} alt={"App Store"}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"flex justify-center mr-36 items-center"}>
                    <p className={"text-zinc-400 text-[18px]"}>@Copyright Rimel 2022. All right reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;