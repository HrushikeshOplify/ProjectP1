
import {products} from "@/components/Products/ProductsData";


const page = () => {
  return (
    <>
      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
            Our Products
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-contain mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-700 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.link}
                  className="text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-700"
                >
                  {product.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
