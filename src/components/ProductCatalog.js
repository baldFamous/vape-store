"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

export default function ProductCatalog({ products }) {
    // 1. Base filtering: Only Active Products
    const activeProducts = useMemo(() => {
        return products.filter(p => p.is_active !== false); // fallback to true if undefined
    }, [products]);

    // 2. Categories
    const availableCategories = useMemo(() => {
        const catSet = new Set(activeProducts.map(p => p.category).filter(Boolean));
        return Array.from(catSet).sort();
    }, [activeProducts]);

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    
    // Manage Modal Set
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleCategory = (cat) => {
        setSelectedCategories(prev => 
            prev.includes(cat) 
                ? prev.filter(c => c !== cat)
                : [...prev, cat]
        );
        // Clear brand filters when switching categories to prevent zero-results logic issues
        setSelectedBrands([]); 
    };

    const toggleBrand = (brand) => {
        setSelectedBrands(prev => 
            prev.includes(brand) 
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    // 3. Dependent Brands (Brands available on the currently filtered categories)
    const availableBrands = useMemo(() => {
        let tempProducts = activeProducts;
        if (selectedCategories.length > 0) {
            tempProducts = tempProducts.filter(p => selectedCategories.includes(p.category));
        }
        const brandSet = new Set(tempProducts.map(p => p.brand).filter(Boolean));
        return Array.from(brandSet).sort();
    }, [activeProducts, selectedCategories]);

    // 4. Final Filtered Products
    const filteredProducts = useMemo(() => {
        return activeProducts.filter(p => {
            const matchCat = selectedCategories.length === 0 || selectedCategories.includes(p.category);
            const matchBrand = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
            return matchCat && matchBrand;
        });
    }, [activeProducts, selectedCategories, selectedBrands]);

    return (
        <main className="flex-grow pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 w-full">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-10 flex-shrink-0">
                <div>
                    <h3 className="headline-font text-lg font-bold mb-6 text-on-surface">Categorías</h3>
                    <div className="flex flex-col gap-3">
                        {availableCategories.length === 0 && (
                            <p className="text-on-surface-variant text-sm py-2">No hay categorías disponibles.</p>
                        )}
                        {availableCategories.map((cat, idx) => {
                            const isSelected = selectedCategories.includes(cat);
                            return (
                                <label key={idx} className="flex items-center gap-3 cursor-pointer group select-none">
                                    <input 
                                        type="checkbox" 
                                        className="hidden"
                                        checked={isSelected}
                                        onChange={() => toggleCategory(cat)}
                                    />
                                    {isSelected ? (
                                        <div className="w-5 h-5 rounded border border-primary bg-primary-container flex items-center justify-center transition-all">
                                            <span className="material-symbols-outlined text-[14px] text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                                        </div>
                                    ) : (
                                        <div className="w-5 h-5 rounded border border-outline-variant bg-surface-container-low group-hover:border-primary transition-all flex items-center justify-center"></div>
                                    )}
                                    <span className={`transition-colors ${isSelected ? 'text-primary font-medium' : 'text-on-surface-variant group-hover:text-primary'}`}>
                                        {cat}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {availableBrands.length > 0 && (
                    <div className="pt-6 border-t border-outline-variant/10">
                        <h3 className="headline-font text-lg font-bold mb-6 text-on-surface">Marcas</h3>
                        <div className="flex flex-col gap-3 max-h-60 overflow-y-auto custom-scrollbar pr-4">
                            {availableBrands.map((brand, idx) => {
                                const isSelected = selectedBrands.includes(brand);
                                return (
                                    <label key={idx} className="flex items-center gap-3 cursor-pointer group select-none">
                                        <input 
                                            type="checkbox" 
                                            className="hidden"
                                            checked={isSelected}
                                            onChange={() => toggleBrand(brand)}
                                        />
                                        {isSelected ? (
                                            <div className="w-5 h-5 rounded border border-primary bg-primary-container flex items-center justify-center transition-all">
                                                <span className="material-symbols-outlined text-[14px] text-on-primary-container" style={{fontVariationSettings: "'FILL' 1"}}>check</span>
                                            </div>
                                        ) : (
                                            <div className="w-5 h-5 rounded border border-outline-variant bg-surface-container-low group-hover:border-primary transition-all flex items-center justify-center"></div>
                                        )}
                                        <span className={`transition-colors ${isSelected ? 'text-primary font-medium' : 'text-on-surface-variant group-hover:text-primary'}`}>
                                            {brand}
                                        </span>
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                )}
            </aside>
            
            {/* Product Grid */}
            <section className="flex-1">
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="headline-font text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#dfb7ff] to-[#a37bb7]">Descubre el Catálogo</h1>
                        <p className="text-on-surface-variant text-sm">
                            {selectedCategories.length > 0 || selectedBrands.length > 0
                                ? `Mostrando resultados filtrados`
                                : "Explora nuestra selección curada de hardware premium y mezclas artesanales."
                            }
                        </p>
                    </div>
                </header>
                
                {filteredProducts.length === 0 ? (
                    <div className="flex justify-center items-center py-20 bg-surface-container-low/30 rounded-2xl border border-outline-variant/10">
                        <div className="text-center">
                            <span className="material-symbols-outlined text-5xl text-outline mb-3">production_quantity_limits</span>
                            <h3 className="font-headline text-xl text-on-surface mb-1">No hay productos en esta categoría</h3>
                            <p className="text-on-surface-variant text-sm">Intenta buscar algo diferente o limpia los filtros.</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((p, i) => (
                            <ProductCard 
                                key={p.id} 
                                p={p} 
                                index={i} 
                                onClick={(prod) => setSelectedProduct(prod)}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* Modal Injection */}
            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    onClose={() => setSelectedProduct(null)} 
                />
            )}
        </main>
    );
}
