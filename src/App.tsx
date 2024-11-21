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

  const formatPrice = (price: number) => 
    new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
    }).format(price);

  return (
    <>
     <main className='max-w-[100rem] m-auto bg-white'>
        <Header/>
        <div className='flex flex-col w-full items-center justify-center'>
            <div className='flex flex-col items-start justify-center bg-red-200 h-[20rem] lg:h-[40rem] w-[24rem] lg:w-[80rem] rounded-xl shadow-md overflow-hidden mt-4 relative'>
              <img src={frontImage}
              alt="person playing a guitar"
              className='absolute top-0 left-0 w-full h-full object-cover opacity-90'
                />
                <section className='lg:w-[30rem] w-[24rem] lg:p-4 px-2 relative mt-4 lg:mt-0'>
              <h1 className='text-left text-lg lg:text-4xl p-1'>No funds? No problem!</h1>
              <p className='text-left text-[12px] lg:text-xl lg:w-[40rem] w-[20rem] px-1'>On Musically you can find your desired instrument for a fraction of its price.</p>
              <p className='text-left text-[12px] lg:text-xl lg:w-[40rem] w-[20rem] px-1'>Browse amongst dozens of used instruments, or sell your own.</p>
            </section>
            <div className='lg:w-[30rem] w-[24rem] lg:p-4 px-2 flex flex-col relative'>
                <h2 className='lg:text-4xl text-lg text-left p-1'>Maintain your passion.</h2>
                <p className='lg:text-xl text-[12px] text-left p-1'>Who says hobbies have to be expensive?</p>
                <button 
                className="bg-transparent self-start hover:bg-transparent w-[6rem] text-sm lg:mt-2 text-white font-semibold hover:text-blue-500 mx-1 py-2 lg:px-4 border-2 border-white hover:border-blue-500 rounded"
                onClick={goToProducts}>
                    Get started!
                </button>
            </div>

        </div>
          <div className='max-w-[100rem] p-2'>
            <h2 className='text-left text-xl lg:text-3xl text-black p-2'>Our latest additions:</h2>
            <Carousel className='w-[22rem] lg:w-full rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]' responsive={responsive}>
              {products.map((product)=> (
                <div
                key={product.id}
                className="text-left text-base sm:text-lg bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg m-2 p-4 w-[10rem] lg:w-[18rem]"
              >
                <div className="flex items-center justify-center h-32 sm:h-48 overflow-hidden p-2 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="object-cover overflow-hidden w-90% h-full"
                  />
                </div>
                <h2 className="text-sm lg:text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-xs lg:text-sm text-black">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="text-xs lg:text-sm text-black">
                  <strong>Brand:</strong> {product.brand}
                </p>
                <p className="text-xs lg:text-sm text-black">
                  <strong>Condition:</strong> {product.condition}
                </p>
                <p className="text-sm lg:text-lg font-bold text-gray-800">
                  {formatPrice(product.price)}
                </p>
                <button 
                  className='text-black '
                  onClick={() => handleProduct(product)}>
                  Learn more</button>
              </div>
              ))}
          </Carousel>
          </div>
          <section className='lg:w-[75rem] w-[22rem] row-start-9 row-end-9 flex flex-col justify-between'>
            <div>
              <h2 className='lg:text-3xl text-xl text-black place-items-center mb-4'>Our current selection</h2>
            </div>
            <div className='lg:flex lg:flex-row flex lg:justify-between justify-around flex-wrap'>
              <div className='m-2 lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] relative bg-cover bg-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={guitarsImage} className='lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] object-cover' alt="" />
                <h1 className='absolute text-[1.25rem] lg:text-4xl'>Guitars</h1>
              </div>
              <div className='m-2  lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] relative bg-cover bg-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={drumsImage} className='lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] object-cover' alt="" />
                <h1 className='absolute text-[1.25rem] lg:text-4xl'>Drums</h1>
               </div>
              <div className='m-2 lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] relative bg-cover bg-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={keyboardImage} className='lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] object-cover' alt="" />
                <h1 className='absolute text-[1.25rem] lg:text-4xl'>Flutes</h1>
               </div>
              <div className='m-2 lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] relative bg-cover bg-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:cursor-pointer hover:brightness-75 bg-none rounded-xl flex justify-center items-center hover:scale-105 transition-all duration-150 overflow-hidden'>
                <img src={accessoriesImage} className='lg:w-[15rem] w-[8rem] lg:h-[15rem] h-[8rem] object-cover' alt="" />
                <h1 className='absolute text-[1.25rem] lg:text-4xl'>Saxophones</h1>
              </div>
            </div>
          </section>
        </div>
      <Footer/>
     </main>
    </>
  )
}

export default App
