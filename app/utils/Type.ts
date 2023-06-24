import {Image as IImage} from "sanity";



export interface IProduct{
  
    _id:string,
    title:string,
    description:string,
    price:number,
    image:IImage,
      category:{  
        name:string
      }
  
}