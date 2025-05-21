
interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface AdditionalFeaturesProps {
  features: Feature[];
}

const AdditionalFeatures = ({ features }: AdditionalFeaturesProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-purple-50/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Aaj Ka </span>
              <span className="text-fintech-green">Investment</span>
              <span className="text-gray-800">, Kal Ka </span>
              <span className="text-fintech-green">Benefit</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Invest in Mutual Funds to build a financially secure future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-fintech-purple/30 transition-all duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="relative">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalFeatures;
