import React, { useState } from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail, MdMailOutline } from "react-icons/md";
import { GiBackwardTime } from "react-icons/gi";
import { TfiLocationPin } from "react-icons/tfi";
import { RiContactsLine } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
import { FaBook } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success notification
        toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // Reset form fields
        setName('');
        setEmail('');
        setNumber('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-20">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Contact Us</h1>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-20">
                {/* Phone Call */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg flex items-center space-x-4 sm:space-x-6">
                    <FiPhoneCall className="text-4xl sm:text-5xl text-blue-600" />
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">Phone Number</h1>
                        <p className="text-base sm:text-lg text-gray-700">+91-7665 559002</p>
                    </div>
                </div>

                {/* Email */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg flex items-center space-x-4 sm:space-x-6">
                    <MdOutlineEmail className="text-4xl sm:text-5xl text-blue-600" />
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">Email Address</h1>
                        <p className="text-base sm:text-lg text-gray-700">kitchenKing11@gmail.com</p>
                    </div>
                </div>

                {/* Opening Time */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg flex items-center space-x-4 sm:space-x-6">
                    <GiBackwardTime className="text-4xl sm:text-5xl text-blue-600" />
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">Opening Time</h1>
                        <p className="text-base sm:text-lg text-gray-700">Mon-Sat: 10AM - 9PM</p>
                        <span className="text-base sm:text-lg text-gray-700">Sunday: Closed</span>
                    </div>
                </div>

                {/* Store Locations */}
                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg flex items-center space-x-4 sm:space-x-6">
                    <TfiLocationPin className="text-4xl sm:text-5xl text-blue-600" />
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">Kitchen King Store</h1>
                        <p className="text-base sm:text-lg text-gray-700">115, Chetak Marg, Udaipur, Rajasthan</p>
                    </div>
                </div>

                <div className="bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg flex items-center space-x-4 sm:space-x-6">
                    <TfiLocationPin className="text-4xl sm:text-5xl text-blue-600" />
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">Kitchen House Store</h1>
                        <p className="text-base sm:text-lg text-gray-700">250, Chetak Marg, Udaipur, Rajasthan</p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white shadow-xl rounded-lg p-6 sm:p-10 max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-4xl font-bold mb-8 sm:mb-10 text-gray-800 text-center">Send Us a Message</h1>
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                        <div className="flex-grow">
                            <div className="relative">
                                <RiContactsLine className="absolute top-3 left-3 text-gray-500 text-xl sm:text-2xl" />
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="pl-10 sm:pl-12 py-2 sm:py-3 w-full border border-gray-300 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="relative">
                                <MdMailOutline className="absolute top-3 left-3 text-gray-500 text-xl sm:text-2xl" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="pl-10 sm:pl-12 py-2 sm:py-3 w-full border border-gray-300 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                        <div className="flex-grow">
                            <div className="relative">
                                <IoMdCall className="absolute top-3 left-3 text-gray-500 text-xl sm:text-2xl" />
                                <input
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="pl-10 sm:pl-12 py-2 sm:py-3 w-full border border-gray-300 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="flex-grow">
                            <div className="relative">
                                <FaBook className="absolute top-3 left-3 text-gray-500 text-xl sm:text-2xl" />
                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="pl-10 sm:pl-12 py-2 sm:py-3 w-full border border-gray-300 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="block text-base sm:text-lg font-semibold text-gray-800">Message</label>
                        <textarea
                            rows="5"
                            placeholder="Enter your message"
                            className="py-2 sm:py-3 w-full border border-gray-300 rounded-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full sm:w-[200px] bg-blue-600 text-white py-3 rounded-lg font-semibold text-base sm:text-xl hover:bg-white hover:text-blue-600 border border-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Toast Notification Container */}
            <ToastContainer />
        </div>
    );
}

export default Contact;
