"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function ProductForm({ initialData = null }) {
    const router = useRouter();
    const isEditing = !!initialData;
    
    const [formData, setFormData] = useState({
        sku: initialData?.sku || "",
        name: initialData?.name || "",
        category: initialData?.category || "E-Liquid",
        brand: initialData?.brand || "",
        price: initialData?.price || 0,
        image_url: initialData?.image_url || "",
        description: initialData?.description || "",
        is_active: initialData ? initialData.is_active : true, // true by default for new items
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (type === 'number' ? Number(value) : value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (isEditing) {
                const { error: reqError } = await supabase
                    .from('products')
                    .update(formData)
                    .eq('id', initialData.id);
                if (reqError) throw reqError;
            } else {
                const { error: reqError } = await supabase
                    .from('products')
                    .insert([formData]);
                if (reqError) throw reqError;
            }
            router.push("/admin");
            router.refresh();
        } catch (err) {
            console.error("Form error:", err);
            setError(err.message || "An error occurred while saving.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl bg-surface-container rounded-xl p-8 shadow-2xl relative">
            {error && (
                <div className="p-4 bg-error/10 border border-error/50 rounded-lg text-error mb-6 font-medium">
                    {error}
                </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Nombre del Producto</label>
                    <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleChange}
                        className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                        placeholder="Ej. Obsidian Pod Kit V2"
                    />
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">SKU</label>
                    <input 
                        type="text" 
                        name="sku" 
                        required 
                        value={formData.sku} 
                        onChange={handleChange}
                        className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                        placeholder="Ej. SKU-001"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Categoría</label>
                    <select 
                        name="category" 
                        value={formData.category} 
                        onChange={handleChange}
                        className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                    >
                        <option value="E-Liquid">E-Liquid</option>
                        <option value="Hardware">Hardware</option>
                        <option value="Accesorios">Accesorios</option>
                        <option value="Pods">Pods</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Marca (Opcional)</label>
                    <input 
                        type="text" 
                        name="brand" 
                        value={formData.brand} 
                        onChange={handleChange}
                        className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                        placeholder="Ej. Voopoo, Nasty Juice"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Precio (CLP)</label>
                    <input 
                        type="number" 
                        name="price" 
                        required 
                        min="0"
                        value={formData.price} 
                        onChange={handleChange}
                        className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                        placeholder="Ej. 18500"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">URL de Imagen</label>
                <input 
                    type="url" 
                    name="image_url" 
                    required 
                    value={formData.image_url} 
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                    placeholder="https://ejemplo.com/imagen.png"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Descripción</label>
                <textarea 
                    name="description" 
                    rows="4"
                    value={formData.description} 
                    onChange={handleChange}
                    className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Describe el producto aquí..."
                ></textarea>
            </div>

            <div className="flex items-center gap-3 pt-2">
                <input 
                    type="checkbox" 
                    id="is_active"
                    name="is_active" 
                    checked={formData.is_active}
                    onChange={handleChange}
                    className="w-5 h-5 accent-primary rounded cursor-pointer"
                />
                <label htmlFor="is_active" className="text-sm font-bold text-on-surface cursor-pointer">
                    Activar Producto (Mostrar en tienda)
                </label>
            </div>

            <div className="pt-8 border-t border-outline-variant/20 flex justify-end gap-4">
                <button 
                    type="button" 
                    onClick={() => router.push('/admin')}
                    className="px-6 py-3 rounded-lg border border-outline-variant text-on-surface hover:bg-surface-container-highest transition-colors font-bold"
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    disabled={loading}
                    className="px-6 py-3 rounded-lg bg-primary text-on-primary hover:bg-primary/90 transition-colors font-bold flex items-center gap-2 disabled:opacity-50"
                >
                    {loading && <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>}
                    {isEditing ? "Guardar Cambios" : "Crear Producto"}
                </button>
            </div>
        </form>
    );
}
