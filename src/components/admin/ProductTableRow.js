"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { useState } from "react";

export default function ProductTableRow({ product }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm(`¿Estás seguro de que deseas eliminar "${product.name}"? Esta acción no se puede deshacer.`)) return;
        
        setIsDeleting(true);
        try {
            const { error } = await supabase.from('products').delete().eq('id', product.id);
            if (error) throw error;
            router.refresh();
        } catch (err) {
            console.error("Error deleting product:", err);
            alert("No se pudo eliminar el producto.");
            setIsDeleting(false);
        }
    };

    return (
        <tr className={`hover:bg-surface-container-high/40 transition-colors ${isDeleting ? 'opacity-50 pointer-events-none' : ''}`}>
            <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black/40 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-on-surface">{product.name}</div>
                        <div className="text-[10px] text-on-surface-variant flex items-center gap-2">
                            <span>{product.category}</span>
                            <span className="text-outline-variant">•</span>
                            <span className="font-mono">{product.sku}</span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-5">
                <div className="text-sm font-bold text-on-surface">${product.price.toLocaleString('es-CL')}</div>
            </td>
            <td className="px-6 py-5">
                {product.is_active ? (
                    <span className="px-2 py-1 text-[10px] font-bold bg-green-500/20 text-green-400 rounded-full uppercase tracking-wider">Activo</span>
                ) : (
                    <span className="px-2 py-1 text-[10px] font-bold bg-error/20 text-error rounded-full uppercase tracking-wider">Inactivo</span>
                )}
            </td>
            <td className="px-6 py-5 text-right">
                <div className="flex items-center justify-end gap-2">
                    <Link href={`/admin/products/${product.id}`} className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded hover:bg-surface-container-highest" title="Editar">
                        <span className="material-symbols-outlined text-sm">edit</span>
                    </Link>
                    <button onClick={handleDelete} className="text-on-surface-variant hover:text-error transition-colors p-2 rounded hover:bg-error/10" title="Eliminar">
                        <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                </div>
            </td>
        </tr>
    );
}
