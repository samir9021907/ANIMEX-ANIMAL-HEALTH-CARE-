import pg from 'pg';
import dotenv from 'dotenv';
import { PRODUCTS, DEALERS, BLOGS, CERTIFICATES } from '../data/seedData';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT || '5432'),
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'root',
  database: process.env.DATABASE_NAME || 'animex_db1',
});

async function initDatabase() {
  console.log('⚡ Initializing ANIMEX PostgreSQL Database Tables & Seeding Data...');
  const client = await pool.connect();

  try {
    // 1. Create Products Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS products (
        id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        sku VARCHAR(100) NOT NULL,
        category VARCHAR(100) NOT NULL,
        summary TEXT,
        description TEXT,
        target_animals TEXT[],
        is_featured BOOLEAN DEFAULT false,
        is_bestseller BOOLEAN DEFAULT false,
        image TEXT,
        variants TEXT[],
        benefits TEXT[],
        ingredients JSONB,
        dosage TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Table "products" created successfully!');

    // 2. Create Dealers Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS dealers (
        id VARCHAR(50) PRIMARY KEY,
        firm_name VARCHAR(255) NOT NULL,
        contact_name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(100),
        district VARCHAR(100) NOT NULL,
        state VARCHAR(100) NOT NULL,
        address TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'APPROVED',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Table "dealers" created successfully!');

    // 3. Create Enquiries Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(100),
        subject VARCHAR(255),
        message TEXT,
        date VARCHAR(50),
        status VARCHAR(50) DEFAULT 'PENDING',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Table "enquiries" created successfully!');

    // 4. Create Blogs Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL,
        excerpt TEXT,
        content TEXT,
        cover_image TEXT,
        category VARCHAR(100),
        date VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✅ Table "blogs" created successfully!');

    // 5. Create Certificates Table
    await client.query(`
      CREATE TABLE IF NOT EXISTS certificates (
        id VARCHAR(50) PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        issued_by VARCHAR(255) NOT NULL,
        image_url TEXT NOT NULL
      );
    `);
    console.log('✅ Table "certificates" created successfully!');

    // --- SEED PRODUCTS ---
    for (const prod of PRODUCTS) {
      await client.query(`
        INSERT INTO products (id, title, slug, sku, category, summary, description, target_animals, is_featured, is_bestseller, image, variants, benefits, ingredients, dosage)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          summary = EXCLUDED.summary,
          description = EXCLUDED.description;
      `, [
        prod.id,
        prod.title,
        prod.slug,
        prod.sku,
        prod.category,
        prod.summary,
        prod.description,
        prod.targetAnimals,
        prod.isFeatured || false,
        prod.isBestSeller || false,
        prod.image,
        prod.variants,
        prod.benefits,
        JSON.stringify(prod.ingredients),
        prod.dosage
      ]);
    }
    console.log(`🌾 Seeded ${PRODUCTS.length} Products into "products" table!`);

    // --- SEED DEALERS ---
    for (const dlr of DEALERS) {
      await client.query(`
        INSERT INTO dealers (id, firm_name, contact_name, phone, email, district, state, address, status)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
        ON CONFLICT (id) DO UPDATE SET
          firm_name = EXCLUDED.firm_name,
          contact_name = EXCLUDED.contact_name;
      `, [
        dlr.id,
        dlr.firmName,
        dlr.contactName,
        dlr.phone,
        dlr.email,
        dlr.district,
        dlr.state,
        dlr.address,
        dlr.status
      ]);
    }
    console.log(`🤝 Seeded ${DEALERS.length} Dealers into "dealers" table!`);

    // --- SEED BLOGS ---
    for (const blog of BLOGS) {
      await client.query(`
        INSERT INTO blogs (id, title, slug, excerpt, content, cover_image, category, date)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT (id) DO UPDATE SET
          title = EXCLUDED.title,
          content = EXCLUDED.content;
      `, [
        blog.id,
        blog.title,
        blog.slug,
        blog.excerpt,
        blog.content,
        blog.coverImage,
        blog.category,
        blog.date
      ]);
    }
    console.log(`📚 Seeded ${BLOGS.length} Blog Articles into "blogs" table!`);

    // --- SEED CERTIFICATES ---
    for (const cert of CERTIFICATES) {
      await client.query(`
        INSERT INTO certificates (id, title, issued_by, image_url)
        VALUES ($1, $2, $3, $4)
        ON CONFLICT (id) DO NOTHING;
      `, [cert.id, cert.title, cert.issuedBy, cert.imageUrl]);
    }
    console.log(`📜 Seeded ${CERTIFICATES.length} Certificates into "certificates" table!`);

    console.log('\n🎉 ALL TABLES CREATED & SEEDED IN "animex_db1" SUCCESSFULLY!');

  } catch (error) {
    console.error('❌ Database Initialization Error:', error);
  } finally {
    client.release();
    await pool.end();
  }
}

initDatabase();
