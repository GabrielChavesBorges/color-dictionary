import mariadb from 'mariadb';
import { NextResponse } from 'next/server';

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME,
  connectionLimit: 5
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const colorHexaCode = searchParams.get('input')?.toUpperCase();

  let connection;
  try {
    connection = await pool.getConnection();

    // Query all colors
    const rows = await connection.query("SELECT ID, Name, HEX(Code) AS CodeHex FROM Color");

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Database error' }), { status: 500 });
  } finally {
    if (connection) connection.release();
  }

  return NextResponse.json({ message: `You picked ${name}` });
}
