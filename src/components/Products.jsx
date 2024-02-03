import React from "react";
import { Link } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="max-w-7xl mx-auto my-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link key={index} to={`/product/${product.id}`}>
            <div className="mb-4 border border-gray-300 rounded overflow-hidden">
              <img
                className="w-full h-50 object-cover"
                src={product.image}
                alt={product.description}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.title}</div>
              </div>
              <div className="px-6 py-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                  ${product.amount}
                </span>
                <div className="flex items-center">
                  <span className="text-gray-600">Rating:</span>
                  <span className="ml-2 text-yellow-500">
                    {product.rating}/5
                  </span>
                </div>
              </div>
              <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
