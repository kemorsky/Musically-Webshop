import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../interfaces/interfaces';
import Header from '../components/Header';
import { useState } from 'react';

export default function ProductList() {
  const { products } = useProducts();
  const navigate = useNavigate();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleProduct = (product: Product) => {
    window.scrollTo(0, 0);
    navigate(`/product/${product.id}`);
  };

  return (
    <main className="max-w-[100rem] m-auto bg-white">
      <Header />

      {/* Sidebar Toggle Button for Mobile and iPad */}
      <button
        className="ipad:hidden fixed top-42 left-1 z-50 bg-gray-800 text-white p-2 rounded-md"
        onClick={() => setSidebarOpen((prev) => !prev)}
      >
        Menu
      </button>

      {/* Main Content Container */}
      <div className="flex flex-col ipad:flex-row ipad:gap-4 p-4">
        {/* Sidebar / Section */}
        <section
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } ipad:block ipad:w-[22rem] max-h-[26rem] bg-stone-100 m-2 text-black shadow-lg ipad:shadow-none ipad:border ipad:border-black rounded-xl p-4`}
        >
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Product Listings</h1>
          <h2 className="text-xl p-1">Guitars</h2>
          <hr className="h-[1px] bg-gray-500 w-full my-2" />
          <ul className="flex flex-col items-start">
            <li className="p-1">Acoustic</li>
            <li className="p-1">Bass</li>
            <li className="p-1">Electric</li>
          </ul>
          <hr className="h-[1px] bg-gray-500 w-full my-2" />
          <h2 className="text-xl">Drums</h2>
          <hr className="h-[1px] bg-gray-500 w-full my-2" />
          <h2 className="text-xl">Keyboards</h2>
          <hr className="h-[1px] bg-gray-500 w-full my-2" />
          <h2 className="text-xl">Accessories</h2>
        </section>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-2 ipad:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="text-left text-base sm:text-lg bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg m-2 p-4 w-full sm:w-[18rem]"
              onClick={() => handleProduct(product)}
            >
              <div className="flex items-center justify-center h-32 sm:h-48 overflow-hidden p-2 bg-white shadow-sm shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover overflow-hidden w-90% h-full"
                />
              </div>
              <h2 className="text-sm sm:text-xl font-semibold text-gray-800">{product.name}</h2>
              <p className="text-xs sm:text-sm text-black">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-xs sm:text-sm text-black">
                <strong>Brand:</strong> {product.brand}
              </p>
              <p className="text-xs sm:text-sm text-black">
                <strong>Condition:</strong> {product.condition}
              </p>
              <p className="text-sm sm:text-lg font-bold text-gray-800">
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
              <p className="text-xs sm:text-sm text-gray-500">{product.description}</p>
              <p className="text-xs sm:text-sm text-gray-500">
                <strong>Year Made:</strong> {product.yearMade}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
