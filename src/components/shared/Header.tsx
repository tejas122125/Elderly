import React from 'react'
import { SignOutButton, SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { UserButton } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';
import { UserProfile } from '@clerk/clerk-react';



const Header = () => {
    const { isSignedIn } = useAuth();
    return (
        <header className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-white text-xl font-semibold">Logo</h1>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <a href="./home" className="text-white hover:text-gray-300">Home</a>
                    <a href="./about" className="text-white hover:text-gray-300">About</a>
                    <a href="./services" className="text-white hover:text-gray-300">Services</a>
                    <a href="./contact" className="text-white hover:text-gray-300">Contact</a>
                    {!isSignedIn && (
                        <>
                            <a href="./signin" className="text-white hover:text-gray-300">SignIn</a>
                            <a href="./signup" className="text-white hover:text-gray-300">SignUp</a>
                        </>

                    )}
                    {
                        isSignedIn && (
                            <>
                            <UserButton/>
                            </>
                        )
                    }
                </nav>
                <div className='flex md:hidden'><DropdownMenu>
                    <DropdownMenuTrigger className='text-white'>Open</DropdownMenuTrigger>
                    <DropdownMenuContent className='mt-4'>
                        <DropdownMenuLabel>ELDERLY</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile<UserButton /></DropdownMenuItem>
                        <DropdownMenuItem>Home</DropdownMenuItem>
                        <DropdownMenuItem>About</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>
                        <DropdownMenuItem>Contact</DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu></div>
            </div>
        </header>
    )
}

export default Header