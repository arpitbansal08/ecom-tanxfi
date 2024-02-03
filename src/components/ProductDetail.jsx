// ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto my-4 p-4 border border-gray-300 rounded">
      <img
        className="w-full h-60 object-cover mb-4"
        src={product.image}
        alt={product.description}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ${product.amount}
        </span>
        <div className="flex items-center">
          <span className="text-gray-600">Rating:</span>
          <span className="ml-2 text-yellow-500">{product.rating}/5</span>
        </div>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
