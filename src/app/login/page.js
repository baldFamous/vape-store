"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function LoginPage() {
    const router = useRouter();
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            if (isSignUp) {
                const { error: signUpError } = await supabase.auth.signUp({
                    email,
                    password,
                    // If you want auto-login after signup without confirming email, configure Supabase settings.
                });
                if (signUpError) throw signUpError;
                setSuccess("¡Cuenta creada exitosamente! Ahora puedes iniciar sesión.");
                setIsSignUp(false); // Switch to login view
            } else {
                const { error: signInError } = await supabase.auth.signInWithPassword({
                    email,
                    password
                });
                if (signInError) throw signInError;
                router.push('/profile');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-surface">
            <NavBar />
            <main className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-surface-container rounded-2xl p-8 shadow-2xl relative overflow-hidden border border-outline-variant/10">
                    {/* Glowing effect */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-[#cba0ed]"></div>
                    
                    <div className="mb-8 text-center">
                        <h1 className="font-headline text-3xl font-extrabold text-on-surface mb-2">
                            {isSignUp ? "Crear Cuenta" : "Iniciar Sesión"}
                        </h1>
                        <p className="text-on-surface-variant font-body">
                            {isSignUp 
                                ? "Únete y verifica tu perfil para poder comprar." 
                                : "Bienvenido de vuelta, accede a tu cuenta."}
                        </p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-error/10 border border-error/50 rounded-lg text-error text-sm font-medium">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400 text-sm font-medium">
                            {success}
                        </div>
                    )}

                    <form onSubmit={handleAuth} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Correo Electrónico</label>
                            <input 
                                type="email" 
                                required 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                                placeholder="tu@correo.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Contraseña</label>
                            <input 
                                type="password" 
                                required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full py-3.5 rounded-lg bg-primary text-on-primary hover:bg-primary/90 transition-colors font-bold flex justify-center items-center gap-2 mt-4 shadow-lg shadow-primary/20"
                        >
                            {loading && <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>}
                            {isSignUp ? "Registrarse" : "Entrar a mi cuenta"}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-outline-variant/10 text-center">
                        <p className="text-on-surface-variant text-sm">
                            {isSignUp ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta aún?"}
                            <button 
                                onClick={() => {
                                    setIsSignUp(!isSignUp);
                                    setError(null);
                                    setSuccess(null);
                                }}
                                className="ml-2 font-bold text-primary hover:text-primary/80 transition-colors"
                            >
                                {isSignUp ? "Inicia Sesión" : "Regístrate aquí"}
                            </button>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
