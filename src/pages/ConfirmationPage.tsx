import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ConfirmationPage() {

    const { cartItems } = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const { deliveryData } = location.state || {}; // Retrieve passed data

    const handleReturn = () => {
        navigate('/')
    }

    if (!deliveryData) {
        return <p>No order data available. Please go back and complete your order.</p>;
    }

    const formatPrice = (price: number) => 
        new Intl.NumberFormat('sv-SE', {
        style: 'currency',
        currency: 'SEK',
        }).format(price);
    
    return (
        <main className='m-auto max-w-[100rem] lg:min-h-[56rem] min-h-[52rem] bg-white'>
            <Header />
            <section className='flex flex-col m-auto items-center justify-start my-4 lg:h-[44rem] min-h-[34rem] w-[24rem] lg:w-[64rem]'>
                <div className='text-left px-4 py-2'>
                    <h2 className='text-lg lg:text-2xl text-black font-semibold'>Thanks for your order!</h2>
                    <p className='text-gray-800 lg:text-lg text-sm'>Your order PLACEHOLDER will be packaged and sent at our earliest convenience. We will notify you when your order has been shipped. Expect delivery within 2-4 business days.
                    </p>
                </div>
                <div className='lg:flex flex lg:flex-row flex-col justify-around items-center w-[24rem] lg:w-[64rem] gap-2'>
                    <section className='p-4 border text-black rounded-xl flex flex-col justify-between w-[22rem] lg:w-[30rem]'>
                        <li className="lg:text-lg text-[1rem] flex justify-between">Name: <span className="font-semibold">{deliveryData.name}</span></li>
                        <li className="lg:text-lg text-[1rem] flex justify-between">Address: <span className="font-semibold">{deliveryData.address}</span></li>
                        <li className="lg:text-lg text-[1rem] flex justify-between">City: <span className="font-semibold">{deliveryData.city}</span></li>
                        <li className="lg:text-lg text-[1rem] flex justify-between">Postal Code: <span className="font-semibold">{deliveryData.code}</span></li>
                        <li className="lg:text-lg text-[1rem] flex justify-between">Phone Number: <span className="font-semibold">{deliveryData.phoneNumber}</span></li>
                        <li className="lg:text-lg text-[1rem] flex justify-between">Delivery Method: <span className="font-semibold">{deliveryData.deliveryMethod}</span></li>
                        <li className="lg:text-lg text-[1rem] flex justify-between">Payment Method: <span className="font-semibold">{deliveryData.paymentMethod}</span></li>
                        <section className='flex w-[15rem] justify-between items-center self-start mt-2'>
                            <button className='bg-red-700' onClick={handleReturn}>Return to Home</button>
                            <button className='bg-red-700' onClick={handleReturn}>Return to Home</button>
                        </section>
                    </section>
                    <section className='flex flex-col justify-start items-center lg:w-[30rem] lg:min-h-[16.5rem] w-[22rem] bg-white border rounded-xl text-black py-2 px-4'>
                        <h2 className='lg:text-lg self-start'>Order summary</h2>
                        <div className=''>
                            {cartItems.map((product) => (
                                <div
                                    key={product.id}
                                    className="mt-2 p-2 lg:w-[28rem] w-[22rem] flex justify-between items-center m-auto shadow-md rounded-lg">
                                    <div>
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="lg:w-[4rem] w-[3rem] self-start rounded-lg shadow-md"/>
                                    </div>
                                    <div className="lg:px-3 p-1 flex w-[18rem] lg:w-[24rem] justify-between items-center">
                                        <h2 className="lg:text-sm text-xs font-bold text-black">{product.name}</h2>
                                        <p className="lg:text-sm text-xs font-bold text-gray-800">
                                            {formatPrice(product.price)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <article className='self-start'>
                            <h2 className='font-semibold mt-2'>Total price: {formatPrice(cartItems.reduce((total, product) => total + product.price, 0))}</h2>
                        </article>
                    </section>
                </div>
            </section>
            <Footer />
        </main>
    )
}