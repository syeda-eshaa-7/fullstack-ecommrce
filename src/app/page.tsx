
import Hero from "./components/Hero";
import Slider from "./components/Slider";

import Catagory from "./components/Catagory";
import Explor from "./components/Explor";
import Featured from "./components/Featured";
import OurProducts from "./components/OurProducts";
import sanityHelpers from "@/sanity/helpers";
export const dynamic = 'force-static'
export const revalidate = 60

const { getAllCategories, getAllProducts, getSale } = sanityHelpers;


export default async function Home() {
 
  const sales:any = await getSale();
  
  return (
    <div >
   
      <Hero sales={sales}/>
      <Slider/>
      <Featured />
      <Catagory />
    
      <Explor />
      <OurProducts />
    </div>
  );
}
