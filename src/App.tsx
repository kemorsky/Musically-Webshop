import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import EmailForm from './components/Email';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from "./interfaces/interfaces";
import { useProducts } from '../src/context/ProductContext';
import frontImage from '../src/assets/front-page-img.jpg'
import guitarsImage from '../src/assets/guitars-selection.jpg'
import drumsImage from '../src/assets/drums-selection.jpg'
import keyboardImage from '../src/assets/keyboard-selection.jpg'
import accessoriesImage from '../src/assets/accessories-selection.jpg'

function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const {products} = useProducts();

  const navigate = useNavigate();

  const handleProduct = (product: Product) => {
    window.scrollTo(0, 0);
    navigate(`/product/${product.id}`);
  };

  const goToProducts = () => {
    navigate("/products")
  };

  return (
    <>
     <main className='max-w-[100rem] m-auto bg-white'>
        <Header/>
        <div className='grid grid-cols-10 grid-rows-12 w-[100rem] h-[120rem] place-items-center'>
          <div className='col-start-2 col-end-10 row-start-2 row-end-4 bg-red-200 h-[35rem] rounded-xl shadow-md overflow-hidden'>
            <img src={frontImage}
            alt="person playing a guitar"
            className='opacity-90 '
              />
          </div>
          <section className='w-[30rem] col-start-2 col-end-5 row-start-2 row-end-3 p-4 relative'>
            <h1 className='text-left text-4xl'>No funds? No problem!</h1>
            <p className='text-left text-xl'>On Musically you can find your desired instrument for a fraction of its price.</p>
            <p className='text-left text-xl'>Browse amongst dozens of used instruments, or sell your own.</p>
          </section>
          <div className='w-[30rem] col-start-2 col-end-5 row-start-3 row-end-4 p-4 flex flex-col relative'>
              <h2 className='text-4xl text-left'>Maintain your passion.</h2>
              <p className='text-xl text-left'>Who says hobbies have to be expensive?</p>
              <button 
              className="bg-transparent self-start hover:bg-transparent mt-2 text-white font-semibold hover:text-blue-500 py-2 px-4 border-2 border-white hover:border-blue-500 rounded">
                  Get started!
              </button>
          </div>
          <div className='col-start-1 col-end-11 row-start-6 row-end-7 w-[100rem] p-2'>
            <h2 className='col-start-5 col-end-7 text-left text-3xl text-black p-2'>Our latest additions:</h2>
            <Carousel className='col-start-1 col-end-11 bg-stone-100 border rounded-lg border-gray-700 border-opacity-75' responsive={responsive}>
              {products.map((product)=> (
                <div
                key={product.id}
                className="text-left text-base sm:text-lg bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg m-2 p-4 w-[20rem] sm:w-[18rem]"
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
                <button 
                  className='text-black '
                  onClick={() => handleProduct(product)}>
                  Learn more</button>
              </div>
              ))}
          </Carousel>
          </div>
          
          <section className='col-start-2 col-end-10 w-[75rem] row-start-9 row-end-9 flex flex-col justify-between'>
            <div>
              <h2 className='text-3xl text-black place-items-center mb-4'>Our current selection</h2>
            </div>
            <div className='flex justify-between'>
              <div className='w-[15rem] h-[15rem] relative bg-cover bg-center shadow-lg hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={guitarsImage} className='w-[15rem] h-[15rem] object-cover' alt="" />
                <h1 className='absolute text-4xl'>Guitars</h1>
              </div>
              <div className='w-[15rem] h-[15rem] relative bg-cover bg-center shadow-lg hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={drumsImage} className='w-[15rem] h-[15rem] object-cover' alt="" />
                <h1 className='absolute text-4xl'>Drums</h1>
               </div>
              <div className='w-[15rem] h-[15rem] relative bg-cover bg-center shadow-lg hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={keyboardImage} className='w-[15rem] h-[15rem] object-cover' alt="" />
                <h1 className='absolute text-4xl'>Keyboards</h1>
               </div>
              <div className='w-[15rem] h-[15rem] relative bg-cover bg-center shadow-lg hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={accessoriesImage} className='w-[15rem] h-[15rem] object-cover' alt="" />
                <h1 className='absolute text-4xl'>Accessories</h1>
              </div>
            </div>
          </section>
          <section className='col-start-2 col-end-5 row-start-10 row-end-12'>
              <span>
                <h1>Not here to buy?</h1>
                <button>Sell your gear!</button>
              </span>
            </section>
            <section className='col-start-7 col-end-10 row-start-11 row-end-13'>
                <h1>Still not sure?</h1>
                <EmailForm/>
              </section>
        </div>
      <Footer/>
     </main>
    </>
  )
}

export default App
