import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../interfaces/interfaces';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function ProductList() {
  const { products } = useProducts();
  const navigate = useNavigate();

  const {addToCart, removeFromCart, isInCart} = useCart();

  const handleProduct = (product: Product) => {
    event?.preventDefault();
    window.scrollTo(0, 0);
    navigate(`/product/${product.id}`);
  };

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
    }).format(price);

  return (
    <main className="max-w-[100rem] m-auto bg-white">
      <Header />
      {/* Main Content Container */}
      <div className="flex flex-col justify-center items-center lg:gap-4 ">
        {/* Sidebar / Section */}
        <section
          className="flex justify-around w-[22rem] lg:w-[50rem] max-h-[26rem] bottom-0 bg-white m-2 text-black shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg p-4"
        >
          <div>
            <h2 className="text-sm lg:text-lg p-1 cursor-pointer hover:text-sky-600 font-secondary">Drums</h2>
            <hr className="h-[1px] bg-gray-500 w-full" />
          </div>
          <div>
            <h2 className="text-sm lg:text-lg p-1 cursor-pointer hover:text-sky-600 font-secondary">Flutes</h2>
            <hr className="h-[1px] bg-gray-500 w-full" />
          </div>
          <div>
            <h2 className="text-sm lg:text-lg p-1 cursor-pointer hover:text-sky-600 font-secondary">Saxophones</h2>
            <hr className="h-[1px] bg-gray-500 w-full" />
          </div>
          <div>
            <h2 className="text-sm lg:text-lg p-1 font-secondary">Guitars</h2>
            <hr className="h-[1px] bg-gray-500 w-full" />
            <ul className="lg:flex lg:flex-row lg:items-start flex-col justify-between my-2">
              <button className="flex justify-center items-center lg:max-w-[6rem] max-w-[4rem] lg:text-[1rem] text-xs text-white rounded-md lg:p-2 p-1.5 bg-sky-500 hover:bg-sky-600 lg:mr-2 mb-1">Acoustic</button>
              <button className="flex justify-center items-center lg:max-w-[6rem] max-w-[4rem] lg:text-[1rem] text-xs text-white rounded-md lg:p-2 p-1.5 bg-sky-500 hover:bg-sky-600 lg:mr-2 mb-1">Electric</button>
            </ul>
          </div>
        </section>
        {/* Product Grid */}
        <div className="flex-1 lg:w-[80rem] w-[22rem] grid grid-cols-2 sm:grid-cols-2 ipad:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="text-left text-base sm:text-lg bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] lg:space-y-1 rounded-lg sm:m-2 p-4 w-full h-[23rem] lg:min-h-[26rem] lg:w-[18rem] relative"
            >
              <div className="flex items-center justify-center h-32 sm:h-48 overflow-hidden p-2 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="object-cover overflow-hidden w-90% h-full cursor-pointer"
                  onClick={() => handleProduct(product)}
                />
              </div>
              <h2 className="text-sm lg:text-[1.15rem] font-semibold text-black font-main mt-2">{product.name}</h2>
              <p className="text-xs sm:text-sm text-black font-secondary">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-xs sm:text-sm text-black font-secondary">
                <strong>Brand:</strong> {product.brand}
              </p>
              <p className="text-xs sm:text-sm text-black font-secondary">
                <strong>Condition:</strong> {product.condition}
              </p>
              <p className="text-xs sm:text-sm text-black font-secondary">
                <strong>Year Made:</strong> {product.yearMade}
              </p>
              <div className='flex flex-col lg:flex-row lg:items-center items-start justify-center lg:justify-between mt-3'>
                <p className="text-sm sm:text-lg font-bold text-gray-800 font-secondary">
                  {formatPrice(product.price)}
                </p>
                <button
                  className={`flex justify-center items-center font-buttons bg-indigo-600 w-[5rem] lg:w-[7rem] h-[2.5rem] lg:h-[2.5rem] text-white text-xs lg:text-[0.9rem] lg:py-2 lg:px-4 rounded-lg hover:bg-indigo-700 transition ${isInCart(product.id) ? 'bg-red-700 hover:bg-red-800' : ''}`}
                  onClick={() => {
                    if (isInCart(product.id)) {
                      removeFromCart(product.id);
                    } else {
                      addToCart(product);
                    }
                  }}
                >
                  {isInCart(product.id) ?  "Remove from cart" : "Add to cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
