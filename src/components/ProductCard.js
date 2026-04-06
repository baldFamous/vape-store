"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({ p, index, onClick }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = (e) => {
        e.stopPropagation();
        e.preventDefault();
        addToCart(p);
        
        // Visual feedback
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div 
             onClick={() => onClick(p)}
             className="group relative bg-[#1c1a1e]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden transition-all duration-700 hover:border-[#dfb7ff]/40 hover:shadow-[0_0_40px_rgba(223,183,255,0.15)] hover:-translate-y-3 cursor-pointer"
             style={{animationDelay: `${index * 100}ms`}}>
            {p.is_new && (
                <div className="absolute top-4 right-4 z-20">
                    <div className="absolute inset-0 bg-[#dfb7ff] blur-md opacity-50 rounded-full"></div>
                    <span className="relative bg-gradient-to-tr from-[#dfb7ff] to-[#cba0ed] text-[#131315] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">New</span>
                </div>
            )}
            <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                {/* Gradient overlay for text readability and cinematic effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-transparent to-transparent z-10 opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
                
                <img alt={p.name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" src={p.image_url}/>
                
                {/* Add to cart panel sliding up */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <button 
                        onClick={handleAddToCart}
                        className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-extrabold shadow-[0_10px_20px_rgba(223,183,255,0.2)] transition-transform active:scale-95 ${
                            added ? "bg-green-400 hover:bg-green-500 text-black" : "bg-[#dfb7ff] hover:bg-[#cba0ed] text-[#131315]"
                        }`}>
                        <span className="material-symbols-outlined text-[18px]">
                            {added ? "check" : "shopping_bag"}
                        </span>
                        {added ? "Añadido" : "Añadir al carrito"}
                    </button>
                </div>
            </div>
            
            <div className="p-6 relative z-20 bg-gradient-to-t from-[#131315] to-transparent">
                <div className="flex justify-between items-start mb-3">
                    <p className="text-[10px] font-black text-[#dfb7ff] uppercase tracking-[0.2em]">{p.category}</p>
                    <span className="text-xl font-black text-[#e4e2e4] group-hover:scale-110 transition-transform origin-right">${p.price}</span>
                </div>
                <h3 className="headline-font text-xl font-bold text-[#e4e2e4] group-hover:text-[#dfb7ff] transition-colors mb-2">{p.name}</h3>
                <p className="text-sm text-[#cec3d2] line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500">{p.description}</p>
            </div>
            
            {/* Hover background glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#dfb7ff]/0 via-[#dfb7ff]/5 to-[#dfb7ff]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>
        </div>
    );
}
