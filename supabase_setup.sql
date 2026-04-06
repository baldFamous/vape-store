-- 1. Extensiones necesarias (UUID para seguridad)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Enums para estados de orden (Evita errores de escritura)
CREATE TYPE order_status AS ENUM ('pendiente', 'pagado', 'enviado', 'entregado', 'cancelado');

-- 3. Tabla de Sucursales (La Serena y Calama)
CREATE TABLE branches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    city TEXT NOT NULL,
    address TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Tabla de Productos (Catálogo Base)
CREATE TABLE products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sku TEXT UNIQUE NOT NULL, -- Código único para inventario
    name TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL, -- CLP no usa decimales
    brand TEXT,
    category TEXT,
    warning_msg TEXT DEFAULT 'ADVERTENCIA: Este producto contiene nicotina, una sustancia altamente adictiva.',
    image_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. Tabla de Inventario (Relación Producto-Sucursal)
CREATE TABLE inventory (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    branch_id UUID REFERENCES branches(id) ON DELETE CASCADE,
    stock_quantity INTEGER NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
    UNIQUE(product_id, branch_id), -- Un producto solo puede tener una fila por sucursal
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Tabla de Usuarios (Con campos de cumplimiento legal)
CREATE TABLE profiles (
    id UUID PRIMARY KEY REFERENCES auth.users ON DELETE CASCADE, -- Vinculado a Supabase Auth
    full_name TEXT,
    rut TEXT UNIQUE,
    birth_date DATE,
    is_age_verified BOOLEAN DEFAULT false,
    verified_at TIMESTAMP WITH TIME ZONE,
    verification_ip TEXT, -- Registro legal ante el SEREMI
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Tabla de Órdenes (Cabecera)
CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES profiles(id),
    branch_id UUID REFERENCES branches(id), -- Sucursal que despacha
    total_amount INTEGER NOT NULL,
    status order_status DEFAULT 'pendiente',
    getnet_tx_id TEXT, -- ID de transacción de la pasarela
    invoice_url TEXT, -- Link a la boleta del SII
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. Detalle de la Orden (Lo que compró exactamente)
CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    product_id UUID REFERENCES products(id),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price INTEGER NOT NULL -- Precio al momento de la compra
);

-- 9. Datos Iniciales (Seed) para pruebas
INSERT INTO branches (name, city, address) VALUES 
('Humo Sagrado La Serena', 'La Serena', 'Dirección Local Serena'),
('Humo Sagrado Calama', 'Calama', 'Dirección Local Calama');