import { NextResponse, NextRequest } from "next/server";
import next from "next/types";
import Stripe from "stripe";


const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key,{
    apiVersion: "2022-11-15",
});

export async function POST (request:NextRequest) {
    const data = await request.json();

    try {
    if(data.length > 0)
    {
        const session = await stripe.checkout.sessions.create({
            submit_type:"pay",
            mode: 'payment',
            payment_method_types:["card"],
            billing_address_collection:"auto",
            shipping_options:[
                {shipping_rate: "shr_1NK3wsGsSLAnNPJYUz5VGx3i"}
            ],

            line_items:data.map((item:any)=>
            {
                return {
                    price_data:{
                        currency: "gbp",
                        product_data:{
                            name:item.name,
                        },
                        unit_amount: item.price * 100,
                    },
                    
                    quantity: item.quantity,
                    adjustable_quantity: {
                        enabled:true,
                        minimum:1,
                        maximum:10
                    }
                };

            }),
            success_url: `${request.headers.get("origin")}/success`,
            cancel_url: `${request.headers.get("origin")}/?canceled=true`,
          });
          return NextResponse.json({session})

    }

    else {
        return NextResponse.json({message:"No data found"});
    }
        
            console.log(data);
            
          // Create Checkout Sessions from body params.
          
        } catch (err:any) {
            return NextResponse.json(err.message);
        }

}
 