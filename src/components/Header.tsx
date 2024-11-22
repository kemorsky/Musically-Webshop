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
                <section className="flex items-center justify-center text-white lg:mb-1 lg:text-xl text-[1rem] font-semibold white cursor-pointer"
                        onClick={goToHome}>
                  <img src="https://www.svgrepo.com/show/499962/music.svg" className="lg:h-12 mr-3 h-9 " alt="Musically Logo"/>
                  Musically
                </section>
              </div>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                  <li className="shrink-0">
                    <a
                      className="flex text-sm font-medium text-white hover:text-primary-700 cursor-pointer"
                      onClick={goToHome}
                    >
                      Home
                    </a>
                  </li>
                  <li className="shrink-0">
                    <p                      
                      className="flex text-sm font-medium text-white hover:text-primary-700 cursor-pointer"
                      onClick={goToProducts}
                    >
                      Products
                    </p>
                  </li>
                  <li className="shrink-0">
                    <p
                      className="flex text-sm font-medium text-white hover:text-primary-700 cursor-pointer"
                      onClick={goToAbout}
                    >
                      About
                    </p>
                  </li>
                  <li className="shrink-0">
                    <p
                      className="flex text-sm font-medium text-white hover:text-primary-700 cursor-pointer"
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
                  className="border border-gray-300 rounded-full px-4 py-2 text-white bg-gray-700 outline-none focus:ring-2 focus:ring-gray-500 transition-all w-full lg:w-80"
                />
              </div>

              <button
                onClick={() => setCartDropdownOpen(!cartDropdownOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 bg-gray-800 hover:bg-gray-700 text-sm font-medium leading-none text-white"
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
                <p className="lg:hidden ml-1 text-yellow-400">{cartItems.length}</p>
                <span className="hidden sm:flex">My Cart <p className="ml-1 text-yellow-400">{cartItems.length}</p></span>
              </button>
              {cartDropdownOpen && (
                <div className="absolute right-0 lg:right-[20rem] top-[3.3rem] lg:top-[3.8rem] z-10 lg:w-[30rem] w-[24rem] lg:min-h-[3rem] min-h-[4rem] space-y-4 overflow-hidden rounded-lg p-4 antialiased shadow-lg bg-gray-700 transition ease-in-out duration-200">
                  {/* Purchased items go here */}
                  <div className="flex flex-col gap-2 text-white">
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty</p>
                    ) : (
                    cartItems.map((product) => (
                    <div id={product.id} className='flex justify-around items-center p-2 mb-1 m-auto rounded-lg shadow-md text-black text-opacity-75 bg-white lg:w-[26rem] w-[22rem] min-h-[5rem] text-left'>
                        <img className="lg:w-[6rem] w-[5rem] lg:h-[6rem] h-[5rem] bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg" src={product.images[0]} alt="" />
                        <article className="lg:w-[16rem] w-[12rem]">
                          <h2 className="lg:text-lg text-sm font-semibold font-main">{product.name}</h2>
                          <section className="flex items-center justify-between">
                            <p className="lg:text-lg text-[1rem] font-bold font-secondary text-gray-800">
                                {formatPrice(product.price)}
                              </p>
                              <button className="lg:w-[5rem] w-[3.5rem] lg:h-[2rem] h-[2rem] font-buttons flex justify-center items-center rounded-md lg:text-[0.8rem] text-[0.7rem] text-white bg-red-700 hover:bg-red-800"
                                     onClick={() => removeFromCart(product.id)}>
                                Remove
                              </button>
                          </section>
                        </article>
                    </div>
                  ))
                )}
                </div>
                  <button
                    className={`inline-flex w-full lg:w-[14rem] justify-center rounded-lg px-5 py-2.5 text-sm font-buttons text-white bg-indigo-600 hover:bg-indigo-700 transition ${cartItems.length === 0 ? 'hidden' : ''}`}
                    onClick={() => goToCheckout(products[0])}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}

              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-700 bg-gray-800 text-sm font-medium leading-none text-white"
              >
                Account
              </button>
              {userDropdownOpen && (
                <div className="absolute right-0 lg:right-[14rem] top-[3.2rem]  lg:top-[3.8rem] z-10 w-56 divide-y rounded-lg shadow divide-gray-600 bg-gray-700 transition duration-200">
                  <ul className="p-2 text-sm text-white">
                    {['My Account', 'My Orders', 'Settings'].map(
                      (item) => (
                        <li key={item}>
                          <p
                            className="block px-3 py-2 hover:bg-gray-600"
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
                      className="block px-3 py-2 hover:bg-gray-600"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              )}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex lg:hidden items-center justify-center p-2 rounded-md bg-gray-800 hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
          {menuOpen && (
            <div className="lg:hidden transition duration-200">
              <ul className="space-y-3 p-4 bg-gray-700 rounded-lg">
                  <li>
                    <a
                      href="#"
                      className="block text-white"
                      onClick={goToHome}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white"
                      onClick={goToProducts}
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white"
                      onClick={goToAbout}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block text-white"
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
