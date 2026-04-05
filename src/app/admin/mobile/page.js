import Link from "next/link";

export default function MobileAdmin() {
    return (
        <div className="min-h-screen bg-surface pb-20">
             <header className="sticky top-0 w-full flex justify-between items-center px-6 py-4 z-50 bg-zinc-950/70 backdrop-blur-xl border-b border-purple-900/15">
                <h1 className="text-xl font-headline font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">Gestión (Mobile)</h1>
                <Link href="/admin" className="text-xs text-primary border border-primary px-2 py-1 rounded">Desktop</Link>
            </header>
            <main className="p-4 space-y-4">
                <div className="bg-surface-container rounded-xl p-4 flex gap-4 items-center">
                    <div className="w-16 h-16 bg-surface-container-highest rounded-lg"></div>
                    <div>
                        <h3 className="font-bold">Vape Premium Gold</h3>
                        <p className="text-sm text-on-surface-variant">Stock: 42</p>
                    </div>
                </div>
                <div className="bg-surface-container rounded-xl p-4 flex gap-4 items-center border border-error/50">
                    <div className="w-16 h-16 bg-surface-container-highest rounded-lg"></div>
                    <div>
                        <h3 className="font-bold">Pro-Coil 0.2ohm</h3>
                        <p className="text-sm text-error">Stock: 3</p>
                    </div>
                </div>
            </main>
            <nav className="fixed bottom-0 w-full flex justify-around p-3 bg-zinc-950/90 border-t border-purple-900/20">
                 <span className="material-symbols-outlined text-primary">inventory</span>
                 <span className="material-symbols-outlined text-zinc-500">receipt_long</span>
                 <span className="material-symbols-outlined text-zinc-500">person</span>
            </nav>
        </div>
    );
}
