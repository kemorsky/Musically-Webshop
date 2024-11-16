import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function PurchasePage() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [code, setCode] = useState('');
    const [city, setCity] = useState('');

    const { productId } = useParams<{ productId: string }>();
    const { products } = useProducts();

    const product = products.find((product) => product.id.toString() === productId);

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
        <main className="max-w-[100rem] m-auto">
            <Header />
            <div className="font-[sans-serif] lg:w-[70rem] mx-auto lg:flex lg:items-start lg:justify-between lg:px-8 max-lg:py-4">
                {/* Order Summary */}
                <section className="lg:w-1/3 lg:order-2 p-6 rounded-md bg-black text-white max-lg:mb-8">
                    <h1>Order Summary</h1>
                    <ul className="text-gray-300 mt-6 space-y-3">
                        <li className="flex flex-wrap gap-4 text-sm">Sub total <span className="ml-auto font-bold">$48.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Discount (20%) <span className="ml-auto font-bold">$4.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">$4.00</span></li>
                        <hr />
                        <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">$52.00</span></li>
                    </ul>
                </section>

                {/* Steps 1-4 */}
                <div className="lg:w-[28rem] lg:flex lg:flex-col lg:space-y-6 grid grid-cols-1 gap-8 mt-16">
                    {/* Step 1 */}
                    <div className="bg-purple-100 w-full mx-auto rounded-xl shadow-md flex flex-col items-start p-4 border border-black">
                        <h2 className="text-2xl p-1">1. Delivery details</h2>
                        <p className="text-md p-1">Fields with an asterisk (*) are required</p>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">First Name and Surname*</p>
                            <input value={name} onChange={handleName} type="text" className="p-1 w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="First Name and Surname" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">Phone Number* </p>
                            <input value={number} onChange={handleNumber} type="text" className="p-1 w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Phone Number" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">Address* </p>
                            <input value={address} onChange={handleAddress} type="text" className="p-1 w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Address" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">Postal Code*</p>
                            <input value={code} onChange={handleCode} type="text" className="p-1 w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Postal Code" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">City* </p>
                            <input value={city} onChange={handleCity} type="text" className="p-1 w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="City" />
                        </span>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[26rem] mt-[14px] mb-[14px]" />
                        <h2 className="text-2xl">Add more details</h2>
                        <p className="text-md">Does your residence or postbox require a gate code?</p>
                        <input type="text" className="p-1 w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black mt-2 mb-2" />
                        <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow hover:bg-indigo-500 transition">Submit</button>
                    </div>

                    {/* Step 2 */}
                    <section className="bg-purple-100 w-full mx-auto rounded-xl shadow-md flex flex-col items-start p-4 border border-black">
                        <h2 className="text-2xl p-1">2. Delivery method</h2>
                        <section className="flex w-[26rem] items-center border border-gray-500 p-2 text-black">
                            <input type="checkbox" className="w-6 h-6 m-2 rounded-full" />
                            <p className="text-xl">PostNord</p>
                        </section>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[26rem] mb-[14px] mt-[14px]" />
                        <section className="flex w-[26rem] items-center border border-gray-500 p-2 text-black">
                            <input type="checkbox" className="w-6 h-6 m-2 rounded-full" />
                            <p className="text-xl">Home</p>
                        </section>
                    </section>

                    {/* Step 3 */}
                    <section className="bg-purple-100 w-full mx-auto rounded-xl shadow-md flex flex-col items-start p-4 border border-black">
                        <h2 className="text-2xl p-1">3. Payment methods</h2>
                        <section className="flex w-[26rem] items-center border border-gray-500 p-2 text-black">
                            <input type="checkbox" className="w-6 h-6 m-2 rounded-full" />
                            <p className="text-xl">Card</p>
                        </section>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[26rem] mb-[14px] mt-[14px]" />
                        <section className="flex w-[26rem] items-center border border-gray-500 p-2 text-black">
                            <input type="checkbox" className="w-6 h-6 m-2 rounded-full" />
                            <p className="text-xl">Swish</p>
                        </section>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[26rem] mb-[14px] mt-[14px]" />
                        <section className="flex w-[26rem] items-center border border-gray-500 p-2 text-black">
                            <input type="checkbox" className="w-6 h-6 m-2 rounded-full" />
                            <p className="text-xl">Klarna</p>
                        </section>
                    </section>

                    {/* Step 4 */}
                    <article className="bg-purple-100 w-full mx-auto rounded-xl shadow-md flex flex-col items-start p-4 border border-black">
                        <section className="flex items-center text-left">
                            <input type="checkbox" className="w-7 h-7 m-2 rounded-full" />
                            <h2 className="text-gray-600 text-sm">By clicking this button I agree to terms and conditions of Musically and accept the terms of privacy policy.</h2>
                        </section>
                        <button className="mt-6 w-full bg-green-500 text-white py-2 px-4 rounded-lg shadow hover:bg-green-400 transition">Complete order and pay</button>
                    </article>
                </div>
            </div>
            <Footer />
        </main>
    );
}
