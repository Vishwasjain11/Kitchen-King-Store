import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { FaGooglePay, FaApplePay, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa6";
import { BsPaypal } from "react-icons/bs";
import { TbCreditCardPay } from "react-icons/tb";
import { TiSocialTwitter } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <footer className="bg-gray-800 text-white py-10 mt-10">
      {/* Footer Links Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 px-6">
        
        {/* Company Info */}
        <div className="w-full md:w-1/4">
          <h1 className="text-3xl font-bold mb-4 text-white">KITCHEN KING</h1>
          <p className="text-gray-400 mb-4">
            115, Chetak Marg, opp. Palton Masjid, Udaipur (Rajasthan) - 313001
          </p>
          <div className="flex items-center text-gray-400 space-x-2">
            <FiPhoneCall className="text-xl" />
            <span>+91-7665559002</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-3">
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/")}>Home</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/product")}>Product</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/contact")}>Contact</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/track")}>Track Order</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/blogs")}>Blogs</span></li>
          </ul>
        </div>

        {/* Products */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4 text-white">Products</h2>
          <ul className="space-y-3">
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/cooker")}>Cooker</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/khadhi")}>Triply Cooker</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/serveware")}>Serveware</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Dinner Set</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Multi Kadai</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Electronic Items</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Flatware</span></li>
          </ul>
        </div>

        {/* Policies */}
        <div className="w-full md:w-1/4">
          <h2 className="text-xl font-semibold mb-4 text-white">Policies</h2>
          <ul className="space-y-3">
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Return and Refund Policy</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Privacy Policy</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Terms of Service</span></li>
            <li><span className="text-gray-400 hover:text-white transition duration-300 cursor-pointer" onClick={() => handleLinkClick("/home")}>Shipping Policy</span></li>
          </ul>
        </div>
      </div>

      {/* Payment Icons and Social Media */}
      <div className="mt-12 text-center">
        <h1 className="text-2xl font-semibold text-white mb-6">Guaranteed Safe Checkout</h1>
        
        {/* Payment Options */}
        <div className="flex justify-center space-x-8 text-4xl text-white mb-8">
          <FaGooglePay className="hover:text-blue-500 transition duration-300" />
          <FaAmazonPay className="hover:text-blue-500 transition duration-300" />
          <FaApplePay className="hover:text-blue-500 transition duration-300" />
          <BsPaypal className="hover:text-blue-500 transition duration-300" />
          <TbCreditCardPay className="hover:text-blue-500 transition duration-300" />
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-8 text-2xl text-gray-400 mt-8">
          <a href="https://google.com" className="hover:text-white transition duration-300">
            <FcGoogle />
          </a>
          <a href="https://facebook.com" className="hover:text-white transition duration-300">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="hover:text-white transition duration-300">
            <TiSocialTwitter />
          </a>
          <a href="https://instagram.com" className="hover:text-white transition duration-300">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <hr className="my-8 border-gray-600" />
      <div className="text-center text-gray-300">
        © 2024 All Rights Reserved by <strong>Kitchen King</strong>. Designed and Developed by <strong>Vishwas Jain</strong>.
      </div>
    </footer>
  );
}

export default Footer;
