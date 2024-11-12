import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

export default function PurchasePage() {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [code, setCode] = useState('');
    const [city, setCity] = useState('');

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setNumber(e.target.value);
    };

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setAddress(e.target.value);
    };

    const handleCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCode(e.target.value);
    };

    const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setCity(e.target.value);
    };

    return (
        <main className="bg-white">
            <Header />
            <div className="grid grid-cols-8 grid-rows-auto gap-4 w-[80rem] h-[80rem] m-auto">
                    <section className="col-start-6 col-end-9 row-start-1 row-end-2 border bg-black text-white p-2 w-[30rem]">
                        <h1>order summary</h1>
                        <div>
                            <p>dfdfdfd</p>
                            <p>dfdfdfd</p>
                            <p>ererferer</p>
                        </div>
                    </section>
                        <div className="col-start-2 col-end-5 row-start-1 row-end-2 bg-blue-200 flex flex-col items-start place-items-center border p-4 w-[40rem]">
                            <h2 className="text-2xl">1. Delivery details</h2>
                            <p className="text-md">Fields with an asterisk (*) are required</p>
                            <span className="text-left">
                                <p className="text-black text-sm px-1">First Name and Surname*</p>
                                <input value={name} onChange={handleName} type="text" className="p-1 w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black  " placeholder="First Name and Surname"/>
                            </span>
                            <span className="text-left">
                                <p>Phone Number* </p>
                                <input value={number} onChange={handleNumber} type="text" placeholder="Phone Number"/>
                            </span>
                            <span className="text-left">
                                <p> Address* </p>
                                <input value={address} onChange={handleAddress} type="text" placeholder="Address"/>
                            </span>
                            <span className="text-left">
                                <p>Postal Code*</p>
                                <input value={code} onChange={handleCode} type="text" placeholder="Postal Code"/>
                            </span>
                            <span className="text-left">
                                <p>City* </p>
                                <input value={city} onChange={handleCity} type="text" placeholder="City"/>
                            </span>
                            <hr className="col-start-2 col-end-5 row-start-2 row-end-3 h-[1px] bg-transparent border-top-solid border-gray-500 w-[38rem] mb-[14px]"/>
                            <h2 className="text-2xl">Add more details</h2>
                            <p className="text-md">Does your residence or postbox require a gate code?</p>
                            <input type="text" />
                            <button>Submit</button>
                        </div>
                        <section className="col-start-2 col-end-5 row-start-2 row-end-3 bg-blue-200 border p-3 w-[40rem] flex flex-col justify-start items-start gap-2">
                            <h2>Delivery method</h2>
                            <section  className="flex w-[26rem] border p-2 ">
                                <input type="checkbox"/>
                                <p>PostNord</p>
                            </section>
                            <hr className="col-start-2 col-end-5 row-start-2 row-end-3 h-[1px] bg-transparent border-top-solid border-gray-500 w-[38rem] mb-[14px]"/>
                            <section  className="flex w-[26rem] border p-2 ">
                                <input type="checkbox"/>
                                <p>Home</p>
                            </section>
                            <hr className="col-start-2 col-end-5 row-start-2 row-end-3 h-[1px] bg-transparent border-top-solid border-gray-500 w-[38rem] mb-[14px]"/>
                        </section>
                        <section className="col-start-2 col-end-5 row-start-3 row-end-4 bg-blue-200 border border-black p-3 w-[40rem] flex flex-col justify-start items-start gap-2">
                            <h2>Payment methods</h2>
                            <section  className="flex w-[26rem] border p-2 ">
                                <input type="checkbox"/>
                                <p>Card</p>
                            </section>
                            <section  className="flex w-[26rem] border p-2 ">
                                <input type="checkbox"/>
                                <p>Swish</p>
                            </section>
                            <section  className="flex w-[26rem] border p-2 ">
                                <input type="checkbox"/>
                                <p>Klarna</p>
                            </section>
                        </section>
                        <article className="col-start-2 col-end-5 row-start-4 row-end-4 bg-blue-200 w-[40rem] flex flex-col p-3 items-start place-items-center">
                            <section className="flex">
                                <input type="checkbox" />
                                <h2>Confirmation lorem ipsum</h2>
                            </section>
                            <button>Complete order and pay</button>
                        </article>
            </div>
            <Footer />
        </main>
    )
}