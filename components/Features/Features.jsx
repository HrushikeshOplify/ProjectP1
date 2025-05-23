import { FeatureData } from "./FeaturesData";

const Features = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
       <div>
            <h1 className="text-3xl font-semibold text-gray-600">Other Amazing Features & Flexibility Provided</h1>
        </div> 
      <div className="grid gap-3 p-4 max-w-6xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {FeatureData.map((feature) => (
          <div className="text-center ">
           <p className="text-4xl text-[#635bff] "> {feature.featureIcon}</p>
            < p className="text-xl font-semibold text-gray-700">{feature.featureName}</p>
            <p className=" text-gray-700">{feature.featureDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
