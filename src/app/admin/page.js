import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import ProductTableRow from "@/components/admin/ProductTableRow";

export const revalidate = 0;

export default async function AdminDashboard() {
    const { data: products, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });

    if (error) {
        console.error("Error fetching admin products:", error);
    }
    
    const safeProducts = products || [];

    return (
        <div className="flex min-h-screen overflow-hidden bg-surface">
            {/* Sidebar */}
            <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-zinc-900 shadow-2xl z-50">
                <div className="flex flex-col h-full py-6">
                    <div className="px-6 mb-8">
                        <Link href="/" className="text-lg font-black text-purple-200">Muestra visual</Link>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Admin Dashboard</div>
                    </div>
                    <nav className="flex-1 space-y-1">
                        <Link href="/admin" className="flex items-center gap-3 px-6 py-4 bg-purple-900/40 text-purple-200 border-r-4 border-purple-400">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span>Catálogo</span>
                        </Link>
                        <Link href="/admin/mobile" className="flex items-center gap-3 px-6 py-4 text-zinc-500 hover:bg-zinc-800">
                            <span className="material-symbols-outlined">smartphone</span>
                            <span>Mobile View Demo</span>
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-0 md:ml-64 relative overflow-y-auto custom-scrollbar h-screen">
                <header className="sticky top-0 w-full flex justify-between items-center px-8 py-6 bg-surface/80 backdrop-blur-xl z-40">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight font-headline text-on-surface">Gestión de Catálogo</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/productos" className="text-sm border border-outline px-3 py-1 rounded text-on-surface-variant hover:text-on-surface transition-colors">Volver a la Tienda</Link>
                        <Link href="/admin/products/new" className="text-sm font-bold bg-primary text-on-primary px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-[18px]">add</span>
                            Añadir Producto
                        </Link>
                    </div>
                </header>

                <section className="px-8 pb-20 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden border border-outline-variant/10">
                            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Total Productos</p>
                            <h3 className="text-3xl font-bold text-on-surface">{safeProducts.length}</h3>
                        </div>
                    </div>

                    <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl border border-outline-variant/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-highest/30">
                                        <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Producto</th>
                                        <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Precio</th>
                                        <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Estado</th>
                                        <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10">
                                    {safeProducts.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" className="px-6 py-12 text-center text-on-surface-variant">
                                                No hay productos registrados en el catálogo. ¡Añade uno nuevo!
                                            </td>
                                        </tr>
                                    ) : (
                                        safeProducts.map(product => (
                                            <ProductTableRow key={product.id} product={product} />
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
