"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-[#4c4450]/15 mt-20 bg-[#131315]">
            <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto">
                <div className="mb-10 md:mb-0">
                    <div className="text-lg font-black text-[#dfb7ff] headline-font mb-4">Muestra visual</div>
                    <p className="text-on-surface-variant text-xs max-w-xs opacity-80">La boutique digital definitiva para el entusiasta del vapor moderno. Calidad, estilo y profundidad en cada inhalación.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    <div className="flex flex-col gap-3">
                        <span className="font-body text-xs tracking-wide uppercase text-tertiary mb-2">Compañía</span>
                        <a className="text-[#cec3d2] hover:text-[#dfb7ff] underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100 text-xs" href="#">Privacy Policy</a>
                        <a className="text-[#cec3d2] hover:text-[#dfb7ff] underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100 text-xs" href="#">Terms of Service</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-body text-xs tracking-wide uppercase text-tertiary mb-2">Soporte</span>
                        <a className="text-[#cec3d2] hover:text-[#dfb7ff] underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100 text-xs" href="#">Shipping Info</a>
                        <a className="text-[#cec3d2] hover:text-[#dfb7ff] underline-offset-4 hover:underline transition-opacity opacity-80 hover:opacity-100 text-xs" href="#">Contact Us</a>
                    </div>
                </div>
            </div>
            <div className="w-full text-center pb-8">
                <p className="text-on-surface-variant text-[10px] tracking-widest opacity-50 uppercase">© 2024 Muestra visual. All rights reserved.</p>
            </div>
        </footer>
    );
}
