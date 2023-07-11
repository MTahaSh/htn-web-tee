import {NextRequest, NextResponse} from "next/server"
import {db, cartTable} from "@/sanity/lib/drizzle"
import { useUser } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs';

// import {v4 as uuid} from "uuid"
// import {cookies} from "next/headers"



// import { eq } from "drizzle-orm";



import { NextApiRequest, NextApiResponse } from 'next';
 

export const POST = async (request: NextRequest) => {

    const req = await request.json();

    try {
        const res = await db.insert(cartTable).values({
            user_id: req.userid as string,
            session_id: req.sessionid as string,
        }).returning();
        
        console.log("Responseeee:"+res);
        
        
    } catch (error) {
        console.log(error);
        
        return NextResponse.json({message:"Something went wrong"})
    }

}


// // cookies().get("user.id")?.value;
// // fetch(`http://localhost:3000/api/cart?user_id=${cookies().get("user_id")?.value}`)


// export const GET = async (request: NextRequest) => {

//     const req = request.nextUrl
//     const uid = req.searchParams.get("user_id") as string

//     try {
//         const res = await db.select().from(cartTable).where(eq(cartTable.user_id,uid));
//         return NextResponse.json({res})

//     } catch (error) {
//         console.log(error);
//         return NextResponse.json({message:"Something went wrong"})
//     }

// }

// export const POST = async (request: NextRequest) => {

//     const req = await request.json();
//     const uid = uuid();
//     const setCookies = cookies();

//     const user_id = cookies().get("user_id")?.value

//     if(!user_id)
//     {
//     setCookies.set("user_id",uid)
//     }


//     try {
//         const res = await db.insert(cartTable).values({
//             user_id: "asfjfjasj" as string,
//             session_id: "hsafjasfjasf" as string,
//             email: "taharizwan2k@gmail.com" as string,
//         }).returning();
//         return NextResponse.json({res})
        
//     } catch (error) {
//         console.log(error);
        
//         return NextResponse.json({message:"Something went wrong"})
//     }

// }