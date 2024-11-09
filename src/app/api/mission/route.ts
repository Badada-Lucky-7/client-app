import axios from 'axios';
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const headersList = headers();
  const authorization = headersList.get('authorization');

  const searchParams = request.nextUrl.searchParams;
  const district = searchParams.get('district');
  const bigCategory = searchParams.get('bigCategory');

  const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_HOST}/mission`, {
    params: { district, bigCategory },
    headers: {
      Authorization: authorization,
    },
  });

  return NextResponse.json(res.data);
}