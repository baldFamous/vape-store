import Link from "next/link";
import ProductForm from "@/components/admin/ProductForm";

export default function NewProductPage() {
    return (
        <div className="flex min-h-screen overflow-hidden bg-surface">
            {/* Sidebar (Copied from admin layout normally, but keeping it simple identical here) */}
            <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-zinc-900 shadow-2xl z-50">
                <div className="flex flex-col h-full py-6">
                    <div className="px-6 mb-8">
                        <Link href="/" className="text-lg font-black text-purple-200">Muestra visual</Link>
                        <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1">Admin Dashboard</div>
                    </div>
                    <nav className="flex-1 space-y-1">
                        <Link href="/admin" className="flex items-center gap-3 px-6 py-4 bg-purple-900/40 text-purple-200 border-r-4 border-purple-400">
                            <span className="material-symbols-outlined">inventory_2</span>
                            <span>Inventory</span>
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
                <header className="sticky top-0 w-full flex justify-between items-center px-8 py-6 bg-surface/80 backdrop-blur-xl z-40 border-b border-outline-variant/10">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight font-headline text-on-surface">Añadir Nuevo Producto</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/admin" className="text-sm font-bold text-on-surface-variant hover:text-primary flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">arrow_back</span>
                            Volver al Inventario
                        </Link>
                    </div>
                </header>

                <section className="px-8 py-10 flex justify-center">
                    <div className="w-full max-w-2xl">
                        <ProductForm />
                    </div>
                </section>
            </main>
        </div>
    );
}
