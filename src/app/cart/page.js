"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, subtotal, iva, total, isLoaded } = useCart();

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full">
                <header className="mb-12">
                    <h1 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tight text-on-surface mb-2">Tu Carrito</h1>
                    <p className="text-on-surface-variant font-body">Revisa tus artículos antes de finalizar la compra.</p>
                </header>
                
                {!isLoaded ? (
                    <div className="flex justify-center py-20">
                        <div className="text-on-surface-variant animate-pulse">Cargando carrito...</div>
                    </div>
                ) : cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">production_quantity_limits</span>
                        <h2 className="text-2xl font-headline text-on-surface mb-2">Tu carrito está vacío</h2>
                        <p className="text-on-surface-variant mb-8">Parece que aún no has agregado nada al carrito.</p>
                        <Link href="/" className="px-6 py-3 bg-primary text-on-primary rounded-lg font-headline font-bold hover:bg-primary/90 transition-colors">
                            Volver a la tienda
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="glass-card rounded-xl p-6 flex flex-col md:flex-row gap-6 group hover:bg-surface-container-high transition-all border border-white/5 bg-[#1c1a1e]/40 backdrop-blur-xl">
                                    <div className="w-full md:w-32 h-32 bg-black/40 rounded-lg overflow-hidden flex-shrink-0 relative">
                                        <img alt={item.name} className="w-full h-full object-cover" src={item.image_url} />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-headline text-xl text-on-surface">{item.name}</h3>
                                                <p className="text-on-surface-variant font-body uppercase tracking-widest text-[10px] mt-1">{item.category}</p>
                                            </div>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-on-surface-variant hover:text-error transition-colors p-1"
                                                title="Eliminar producto">
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-end mt-4">
                                            <div className="flex items-center bg-surface-container-low rounded-lg p-1 border border-outline-variant/10">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary-container/20 rounded-md">
                                                    <span className="material-symbols-outlined text-sm">remove</span>
                                                </button>
                                                <span className="px-4 font-headline text-on-surface">{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary-container/20 rounded-md">
                                                    <span className="material-symbols-outlined text-sm">add</span>
                                                </button>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-on-surface font-headline text-lg">${item.price * item.quantity}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <div className="glass-card rounded-xl p-8 sticky top-32 border border-white/5 bg-[#1c1a1e]/40 backdrop-blur-xl">
                                <h2 className="font-headline text-2xl text-on-surface mb-8">Resumen de Compra</h2>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-on-surface-variant font-body"><span>Subtotal</span><span>${subtotal.toLocaleString('es-CL')}</span></div>
                                    <div className="flex justify-between text-on-surface-variant font-body"><span>Impuestos (19%)</span><span>${iva.toLocaleString('es-CL')}</span></div>
                                    <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
                                        <span className="font-headline text-xl text-on-surface">Total</span>
                                        <div className="text-right">
                                            <span className="font-headline text-3xl text-primary font-bold">${total.toLocaleString('es-CL')}</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full py-4 px-6 bg-[#dfb7ff] hover:bg-[#cba0ed] text-[#131315] font-headline font-bold rounded-lg flex items-center justify-center gap-3 transition-colors">
                                    Proceder al Pago
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
