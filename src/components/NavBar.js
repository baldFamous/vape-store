"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
    return (
        <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-8 h-20 shadow-[0_24px_24px_-12px_rgba(223,183,255,0.06)]">
            <Link href="/" className="text-xl font-bold tracking-tight text-[#e4e2e4] headline-font">Muestra visual</Link>
            <div className="hidden md:flex items-center space-x-8">
                <Link href="/home" className="text-[#cec3d2] hover:text-[#dfb7ff] transition-colors font-medium">Home</Link>
                <Link href="/" className="text-[#cec3d2] hover:text-[#dfb7ff] transition-colors font-medium">Productos</Link>
                <Link href="/cart" className="text-[#cec3d2] hover:text-[#dfb7ff] transition-colors font-medium">Carrito</Link>
                <Link href="/admin" className="text-[#cec3d2] hover:text-[#dfb7ff] transition-colors font-medium text-xs border border-outline-variant px-2 py-1 rounded">Admin</Link>
            </div>
            <div className="flex items-center space-x-6 text-[#dfb7ff]">
                <Link href="/cart" className="hover:bg-[#1f1f21] transition-all duration-300 p-2 rounded-lg scale-95 active:scale-90">
                    <span className="material-symbols-outlined">shopping_cart</span>
                </Link>
                <button className="hover:bg-[#1f1f21] transition-all duration-300 p-2 rounded-lg scale-95 active:scale-90">
                    <span className="material-symbols-outlined">person</span>
                </button>
                <button className="md:hidden material-symbols-outlined">menu</button>
            </div>
        </nav>
    );
}
