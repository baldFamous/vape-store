import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function CartPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full">
                <header className="mb-12">
                    <h1 className="font-headline font-extrabold text-5xl md:text-6xl tracking-tight text-on-surface mb-2">Tu Carrito</h1>
                    <p className="text-on-surface-variant font-body">Revisa tus artículos antes de finalizar la compra.</p>
                </header>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        {/* Cart Item 1 */}
                        <div className="glass-card rounded-xl p-6 flex flex-col md:flex-row gap-6 group hover:bg-surface-container-high transition-all">
                            <div className="w-full md:w-32 h-32 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
                                <img alt="Product" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArKO7YeCtgSH9eP_rOT17hu1hMJ19vB8BSKrQN9-Xvt62aclHFDwlrvvSZSk756XicEAwlCj7eNDJ1cjtypKYCEuInkWqvVaRiZ_TwUpAjZ_vE4tOxhrMkqb-5HkrGAe_rBmf1yj0YjZ1jC0U6UjrHfU47DSCX2vXLt-xiZLi9ko2oRZTZgDXA2eUtlGEgNlWwND5wB2vp2Ub14LzG8bNiaY-vT5ndiZq6zPFAvl9hlkijPei55amjLPu55oW0fOs9RFeE07eGBXXL"/>
                            </div>
                            <div className="flex-grow flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-headline text-xl text-on-surface">Strawberry Nocturne E-Liquid</h3>
                                        <p className="text-on-surface-variant font-body uppercase tracking-widest text-[10px] mt-1">60ML / 3MG NICOTINE</p>
                                    </div>
                                    <button className="text-on-surface-variant hover:text-error transition-colors p-1">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                                <div className="flex justify-between items-end mt-4">
                                    <div className="flex items-center bg-surface-container-low rounded-lg p-1 border border-outline-variant/10">
                                        <button className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary-container/20 rounded-md"><span className="material-symbols-outlined text-sm">remove</span></button>
                                        <span className="px-4 font-headline text-on-surface">1</span>
                                        <button className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary-container/20 rounded-md"><span className="material-symbols-outlined text-sm">add</span></button>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-on-surface font-headline text-lg">$19.99</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="glass-card rounded-xl p-8 sticky top-32">
                            <h2 className="font-headline text-2xl text-on-surface mb-8">Resumen de Compra</h2>
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-on-surface-variant font-body"><span>Subtotal</span><span>$51.97</span></div>
                                <div className="flex justify-between text-on-surface-variant font-body"><span>Impuestos</span><span>$8.32</span></div>
                                <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-end">
                                    <span className="font-headline text-xl text-on-surface">Total</span>
                                    <div className="text-right">
                                        <span className="font-headline text-3xl text-primary">$60.29</span>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full py-4 px-6 bg-primary-container text-primary font-headline font-bold rounded-lg flex items-center justify-center gap-3">
                                Proceder al Pago
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
