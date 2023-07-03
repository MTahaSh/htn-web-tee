import { auth } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { userId } = auth()

//   console.log("Your user_Id: ");
  return NextResponse.json("user_id "+ { userId });
  
}