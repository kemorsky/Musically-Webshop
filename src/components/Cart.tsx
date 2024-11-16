import { useState } from "react"

export default function Cart() {

    const [isOpen, SetIsOpen] = useState(false);

    const handleOpen = () => {
        event?.preventDefault();
        SetIsOpen(!isOpen);
    }

    return (
        <div 
        className="bg-red-600 p-3 flex justify-center items-center w-[3rem] h-[3rem]">
            <span className="flex justify-around items-center" onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shopping-cart">
                    <circle cx="8" cy="21" r="1"/>
                    <circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
                <p>0</p>
            </span>
            <section
                            className={`gap-2 absolute top-[4rem] right-[4.5em] bg-gray-200 text-left rounded-md w-[30rem] min-h-[15rem] p-2 shadow-md transition-all duration-50 ease-in-out transform ${
                                isOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                            >
                                <h1 className="text-2xl font-bold text-black p-2">Your cart:</h1>
                                <div className='flex justify-around items-center p-2 mb-1 m-auto rounded-lg shadow-md text-black text-opacity-75 bg-white w-[28rem] min-h-[5rem] bg-emerald-300 '>
                                    <img className="w-[6rem] h-[6rem] bg-orange-400" src="" alt="" />
                                    <article className="w-[20rem]">
                                        <h2 className="text-xl block font-semibold ">Product name dsjnfdjinfjidbnf</h2>
                                        <p className="text-sm">Brand</p>
                                        <section className="flex items-center justify-between">
                                            <p className=" text-xl block font-semibold underline">300 kr</p>
                                            <div className="h-[2.5rem] w-[2.5rem] bg-white border border-gray-700 border-opacity-60 rounded-md shadow-md flex justify-center items-center">
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
                                            </div>
                                        </section>
                                    </article>
                                </div>
                                <div className='flex mb-1 m-auto  justify-center items-center p-2 text-black text-opacity-75 w-[28rem] min-h-[5rem] bg-emerald-300'>
                                    <img src="" alt="" />
                                    <article>
                                        <h2>Product name dsjnfdjinfjidbnf</h2>
                                        <p>300 kr</p>
                                        <button className="h-[2.5rem] w-[5rem] bg-red-600">Remove</button>
                                    </article>
                                </div>
                                <div className='flex mb-1 m-auto  justify-center items-center p-2 text-black text-opacity-75 w-[28rem] min-h-[5rem] bg-emerald-300'>
                                    <img src="" alt="" />
                                    <article>
                                        <h2>Product name dsjnfdjinfjidbnf</h2>
                                        <p>300 kr</p>
                                        <button className="h-[2.5rem] w-[5rem] bg-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                width="24" 
                                                height="24" 
                                                viewBox="0 0 24 24" 
                                                fill="none" 
                                                stroke="currentColor" 
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
                                    </article>
                                </div>
                                <button className="relative left-[22rem]">Checkout</button>
                            </section>
        </div>
    )
}