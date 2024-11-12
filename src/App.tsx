import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from "./interfaces/interfaces";
import data from "./products.json"

function App() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [searchedProducts, setSearchedProducts] = useState<Product[]>(data.products);


  return (
    <>
     <main>
      <Header/>
      <section className='grid grid-cols-10 grid-rows-4 w-[100rem] h-[50rem] m-auto bg-yellow-700 place-items-center'>
        <div className='col-start-1 col-end-7 row-start-1 row-end-5 bg-red-200'>
          <img src="https://images.pexels.com/photos/33597/guitar-classical-guitar-acoustic-guitar-electric-guitar.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
           alt="person playing a guitar"
           className='opacity-80'
            />
        </div>
        <section className='col-start-8 col-end-10 row-start-1 row-end-3 p-2'>
          <h1 className='text-left'>No funds? <br /> No problem!</h1>
          <p className='text-left'>On Musically you can find your desired instrument for a fraction of its price.</p>
          <p className='text-left'>Browse amongst dozens of used instruments, or sell your own.</p>
        </section>
        <div className='col-start-8 col-end-10 row-start-3 row-end-4 p-2 flex flex-col align-start'>
            <h2 className='text-3xl text-left'>Maintain your passion here.</h2>
            <p className='text-xl text-left'>Who says hobbies have to be expensive?</p>
            <button className='w-[8rem] h-[3rem]'>Get started</button>
        </div>
      </section>
      <section className='grid grid-cols-10 grid-rows-4 bg-blue-300 w-[100rem] h-[50rem] m-auto bg-green-700 place-items-center'>
        <div className='col-start-1 col-end-11 row-start-1 row-end-3 w-[100rem] h-10rem] p-2'>
          <h2 className='text-left text-3xl p-2'>Our latest additions:</h2>
          <Carousel responsive={responsive}>
            <div className='text-left text-2xl'>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
               <h2>Guitar</h2>
               <p>200 kr</p>
               <button className=''>Learn more</button>
            </div>
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
            </div>
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
            </div>
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
            </div>
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
            </div>
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
            </div>
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
            </div>
            <div>
              <img src="https://s3-eu-west-1.amazonaws.com/webshop/data/thumbs/aa/aa1cce8d6788ac614c48000644c0323aeb95071f.jpg"
               alt="guitar image"
               className='w-[14rem] h-[17rem]' />
            </div>
        </Carousel>
        </div>
        <section className='col-start-2 col-end-10 w-[75rem] row-start-3 row-end-5 flex justify-between'>
          <div className='w-[15rem] h-[15rem] bg-black'>guitars</div>
          <div className='w-[15rem] h-[15rem] bg-black'>drums</div>
          <div className='w-[15rem] h-[15rem] bg-black'>flutes</div>
          <div className='w-[15rem] h-[15rem] bg-black'>accessories</div>
        </section>
      </section>
      <Footer/>
     </main>
    </>
  )
}

export default App
