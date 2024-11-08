import { SignRequestType } from '@/types/Auth';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req: SignRequestType = await request.json();

  console.log(req);

  const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/sign-up`, { req });

  if (!res) {
    console.error('Failed to sign up');
    return NextResponse.error();
  }

  const signInRes = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/auth/sign-in`, req);

  if (!signInRes) {
    console.error('Failed to sign in with the new account');
    return NextResponse.error();
  }

  return NextResponse.json(signInRes);
}
