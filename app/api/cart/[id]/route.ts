import { NextRequest, NextResponse } from "next/server";
import {db, cartTable } from "@/sanity/lib/drizzle";


export async function GET(request: NextRequest, {params}:{params : {id : string}}) {
 
    try {
    const res = await db.select().from(cartTable).execute();
    return NextResponse.json({data:res})
    } catch (error) {
      console.log((error as {message:string}).message);
          
          return  NextResponse.json({message:"Something went wrong!"})
      
    }
    
    
  }
