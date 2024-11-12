import { useState } from "react"

export default function Cart() {

    const [isOpen, SetIsOpen] = useState(false);

    const handleOpen = () => {
        event?.preventDefault();
        SetIsOpen(!isOpen);
    }

    return (
        <div 
        className="bg-red-600 p-3 flex justify-center items-center">
            <span onClick={handleOpen}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-shopping-cart">
                    <circle cx="8" cy="21" r="1"/>
                    <circle cx="19" cy="21" r="1"/>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
                </svg>
            </span>
            <section
                            className={`gap-2 absolute top-[4rem] right-[4.5em] bg-white text-left rounded-md w-[30rem] min-h-[15rem] p-2 shadow-md transition-all duration-50 ease-in-out transform ${
                                isOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                            >
                                <div className='flex mb-1 m-auto justify-center items-center p-2 text-black text-opacity-75 w-[28rem] min-h-[5rem] bg-emerald-300'>
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
                                        <button className="h-[2.5rem] w-[5rem] bg-red-600">Remove</button>
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
                                <button className="relative left-[22rem]">Checkout</button>
                            </section>
        </div>
    )
}