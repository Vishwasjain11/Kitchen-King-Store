import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { bestselling } from "../assets/assets";
import { ShoppingContext } from "../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { addToCart, removeFromCart, cart } = useContext(ShoppingContext);
  const navigate = useNavigate();

  // Handle add to cart and toast
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

  // Handle remove from cart and toast
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

  // Navigation functions
  const goToCooker = () => {
    navigate("/cooker");
  };
  const goToTriply = () => {
    navigate("/khadhi");
  };
  const goToServeWare = () => {
    navigate("/serveware");
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[600px] lg:h-[900px]">
        <img
          className="w-full h-full object-cover"
          src={assets.hero}
          alt="Hero"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Welcome to Kitchen King
            </h1>
            <p className="text-lg sm:text-xl mt-4">
              Explore the finest kitchen products!
            </p>
          </div>
        </div>
      </div>

      {/* Featured Collection */}
      <div className="container mx-auto py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
          Featured Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-9">
          {/* Large Hero1 image that takes full width */}
          <div className="relative col-span-full">
            <img
              className="cursor-pointer w-full h-[250px] sm:h-[350px] lg:h-[450px] object-cover shadow-md hover:shadow-lg transition"
              alt="Cooker"
              src={assets.hero1}
            />
            {/* "Shop Now" overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={goToCooker}
                className="bg-blue-500 text-white py-2 px-8 rounded-lg text-lg sm:text-xl lg:text-2xl hover:bg-blue-600 transition"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Smaller Featured Images */}
          <div className="relative">
            <div className="flex justify-center">
              <img
                className="h-[150px] sm:h-[200px] rounded-lg shadow-md hover:shadow-lg transition"
                onClick={goToTriply}
                alt="Triply Cookware"
                src={assets.hero2}
              />
            </div>
            <div className="absolute text-lg sm:text-2xl lg:text-3xl left-6 sm:left-10 text-black font-bold top-5">
              Triply Cookware
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-center">
              <img
                className="h-[150px] sm:h-[200px] rounded-lg shadow-md hover:shadow-lg transition"
                onClick={goToServeWare}
                alt="Serveware"
                src={assets.hero3}
              />
            </div>
            <div className="absolute text-lg sm:text-2xl lg:text-3xl left-6 sm:left-10 text-black font-bold top-5">
              Serveware
            </div>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <div className="container mx-auto py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
          Bestsellers!
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Check out our latest and bestselling products!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bestselling.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                src={item.img}
                alt={item.desc}
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {item.desc}
                </h3>
                <p className="text-gray-700 mb-4">RS: {item.price}</p>

                {cart.some((cartItem) => cartItem.id === item.id) ? (
                  <button
                    className="bg-red-500 w-full text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove From Cart
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 w-full text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
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

      {/* "See More" Button */}
      <div className="flex items-center justify-center pb-4">
        <button className="bg-blue-500 text-white py-2 px-6 sm:px-8 rounded-lg text-lg sm:text-2xl hover:bg-blue-600 transition">
          See More
        </button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}
