
interface Tip {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ChooseMutualFundsTipsProps {
  tips: Tip[];
}

const ChooseMutualFundsTips = ({ tips }: ChooseMutualFundsTipsProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white via-green-50/30 to-white text-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">How to Choose the </span>
            <span className="text-fintech-green">Best Mutual Funds</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Consider these factors when selecting mutual funds for your investment portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex flex-col items-center text-center gap-4">
                {tip.icon}
                <div>
                  <h3 className="font-bold text-xl mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseMutualFundsTips;
