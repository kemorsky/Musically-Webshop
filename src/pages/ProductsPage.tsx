// ProductList.tsx
import { useEffect, useState } from 'react';
import { generateMockProducts } from '../script/generateProducts';
import { Product } from '../interfaces/interfaces';
import Header from '../components/Header';

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const mockData = generateMockProducts(100);
    setProducts(mockData);
  }, []);

  const handleProduct = (product: Product) => {
    window.location.href = `product/${product.id}`
  }
 
  return (
    <main>
      <Header/>
      <div className="bg-gray-100 min-h-screen p-8 grid grid-cols-4">
          <section className='col-start-1 col-end-2 row-start-1 row-end-5'>
                <div>Categories</div>
          </section>
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Product Listings</h1>
          <div className="grid col-start-2 col-end-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white w-[20rem] rounded-lg shadow-md p-2 flex flex-col items-start hover:shadow-lg transition-shadow duration-200"
                onClick={() => handleProduct(product)} 
              >
                <div className="h-48 overflow-hidden bg-gray-200 rounded-md">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="object-cover w-[10rem] h-full"
                  />
                </div>
                <h2 className="text-xl font-semibold text-left text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-500"><strong>Category:</strong> {product.category}</p>
                <p className="text-sm text-gray-500"><strong>Brand:</strong> {product.brand}</p>
                <p className="text-sm text-gray-500"><strong>Condition:</strong> {product.condition}</p>
                <p className="text-lg font-bold text-gray-800">
                  {product.isOnSale && product.salePrice
                    ? (
                      <>
                        <span className="line-through text-gray-500 mr-2">${product.price.toFixed(2)}</span>
                        <span className="text-red-500">${product.salePrice.toFixed(2)}</span>
                      </>
                    )
                    : `$${product.price.toFixed(2)}`}
                </p>
                <p className="text-sm text-left text-gray-500">{product.description}</p>
                <p className="text-sm text-gray-500"><strong>Year Made:</strong> {product.yearMade}</p>
                <p className="text-sm text-gray-500"><strong>Stock:</strong> {product.stock}</p>
                <p className="text-sm text-gray-500"><strong>Location:</strong> {product.location}</p>
              </div>
            ))}
          </div>
        </div>
    </main>
    
  );
};
