import Link from "next/link";
import Footer from "@/components/Footer";

const recommendedProducts = [
    { id: 1, name: "Obsidian Pod Kit V2", category: "Hardware", price: 45.99, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOEPKZVcBFqmkC5rWrYqCDdAESuh7lFYgxz9j6TRNr7I9K2HaSGONrZldONY2lggMgHeoQqJDGp9Z4un4XE3kZUSNprWg3Vz5UuY_iM1prOygC0mZuzgm8xL1qja7tuqUTALIfr639eJZgmzKsu1qtiuDA2kSwB7X4IUam47-P6KMH1rzLUlKr-1JoyC7YzHp4QhNhbSkU7z_3XW6IfusZxGQBGz2hDJ0Mz7kcvG3H4WBib00odo4KkOlOtybqT7iTC3kB5bFdsz0C", new: true, desc: "Sistema de pod ultra compacto con acabado de aleación de zinc y carga rápida USB-C." },
    { id: 2, name: "Midnight Grape Ice", category: "E-Liquid", price: 18.50, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE4wt1dpHIPaJnh0B5og7TTlV6VAaEZAh35VuMZLTxLAr0tSkJD0idh5iOT2oEux5QUYOxEu4NTKcrLl9a-U2SNIiCEaibHDfwCMcp8w5dAVur1fSEWhhBBq1ppBVIi5nmhEfUBPK-t89U6ckhY_CNFhm7HF2626jusIjmbOyCyFN9yCH9zz34-Mru9V0A0QIXwku1jvxyASlvQNFezo6l0Yo-glMwg-vlMPKsiUF0xhsbvmbdJ5pvP0bX3WDULHGOjSvyXYR6ZiWV", new: false, desc: "Una mezcla gélida de uvas oscuras cosechadas bajo la luz de la luna." },
    { id: 5, name: "Velvet Vanilla", category: "E-Liquid", price: 22.00, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxIACm_qJM7qdVv1C-KamE7aq_G4E1sG7Ob55vNQ8au2XL9JdkZ8D6BGYEuG5V2v1axZ_AgjqHP6NqMmrl4lZkP6TIbU8MRlzQcGQCvvAa8FNIpprHFRFq5rrlcFhmveky-yG9P6Zz5iRh5ZdlShUjSSL_lwKUFPcnAay8YjJiJGOxzLP68a3vJ3ZrxhfXrtj3OnrjwL3DZTK8RiOkIr7dUCI0h3WgSlq_JHxGIeteBLsU56Pt5N_buFmPeNdJxYkgpmCl1rj8vZ6W", new: false, desc: "Vainilla de Tahití con un toque cremoso de caramelo." },
];

export default function EditorialHome() {
    return (
        <div className="min-h-screen flex flex-col font-montserrat bg-background text-on-background">
            <nav className="fixed top-0 w-full z-50 glass-nav flex justify-between items-center px-8 h-20 shadow-[0_24px_24px_-12px_rgba(223,183,255,0.06)]">
                <Link href="/" className="text-xl font-bold tracking-tight text-[#e4e2e4] headline-font">Muestra visual</Link>
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/home" className="text-[#dfb7ff] transition-colors font-medium">Inicio</Link>
                    <Link href="/" className="text-[#cec3d2] hover:text-[#dfb7ff] transition-colors font-medium">Productos</Link>
                    <Link href="/cart" className="text-[#cec3d2] hover:text-[#dfb7ff] transition-colors font-medium">Carrito</Link>
                    <Link href="/admin" className="text-[#cec3d2] hover:text-[#dfb7ff] transition-colors font-medium text-xs border border-outline-variant px-2 py-1 rounded">Admin</Link>
                </div>
                <div className="flex items-center space-x-6 text-[#dfb7ff]">
                    <Link href="/cart" className="hover:bg-[#1f1f21] transition-all duration-300 p-2 rounded-lg scale-95 active:scale-90">
                        <span className="material-symbols-outlined">shopping_cart</span>
                    </Link>
                </div>
            </nav>

            <main className="flex-grow pt-20">
                {/* Hero Section */}
                <section className="relative min-h-[921px] flex items-center overflow-hidden px-8 md:px-20">
                    <div className="absolute inset-0 z-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#121113] via-[#121113]/60 to-transparent z-10"></div>
                        <img alt="Hero background" className="w-full h-full object-cover opacity-50 filter grayscale contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeYobnTZg_FMRHagZny58J3pJ_nxqeA2vFKFKU3YavSm2izSS9prqtHEfqlW_1gFE1pnnZ49gUQGVO7UJ9Q440d9NIY3A8lce9ibAqhbQxtLa5VztuKglnwxUWeD0v4STwRFHUokceGDD37U1bH9bx4qfoh-x760vLn8o0EZHW44pEcWeQs5KlkAFR_QTmclQerELLMNFUjm-Q_Lw60hkk7Z5GR7EHotKNoMmshvgXlBsT1D3LEvuFap2LYPNkKFxhOFwd8cynwdAW"/>
                    </div>
                    <div className="relative z-20 max-w-4xl">
                        <h1 className="text-6xl md:text-9xl font-black font-playfair leading-[0.95] mb-10 tracking-tight">
                            La <span className="italic text-[#e1bee7]">Muestra</span> visual.
                        </h1>
                        <p className="text-lg md:text-xl text-[#b0a8b9] font-light mb-12 max-w-xl leading-relaxed italic">
                            Una curaduría mística de vaporizadores y esencias diseñada para los paladares que buscan trascender lo cotidiano.
                        </p>
                        <Link href="/" className="inline-block px-12 py-5 bg-[#e1bee7] text-[#2d004d] font-bold uppercase tracking-widest hover:bg-[#f3e5f5] transition-all">
                            El Catálogo
                        </Link>
                    </div>
                </section>

                {/* About the Boutique (Muestra de qué es la venta de accesorios) */}
                <section className="py-24 px-8 md:px-20 bg-surface-dim">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                        <div className="flex-1 space-y-8">
                            <h2 className="text-sm tracking-widest uppercase text-primary font-bold">Nuestra Filosofía</h2>
                            <h3 className="text-4xl md:text-5xl font-playfair font-black text-on-surface">No es solo vapor.<br/>Es una <span className="italic text-primary">experiencia.</span></h3>
                            <p className="text-on-surface-variant font-body leading-relaxed text-lg">
                                En Muestra visual creemos que la transición hacia una alternativa moderna no debería significar sacrificar el estilo ni la calidad. Seleccionamos cuidadosamente los dispositivos más elegantes del mercado, baterías de alta duración y repuestos de marcas top a nivel mundial.
                            </p>
                            <p className="text-on-surface-variant font-body leading-relaxed text-lg">
                                Si buscas nubes densas llenas de sabor y dispositivos que reflejen tu estética, has llegado al lugar correcto. Te traemos un stock boutique exclusivo para entusiastas.
                            </p>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="aspect-[4/5] overflow-hidden rounded-2xl glass-card relative z-10 p-4">
                                <img src="/images/premium_vape_pod_1775100278723.png" alt="Premium Pod Device" className="w-full h-full object-cover rounded-xl filter contrast-125" />
                            </div>
                            <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-0 rounded-full"></div>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="py-24 px-8 md:px-20 bg-background relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-playfair font-black text-on-surface mb-4">Nuestras Categorías Sagradas</h2>
                            <p className="text-on-surface-variant max-w-2xl mx-auto">Sumérgete en nuestras colecciones curadas. Equipamiento premium, líquidos exóticos y recambios para mantener tu experiencia impecable.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Hardware */}
                            <Link href="/" className="group relative aspect-square md:aspect-[3/4] overflow-hidden rounded-2xl glass-card hover:-translate-y-2 transition-transform duration-500">
                                <img src="/images/premium_vape_pod_1775100278723.png" alt="Hardware" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2 block">Kits & Pods</span>
                                    <h3 className="text-3xl font-playfair font-bold text-white mb-2">Hardware</h3>
                                    <p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Equipos de diseño de nivel élite.</p>
                                </div>
                            </Link>

                            {/* E-Liquids */}
                            <Link href="/" className="group relative aspect-square md:aspect-[3/4] overflow-hidden rounded-2xl glass-card hover:-translate-y-2 transition-transform duration-500">
                                <img src="/images/premium_eliquid_bottle_1775100291291.png" alt="E-Liquids" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2 block">Esencias</span>
                                    <h3 className="text-3xl font-playfair font-bold text-white mb-2">E-Liquids</h3>
                                    <p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Mezclas exóticas y sabores puros.</p>
                                </div>
                            </Link>

                            {/* Accessories */}
                            <Link href="/" className="group relative aspect-square md:aspect-[3/4] overflow-hidden rounded-2xl glass-card hover:-translate-y-2 transition-transform duration-500">
                                <img src="/images/premium_vape_coils_1775100304744.png" alt="Accesorios" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-primary text-xs uppercase tracking-widest font-bold mb-2 block">Consumibles</span>
                                    <h3 className="text-3xl font-playfair font-bold text-white mb-2">Accesorios</h3>
                                    <p className="text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">Coils, resistencias y mallas premium.</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Buyer's Guide (Cómo elegir) */}
                <section className="py-24 px-8 md:px-20 bg-surface-container-low border-y border-outline-variant/10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-playfair font-black text-on-surface mb-6">Guía para el Ritual Perfecto</h2>
                            <p className="text-on-surface-variant max-w-xl mx-auto text-lg pt-2">¿Nuevo en el mundo del vapor? Te ayudamos a seleccionar tu equipo y líquidos ideales en tres simples pasos.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {/* Step 1 */}
                            <div className="glass-card p-10 rounded-2xl relative">
                                <div className="absolute -top-6 left-10 w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-black text-2xl text-on-primary shadow-[0_0_20px_rgba(223,183,255,0.4)]">1</div>
                                <h4 className="text-xl font-bold font-headline mt-4 mb-3 text-on-surface">Define tu nivel</h4>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Si buscas dejar el hábito convencional o prefieres comodidad, un "Pod System" sellado es ideal. Si amas las nubes densas y el control manual, aventúrate en los sistemas "Mods" y resistencias.
                                </p>
                            </div>
                            
                            {/* Step 2 */}
                            <div className="glass-card p-10 rounded-2xl relative">
                                <div className="absolute -top-6 left-10 w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center font-black text-2xl text-on-primary-container shadow-[0_0_20px_rgba(86,34,129,0.4)]">2</div>
                                <h4 className="text-xl font-bold font-headline mt-4 mb-3 text-on-surface">Elige tu Nicotina</h4>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    Las Sales de Nicotina (Nic Salts) se usan a bajo voltaje en Pods para satisfacción rápida. Los jugos Freebase son perfectos para dispositivos de alta potencia y quienes desean reducir gradualmente la ingesta.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="glass-card p-10 rounded-2xl relative">
                                <div className="absolute -top-6 left-10 w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center font-black text-2xl text-on-tertiary-container shadow-[0_0_20px_rgba(0,71,53,0.4)]">3</div>
                                <h4 className="text-xl font-bold font-headline mt-4 mb-3 text-on-surface">Encuentra tu Perfil</h4>
                                <p className="text-on-surface-variant text-sm leading-relaxed">
                                    ¿Frutales helados, postres cremosos o tabacos robustos? Nuestra tienda está curada para ofrecerte las mejores marcas globales en todo el espectro de sabores.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recommended Products */}
                <section className="py-24 px-8 md:px-20 bg-background">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                            <div>
                                <h1 className="headline-font text-3xl md:text-5xl font-extrabold tracking-tight mb-2">Recomendados del Mes</h1>
                                <p className="text-on-surface-variant text-sm">Dispositivos y esencias que nuestros curadores destacan.</p>
                            </div>
                            <Link href="/" className="text-primary border-b border-primary pb-1 text-sm font-bold uppercase tracking-widest hover:text-primary-fixed transition-colors">Ver Catálogo Completo</Link>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recommendedProducts.map(p => (
                                <Link href="/" key={p.id} className="group relative bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:bg-surface-container hover:-translate-y-1 block">
                                    {p.new && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Descubrimiento</span>
                                        </div>
                                    )}
                                    <div className="aspect-square overflow-hidden bg-surface-container-highest/30">
                                        <img alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={p.image}/>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-[10px] font-bold text-primary mb-1 uppercase tracking-widest">{p.category}</p>
                                        <h3 className="headline-font text-xl font-bold text-on-surface group-hover:text-primary transition-colors">{p.name}</h3>
                                        <p className="text-sm text-on-surface-variant mt-2 line-clamp-2">{p.desc}</p>
                                        <div className="mt-6 flex items-center justify-between">
                                            <span className="text-xl font-black text-on-surface">${p.price}</span>
                                            <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg flex items-center gap-2 text-xs font-bold transition-transform scale-95 active:scale-90 relative z-10">
                                                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                                                Añadir
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
