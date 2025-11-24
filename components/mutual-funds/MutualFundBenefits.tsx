
interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface MutualFundBenefitsProps {
  benefits: Benefit[];
}

const MutualFundBenefits = ({ benefits }: MutualFundBenefitsProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Mutual Fund </span>
            <span className="text-fintech-green">Benefits</span>
          </h2>
          <p className="text-lg text-gray-600">
            Invest in Mutual Funds to build a financially secure future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card-benefit card-fade-in"
              style={{ "--animation-delay": `${index * 150}ms` } as React.CSSProperties}
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="font-bold text-xl ml-3">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MutualFundBenefits;
