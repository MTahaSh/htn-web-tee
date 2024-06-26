import { IProduct } from "./Type";
import { client } from '@/sanity/lib/client'

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


 const MyData =  async(): Promise<IProduct[]> => {

    const data: IProduct[] = await getData();
    return data;
  }

  export default MyData;