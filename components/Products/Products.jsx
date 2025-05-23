import Image from "next/image";
import { ProductsData } from "./ProductsData";

const Products = () => {
  return (
    <>
      <div className="flex flex-col justify-center px-5">
        <div>
          <h1 className="text-3xl text-gray-600 font-semibold text-center ">
            Production Ready & Developer Friendly Bootstrap Admin Template{" "}
          </h1>
        </div>

        <div className="flex justify-center ">
          <div className="text-center grid grid-cols-1 gap-6 p-4  md:grid-cols-2 md:mt-6  lg:grid-cols-3 ">
            {ProductsData.map((product)=>(
                <Image
              src={product.productimg}
              width={300}
              height={250}
              className="rounded-md border-2 border-gray-200"
              alt="pro"
            />
            ))}
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
