import { useNavigate } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
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

  const goToProducts = () => { navigate("/products") };
  
  const formatPrice = (price: number) => 
    new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK',
    }).format(price);

  return (
    <>
     <main className='max-w-[100rem] m-auto bg-white'>
        <Header/>
        <div className='flex flex-col w-full lg:gap-6 gap-3 items-center lg:justify-center justify-around text-white'>
            <div className='flex flex-col items-start justify-center gap-12 bg-red-200 h-[20rem] lg:h-[40rem] w-[22rem] lg:w-[80rem] rounded-xl shadow-md overflow-hidden mt-4 relative'>
              <img src={frontImage}
              alt="person playing a guitar"
              className='absolute top-0 left-0 w-full h-full object-cover opacity-90'
                />
              <section className='lg:w-[30rem] w-[24rem] lg:p-4 px-2 relative mt-4 lg:mt-0'>
                <h1 className='text-left text-lg lg:text-4xl p-1 font-main'>No funds? No problem!</h1>
                <p className='text-left text-[12px] lg:text-xl lg:w-[40rem] w-[20rem] px-1 font-secondary'>On Musically you can find your desired instrument for a fraction of its price.</p>
                <p className='text-left text-[12px] lg:text-xl lg:w-[40rem] w-[20rem] px-1 font-secondary'>Browse amongst dozens of used instruments.</p>
              </section>
              <div className='lg:w-[30rem] w-[24rem] lg:p-4 px-2 flex flex-col relative'>
                  <h2 className='lg:text-4xl text-lg text-left p-1 font-main'>Maintain your passion.</h2>
                  <p className='lg:text-xl text-[12px] text-left p-1 font-secondary'>Who says hobbies have to be expensive?</p>
                  <button 
                  className="bg-transparent self-start hover:bg-transparent lg:w-[8rem] w-[6rem] lg:text-base text-[0.8rem] lg:mt-2 text-white font-semibold hover:text-blue-500 mx-1 py-2 lg:px-4 border-2 border-white hover:border-blue-500 rounded"
                  onClick={goToProducts}>
                      Get started!
                  </button>
              </div>
        </div>
          <div className='lg:w-[90rem] m-auto w-[22rem] p-2'>
            <h2 className='text-left text-xl lg:text-3xl text-black p-2 font-main'>Our latest additions:</h2>
            <Carousel className='w-[22rem] bg-purple-100 lg:w-full rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]' responsive={responsive}>
              {products.slice(0, 8).map((product)=> (
                <div
                key={product.id}
                className="text-left text-base sm:text-lg bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg m-2 p-4 w-[10rem] lg:w-[16rem] lg:h-[21rem] h-[17rem]"
                >
                  <div className="flex items-center justify-center h-32 sm:h-48 overflow-hidden p-2 bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-lg">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="object-cover overflow-hidden w-90% h-full"
                    />
                  </div>
                  <h2 className="text-sm lg:text-[1.15rem] mt-2 font-semibold text-gray-800 font-main">{product.name}</h2>
                  <div className='flex flex-col lg:flex-row lg:items-center items-start justify-center lg:justify-between lg:mt-3 mt-1'>
                    <p className="text-sm lg:text-lg font-bold text-gray-800 font-secondary">
                      {formatPrice(product.price)}
                    </p>
                    <button type="button" 
                        className="lg:w-[7rem] w-[5rem] lg:h-[2.5rem] h-[2rem] lg:px-4 py-2.5 flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 text-white lg:text-[0.9rem] text-[0.7rem] font-buttons rounded-lg transition duration-200"
                        onClick={() => handleProduct(product)}
                        >
                        Learn more
                    </button>
                  </div>
              </div>
              ))}
            </Carousel>
          </div>
          <section className='lg:w-[75rem] w-[22rem] flex flex-col justify-between mb-4'>
            <div>
              <h2 className='lg:text-3xl text-xl text-black place-items-center mb-4 font-main'>Our current selection</h2>
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
