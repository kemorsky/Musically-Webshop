import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Cart from "./Cart"

export default function Header() {
    const [query, SetQuery] = useState<string>('')

    const handleSearch = (searchTerm: string) => {
        SetQuery(searchTerm);
        console.log(searchTerm)
    }

    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    }

    return (
        <div className="grid grid-cols-10 grid-rows-2 justify-around place-items-center bg-green-800 w-[120rem] h-[10rem]">
            <h1>Logo</h1>
            <div className="relative flex col-start-4 col-end-6 row-start-2 p-2">
                <input 
                    className="w-[15rem] h-[2.5rem] rounded-md p-2"
                    role="searchbox"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => handleSearch(e.target.value)} />
                <button
                    className=""
                    type="submit"
                    id="button-addon4"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    onClick={handleSubmit}>
                        Search
                </button>
            </div>
            <section className="w-[12rem] flex justify-between place-items-center col-start-8 row-start-1 p-2">
                <a onClick={goToHome} href="">Home</a>
                <a href="">Contact</a>
                <a href="">Settings</a>
            </section>
            <div className="col-start-9 row-start-1">
                <h3>Profile</h3>
            </div>
            <div className="col-start-10 row-start-1">
                <Cart/>
            </div>
        </div>
    )
}