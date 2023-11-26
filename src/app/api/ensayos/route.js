import { NextResponse } from "next/server";
import { connect } from "@/libs/mysql";

export async function GET() {
  try {
    const connection = await connect();
    const [rows] = await connection.execute("SELECT * FROM ensayos");
    connection.end();

    return NextResponse.json({ message: "GET ensayos", result: rows });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}