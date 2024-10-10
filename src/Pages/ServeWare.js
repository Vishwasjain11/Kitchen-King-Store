import React, { useContext } from 'react';
import { ServewareSell } from '../assets/assets';
import { ShoppingContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ServeWare() {
  const { addToCart, removeFromCart, cart } = useContext(ShoppingContext);

  // Handle add to cart and show toast notification
  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.desc} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  // Handle remove from cart and show toast notification
  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
    toast.error(`${item.desc} removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className="bg-gray-100 py-12">
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">ServeWare Collection</h1>

      {/* Grid Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ServewareSell.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-[450px]"
            >
              {/* Image */}
              <div className="h-[60%]">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt={item.desc}
                />
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col justify-between h-[40%]">
                <h3 className="text-xl font-semibold mb-2">{item.desc}</h3>
                <p className="text-gray-600 mb-4 text-lg">RS: {item.price}</p>

                {/* Add or Remove Button */}
                {cart.some((cartItem) => cartItem.id === item.id) ? (
                  <button
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center pt-10">
        <button
          className="bg-blue-500 text-white py-2 px-8 rounded-lg text-2xl hover:bg-blue-600 transition"
        >
          See More
        </button>
      </div>   

      {/* Toast Container for notifications */}
      <ToastContainer />
    </div>
  );
}

export default ServeWare;
