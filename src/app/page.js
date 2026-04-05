import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const products = [
    { id: 1, name: "Obsidian Pod Kit V2", category: "Hardware", price: 45.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOEPKZVcBFqmkC5rWrYqCDdAESuh7lFYgxz9j6TRNr7I9K2HaSGONrZldONY2lggMgHeoQqJDGp9Z4un4XE3kZUSNprWg3Vz5UuY_iM1prOygC0mZuzgm8xL1qja7tuqUTALIfr639eJZgmzKsu1qtiuDA2kSwB7X4IUam47-P6KMH1rzLUlKr-1JoyC7YzHp4QhNhbSkU7z_3XW6IfusZxGQBGz2hDJ0Mz7kcvG3H4WBib00odo4KkOlOtybqT7iTC3kB5bFdsz0C", new: true, desc: "Sistema de pod ultra compacto con acabado de aleación de zinc y carga rápida USB-C." },
    { id: 2, name: "Midnight Grape Ice", category: "E-Liquid", price: 18.50, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE4wt1dpHIPaJnh0B5og7TTlV6VAaEZAh35VuMZLTxLAr0tSkJD0idh5iOT2oEux5QUYOxEu4NTKcrLl9a-U2SNIiCEaibHDfwCMcp8w5dAVur1fSEWhhBBq1ppBVIi5nmhEfUBPK-t89U6ckhY_CNFhm7HF2626jusIjmbOyCyFN9yCH9zz34-Mru9V0A0QIXwku1jvxyASlvQNFezo6l0Yo-glMwg-vlMPKsiUF0xhsbvmbdJ5pvP0bX3WDULHGOjSvyXYR6ZiWV", new: false, desc: "Una mezcla gélida de uvas oscuras cosechadas bajo la luz de la luna." },
    { id: 3, name: "Quantum Mesh Coils", category: "Accesorios", price: 12.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy83KmTwHlfpJ0zCM_vgGD3kMLt-QJvDbRXKFfUaopJjtlAGnwirdPTjDY0_lPIucgn5WADIRiIYoBfTz8eVXk1YuhaEWPuosfUiNUL0voh66pwRDgM6p7AgFyYcbH31vOi4P6YinIzAP4DFHc4G1fGd9XMjaH3Lf_R4jVINHirWTfPJgNZtOrTxmPHDPtfAnrqPLP-xu5p-q8VO3lST1nsYthRXOfoHgC03saee-dhW0735wPp1MY-j522PCdDtMho3N-AY9vSWWj", new: false, desc: "Paquete de 5 resistencias de malla para un sabor puro y nubes densas." },
    { id: 4, name: "Neon Stick Pro", category: "Hardware", price: 59.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7doxCVPfiyrwzjtgtMbO8R2rJdP8ARb6f3cHg_9n9xDYvHTUh66Ai-rlcHn86NcWi3lo3dvhywHd1UaeZQLC77Wj3NdKFSSYKSJvlC_Dl61AkN-bP3dtU3Gjmhwv1dPxUUijhylXSZeMG9_SqkL2BsDjNeVc1kH2lq-bUO6Mmovf5RxjdvLwMyO5pgn6O7Oh2Vk2vlmC0e0woJ9FbeZq_hXnfzl0OVEA0e8yU19kY8t88NWSFx7_7noSGK6d0kXY5gfyFK092OjkI", new: false, desc: "Batería de larga duración con control táctil." },
    { id: 5, name: "Velvet Vanilla", category: "E-Liquid", price: 22.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxIACm_qJM7qdVv1C-KamE7aq_G4E1sG7Ob55vNQ8au2XL9JdkZ8D6BGYEuG5V2v1axZ_AgjqHP6NqMmrl4lZkP6TIbU8MRlzQcGQCvvAa8FNIpprHFRFq5rrlcFhmveky-yG9P6Zz5iRh5ZdlShUjSSL_lwKUFPcnAay8YjJiJGOxzLP68a3vJ3ZrxhfXrtj3OnrjwL3DZTK8RiOkIr7dUCI0h3WgSlq_JHxGIeteBLsU56Pt5N_buFmPeNdJxYkgpmCl1rj8vZ6W", new: false, desc: "Vainilla de Tahití con un toque cremoso de caramelo." },
    { id: 6, name: "Titan Tank Ultra", category: "Pods", price: 34.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-MabNOv8536m7t-cVYhLf-gqsJ3bfce0Ybc7GULhoZS_gXK2m_OmDg-OQromcXfA1RkVWiVRAzopl4V7ajfvaEapIsV5MNqgFTiQU7ZYqqyvyTb3VNOZcvLCR_w4VGLiU7vtlOaYHm8rYduQSDi5gy7kfSTvES8sG1MAi4gaAJS57HttEKxi-55M1QlQcWpSvIhbpuEdVyXzJv-n8f5NGWszpf5yxnCkURPNjcCw9NomWT_IhOvzkp3w9DNoNeg9SZ_492vx02zHj", new: false, desc: "Capacidad máxima con sistema de llenado superior antifugas." },
    { id: 7, name: "Celestial Battery", category: "Hardware", price: 29.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy83KmTwHlfpJ0zCM_vgGD3kMLt-QJvDbRXKFfUaopJjtlAGnwirdPTjDY0_lPIucgn5WADIRiIYoBfTz8eVXk1YuhaEWPuosfUiNUL0voh66pwRDgM6p7AgFyYcbH31vOi4P6YinIzAP4DFHc4G1fGd9XMjaH3Lf_R4jVINHirWTfPJgNZtOrTxmPHDPtfAnrqPLP-xu5p-q8VO3lST1nsYthRXOfoHgC03saee-dhW0735wPp1MY-j522PCdDtMho3N-AY9vSWWj", new: true, desc: "Batería de larga duración con diseño ergonómico y acabados de lujo." },
    { id: 8, name: "Sunset Mango", category: "E-Liquid", price: 19.50, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE4wt1dpHIPaJnh0B5og7TTlV6VAaEZAh35VuMZLTxLAr0tSkJD0idh5iOT2oEux5QUYOxEu4NTKcrLl9a-U2SNIiCEaibHDfwCMcp8w5dAVur1fSEWhhBBq1ppBVIi5nmhEfUBPK-t89U6ckhY_CNFhm7HF2626jusIjmbOyCyFN9yCH9zz34-Mru9V0A0QIXwku1jvxyASlvQNFezo6l0Yo-glMwg-vlMPKsiUF0xhsbvmbdJ5pvP0bX3WDULHGOjSvyXYR6ZiWV", new: false, desc: "Dulce sabor a mango madurado bajo el sol tropical en una mezcla sedosa." },
    { id: 9, name: "Aero Glass Tank", category: "Accesorios", price: 25.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-MabNOv8536m7t-cVYhLf-gqsJ3bfce0Ybc7GULhoZS_gXK2m_OmDg-OQromcXfA1RkVWiVRAzopl4V7ajfvaEapIsV5MNqgFTiQU7ZYqqyvyTb3VNOZcvLCR_w4VGLiU7vtlOaYHm8rYduQSDi5gy7kfSTvES8sG1MAi4gaAJS57HttEKxi-55M1QlQcWpSvIhbpuEdVyXzJv-n8f5NGWszpf5yxnCkURPNjcCw9NomWT_IhOvzkp3w9DNoNeg9SZ_492vx02zHj", new: false, desc: "Tanque de cristal de pyrex con flujo de aire regulable de máxima pureza." },
    { id: 10, name: "Luminous Coils", category: "Accesorios", price: 15.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAy83KmTwHlfpJ0zCM_vgGD3kMLt-QJvDbRXKFfUaopJjtlAGnwirdPTjDY0_lPIucgn5WADIRiIYoBfTz8eVXk1YuhaEWPuosfUiNUL0voh66pwRDgM6p7AgFyYcbH31vOi4P6YinIzAP4DFHc4G1fGd9XMjaH3Lf_R4jVINHirWTfPJgNZtOrTxmPHDPtfAnrqPLP-xu5p-q8VO3lST1nsYthRXOfoHgC03saee-dhW0735wPp1MY-j522PCdDtMho3N-AY9vSWWj", new: false, desc: "Conjunto de 5 coils premium para un sabor intenso y duradero." },
    { id: 11, name: "Berry Nova", category: "E-Liquid", price: 21.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxIACm_qJM7qdVv1C-KamE7aq_G4E1sG7Ob55vNQ8au2XL9JdkZ8D6BGYEuG5V2v1axZ_AgjqHP6NqMmrl4lZkP6TIbU8MRlzQcGQCvvAa8FNIpprHFRFq5rrlcFhmveky-yG9P6Zz5iRh5ZdlShUjSSL_lwKUFPcnAay8YjJiJGOxzLP68a3vJ3ZrxhfXrtj3OnrjwL3DZTK8RiOkIr7dUCI0h3WgSlq_JHxGIeteBLsU56Pt5N_buFmPeNdJxYkgpmCl1rj8vZ6W", new: true, desc: "Explosión exótica de bayas silvestres dulces y ácidas con final helado." },
    { id: 12, name: "Stellar Mod", category: "Hardware", price: 85.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7doxCVPfiyrwzjtgtMbO8R2rJdP8ARb6f3cHg_9n9xDYvHTUh66Ai-rlcHn86NcWi3lo3dvhywHd1UaeZQLC77Wj3NdKFSSYKSJvlC_Dl61AkN-bP3dtU3Gjmhwv1dPxUUijhylXSZeMG9_SqkL2BsDjNeVc1kH2lq-bUO6Mmovf5RxjdvLwMyO5pgn6O7Oh2Vk2vlmC0e0woJ9FbeZq_hXnfzl0OVEA0e8yU19kY8t88NWSFx7_7noSGK6d0kXY5gfyFK092OjkI", new: false, desc: "Mod potente y de alta gama con pantalla OLED e interfaz digital táctil." }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 space-y-10">
                    <div>
                        <h3 className="headline-font text-lg font-bold mb-6 text-on-surface">Categorías</h3>
                        <div className="flex flex-col gap-3">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 rounded border border-outline-variant bg-surface-container-low group-hover:border-primary transition-colors flex items-center justify-center"></div>
                                <span className="text-on-surface-variant group-hover:text-primary transition-colors">Pods</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="w-5 h-5 rounded border border-primary bg-primary-container flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[14px] text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                                </div>
                                <span className="text-primary font-medium">E-Liquids</span>
                            </label>
                        </div>
                    </div>
                </aside>
                
                {/* Product Grid */}
                <section className="flex-1">
                    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="headline-font text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#dfb7ff] to-[#a37bb7]">Muestra visual</h1>
                            <p className="text-on-surface-variant text-sm">Explora nuestra selección curada de hardware premium y mezclas artesanales.</p>
                        </div>
                    </header>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((p, i) => (
                            <div key={p.id} 
                                 className="group relative bg-[#1c1a1e]/40 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden transition-all duration-700 hover:border-[#dfb7ff]/40 hover:shadow-[0_0_40px_rgba(223,183,255,0.15)] hover:-translate-y-3 cursor-pointer"
                                 style={{animationDelay: `${i * 100}ms`}}>
                                {p.new && (
                                    <div className="absolute top-4 right-4 z-20">
                                        <div className="absolute inset-0 bg-[#dfb7ff] blur-md opacity-50 rounded-full"></div>
                                        <span className="relative bg-gradient-to-tr from-[#dfb7ff] to-[#cba0ed] text-[#131315] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">New</span>
                                    </div>
                                )}
                                <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                                    {/* Gradient overlay for text readability and cinematic effect */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#131315] via-transparent to-transparent z-10 opacity-90 group-hover:opacity-60 transition-opacity duration-700"></div>
                                    
                                    <img alt={p.name} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" src={p.image}/>
                                    
                                    {/* Quick action button revealed on hover */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                                        <button className="w-14 h-14 bg-black/50 backdrop-blur-md text-white rounded-full flex items-center justify-center border border-white/20 hover:bg-[#dfb7ff] hover:text-black hover:border-transparent transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                            <span className="material-symbols-outlined text-2xl">visibility</span>
                                        </button>
                                    </div>
                                    
                                    {/* Add to cart panel sliding up */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                                        <button className="w-full bg-[#dfb7ff] hover:bg-[#cba0ed] text-[#131315] py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-extrabold shadow-[0_10px_20px_rgba(223,183,255,0.2)] transition-transform active:scale-95">
                                            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                                            Añadir al carrito
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="p-6 relative z-20 bg-gradient-to-t from-[#131315] to-transparent">
                                    <div className="flex justify-between items-start mb-3">
                                        <p className="text-[10px] font-black text-[#dfb7ff] uppercase tracking-[0.2em]">{p.category}</p>
                                        <span className="text-xl font-black text-[#e4e2e4] group-hover:scale-110 transition-transform origin-right">${p.price}</span>
                                    </div>
                                    <h3 className="headline-font text-xl font-bold text-[#e4e2e4] group-hover:text-[#dfb7ff] transition-colors mb-2">{p.name}</h3>
                                    <p className="text-sm text-[#cec3d2] line-clamp-2 opacity-70 group-hover:opacity-100 transition-opacity duration-500">{p.desc}</p>
                                </div>
                                
                                {/* Hover background glow */}
                                <div className="absolute -inset-2 bg-gradient-to-r from-[#dfb7ff]/0 via-[#dfb7ff]/5 to-[#dfb7ff]/0 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
