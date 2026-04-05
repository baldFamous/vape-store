"use client";

import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";

export default function ProductCatalog({ products }) {
    // Collect unique categories perfectly dynamically from available products
    const availableCategories = useMemo(() => {
        const catSet = new Set(products.map(p => p.category).filter(Boolean));
        return Array.from(catSet).sort();
    }, [products]);

    // Use an array to store multiple selected categories, or simply single/empty for all
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (cat) => {
        setSelectedCategories(prev => 
            prev.includes(cat) 
                ? prev.filter(c => c !== cat)
                : [...prev, cat]
        );
    };

    // Filter products
    const filteredProducts = useMemo(() => {
        if (selectedCategories.length === 0) return products;
        return products.filter(p => selectedCategories.includes(p.category));
    }, [products, selectedCategories]);

    return (
        <main className="flex-grow pt-32 pb-20 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 w-full">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-64 space-y-10 flex-shrink-0">
                <div>
                    <h3 className="headline-font text-lg font-bold mb-6 text-on-surface">Filtros de Categoría</h3>
                    <div className="flex flex-col gap-3">
                        {availableCategories.length === 0 && (
                            <p className="text-on-surface-variant text-sm py-2">No hay categorías que mostrar.</p>
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
            </aside>
            
            {/* Product Grid */}
            <section className="flex-1">
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="headline-font text-4xl md:text-5xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#dfb7ff] to-[#a37bb7]">Descubre el Catálogo</h1>
                        <p className="text-on-surface-variant text-sm">
                            {selectedCategories.length > 0 
                                ? `Filtrando por: ${selectedCategories.join(', ')}`
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
                            <ProductCard key={p.id} p={p} index={i} />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
