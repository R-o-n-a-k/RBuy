import { Search, ShoppingCart, User, Heart, SearchIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"

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
        name: "Favorites",
        path: "/favorites",
        icon: Heart,
    },
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
        <nav className="navbar w-full sticky top-0 z-50 bg-white">
            {/* Navbar Top */}
            <div className="w-full px-2 md:w-10/12 flex items-center justify-between mx-auto h-20 md:h-24">

                {/* Nav Logo */}
                <NavLink
                    to="/"
                    className="text-2xl md:text-3xl font-extrabold tracking-tight select-none"
                >
                    <span className="text-primary">R</span>
                    <span className="text-gray-700">Buy</span>
                </NavLink>

                {/* Nav Search */}
                <ButtonGroup className="px-4">
                    <Input id="input-button-group" className="w-full md:w-lg text-xs md:text-sm border-primary" placeholder="Type to search..." />
                    <Button className="text-white border-primary"><SearchIcon/></Button>
                </ButtonGroup>

                {/* Nav Icons */}
                <div className="flex items-center gap-2 md:gap-5">
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
                                <Icon className="h-4 w-4 sm:h-6 sm:w-6"/>
                            </NavLink>
                        );
                    })}
                </div>
            </div>

            {/* Navbar Bottom*/}
            <div className="flex justify-center gap-4 md:gap-10 py-2 border-gray-200 text-xs md:text-base font-medium">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/shop"}
                        className={({ isActive }) =>
                            isActive
                                ? "text-primary transition-colors"
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