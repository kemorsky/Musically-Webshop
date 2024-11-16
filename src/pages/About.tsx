import Header from "../components/Header"

export default function About() {
    return (
        <main className='max-w-[100rem] m-auto'>
            <Header/>
            <div className="grid grid-cols-10 grid-rows-4 w-[100rem] h-[100rem] m-auto place-items-center">
                <section className="col-start-7 col-end-11 row-start-1 text-left">
                    <h2 className="text-3xl">Musically is a place where you can buy and sell musical instruments for a fraction of their store value.</h2>
                    <p>We are an ambitious and passionate group of musicians and producers who come from different backgrounds. Growing up most of us struggled to find good value instuments and gear for a reasonable price.</p>
                    <p>We managed to pull through, but many of our friends and classmates we grew up with did not. Their passion dwindled and never returned. This inspired us to our best in preventing this from happening to as many people as possible.</p>
                    <p>In 2021 we decided to pull our shared skills together to create this website in hopes of turning it into a haven for those like us - struggling young people with a fire in their hearts.</p>
                </section>
                <section className="col-start-1 col-end-5 row-start-2 text-left">
                    <h2 className="text-3xl">How do we work, exactly?</h2>
                    <p>We accept any and all musical instruments and gear. First we must undergo an inspection, to determine whether the item is not damaged beyond use. Then, once the inspection is cleared, you're free to sell your goods!</p>
                    <p>Musically will charge 3% of your items desired value on both purchase and sale. This is not out of greed - every penny that goes through our system is used to further develop, maintain, as well as expand Musically.</p>
                    <p>We also accept donations and provide receipts to the public upon request. We have nothing to hide, but plenty to give.</p>
                </section>
                <section className="col-start-7 col-end-11 row-start-3 text-left">
                    <h2 className="text-3xl">Not satisfied with our selection</h2>
                    <p>Being entirely composed of items listed by our users, our stock is never consistent. Some days you may find it hard to choose between drum sets, others you'll struggle to find a single one.</p>
                    <p>With each year our reach grows longer and our stock becomes bigger. If you can't find what you're looking for, don't give up!</p>
                    <p>We restock our website every Monday, Wednesday and Friday at 17:00. Be sure to check what's new then!</p>
                </section>
                <section className="col-start-3 cold-end-9 row-start-4">
                    <h1>Our team:</h1>
                    <div></div>
                </section>
            </div>

        </main>
    )
}