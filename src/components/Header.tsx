import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/interfaces";
import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import Fuse from "fuse.js";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const [matches, setMatches] = useState<Product[]>([]);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { products } = useProducts();

  const navigate = useNavigate();

  const { cartItems, removeFromCart } = useCart();  // Access cart state

  const fuse = new Fuse(matches, {
    keys: ["name", "category", "brand"],
    threshold: 0.3,
  });

  const handleSearch = (searchTerm: string) => {
    setQuery(searchTerm);
    if (searchTerm.trim() === "") {
      setMatches(products); // Assuming `products` is available
    } else {
      const fuseResults = fuse.search(searchTerm);
      setMatches(fuseResults.map((result) => result.item));
    }
  };

  const goToHome = () => navigate("/");
  const goToProducts = () => navigate("/products");
  const goToAbout = () => navigate("/about");
  const goToContact = () => navigate("/contact");

  const goToCheckout = (product: Product) => {
    event?.preventDefault();
    navigate(`/purchase/${product.id}`);
  };

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
    }).format(price);

  return (
      <nav className="bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="">
                  <img
                    className="block w-auto h-8 dark:hidden"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full.svg"
                    alt="Logo"
                  />
                  <img
                    className="hidden w-auto h-8 dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                    alt="Dark Logo"
                  />
                </a>
              </div>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                  <li className="shrink-0">
                    <a
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 cursor-pointer"
                      onClick={goToHome}
                    >
                      Home
                    </a>
                  </li>
                  <li className="shrink-0">
                    <p                      
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 cursor-pointer"
                      onClick={goToProducts}
                    >
                      Products
                    </p>
                  </li>
                  <li className="shrink-0">
                    <p
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 cursor-pointer"
                      onClick={goToAbout}
                    >
                      About
                    </p>
                  </li>
                  <li className="shrink-0">
                    <p
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 cursor-pointer"
                      onClick={goToContact}
                    >
                      Contact
                    </p>
                  </li>
                  
              </ul>
            </div>
            <div className="flex items-center lg:space-x-2">
              {/* Search Bar (Desktop View) */}
              <div className="hidden lg:flex items-center w-full lg:w-auto">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search..."
                  className="border border-gray-300 rounded-full px-4 py-2 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all w-full lg:w-80"
                />
              </div>

              <button
                onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
              </button>
              {cartDropdownOpen && (
                <div className="absolute right-0 lg:right-[20rem] top-[3.3rem] lg:top-[3.8rem] z-10 w-80 lg:w-[30rem] space-y-4 overflow-hidden rounded-lg bg-white p-4 antialiased shadow-lg dark:bg-gray-800">
                  {/* Purchased items go here */}
                  <div className="flex flex-col gap-2">
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty</p>
                    ) : (
                    cartItems.map((product) => (
                    <div id={product.id} className='flex justify-around items-center p-2 mb-1 m-auto rounded-lg shadow-md text-black text-opacity-75 bg-white lg:w-[26rem] w-[18rem] min-h-[5rem] text-left'>
                        <img className="lg:w-[6rem] w-[5rem] lg:h-[6rem] h-[5rem] bg-orange-400 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg" src={product.images[0]} alt="" />
                          <article className="lg:w-[16rem] w-[8rem]">
                            <h2 className="lg:text-lg text-sm font-semibold ">{product.name}</h2>
                            <p className="text-xs sm:text-sm text-black"><strong>Brand:</strong> {product.brand}</p>
                            <p className="text-xs sm:text-sm text-black"><strong>Condition:</strong> {product.condition}</p>
                            <section className="flex items-center justify-between">
                              <p className="lg:text-lg text-[1rem] font-bold text-gray-800">
                                  {formatPrice(product.price)}
                                </p>
                                <button className="h-[2.5rem] w-[2.5rem] bg-white border border-gray-700 border-opacity-60 rounded-md shadow-md flex justify-center items-center"
                                        onClick={() => removeFromCart(product.id)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" 
                                      width="24" 
                                      height="24" 
                                      viewBox="0 0 24 24" 
                                      fill="none" 
                                      stroke="#FF0000" 
                                      stroke-width="2" 
                                      stroke-linecap="round" 
                                      stroke-linejoin="round" 
                                        className="lucide lucide-trash-2">
                                          <path d="M3 6h18"/>
                                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                          <line x1="10" x2="10" y1="11" y2="17"/>
                                          <line x1="14" x2="14" y1="11" y2="17"/>
                                </svg>
                              </button>
                          </section>
                      </article>
                  </div>
                  ))
                )}
                </div>
                  <button
                    className="inline-flex w-full lg:w-[14rem] justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700"
                    onClick={() => goToCheckout(products[0])}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}

              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                Account
              </button>
              {userDropdownOpen && (
                <div className="absolute right-0 lg:right-[14rem] top-[3.2rem]  lg:top-[3.8rem] z-10 w-56 divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600 dark:bg-gray-700">
                  <ul className="p-2 text-sm text-white">
                    {['My Account', 'My Orders', 'Settings'].map(
                      (item) => (
                        <li key={item}>
                          <p
                            className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                          >
                            {item}
                          </p>
                        </li>
                      )
                    )}
                  </ul>
                  <div className="p-2">
                    <a
                      href="#"
                      className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              )}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex lg:hidden items-center justify-center p-2 hover:bg-gray-100 rounded-md dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden">
              <ul className="space-y-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <li>
                    <a
                      href="#"
                      className="block hover:text-primary-700 dark:hover:text-primary-500"
                      onClick={goToHome}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block hover:text-primary-700 dark:hover:text-primary-500"
                      onClick={goToProducts}
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block hover:text-primary-700 dark:hover:text-primary-500"
                      onClick={goToAbout}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block hover:text-primary-700 dark:hover:text-primary-500"
                      onClick={goToContact}
                    >
                      Contact
                    </a>
                  </li>
              </ul>
            </div>
          )}

          {/* Search Bar positioned outside of the dropdown menu and centered on mobile */}
          <div className="flex justify-center mt-4 lg:hidden">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search..."
              className="w-full max-w-md border border-gray-300 rounded-full px-4 py-2 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
          </div>
        </div>
      </nav>
  );
}
