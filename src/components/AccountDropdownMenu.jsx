import React from 'react'

import {
    Heart,
    LogOutIcon,
    Package,
    UserIcon,
    CircleUserRound
} from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom'

const AccountDropdownMenu = ({ isLoggedIn }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <button
                        type="button"
                        aria-label="Account menu"
                        className="text-gray-800 transition-colors hover:text-primary cursor-pointer data-popup-open:text-primary/50"
                    />
                }
            >
                <UserIcon className="h-4 w-4 sm:h-6 sm:w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {isLoggedIn ? (
                    <>
                        <DropdownMenuItem render={<Link to="/orders" />}>
                            <Package />
                            My Orders
                        </DropdownMenuItem>
                        <DropdownMenuItem render={<Link to="/wishlist" />}>
                            <Heart />
                            Wishlist
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                            <LogOutIcon />
                            Log out
                        </DropdownMenuItem>
                    </>
                ) :
                    <DropdownMenuItem render={<Link to="/auth" />}>
                        <CircleUserRound />
                        Account
                    </DropdownMenuItem>}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default AccountDropdownMenu