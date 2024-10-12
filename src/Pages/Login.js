import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const navigate = useNavigate();

  // Handle login function
  function HandleLogin(e) {
    e.preventDefault(); // Prevent form submission refresh
    toast.success("Logged in successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored", // You can choose 'light' or 'dark'
    });
    setTimeout(() => {
      navigate("/cooker");
    }, 4100); // Redirect after 4.1 seconds to allow the toast to show
  }

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Login Page</h2>
        <form className="space-y-4" onSubmit={HandleLogin}>
          {/* Email Input */}
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              className="w-full border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        {/* Forgotten Password and Create Account Links */}
        <div className="flex justify-between mt-4 text-blue-500 text-sm">
          <a href="/forgot-password" className="hover:underline">
            Forgotten Password?
          </a>
          <a href="/register" className="hover:underline">
            Create New Account
          </a>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Login;
