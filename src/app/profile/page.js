"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function ProfilePage() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState(null);
    const [profile, setProfile] = useState({
        full_name: "",
        rut: "",
        birth_date: ""
    });

    useEffect(() => {
        const fetchSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();
            if (error || !session) {
                router.push('/login');
                return;
            }
            
            setUser(session.user);
            
            // Fetch profile data
            const { data: profileData } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', session.user.id)
                .single();
            
            if (profileData) {
                setProfile({
                    full_name: profileData.full_name || "",
                    rut: profileData.rut || "",
                    birth_date: profileData.birth_date || ""
                });
            }
            setLoading(false);
        };
        fetchSession();
    }, [router]);

    const handleSave = async (e) => {
        e.preventDefault();
        setSaving(true);
        setMessage(null);
        
        try {
            // Very simple age verification logic natively done upon save assuming birth_date is entered
            const birthDateObj = new Date(profile.birth_date);
            const ageDifMs = Date.now() - birthDateObj.getTime();
            const ageDate = new Date(ageDifMs); 
            const is_age_verified = Math.abs(ageDate.getUTCFullYear() - 1970) >= 18;

            const updates = {
                id: user.id,
                full_name: profile.full_name,
                rut: profile.rut,
                birth_date: profile.birth_date,
                is_age_verified,
                verified_at: is_age_verified ? new Date().toISOString() : null,
                updated_at: new Date().toISOString()
            };

            const { error } = await supabase.from('profiles').upsert(updates);
            if (error) throw error;
            
            setMessage({ type: 'success', text: 'Perfil actualizado exitosamente.' });
        } catch (err) {
            console.error(err);
            setMessage({ type: 'error', text: 'Hubo un error al actualizar tu perfil.' });
        } finally {
            setSaving(false);
        }
    };

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push('/');
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-surface">
                <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-surface">
            <NavBar />
            <main className="flex-grow pt-32 pb-20 px-8 max-w-3xl mx-auto w-full">
                <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/10 pb-6">
                    <div>
                        <h1 className="headline-font text-4xl font-extrabold tracking-tight mb-2 text-on-surface">Mi Perfil</h1>
                        <p className="text-on-surface-variant text-sm">Gestiona tu cuenta y completa tus datos para verificar tu identidad.</p>
                    </div>
                    <button 
                        onClick={handleSignOut}
                        className="text-error hover:bg-error/10 font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                    >
                        <span className="material-symbols-outlined text-sm">logout</span>
                        Cerrar Sesión
                    </button>
                </header>

                <div className="bg-surface-container rounded-2xl p-8 border border-white/5 shadow-xl relative overflow-hidden">
                    {/* Security Badge */}
                    <div className="absolute top-0 right-0 bg-primary/20 text-primary px-4 py-1.5 rounded-bl-2xl text-[10px] uppercase font-black tracking-widest flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">verified_user</span>
                        Verificación Segura
                    </div>

                    <div className="mb-6 mt-4">
                        <p className="text-sm font-bold text-on-surface-variant uppercase tracking-wider mb-1">Cuenta vinculada</p>
                        <p className="text-lg text-on-surface">{user?.email}</p>
                    </div>

                    {message && (
                        <div className={`mb-6 p-4 rounded-lg font-medium text-sm ${message.type === 'error' ? 'bg-error/10 text-error border border-error/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                            {message.text}
                        </div>
                    )}

                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Nombre Completo</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={profile.full_name}
                                    onChange={(e) => setProfile({...profile, full_name: e.target.value})}
                                    className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Juan Pérez"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">RUT (Sin puntos, con guión)</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={profile.rut}
                                    onChange={(e) => setProfile({...profile, rut: e.target.value})}
                                    className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors"
                                    placeholder="12345678-9"
                                />
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">Fecha de Nacimiento</label>
                                <input 
                                    type="date" 
                                    required 
                                    value={profile.birth_date}
                                    onChange={(e) => setProfile({...profile, birth_date: e.target.value})}
                                    className="w-full bg-surface-container-highest border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-primary transition-colors custom-date-picker"
                                />
                                <p className="text-xs text-on-surface-variant mt-2">
                                    <span className="text-error font-bold">*</span> Debes ser mayor de 18 años para realizar compras en Humo Sagrado. Al guardar tus datos, validaremos tu edad legalmente.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button 
                                type="submit" 
                                disabled={saving}
                                className="px-8 py-3.5 rounded-lg bg-primary text-on-primary hover:bg-primary/90 transition-colors font-bold flex justify-center items-center gap-2 shadow-lg shadow-primary/20"
                            >
                                {saving && <span className="material-symbols-outlined animate-spin text-sm">progress_activity</span>}
                                Actualizar Datos
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}
