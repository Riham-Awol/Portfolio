import { Pool } from "pg";

declare global {
  var _pgPool: Pool | undefined;
}

function getPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) return null;

  if (!global._pgPool) {
    global._pgPool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      max: 3,
    });
  }
  return global._pgPool;
}

export type ContactMessage = {
  id: number;
  created_at: string;
  source: "form" | "chat";
  name: string | null;
  email: string | null;
  message: string;
};

let tableReady = false;

async function ensureTable(pool: Pool) {
  if (tableReady) return;
  await pool.query(`
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      source TEXT NOT NULL,
      name TEXT,
      email TEXT,
      message TEXT NOT NULL
    )
  `);
  tableReady = true;
}

export async function isDbConfigured(): Promise<boolean> {
  return Boolean(process.env.DATABASE_URL);
}

export async function saveMessage(input: {
  source: "form" | "chat";
  name?: string;
  email?: string;
  message: string;
}): Promise<boolean> {
  const pool = getPool();
  if (!pool) return false;

  try {
    await ensureTable(pool);
    await pool.query(
      `INSERT INTO messages (source, name, email, message) VALUES ($1, $2, $3, $4)`,
      [input.source, input.name ?? null, input.email ?? null, input.message]
    );
    return true;
  } catch (err) {
    console.error("Failed to save message:", err);
    return false;
  }
}

export async function listMessages(): Promise<ContactMessage[]> {
  const pool = getPool();
  if (!pool) return [];

  try {
    await ensureTable(pool);
    const { rows } = await pool.query<ContactMessage>(
      `SELECT id, created_at, source, name, email, message FROM messages ORDER BY created_at DESC LIMIT 200`
    );
    return rows;
  } catch (err) {
    console.error("Failed to list messages:", err);
    return [];
  }
}
