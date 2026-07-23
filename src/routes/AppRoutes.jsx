import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "@/components/Loader";

const Home = lazy(() => import("../pages/Home"));
const Shop = lazy(() => import("../pages/Shop"));
const Category = lazy(() => import("../pages/Category"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Cart = lazy(() => import("../pages/Cart"));
const Auth = lazy(() => import("../pages/Auth"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Wishlist = lazy(() => import("../pages/wishlist"));
const Orders = lazy(() => import("../pages/Orders"));

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/shop/:category" element={<Category />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes