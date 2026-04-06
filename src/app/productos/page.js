import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import { supabase } from "@/lib/supabase/client";

export const revalidate = 0; // Evita el cache estático para siempre traer los últimos datos

export default async function ProductsPage() {
    // Obtenemos los productos desde supabase a nivel de servidor
    const { data: subProducts, error } = await supabase
        .from('products')
        .select('*');

    if (error) {
        console.error("Error fetching products from Supabase:", error);
    }
    
    // Si no hay datos, iniciamos con un array vacío para evitar que se caiga la página
    const products = subProducts || [];

    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <ProductCatalog products={products} />
            <Footer />
        </div>
    );
}
