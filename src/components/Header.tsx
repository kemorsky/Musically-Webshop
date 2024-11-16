import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces/interfaces";
import Fuse from "fuse.js";
import Cart from "./Cart";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const [matches, setMatches] = useState<Product[]>([]);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // For expanding search on mobile

  const navigate = useNavigate();

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

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMenuToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="border-b bg-white font-sans min-h-[60px] px-10 py-3 relative tracking-wide z-50">
      <div className="flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4">
        <a href="javascript:void(0)">
          <img
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="w-36"
          />
        </a>

        <div
          id="collapseMenu"
          className={`lg:flex lg:items-center ${
            isExpanded
              ? "max-lg:block max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"
              : "max-lg:hidden"
          }`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleMenuToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-10 lg:absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:space-y-3">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-[15px] text-[#007bff] block font-bold"
              >
                Home
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
              >
                Pages
              </a>
            </li>
            <li className="group max-lg:border-b max-lg:py-3 relative">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] lg:hover:fill-[#007bff] block"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Team
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Contact
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-bold text-[15px] block"
              >
                Source
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center ml-auto space-x-8">
          {/* Search Bar */}
          <div className="relative ">
            <input
              type="text"
              placeholder="Search..."
              className="border px-4 py-2 rounded-full w-36"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                className="text-gray-600"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M19 18l-4.35-4.35a7.5 7.5 0 1 0-1.42 1.42L18 19l-1 1-5.35-5.35a8.1 8.1 0 0 0 1.42-1.42L18 18l1-1z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center ml-auto space-x-8">
          <span className="relative">
            < Cart/>
          </span>
        </div>

        <button
          className="lg:hidden ml-auto p-2"
          onClick={handleMenuToggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 4a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zM2 10a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1zM2 16a1 1 0 011-1h16a1 1 0 110 2H3a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
