-- 1. Create Tables

-- A. Sucursales (branches)
CREATE TABLE IF NOT EXISTS public.branches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    address TEXT,
    is_active BOOLEAN DEFAULT true
);

-- B. Productos (products)
CREATE TABLE IF NOT EXISTS public.products (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sku TEXT UNIQUE,
    name TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL,
    category TEXT,
    warning_msg TEXT,
    image_url TEXT,
    is_new BOOLEAN DEFAULT false
);

-- C. Inventario (inventory)
CREATE TABLE IF NOT EXISTS public.inventory (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
    branch_id UUID REFERENCES public.branches(id) ON DELETE CASCADE,
    stock_quantity INTEGER DEFAULT 0,
    UNIQUE(product_id, branch_id)
);

-- D. Usuarios y Verificación (users)
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    rut TEXT,
    birth_date DATE,
    is_age_verified BOOLEAN DEFAULT false,
    verified_at TIMESTAMP WITH TIME ZONE
);

-- E. Órdenes (orders)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
    branch_id UUID REFERENCES public.branches(id) ON DELETE SET NULL,
    total_amount INTEGER NOT NULL,
    status TEXT CHECK (status IN ('pendiente', 'pagado', 'enviado', 'entregado', 'cancelado')) DEFAULT 'pendiente',
    getnet_tx_id TEXT,
    invoice_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- F. Detalle de Orden (order_items)
CREATE TABLE IF NOT EXISTS public.order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES public.products(id) ON DELETE SET NULL,
    quantity INTEGER NOT NULL,
    unit_price INTEGER NOT NULL
);


-- 2. Insert Seed Data (Mock Data from Frontend)
INSERT INTO public.products (sku, name, category, price, image_url, is_new, description) VALUES
('SKU-001', 'Obsidian Pod Kit V2', 'Hardware', 45990, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOEPKZVcBFqmkC5rWrYqCDdAESuh7lFYgxz9j6TRNr7I9K2HaSGONrZldONY2lggMgHeoQqJDGp9Z4un4XE3kZUSNprWg3Vz5UuY_iM1prOygC0mZuzgm8xL1qja7tuqUTALIfr639eJZgmzKsu1qtiuDA2kSwB7X4IUam47-P6KMH1rzLUlKr-1JoyC7YzHp4QhNhbSkU7z_3XW6IfusZxGQBGz2hDJ0Mz7kcvG3H4WBib00odo4KkOlOtybqT7iTC3kB5bFdsz0C', true, 'Sistema de pod ultra compacto con acabado de aleación de zinc y carga rápida USB-C.'),
('SKU-002', 'Midnight Grape Ice', 'E-Liquid', 18500, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE4wt1dpHIPaJnh0B5og7TTlV6VAaEZAh35VuMZLTxLAr0tSkJD0idh5iOT2oEux5QUYOxEu4NTKcrLl9a-U2SNIiCEaibHDfwCMcp8w5dAVur1fSEWhhBBq1ppBVIi5nmhEfUBPK-t89U6ckhY_CNFhm7HF2626jusIjmbOyCyFN9yCH9zz34-Mru9V0A0QIXwku1jvxyASlvQNFezo6l0Yo-glMwg-vlMPKsiUF0xhsbvmbdJ5pvP0bX3WDULHGOjSvyXYR6ZiWV', false, 'Una mezcla gélida de uvas oscuras cosechadas bajo la luz de la luna.'),
('SKU-003', 'Quantum Mesh Coils', 'Accesorios', 12000, 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy83KmTwHlfpJ0zCM_vgGD3kMLt-QJvDbRXKFfUaopJjtlAGnwirdPTjDY0_lPIucgn5WADIRiIYoBfTz8eVXk1YuhaEWPuosfUiNUL0voh66pwRDgM6p7AgFyYcbH31vOi4P6YinIzAP4DFHc4G1fGd9XMjaH3Lf_R4jVINHirWTfPJgNZtOrTxmPHDPtfAnrqPLP-xu5p-q8VO3lST1nsYthRXOfoHgC03saee-dhW0735wPp1MY-j522PCdDtMho3N-AY9vSWWj', false, 'Paquete de 5 resistencias de malla para un sabor puro y nubes densas.'),
('SKU-004', 'Neon Stick Pro', 'Hardware', 59000, 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7doxCVPfiyrwzjtgtMbO8R2rJdP8ARb6f3cHg_9n9xDYvHTUh66Ai-rlcHn86NcWi3lo3dvhywHd1UaeZQLC77Wj3NdKFSSYKSJvlC_Dl61AkN-bP3dtU3Gjmhwv1dPxUUijhylXSZeMG9_SqkL2BsDjNeVc1kH2lq-bUO6Mmovf5RxjdvLwMyO5pgn6O7Oh2Vk2vlmC0e0woJ9FbeZq_hXnfzl0OVEA0e8yU19kY8t88NWSFx7_7noSGK6d0kXY5gfyFK092OjkI', false, 'Batería de larga duración con control táctil.'),
('SKU-005', 'Velvet Vanilla', 'E-Liquid', 22000, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxIACm_qJM7qdVv1C-KamE7aq_G4E1sG7Ob55vNQ8au2XL9JdkZ8D6BGYEuG5V2v1axZ_AgjqHP6NqMmrl4lZkP6TIbU8MRlzQcGQCvvAa8FNIpprHFRFq5rrlcFhmveky-yG9P6Zz5iRh5ZdlShUjSSL_lwKUFPcnAay8YjJiJGOxzLP68a3vJ3ZrxhfXrtj3OnrjwL3DZTK8RiOkIr7dUCI0h3WgSlq_JHxGIeteBLsU56Pt5N_buFmPeNdJxYkgpmCl1rj8vZ6W', false, 'Vainilla de Tahití con un toque cremoso de caramelo.'),
('SKU-006', 'Titan Tank Ultra', 'Pods', 34990, 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-MabNOv8536m7t-cVYhLf-gqsJ3bfce0Ybc7GULhoZS_gXK2m_OmDg-OQromcXfA1RkVWiVRAzopl4V7ajfvaEapIsV5MNqgFTiQU7ZYqqyvyTb3VNOZcvLCR_w4VGLiU7vtlOaYHm8rYduQSDi5gy7kfSTvES8sG1MAi4gaAJS57HttEKxi-55M1QlQcWpSvIhbpuEdVyXzJv-n8f5NGWszpf5yxnCkURPNjcCw9NomWT_IhOvzkp3w9DNoNeg9SZ_492vx02zHj', false, 'Capacidad máxima con sistema de llenado superior antifugas.'),
('SKU-007', 'Celestial Battery', 'Hardware', 29990, 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy83KmTwHlfpJ0zCM_vgGD3kMLt-QJvDbRXKFfUaopJjtlAGnwirdPTjDY0_lPIucgn5WADIRiIYoBfTz8eVXk1YuhaEWPuosfUiNUL0voh66pwRDgM6p7AgFyYcbH31vOi4P6YinIzAP4DFHc4G1fGd9XMjaH3Lf_R4jVINHirWTfPJgNZtOrTxmPHDPtfAnrqPLP-xu5p-q8VO3lST1nsYthRXOfoHgC03saee-dhW0735wPp1MY-j522PCdDtMho3N-AY9vSWWj', true, 'Batería de larga duración con diseño ergonómico y acabados de lujo.'),
('SKU-008', 'Sunset Mango', 'E-Liquid', 19500, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE4wt1dpHIPaJnh0B5og7TTlV6VAaEZAh35VuMZLTxLAr0tSkJD0idh5iOT2oEux5QUYOxEu4NTKcrLl9a-U2SNIiCEaibHDfwCMcp8w5dAVur1fSEWhhBBq1ppBVIi5nmhEfUBPK-t89U6ckhY_CNFhm7HF2626jusIjmbOyCyFN9yCH9zz34-Mru9V0A0QIXwku1jvxyASlvQNFezo6l0Yo-glMwg-vlMPKsiUF0xhsbvmbdJ5pvP0bX3WDULHGOjSvyXYR6ZiWV', false, 'Dulce sabor a mango madurado bajo el sol tropical en una mezcla sedosa.'),
('SKU-009', 'Aero Glass Tank', 'Accesorios', 25000, 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-MabNOv8536m7t-cVYhLf-gqsJ3bfce0Ybc7GULhoZS_gXK2m_OmDg-OQromcXfA1RkVWiVRAzopl4V7ajfvaEapIsV5MNqgFTiQU7ZYqqyvyTb3VNOZcvLCR_w4VGLiU7vtlOaYHm8rYduQSDi5gy7kfSTvES8sG1MAi4gaAJS57HttEKxi-55M1QlQcWpSvIhbpuEdVyXzJv-n8f5NGWszpf5yxnCkURPNjcCw9NomWT_IhOvzkp3w9DNoNeg9SZ_492vx02zHj', false, 'Tanque de cristal de pyrex con flujo de aire regulable de máxima pureza.'),
('SKU-010', 'Luminous Coils', 'Accesorios', 15000, 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy83KmTwHlfpJ0zCM_vgGD3kMLt-QJvDbRXKFfUaopJjtlAGnwirdPTjDY0_lPIucgn5WADIRiIYoBfTz8eVXk1YuhaEWPuosfUiNUL0voh66pwRDgM6p7AgFyYcbH31vOi4P6YinIzAP4DFHc4G1fGd9XMjaH3Lf_R4jVINHirWTfPJgNZtOrTxmPHDPtfAnrqPLP-xu5p-q8VO3lST1nsYthRXOfoHgC03saee-dhW0735wPp1MY-j522PCdDtMho3N-AY9vSWWj', false, 'Conjunto de 5 coils premium para un sabor intenso y duradero.'),
('SKU-011', 'Berry Nova', 'E-Liquid', 21000, 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxIACm_qJM7qdVv1C-KamE7aq_G4E1sG7Ob55vNQ8au2XL9JdkZ8D6BGYEuG5V2v1axZ_AgjqHP6NqMmrl4lZkP6TIbU8MRlzQcGQCvvAa8FNIpprHFRFq5rrlcFhmveky-yG9P6Zz5iRh5ZdlShUjSSL_lwKUFPcnAay8YjJiJGOxzLP68a3vJ3ZrxhfXrtj3OnrjwL3DZTK8RiOkIr7dUCI0h3WgSlq_JHxGIeteBLsU56Pt5N_buFmPeNdJxYkgpmCl1rj8vZ6W', true, 'Explosión exótica de bayas silvestres dulces y ácidas con final helado.'),
('SKU-012', 'Stellar Mod', 'Hardware', 85000, 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7doxCVPfiyrwzjtgtMbO8R2rJdP8ARb6f3cHg_9n9xDYvHTUh66Ai-rlcHn86NcWi3lo3dvhywHd1UaeZQLC77Wj3NdKFSSYKSJvlC_Dl61AkN-bP3dtU3Gjmhwv1dPxUUijhylXSZeMG9_SqkL2BsDjNeVc1kH2lq-bUO6Mmovf5RxjdvLwMyO5pgn6O7Oh2Vk2vlmC0e0woJ9FbeZq_hXnfzl0OVEA0e8yU19kY8t88NWSFx7_7noSGK6d0kXY5gfyFK092OjkI', false, 'Mod potente y de alta gama con pantalla OLED e interfaz digital táctil.')
ON CONFLICT (sku) DO NOTHING;

-- Policies for anon usage (assuming RLS is needed or they can just leave it public for reading)
-- If RLS is enabled on these tables, you would need policies for anonymous read access:
-- ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public read access to products" ON public.products FOR SELECT TO anon USING (true);
