import React, { useContext, useState } from "react";
import { ShoppingContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart, removeFromCart, price } = useContext(ShoppingContext);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
  });

  // Function to handle removing item from cart and showing toast
  const handleRemoveFromCart = (id, desc) => {
    removeFromCart(id);
    toast.error(`${desc} removed from cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // Function to handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();
    // Implement your payment logic here (e.g., API call)
    toast.success("Payment successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container mx-auto mt-10 p-4 md:p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
            >
              <img
                className="w-full h-[200px] object-cover mb-4"
                src={item.img}
                alt={item.desc}
              />
              <h3 className="text-lg font-semibold mb-2">{item.desc}</h3>
              <p className="text-gray-700 text-lg mb-4">RS: {item.price}</p>
              <button
                onClick={() => handleRemoveFromCart(item.id, item.desc)}
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col items-center">
        <div className="bg-gray-100 p-4 w-full max-w-xs sm:max-w-sm rounded-lg shadow-md mb-4">
          <span className="font-semibold text-xl text-gray-800">Total Amount:</span>
          <span className="font-bold text-blue-600 text-lg ml-2">RS {price}</span>
        </div>
      </div>

      {/* Payment Form Section */}
      <h2 className="text-2xl font-bold mb-4 text-center">Payment Details</h2>
      <form onSubmit={handlePayment} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Card Number:</label>
          <input
            type="text"
            value={paymentDetails.cardNumber}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cardNumber: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="Enter your card number"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Card Holder Name:</label>
            <input
              type="text"
              value={paymentDetails.cardHolder}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, cardHolder: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              placeholder="Enter card holder name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Expiry Date:</label>
            <input
              type="text"
              value={paymentDetails.expiry}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, expiry: e.target.value })}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
              placeholder="MM/YY"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">CVV:</label>
          <input
            type="text"
            value={paymentDetails.cvv}
            onChange={(e) => setPaymentDetails({ ...paymentDetails, cvv: e.target.value })}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
            placeholder="Enter CVV"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
        >
          Pay Now
        </button>
      </form>

      {/* Toast Container for showing notifications */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
