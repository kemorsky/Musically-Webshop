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
    const { cartItems, calculateTotalPrice } = useCart();

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
        const orderNumber = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
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
            discount,
            orderNumber
        };
        // Redirect to confirmation page with the delivery data
        navigate('/confirmation', { state: { deliveryData } });
    };

    return (
        <main className="max-w-[100rem] bg-white m-auto">
            <Header />
            <div className="font-[sans-serif] lg:w-[70rem] mx-auto lg:flex lg:items-start lg:justify-between text-left lg:px-8 lg:py-4">
                {/* Order Summary */}
                <section className="lg:w-[40rem] w-[22rem] bg-purple-200 lg:order-2 lg:ml-16 m-auto p-6 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-black lg:mb-8 my-2 lg:mt-16">
                    <h1 className="lg:text-3xl text-2xl text-center mb-2 font-main">Order Summary</h1>
                    <div>
                        {cartItems.map((item) => (
                            <div id={item.id} className='flex justify-around items-center p-2 mb-1 m-auto rounded-lg shadow-md text-black text-opacity-75 bg-white lg:w-[26rem] w-[18rem] min-h-[5rem] text-left'>
                                <img className="lg:w-[6rem] w-[4rem] lg:h-[6rem] h-[4rem] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg" src={item.images[0]} alt="" />
                                <article className="lg:w-[16rem] w-[12rem]">
                                <h2 className="lg:text-lg text-sm font-semibold font-main">{item.name}</h2>
                                <section className="flex items-center justify-between">
                                    <p className="lg:text-lg text-[1rem] font-bold font-secondary text-gray-800">
                                        {formatPrice(item.price)}
                                    </p>
                                </section>
                            </article>
                        </div>
                        ))}
                        <ul className="text-black mt-6 space-y-3">
                            <li className="flex justify-between text-sm lg:text-[1rem] font-secondary">
                                Discount
                                <span className="font-bold">{formatPrice(subtotal)}</span>
                            </li>
                            {discount > 0 && (
                                <li className="flex justify-between text-sm lg:text-[1rem] font-secondary">
                                    Discount (10%)
                                    <span className="font-bold font-secondary">- {formatPrice(subtotal * discount)}</span>
                                </li>
                            )}
                            <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[19rem] lg:w-[31rem] mt-[14px] mb-[14px]" />
                            <li className="flex justify-between font-bold text-sm lg:text-[1rem] font-secondary">
                                Total
                                <span>{formatPrice(totalWithDiscount)}</span>
                            </li>
                            
                        </ul>
                    </div>
                </section>

                {/* Purchase Steps */}
                <div className="lg:w-[28rem] m-auto lg:flex lg:flex-col lg:space-y-6 grid grid-cols-1 gap-2 sm:mt-16">
                    {/* Step 1 */}
                    <div className="bg-blue-100 w-[22rem] lg:w-full mx-auto rounded-lg flex flex-col items-center p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-black">
                        <h2 className="text-2xl p-1 self-start font-main ">1. Delivery details</h2>
                        <p className="text-md self-start p-1 font-secondary">Fields with an asterisk (*) are required</p>
                        <span className="text-left p-1">
                            <p className="text-black lg:text-sm text-xs px-1">First Name and Surname*</p>
                            <input value={name} onChange={handleName} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black lg:text-[1rem]" placeholder="First Name and Surname" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black lg:text-sm text-xs px-1">Address* </p>
                            <input value={address} onChange={handleAddress} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Address" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black lg:text-sm text-xs px-1">Postal Code*</p>
                            <input value={code} onChange={handleCode} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Postal Code" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black lg:text-sm text-xs px-1">City* </p>
                            <input value={city} onChange={handleCity} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="City" />
                        </span>
                        <span className="text-left p-1">
                            <p className="text-black lg:text-sm text-xs px-1">Phone Number* </p>
                            <input value={phoneNumber} onChange={handlePhoneNumber} type="text" className="p-1 w-[19.5rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black" placeholder="Phone Number" />
                        </span>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[19.8rem] lg:w-[26rem] mt-[14px] mb-[14px]" />
                        <h2 className="text-2xl self-start font-main">Add more details</h2>
                        <p className="text-[0.9rem] self-start font-secondary">Does your residence or postbox require a gate code?</p>
                        <input type="text" className="p-1 w-[19.8rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black mt-2 mb-2" />
                    </div>

                    {/* Step 2 */}
                    <section className="bg-purple-100 w-[22rem] lg:w-full mx-auto rounded-lg flex flex-col items-center p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-black">
                        <h2 className="text-2xl p-1 self-start font-main">2. Delivery method</h2>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer bg-white" id="postnord" value="PostNord"
                            checked={deliveryMethod === 'PostNord'}
                            onChange={(e) => setDeliveryMethod(e.target.value)}/>
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src={PostNordLogo} className="w-[6rem] h-[3.13rem]" alt="postnord" />
                            </label>
                        </section>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer bg-white" id="dhl" value="DHL"
                            checked={deliveryMethod === 'DHL'}
                            onChange={(e) => setDeliveryMethod(e.target.value)}/>
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src={DHLLogo} className="w-[6rem] h-[3.13rem]" alt="dhl" />
                            </label>
                        </section>
                    </section>

                    {/* Step 3 */}
                    <section className="bg-purple-100 w-[22rem] lg:w-full mx-auto rounded-lg flex flex-col items-center p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-black">
                        <h2 className="text-2xl p-1 self-start font-main">3. Payment methods</h2>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer bg-white" id="card" value="Card"
                            checked={paymentMethod === 'Card'}
                            onChange={(e) => setPaymentMethod(e.target.value)}/>
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src="https://readymadeui.com/images/visa.webp" className="w-[3rem]" alt="card1" />
                                <img src="https://readymadeui.com/images/american-express.webp" className="w-[3rem]" alt="card2" />
                                <img src="https://readymadeui.com/images/master.webp" className="w-[3rem]" alt="card3" />
                            </label>
                        </section>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer bg-white" id="swish" value="Swish"
                            checked={paymentMethod === 'Swish'}
                            onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                                <img src={SwishLogo} className="w-[2.23rem]" alt="swish" />
                            </label>
                        </section>
                        <section className="flex w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] items-center p-2">
                            <input type="radio" className="w-5 h-5 cursor-pointer bg-white" id="klarna" value="Klarna"
                            checked={paymentMethod === 'Klarna'}
                            onChange={(e) => setPaymentMethod(e.target.value)} />
                            <label htmlFor="card" className="flex gap-2 cursor-pointer">
                                <img src={KlarnaLogo} className="w-[5.15rem]" alt="klarna" />
                            </label>
                        </section>
                        <hr className="h-[1px] bg-transparent border-top-solid border-gray-500 w-[19.5rem] lg:w-[25rem] mb-[14px]" />
                        <p className="text-md self-start ">Enter discount code (DISCOUNT10)</p>
                        <input value={discountCode} onChange={handleDiscountCode} type="text" className="p-1 w-[19.8rem] lg:w-[25rem] rounded-md border border-gray-600 shadow-sm bg-white text-black mt-2 mb-2" />
                        <button
                            onClick={handleApplyDiscount}
                            disabled={discountCode !== "DISCOUNT10"}
                            className={`btn-primary mt-6 w-full py-2 px-4 rounded-lg shadow font-buttons transition text-white ${discountCode === "DISCOUNT10" ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                            >
                            Apply Discount
                        </button>
                    </section>

                    {/* Step 4 */}
                    <article className="bg-purple-100 w-[22rem] lg:w-full mx-auto rounded-lg flex flex-col items-center p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] text-black mb-2">
                        <h2 className="text-2xl p-1 self-start font-main">4. Confirm purchase</h2>
                        <div className="w-[19.5rem] lg:w-[25rem] max-h-[4.125rem] p-2 text-left flex items-center justify-around">
                            <input type="checkbox" 
                                    className="w-5 h-5 cursor-pointer rounded-lg bg-white" 
                                    checked={confirmation}
                                    onChange={() => setConfirmation(!confirmation)}/>
                            <h2 className="text-gray-600 text-xs lg:text-sm w-[15rem] lg:w-[20rem]">I agree to terms and conditions of Musically and accept the terms of privacy policy.</h2>
                        </div>
                        <button className={`mt-6 w-full py-2 px-4 rounded-lg shadow transition font-buttons ${confirmation ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                disabled={!confirmation}
                                onClick={handleConfirm}>
                                Complete order and pay</button>
                        <button className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 font-buttons transition"
                                onClick={handleTakeBack}>
                                I'm not sure yet. Take me up!</button>
                    </article>
                </div>
            </div>
            <Footer />
        </main>
    );
}
