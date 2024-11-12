import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

export default function ProductPage() {

    const { productId } = useParams<{ productId: string }>(); // Get product ID from URL
    const { products } = useProducts(); // Access products from context

    const product = products.find((product) => product.id === productId); // Find specific product by ID

    console.log("Product ID:", productId);
    console.log("Products:", products);

        // Handle case where product is not found
    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <main>
          <Header />
          <section className="grid grid-cols-10 grid-rows-8">
            <section className="col-start-1 col-end-5 row-start-1 row-end-5">
              <img src={product.images[0]} alt={product.name} />
            </section>
            <div className="col-start-6 col-end-11 row-start-1 row-end-5">
              <article className="flex flex-col min-h-[25rem] bg-orange-100 p-2">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p>${product.price.toFixed(2)}</p>
              </article>
              <div>
                <table className="table-auto w-full bg-blue-300">
                  <thead>
                    <tr>
                      <th className="px-4 py-2">Specifications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Manufacturer</td>
                      <td className="px-4 py-2">{product.brand || "N/A"}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Condition</td>
                      <td className="px-4 py-2">{product.condition}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Year Made</td>
                      <td className="px-4 py-2">{product.yearMade}</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Location</td>
                      <td className="px-4 py-2">{product.location}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
          <Footer />
        </main>
      );
}