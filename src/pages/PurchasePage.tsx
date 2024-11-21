import Header from "../components/Header";
import Footer from "../components/Footer";
import SwishLogo from '../assets/swish logo primary SVG.svg';
import KlarnaLogo from '../assets/klarna.png';
import PostNordLogo from '../assets/postnord-seeklogo.svg';
import DHLLogo from '../assets/dhl-group-seeklogo.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

export default function PurchasePage() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [code, setCode] = useState('');
    const [city, setCity] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [confirmation, setConfirmation] = useState(false);
    const { cartItems, clearCart, calculateTotalPrice } = useCart();

    const navigate = useNavigate();

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPhoneNumber(e.target.value);
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

    const handleDiscountCode = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setDiscountCode(e.target.value);
    };

    const handleApplyDiscount = () => {
        if (discountCode === 'DISCOUNT10') {
          setDiscount(0.1); // 10% discount
        } else {
          setDiscount(0); // No discount for invalid code
        }
      };
    
      const subtotal = calculateTotalPrice();
      const totalWithDiscount = subtotal * (1 - discount);

    const formatPrice = (price: number) => 
        new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        }).format(price);

    const handleTakeBack = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleConfirm = () => {
        // Combine all data into an object
        const deliveryData = {
            name,
            address,
            code,
            city,
            phoneNumber,
            deliveryMethod,
            paymentMethod,
            discountCode,
            totalPrice: totalWithDiscount,
        };
        // Redirect to confirmation page with the delivery data
        navigate('/confirmation', { state: { deliveryData } });
    };

    return (
        <main className="max-w-[100rem] bg-white m-auto">
            <Header />
            <div className="font-[sans-serif] lg:w-[70rem] mx-auto lg:flex lg:items-start lg:justify-between text-left lg:px-8 max-lg:py-4">
                {/* Order Summary */}
                <section
                    className="lg:w-[40rem] w-[22rem] bg-white lg:order-2 lg:ml-16 m-auto p-6 border border-black rounded-xl shadow-md text-black mb-2 lg:mb-8 lg:mt-16">
                    <h1 className="text-4xl text-center">Order Summary</h1>
                    <div>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="mt-2 p-2 lg:w-[30rem] w-[19rem] flex justify-center items-center m-auto bg-stone-200 border border-black shadowm-md rounded-lg">
                                <div>
                                    <img
                                        src={item.images[0]}
                                        alt={item.name}
                                        className="lg:w-[8rem] w-[5rem] self-start rounded-lg shadow-md"/>
                                </div>
                                <div className="px-3">
                                    <h2 className="lg:text-lg text-sm font-bold">{item.name}</h2>
                                    <p className="lg:text-[0.85rem] text-[0.7rem]">Category: {item.category}</p>
                                    <p className="lg:text-[0.85rem] text-[0.7rem]">Brand: {item.brand}</p>
                                    <p className="lg:text-[0.85rem] text-[0.7rem]">Condition: {item.condition}</p>
                                    <p className="lg:text-xl text-[0.9rem] font-bold text-gray-800">
                                        {formatPrice(item.price)}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <ul className="text-gray-300 mt-6 space-y-3">
                            <li className="flex justify-between text-sm">
                                Subtotal
                                <span className="font-bold">{formatPrice(subtotal)}</span>
                            </li>
                            {discount > 0 && (
                                <li className="flex justify-between text-sm">
                                    Discount (10%)
                                    <span className="font-bold">-{formatPrice(subtotal * discount)}</span>
                                </li>
                            )}
                            <li className="flex justify-between text-base font-bold">
                                Total
                                <span>{formatPrice(totalWithDiscount)}</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Purchase Steps */}
                <div className="lg:w-[28rem] m-auto lg:flex lg:flex-col lg:space-y-6 grid grid-cols-1 gap-2 sm:mt-16">
                    {/* Step 1 */}
                    <div className="bg-purple-100 w-[22rem] lg:w-full mx-auto rounded-xl shadow-md flex flex-col items-center p-4 border border-black text-black">
                        <h2 className="text-2xl p-1 self-start ">1. Delivery details</h2>
                        <p className="text-md self-start p-1">Fields with an asterisk (*) are required</p>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">First Name and Surname*</p>
                            <input value={name} onChange={handleName} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="First Name and Surname" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">Address* </p>
                            <input value={address} onChange={handleAddress} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Address" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">Postal Code*</p>
                            <input value={code} onChange={handleCode} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Postal Code" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">City* </p>
                            <input value={city} onChange={handleCity} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="City" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black text-sm px-1">Phone Number* </p>
                            <input value={phoneNumber} onChange={handlePhoneNumber} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Phone Number" />
                        </span>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[19.8rem] lg:w-[26rem] mt-[14px] mb-[14px]" />
                        <h2 className="text-2xl self-start ">Add more details</h2>
                        <p className="text-md self-start ">Does your residence or postbox require a gate code?</p>
                        <input type="text" className="p-1 w-[19.8rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black mt-2 mb-2" />
                    </div>

                    {/* Step 2 */}
                    <section className="bg-purple-100 w-[22rem] lg:w-full mx-auto rounded-xl shadow-md flex flex-col items-center p-4 border border-black text-black">
                        <h2 className="text-2xl p-1 self-start">2. Delivery method</h2>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer" id="postnord" value="PostNord"
                            checked={deliveryMethod === 'PostNord'}
                            onChange={(e) => setDeliveryMethod(e.target.value)}/>
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src={PostNordLogo} className="w-[6rem] h-[3.13rem]" alt="postnord" />
                            </label>
                        </section>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer" id="dhl" value="DHL"
                            checked={deliveryMethod === 'DHL'}
                            onChange={(e) => setDeliveryMethod(e.target.value)}/>
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src={DHLLogo} className="w-[6rem] h-[3.13rem]" alt="dhl" />
                            </label>
                        </section>
                    </section>

                    {/* Step 3 */}
                    <section className="bg-purple-100 w-[22rem] lg:w-full mx-auto rounded-xl shadow-md flex flex-col items-center p-4 border border-black text-black">
                        <h2 className="text-2xl p-1 self-start">3. Payment methods</h2>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer" id="card" value="Card"
                            checked={paymentMethod === 'Card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src="https://readymadeui.com/images/visa.webp" className="w-[3rem]" alt="card1" />
                                <img src="https://readymadeui.com/images/american-express.webp" className="w-[3rem]" alt="card2" />
                                <img src="https://readymadeui.com/images/master.webp" className="w-[3rem]" alt="card3" />
                            </label>
                        </section>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer" id="swish" value="Swish"
                            checked={paymentMethod === 'Swish'}
                            onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src={SwishLogo} className="w-[2.23rem]" alt="swish" />
                            </label>
                        </section>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer" id="klarna" value="Klarna"
                            checked={paymentMethod === 'Klarna'}
                            onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label htmlFor="card" className="flex gap-2 cursor-pointer">
                                <img src={KlarnaLogo} className="w-[5.15rem]" alt="klarna" />
                            </label>
                        </section>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[19.5rem] lg:w-[25rem] mb-[14px]" />
                        <p className="text-md self-start ">Enter discount code (DISCOUNT10)</p>
                        <input value={discountCode} onChange={handleDiscountCode} type="text" className="p-1 w-[19.8rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black mt-2 mb-2" />
                        <button onClick={handleApplyDiscount} className="btn-primary mt-2">
                            Apply Discount
                        </button>
                    </section>

                    {/* Step 4 */}
                    <article className="bg-purple-100 w-[22rem] lg:w-full mx-auto rounded-xl shadow-md flex flex-col items-center p-4 border border-black text-black">
                        <h2 className="text-2xl p-1 self-start">4. Confirm purchase</h2>
                        <div className="w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] p-2 text-left">
                            <input type="radio" 
                                    className="w-5 h-5 cursor-pointer rounded-full" 
                                    checked={confirmation} // Controlled input
                                    onChange={() => setConfirmation(!confirmation)}/>
                            <h2 className="text-gray-600 text-sm">I agree to terms and conditions of Musically and accept the terms of privacy policy.</h2>
                        </div>
                        <button className={`mt-6 w-full py-2 px-4 rounded-lg shadow transition ${confirmation ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                disabled={!confirmation}
                                onClick={handleConfirm}>
                                Complete order and pay</button>
                        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition"
                                onClick={handleTakeBack}>
                                I'm not sure yet. Take me up!</button>
                    </article>
                </div>
            </div>
            <Footer />
        </main>
    );
}
