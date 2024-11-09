import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, query: { district?: string; bigCategory?: string } = {}) {
  const queryString = new URLSearchParams(
    Object.fromEntries(Object.entries(query).filter(([, value]) => value !== undefined))
  );

  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_HOST}/challenge?${queryString.toString()}`);

  return NextResponse.json(res.data);
}
