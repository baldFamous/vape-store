"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabase/client";

export default function NavBar() {
    const { totalItems, isLoaded } = useCart();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setUser(session?.user || null);
        };
        fetchUser();

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });

        return () => subscription.unsubscribe();
    }, []);
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
                <Link href="/cart" className="relative hover:bg-[#1f1f21] transition-all duration-300 p-2 rounded-lg scale-95 active:scale-90">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    {isLoaded && totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg border-2 border-[#131315]">
                            {totalItems}
                        </span>
                    )}
                </Link>
                <Link href={user ? "/profile" : "/login"} className="hover:bg-[#1f1f21] transition-all duration-300 p-2 rounded-lg scale-95 active:scale-90 flex items-center justify-center">
                    <span className="material-symbols-outlined">
                        {user ? "manage_accounts" : "person"}
                    </span>
                </Link>
                <button className="md:hidden material-symbols-outlined flex items-center justify-center">menu</button>
            </div>
        </nav>
    );
}
