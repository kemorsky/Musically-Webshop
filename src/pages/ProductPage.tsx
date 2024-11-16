import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function ProductPage() {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useProducts();

  if (!products || products.length === 0) {
    return <p>Loading products...</p>;
  }

  const product = products.find((product) => product.id.toString() === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <main className='max-w-[100rem] m-auto'>
      <Header />
      <div className="font-sans bg-white">
            <div className="p-4 lg:max-w-7xl max-w-4xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                    <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                        <div className="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                            <img src={product.images[0]} alt="Product" className="w-3/4 rounded object-cover mx-auto" />
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-extrabold text-gray-800">{product.name}</h2>
                        <p className="text-gray-800 font-bold py-4 text-left">{product.description}</p>
                        <div className="flex space-x-2">
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                            </svg>
                            <h4 className="text-gray-800 text-base">500 Reviews</h4>
                        </div>
                        <div className="mt-2 text-black">
                            <article className="py-2 max-w-[50rem] bg-white border rounded-lg shadow-md p-4 text-left">Seller's description: 
                            <p className="">{product.sellerDescription}</p>
                            </article>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                          <p className="text-xl font-bold text-gray-800">
                                {product.isOnSale && product.salePrice ? (
                                  <>
                                    <span className="line-through text-gray-500 mr-2">
                                      {new Intl.NumberFormat('sv-SE', {
                                        style: 'currency',
                                        currency: 'SEK',
                                      }).format(product.price)}
                                    </span>
                                    <span className="text-red-500">
                                      {new Intl.NumberFormat('sv-SE', {
                                        style: 'currency',
                                        currency: 'SEK',
                                      }).format(product.salePrice)}
                                    </span>
                                  </>
                                ) : (
                                  `${new Intl.NumberFormat('sv-SE', {
                                    style: 'currency',
                                    currency: 'SEK',
                                  }).format(product.price)}`
                                )}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-8">
                            <button type="button" className="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">Buy now</button>
                            <button type="button" className="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 className="text-xl font-bold text-gray-800">Product information</h3>
                    <ul className="mt-4 space-y-6 text-gray-800">
                        <li className="text-sm flex justify-between">CATEGORY <span className="ml-4">{product.category}</span></li>
                        <li className="text-sm flex justify-between">BRAND <span className="ml-4">{product.brand}</span></li>
                        <li className="text-sm flex justify-between">YEAR OF PRODUCTION <span className="ml-4">{product.yearMade}</span></li>
                        <li className="text-sm flex justify-between">CONDITION <span className="ml-4">{product.condition}</span></li>
                        <li className="text-sm flex justify-between">NUMBER OF STRINGS <span className="ml-4">{product.numberOfStrings}</span></li>
                        <li className="text-sm flex justify-between">WIDTH <span className="ml-4">{product.width} mm</span></li>
                    </ul>
                </div>

                <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                    <h3 className="text-xl font-bold text-gray-800">Reviews(10)</h3>
                    <div className="grid md:grid-cols-2 gap-12 mt-4">
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">5.0</p>
                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-2/3 h-full rounded bg-blue-600"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
                            </div>

                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">4.0</p>
                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-1/3 h-full rounded bg-blue-600"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
                            </div>

                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">3.0</p>
                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-1/6 h-full rounded bg-blue-600"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
                            </div>

                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">2.0</p>
                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-1/12 h-full rounded bg-blue-600"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
                            </div>

                            <div className="flex items-center">
                                <p className="text-sm text-gray-800 font-bold">1.0</p>
                                <svg className="w-5 fill-blue-600 ml-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                                    <div className="w-[6%] h-full rounded bg-blue-600"></div>
                                </div>
                                <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-start">
                                <img src="https://readymadeui.com/team-2.webp" className="w-12 h-12 rounded-full border-2 border-white" />
                                <div className="ml-3">
                                    <h4 className="text-sm font-bold text-gray-800">John Doe</h4>
                                    <div className="flex space-x-1 mt-1">
                                        <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <svg className="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                        </svg>
                                        <p className="text-xs !ml-2 font-semibold text-gray-800">2 mins ago</p>
                                    </div>
                                    <p className="text-sm mt-4 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
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
