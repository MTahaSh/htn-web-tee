  import React from 'react'
  import AddToCart from './AddToCart'
  import {Image as IImage, renderStudio} from "sanity";
  import { client } from '@/sanity/lib/client'
  import Image from 'next/image';
  import { urlForImage } from '@/sanity/lib/image';
  import { Quantity } from '../Quantity';
  import { useState, useEffect } from 'react';
import { ProductDetail } from './ProductDetail';

  const getData = async()=>{
    const res = await client.fetch(`*[_type == "products"] {
      _id,
      title,
      description,
      price,
      image,
        category -> {
          name
        }
    }`);
    return res;
  }

  interface IProduct{
    
      _id:string,
      title:string,
      description:string,
      price:number,
      image:IImage,
        category:{  
          name:string
        }
    
  }






  export default async function Page({params}: {params:{key: string, slug:string}}) {
    const data: IProduct[] = await getData();
  


    const getProductDetail = (id:string) => {
      return data.filter((item)=>item._id == id)
    }

    
  const result = getProductDetail(params.slug);
  console.log(result);


  // const [data, setData] = useState<IProduct[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res: IProduct[] = await client.fetch(`*[_type == "products"] {
  //         _id,
  //         title,
  //         description,
  //         price,
  //         image,
  //         category -> {
  //           name
  //         }
  //       }`);
  //       setData(res);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const getProductDetail = (id: string) => {
  //   return data.filter((item) => item._id === id);
  // };

  // const result = getProductDetail(params.slug);
  // console.log("Result variable:", result);

  // if (result.length === 0) {
  //   return <div><h1>No product found.</h1></div>;
  // }

    return (
      <div>
        
          {result.map((item)=>(
            <ProductDetail key={item._id} item={item}/>

          ))}
                  
        
          
      </div>
    )
  }

