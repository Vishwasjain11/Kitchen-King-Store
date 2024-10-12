import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TrackOrder() {
    const [number, setNumber] = useState('');
    const [order, setOrder] = useState('');
    const [track, setTrack] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Show success notification
        toast.success("Order tracked successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        // Reset input fields
        setNumber('');
        setOrder('');
        setTrack('');
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-16 ">
            <h1 className="text-3xl font-bold text-center mb-8">Track Your Order</h1>

            {/* Box container around the form */}
            <div className="bg-white border border-gray-300 shadow-lg rounded-lg p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Order Number and Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Order Number</label>
                            <input
                                type="number"
                                name="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                placeholder="Enter your order number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-lg font-semibold text-gray-700 mb-2">Email or Phone Number</label>
                            <input
                                type="text"
                                name="order"
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                                placeholder="Enter your email or phone number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 border border-black transition duration-300"
                        >
                            Track Order
                        </button>
                    </div>

                    {/* OR Divider */}
                    <div className="text-center text-lg font-semibold text-gray-600 my-8">OR</div>

                    {/* Tracking Number Section */}
                    <div className="w-full">
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Tracking Number</label>
                        <input
                            type="text"
                            name="track"
                            value={track}
                            onChange={(e) => setTrack(e.target.value)}
                            placeholder="Enter your tracking number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 border border-black transition duration-300"
                        >
                            Track
                        </button>
                    </div>
                </form>
            </div>

            {/* Toast Notification Container */}
            <ToastContainer />
        </div>
    );
}

export default TrackOrder;
