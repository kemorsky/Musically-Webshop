import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useProducts();
  const {addToCart, removeFromCart, isInCart} = useCart();

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  const product = products.find((product) => product.id.toString() === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
    }).format(price);

  return (
    <main className='max-w-[100rem] m-auto'>
      <Header />
      <div className="font-sans bg-white">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-6 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div className="lg:col-span-3 lg:w-full w-2/3 lg:sticky top-0 m-auto">
                        <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src={product.images[0]} alt="Product" className="lg:w-1/2 w-full rounded object-cover mx-auto" />
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-lg lg:text-2xl font-semibold text-black text-left font-main">{product.name}</h2>
                        <p className="text-md lg:text-xl text-black py-2 text-left font-secondary">{product.description}</p>
                        <div className="mt-2 text-black">
                            <article className="py-2 max-w-[50rem] bg-blue-100 border rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-4 text-sm lg:text-lg text-left">Seller's description: 
                                <p className="text-[0.8rem] lg:text-md text-black ">{product.sellerDescription}</p>
                            </article>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-6">
                          <p className="text-xl font-bold text-gray-800">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <button type="button" 
                                className={`min-w-[150px] px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-buttons rounded-lg transition duration-200 ${isInCart(product.id) ? 'bg-red-700 hover:bg-red-800' : ''}`}
                                onClick={() => {
                                    if (isInCart(product.id)) {
                                      removeFromCart(product.id);
                                    } else {
                                      addToCart(product);
                                    }
                                  }}
                                >
                                  {isInCart(product.id) ? "Remove from cart" : "Add to cart"}
                            </button>
                            <button type="button" className="min-w-[150px] px-4 py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-buttons rounded-lg">Buy now</button>
                        </div>
                    </div>
                </div>
                <div className="mt-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 className="text-xl font-bold font-main text-gray-800">Product information</h3>
                    <ul className="mt-4 space-y-6 text-gray-800">
                        <li className="text-sm flex justify-between">Category <span className="ml-4">{product.category}</span></li>
                        <li className="text-sm flex justify-between">Brand <span className="ml-4">{product.brand}</span></li>
                        <li className="text-sm flex justify-between">Year of production <span className="ml-4">{product.yearMade}</span></li>
                        <li className="text-sm flex justify-between">Condition <span className="ml-4">{product.condition}</span></li>
                        <li className="text-sm flex justify-between">Width <span className="ml-4">{product.width} mm</span></li>
                    </ul>
                </div>
                <div className="mt-8 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 className="text-xl font-bold font-main text-gray-800">Seller Reviews (6)</h3>
                    <div className="grid md:grid-cols-2 gap-12 mt-4">
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">5.0</p>
                                <svg className="w-5 fill-green-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-2/3 h-full rounded bg-green-500"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">4.0</p>
                                <svg className="w-5 fill-green-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-1/3 h-full rounded bg-green-500"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">17%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">3.0</p>
                                <svg className="w-5 fill-gray-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-1/6 h-full rounded bg-gray-400"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">0%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">2.0</p>
                                <svg className="w-5 fill-gray-300 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-1/12 h-full rounded bg-gray-400"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">0%</p>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">1.0</p>
                                <svg className="w-5 fill-red-500 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-[6%] h-full rounded bg-red-500"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">17%</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col items-start">
                                <h2 className="text-black p-3 text-lg">Latest review:</h2>
                                <div className="ml-3">
                                    <h4 className="text-sm font-bold text-black text-start">{product.sellerReviews[0]?.reviewer}</h4>
                                    <div className="flex space-x-1 mt-1">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-4 ${
                                            i < product.sellerReviews[0]?.rating
                                                ? product.sellerReviews[0]?.rating >= 4
                                                ? 'fill-green-500'
                                                : 'fill-red-500'
                                                : 'fill-gray-300'
                                            }`}
                                            viewBox="0 0 14 13"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        ))}
                                        <p className="text-xs !ml-2 font-semibold text-black">4 hours ago</p>
                                    </div>
                                    <p className="text-sm mt-4 text-black text-start">{product.sellerReviews[0]?.comment}</p>
                                </div>
                            </div>
                            <button type="button" className="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-gray-800 font-bold rounded">Read all reviews</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </main>
  );
}
