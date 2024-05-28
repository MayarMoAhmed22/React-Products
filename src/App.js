import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar/NavBar';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Products from './Components/Products/Products';
import ProductDetail from './Components/Products/ProductDetails';
import ContactUs from'./Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer';
const App = () => {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Registration" element={<Registration/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/Products/:ProductId" element={<ProductDetail/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />

        </Routes>
    
    </Router>
  );
}

export default App;
