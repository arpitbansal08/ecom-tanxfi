import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const calculateTotalAmount = () => {
    const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.amount), 0);
    return Number(totalAmount); 
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="mb-4">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Product</th>
              <th className="py-2 px-4 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4 border">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover"
                  />
                </td>
                <td className="py-2 px-4 border">{item.title}</td>
                <td className="py-2 px-4 border">${item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="font-bold text-xl mb-2">
        Total Amount: ${calculateTotalAmount()}
      </div>
    </div>
  );
};

export default Cart;
