import { Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.svg"

const menuItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Shop",
        path: "/shop",
    },
    {
        name: "Men",
        path: "/shop/men",
    },
    {
        name: "Women",
        path: "/shop/women",
    },
    {
        name: "Jewellery",
        path: "/shop/jewellery",
    },
    {
        name: "Electronics",
        path: "/shop/electronics",
    },
];

const navIcons = [
    {
        name: "Cart",
        path: "/cart",
        icon: ShoppingCart,
    },
    {
        name: "Account",
        path: "/auth",
        icon: User,
    },
];

const Navbar = () => {
    return (
        <nav className="navbar w-full sticky top-0 z-50 bg-white ">
            {/* Navbar Top */}
            <div className="w-11/12 md:w-10/12 flex items-center justify-between mx-auto h-24">

                {/* Nav Logo */}
                <NavLink
                    to="/"
                    className="text-3xl font-extrabold tracking-tight select-none"
                >
                    {/* <img src={logo} alt="RBuy Logo" className="w-7 h-7 inline-block mr-2" /> */}
                    <span className="text-primary">R</span>
                    <span className="text-gray-700">Buy</span>
                </NavLink>

                {/* Nav Search */}
                <div className="flex items-center gap-2 border border-primary rounded overflow-hidden">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="outline-none border-none bg-transparent w-full md:w-lg px-4 py-1 text-sm"
                    />
                    <button className="px-4 py-2 text-white cursor-pointer bg-primary hover:bg-primary/80 transition-colors">
                        <Search size={16} />
                    </button>
                </div>

                {/* Nav Icons */}
                <div className="flex items-center gap-5">
                    {navIcons.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-primary transition-colors"
                                        : "text-gray-800 hover:text-primary transition-colors"
                                }
                            >
                                <Icon />
                            </NavLink>
                        );
                    })}
                </div>
            </div>

            {/* Navbar Bottom*/}
            <div className="flex justify-center gap-10 py-2 border-gray-200 font-medium">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/shop"}
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary  transition-colors"
                                : "text-gray-800 hover:text-primary transition-colors"
                        }>
                        {item.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}

export default Navbar