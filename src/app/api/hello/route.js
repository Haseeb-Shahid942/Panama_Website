import { NextResponse } from 'next/server';

export async function GET(req) {
    return NextResponse.json({ message: "Hello Panama Travel Users" }, { status: 200 });
}