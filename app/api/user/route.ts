
// import { db, cartTable } from "@/sanity/lib/drizzle";
// import { clerkClient } from "@clerk/nextjs/server";
// import { IncomingHttpHeaders } from "http";
// import Email from "next-auth/providers/email";
// import { headers } from "next/headers";
// import { NextResponse } from "next/server";
// import { Webhook, WebhookRequiredHeaders } from "svix";

// const webhookSecret = process.env.WEBHOOK_SECRET || "";

// async function handler(request: Request) {
//   const payload = await request.json();
//   const headersList = headers();
//   const heads = {
//     "svix-id": headersList.get("svix-id"),
//     "svix-timestamp": headersList.get("svix-timestamp"),
//     "svix-signature": headersList.get("svix-signature"),
//   };
//   const wh = new Webhook(webhookSecret);
//   let evt: Event | null = null;

//   try {
//     evt = wh.verify(
//       JSON.stringify(payload),
//       heads as IncomingHttpHeaders & WebhookRequiredHeaders
//     ) as Event;
//   } catch (err) {
//     console.error((err as Error).message);
//     return NextResponse.json({}, { status: 400 });
//   }



//   const eventType: EventType = evt.type;
//   if (eventType === "user.created" || eventType === "user.updated") {
//     const { id, EMAIL, email, Email } = evt.data;


    
//     console.log("ID:"+id);
//     console.log("EMAIL: "+ EMAIL);
//     console.log("EMAIL: "+ email);
//     console.log("EMAIL: "+ Email);

//     try {
//       await db.insert(cartTable).values({
//         user_id: id.toString(),
//         quantity: 1,
//         email: email.toString(),
//       }).execute();
//     } catch (err) {
//       console.error((err as Error).message);
//       return NextResponse.json({}, { status: 500 });
//     }
//   }

//   return NextResponse.json({}, { status: 200 });
// }


    

// type EventType = "user.created" | "user.updated" | "*";

// type Event = {
//   data: Record<string, string | number>;
//   object: "event";
//   type: EventType;
// };

// export const GET = handler;
// export const POST = handler;
// export const PUT = handler;





// // Attempt 2


// // import { NextApiRequest, NextApiResponse } from 'next';
// // import { clerkClient } from '@clerk/nextjs/api';

// // interface WebhookConstructEventPayload {
// //   type: string;
// //   data: Record<string, any>;
// // }

// // async function handler(req: NextApiRequest, res: NextApiResponse) {
// //   const webhookSecret = process.env.WEBHOOK_SECRET || '';

// //   try {
// //     const webhook = await clerkClient.webhooks.constructEvent(
// //       req.body as WebhookConstructEventPayload,
// //       req.headers['clerk-signature'] as string,
// //       webhookSecret
// //     );

// //     // Process the webhook event here

// //     res.status(200).end();
// //   } catch (error) {
// //     console.error(error);
// //     res.status(400).end();
// //   }
// // }

// // export default handler;


// // Attempt 3 


// // import { IncomingHttpHeaders } from "http";
// // import type { NextApiRequest, NextApiResponse } from "next";
// // import { Webhook, WebhookRequiredHeaders } from "svix";
// // import { buffer } from "micro";
// // import { cartTable } from "@/sanity/lib/drizzle";

// // Disable the bodyParser so we can access the raw
// // request body for verification.
// // export const config = {
// //   api: {
// //     bodyParser: false,
// //   },
// // };

// // const webhookSecret: string = process.env.WEBHOOK_SECRET || "";

// // export default async function handler(
// //   req: NextApiRequestWithSvixRequiredHeaders,
// //   res: NextApiResponse
// // ) {
// //   // Verify the webhook signature
// //   // See https://docs.svix.com/receiving/verifying-payloads/how
// //   const payload = (await buffer(req)).toString();
// //   const headers = req.headers;
// //   const wh = new Webhook(webhookSecret);
// //   let evt: Event | null = null;
// //   try {
// //     evt = wh.verify(payload, headers) as Event;
// //   } catch (_) {
// //     return res.status(400).json({});
// //   }

// //   // Handle the webhook
// //   const eventType: EventType = evt.type;
// //   if (eventType === "user.created" || eventType === "user.updated") {
// //     const { id, ...attributes } = evt.data;
// //     await cartTable(id as string, attributes);
// //   }

// //   res.json({});
// // }

// // type NextApiRequestWithSvixRequiredHeaders = NextApiRequest & {
// //   headers: IncomingHttpHeaders & WebhookRequiredHeaders;
// // };

// // // Generic (and naive) way for the Clerk event
// // // payload type.
// // type Event = {
// //   data: Record<string, string | number>;
// //   object: "event";
// //   type: EventType;
// // };

// // type EventType = "user.created" | "user.updated" | "*";



// // Attempt 4:

// // import { getAuth } from "@clerk/nextjs/server";
// // import type { NextRequest, NextResponse } from 'next/server'

// // export default async function GET(req: NextRequest, res: NextResponse) {
// //   const { userId } = getAuth(req);
// //   console.log(userId);
  
//     // Load any data your application needs for the API route
//   // return res.status(200).json({data})
// // };


// import { getAuth } from "@clerk/nextjs/server";
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // const { userId } = getAuth(req);
//   // console.log(userId);
  
//     // Load any data your application needs for the API route
//   return res.status(200).json({name: "harry"})
// };