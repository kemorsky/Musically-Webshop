import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Product } from '../interfaces/interfaces';

export default function ConfirmationPage() {

    const { cartItems, clearCart } = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const { deliveryData } = location.state || {}; // Retrieve passed data

    const handleReturn = () => {
        clearCart({} as Product); // Pass an empty product object
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

    const calculateTotalPrice = (): number => {
        return cartItems.reduce(
            (total, item) => total + item.price,
            0
        );
        };

    const subtotal = calculateTotalPrice();
    const totalWithDiscount = subtotal * (1 - deliveryData.discount);

    const orderNumberText = (
        <span className="text-blue-700">#{deliveryData.orderNumber}</span>
    );
    
    return (
        <main className='m-auto max-w-[100rem] lg:min-h-[56rem] min-h-[52rem] bg-white'>
            <Header />
            <section className='flex flex-col m-auto items-center justify-start my-4 lg:h-[44rem] min-h-[34rem] w-[24rem] lg:w-[64rem]'>
                <div className='text-left px-4 py-2'>
                    <h2 className='text-lg lg:text-2xl text-black font-semibold font-secondary'>Thanks for your order!</h2>
                    <p className='text-gray-800 lg:text-lg text-sm font-secondary'>Your order {orderNumberText} will be packaged and sent at our earliest convenience. We will notify you when your order has been shipped. Expect delivery within 2-4 business days.
                    </p>
                </div>
                <div className='lg:flex flex lg:flex-row flex-col justify-around lg:items-start items-center w-[24rem] lg:w-[64rem] gap-2'>
                    <section className='p-4 border text-black rounded-xl flex flex-col justify-between w-[22rem] lg:w-[30rem] shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] font-secondary bg-purple-100'>
                        <li className="lg:text-lg text-[0.9rem] flex justify-between">Name: <span className="font-semibold">{deliveryData.name}</span></li>
                        <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                        <li className="lg:text-lg text-[0.9rem] flex justify-between">Address: <span className="font-semibold">{deliveryData.address}</span></li>
                        <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                        <li className="lg:text-lg text-[0.9rem] flex justify-between">City: <span className="font-semibold">{deliveryData.city}</span></li>
                        <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                        <li className="lg:text-lg text-[0.9rem] flex justify-between">Postal Code: <span className="font-semibold">{deliveryData.code}</span></li>
                        <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                        <li className="lg:text-lg text-[0.9rem] flex justify-between">Phone Number: <span className="font-semibold">{deliveryData.phoneNumber}</span></li>
                        <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                        <li className="lg:text-lg text-[0.9rem] flex justify-between">Delivery Method: <span className="font-semibold">{deliveryData.deliveryMethod}</span></li>
                        <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                        <li className="lg:text-lg text-[0.9rem] flex justify-between">Payment Method: <span className="font-semibold">{deliveryData.paymentMethod}</span></li>
                        <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                        <section className='flex lg:w-[17rem] w-[14rem] lg:justify-between justify-between items-center self-start mt-2 font-buttons'>
                            <button className='bg-green-500 hover:bg-green-600 lg:w-[8rem] w-[7rem] lg:h-[3rem] h-[2.5rem] rounded-lg lg:text-base text-xs text-white transition' onClick={handleReturn}>Return to Home</button>
                            <button className='bg-red-400 hover:bg-red-500 lg:w-[8rem] w-[6rem] lg:h-[3rem] h-[2.5rem] rounded-lg lg:text-base text-xs text-white transition' onClick={handleReturn}>Track order</button>
                        </section>
                    </section>
                    <section className='flex flex-col justify-start items-center lg:w-[30rem] lg:min-h-[325px] w-[22rem] bg-purple-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl text-black p-4'>
                        <h2 className='lg:text-xl text-lg self-start font-main'>Order summary</h2>
                        <div className=''>
                            {cartItems.map((product) => (
                                <div
                                    key={product.id}
                                    className="mt-2 p-2 lg:w-[28rem] w-[20rem] bg-white flex justify-between items-center m-auto shadow-md rounded-lg">
                                    <div>
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className="lg:w-[4rem] w-[3rem] self-start rounded-lg shadow-md"/>
                                    </div>
                                    <div className="lg:px-3 p-1 flex w-[18rem] lg:w-[24rem] justify-between items-center lg:text-center text-left">
                                        <h2 className="lg:text-sm text-xs font-bold font-main text-black">{product.name}</h2>
                                        <p className="lg:text-sm text-xs font-bold font-secondary text-gray-800">
                                            {formatPrice(product.price)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                            <hr className="h-[1px] bg-gray-500 w-full mt-3"/>
                        </div>
                        <article className='self-start text-left'>
                            <h2 className='font-semibold mt-2 font-secondary'>Subtotal: {formatPrice(cartItems.reduce((total, product) => total + product.price, 0))}</h2>
                            {deliveryData.discount > 0 && (
                                <p className="text-sm lg:text-[1rem] font-secondary font-semibold">
                                    Discount:
                                    <span > -{formatPrice(subtotal * deliveryData.discount)}</span>
                                </p>
                            )}
                             <hr className="h-[1px] bg-gray-500 w-full mt-2" />
                            <h2 className='font-semibold mt-2 font-secondary'>Total price: {formatPrice(totalWithDiscount)}</h2>
                        </article>
                    </section>
                </div>
            </section>
            <Footer />
        </main>
    )
}