"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductModal({ product, onClose }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    if (!product) return null;

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={onClose}>
            {/* Backdrop */}
            <div className="absolute inset-0 bg-[#000]/80 backdrop-blur-md transition-opacity"></div>
            
            {/* Modal Content */}
            <div 
                className="relative bg-surface-container w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row transform transition-all"
                onClick={(e) => e.stopPropagation()} // Prevent bubbling to the backdrop
            >
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-white/10 rounded-full flex items-center justify-center text-white transition-colors"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Left side: Image */}
                <div className="w-full md:w-1/2 bg-black/40 min-h-[300px] md:min-h-[500px] relative flex items-center justify-center">
                    {/* Glowing effect behind image */}
                    <div className="absolute inset-x-10 inset-y-10 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                    <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="w-full h-full object-cover absolute inset-0 mix-blend-lighten"
                    />
                </div>

                {/* Right side: Details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-b from-surface-container to-surface-container-high relative overflow-y-auto max-h-[80vh] md:max-h-full">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 bg-surface-container-highest text-[10px] uppercase tracking-widest font-bold text-primary rounded-full">
                                {product.category}
                            </span>
                            {product.brand && (
                                <span className="px-3 py-1 border border-outline-variant/30 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant rounded-full">
                                    {product.brand}
                                </span>
                            )}
                        </div>

                        <h2 className="font-headline text-3xl md:text-4xl font-extrabold text-on-surface mb-2">{product.name}</h2>
                        
                        <div className="text-3xl font-black text-primary mb-6">
                            ${product.price.toLocaleString('es-CL')}
                        </div>

                        <div className="prose prose-invert mb-8">
                            <p className="text-on-surface-variant leading-relaxed text-sm">
                                {product.description || "No hay una descripción disponible para este producto."}
                            </p>
                        </div>

                        {product.warning_msg && (
                            <div className="mb-8 p-4 bg-error/10 border border-error/20 rounded-xl flex gap-3">
                                <span className="material-symbols-outlined text-error shrink-0">warning</span>
                                <p className="text-xs text-error font-medium">{product.warning_msg}</p>
                            </div>
                        )}
                    </div>

                    <div className="pt-6 border-t border-white/10 mt-auto">
                        <button 
                            onClick={handleAddToCart}
                            className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 text-sm font-extrabold shadow-[0_10px_20px_rgba(223,183,255,0.1)] transition-transform active:scale-95 ${
                                added ? "bg-green-400 hover:bg-green-500 text-black shadow-green-500/20" : "bg-primary hover:bg-primary/90 text-on-primary"
                            }`}
                        >
                            <span className="material-symbols-outlined">
                                {added ? "check" : "shopping_bag"}
                            </span>
                            <span className="text-lg">
                                {added ? "¡Añadido al carrito!" : "Añadir al carrito"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
