import { IoSearch, IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { ShoppingContext } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import Login from "../Pages/Login"; // Import the Login component

function Navbar() {
  const { cartCount, price } = useContext(ShoppingContext); // Access cartCount and price from context
  const [showLogin, setShowLogin] = useState(false); // State for showing login modal
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  const mainPage = () => {
    navigate("/");
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin); // Toggle login modal visibility
  };

  return (
    <div className="w-full bg-slate-50 shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">

        {/* Brand Name */}
        <div className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide cursor-pointer">
          <h1 onClick={mainPage}>KITCHEN KING</h1>
        </div>

        {/* Search Input (hidden on small screens) */}
        <div className="hidden md:flex items-center border rounded-full px-4 py-2 bg-white shadow-sm focus-within:ring-2 ring-blue-400">
          <input
            className="bg-transparent outline-none text-gray-700 placeholder-gray-500 w-40 lg:w-64"
            placeholder="Search for products..."
            type="text"
          />
          <IoSearch className="text-gray-500 text-xl ml-2 cursor-pointer" />
        </div>

        {/* Icons and Cart */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* User Icon */}
          <IoPersonOutline
            onClick={toggleLogin} // Show the login modal when clicked
            className="text-xl md:text-2xl text-gray-700 cursor-pointer hover:text-gray-900 transition-all"
          />

          {/* Cart Icon */}
          <div className="relative">
            <IoCartOutline
              onClick={handleCartClick}
              className="text-xl md:text-2xl text-gray-700 cursor-pointer hover:text-gray-900 transition-all"
            />
            {/* Cart Count */}
            <span className="absolute -top-2 -right-2 text-xs w-4 h-4 md:w-5 md:h-5 bg-red-600 text-white rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </div>

          {/* Total Price */}
          <div className="hidden lg:block text-sm md:text-lg font-medium text-gray-700 hover:text-gray-900 cursor-pointer transition-all">
            Total: Rs {price} {/* Display the updated total price */}
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative bg-white p-8 rounded-lg shadow-lg w-[90%] md:w-[400px]">
            {/* Styled Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl font-bold transition-all duration-300 ease-in-out transform hover:scale-110"
              onClick={toggleLogin}
            >
              &times;
            </button>

            {/* Render the Login component */}
            <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
