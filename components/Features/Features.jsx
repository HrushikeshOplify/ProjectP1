import { FeatureData } from "./FeaturesData";

const Features = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-700 text-center mb-8">
        Other Amazing Features & Flexibility Provided
      </h1>

      <div className="grid gap-6 max-w-7xl w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {FeatureData.map((feature, index) => (
          <div
            key={index}
            className="bg-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl text-[#635bff]">{feature.featureIcon}</span>
              <h2 className="text-lg font-semibold text-gray-800">{feature.featureName}</h2>
            </div>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 text-md">
              {feature.featureDesc.map((item, idx) => (
                <li className="marker:text-indigo-600" key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
