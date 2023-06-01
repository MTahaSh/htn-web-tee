import { defineField } from "sanity";

export const products = {
    name: "products",
    type: "document",
    title: "Product",
    fields:[{
        name:"title",
        title:"Product title",
        type:"string",
    },
    {
        name:"description",
        title:"Decription title",
        type:"string",
    },
    {
        name:"price",
        title:"Product Pricing",
        type:"number"
    },
    {
        name:"image",
        title:"Product image",
        type:"image",
    },
    defineField({
        name:"category",
        title:"Product Category",
        type: "reference",
        to:[
            {
                type:"category"
            }
        ]
    }),
   
    ]

}