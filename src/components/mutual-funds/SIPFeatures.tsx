
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SipFeature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface SipFeaturesProps {
  features: SipFeature[];
}

const SIPFeatures = ({ features }: SipFeaturesProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Start </span>
              <span className="text-fintech-green">SIP</span>
              <span className="text-gray-800"> with Just </span>
              <span className="text-fintech-orange">₹100</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Invest in Mutual Funds effortlessly with incredible features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-fintech-purple/30 transition-all duration-300 animate-fade-in py-[29px] px-0"
              >
                <div className="flex items-center gap-4 mb-4 px-[5px]">
                  <div className="relative">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                </div>
                <p className="text-gray-600 ml-16 mx-[20px]">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://spyraexima.wylth.com/NewOnBoarding/SignUp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-fintech-green to-fintech-green text-white hover:opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(155,135,245,0.3)]">
                Start Your SIP Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SIPFeatures;
