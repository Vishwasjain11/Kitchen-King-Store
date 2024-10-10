import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import ShoppingContextProvider from "./Context/Context";
import Cooker from "./Pages/Cooker";
import Khadhi from "./Pages/Khadhi";
import Footer from "./Component/Footer";
import ServeWare from "./Pages/ServeWare";
import TrackOrder from "./Pages/TrackOrder";
import Login from "./Pages/Login";


function App() {
  return (
    <div>
      <ShoppingContextProvider>
        <BrowserRouter>
          
          <Navbar />
          <Header />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/track" element={<TrackOrder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cooker" element={<Cooker />} />
            <Route path="/khadhi" element={<Khadhi />} />
            <Route path="/serveware" element={<ServeWare />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <Footer />

        </BrowserRouter>
      </ShoppingContextProvider>
    </div>
  );
}

export default App;
