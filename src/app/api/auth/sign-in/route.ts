import { SignRequestType } from '@/types/Auth';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req: SignRequestType = await request.json();

  const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/sign-in`, req);
  return NextResponse.json(res);
}
