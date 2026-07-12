import React from 'react'
import { Routes, Route } from "react-router-dom";

import Shop from "../pages/Shop";
import Category from "../pages/Category";
import ProductDetails from "../pages/ProductDetails";
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import Auth from '../pages/Auth';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/shop/:category" element={<Category />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AppRoutes