import { auth } from "@clerk/nextjs";
import { NextResponse } from 'next/server';
import { NextRequest } from "next/server";
import { cartNewTable, db } from "@/sanity/lib/drizzle";
import { cartTable } from "@/sanity/lib/drizzle";

export async function GET(request: NextRequest) {
 
  try {
  const res = await db.select().from(cartTable).execute();
  return NextResponse.json({data:res})
  } catch (error) {
    console.log((error as {message:string}).message);
        
        return  NextResponse.json({message:"Something went wrong!"})
    
  }
  
  
}


export const POST = async (request: NextRequest) => {

  const req = await request.json();

  try {
      
      const res = await db.insert(cartNewTable).values({
          user_id: req.userid as string,
          session_id: req.sessionid as string,
          product_id: req.productid,
          qty: req.qty
      }).returning();
      
      console.log("Responseeee:"+res);
      return NextResponse.json({res})
      
  } catch (error) {
      console.log(error);
      
      return NextResponse.json({message:"Something went wrong"})
  }

}
