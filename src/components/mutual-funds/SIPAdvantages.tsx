
interface Advantage {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface SIPAdvantagesProps {
  advantages: Advantage[];
}

const SIPAdvantages = ({ advantages }: SIPAdvantagesProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white via-purple-50/30 to-white text-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Advantages of </span>
            <span className="text-fintech-orange">Mutual Fund SIP</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Systematic Investment Plans offer numerous advantages for long-term wealth creation and financial discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-start gap-4">
                {advantage.icon}
                <div>
                  <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SIPAdvantages;
