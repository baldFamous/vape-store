import Link from "next/link";

export default function AdminDashboard() {
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
                <header className="sticky top-0 w-full flex justify-between items-center px-8 py-6 bg-surface/80 backdrop-blur-xl z-40">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight font-headline text-on-surface">Gestión de Inventario</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/" className="text-sm border border-outline px-3 py-1 rounded">Back to Store</Link>
                    </div>
                </header>

                <section className="px-8 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden">
                            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Stock Total</p>
                            <h3 className="text-3xl font-bold">1,284</h3>
                        </div>
                        <div className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden border-b-2 border-error/50">
                            <p className="text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2">Stock Bajo</p>
                            <h3 className="text-3xl font-bold text-error">14</h3>
                        </div>
                    </div>

                    <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-highest/30">
                                        <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Product</th>
                                        <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Stock</th>
                                        <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-outline-variant/10">
                                    <tr className="hover:bg-surface-container-high/40">
                                        <td className="px-6 py-5">
                                            <div className="text-sm font-bold">Midnight Mist</div>
                                            <div className="text-[10px] text-on-surface-variant">E-Liquid</div>
                                        </td>
                                        <td className="px-6 py-5 text-sm">42 units</td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="text-on-surface-variant hover:text-primary mx-1"><span className="material-symbols-outlined text-sm">edit</span></button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-surface-container-high/40">
                                        <td className="px-6 py-5">
                                            <div className="text-sm font-bold">Neon Pulse Pods</div>
                                            <div className="text-[10px] text-on-surface-variant">Pods</div>
                                        </td>
                                        <td className="px-6 py-5 text-sm text-error">3 units</td>
                                        <td className="px-6 py-5 text-right">
                                            <button className="text-on-surface-variant hover:text-primary mx-1"><span className="material-symbols-outlined text-sm">edit</span></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
