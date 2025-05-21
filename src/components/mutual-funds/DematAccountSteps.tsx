
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DematStep {
  title: string;
  description: string;
  icon: JSX.Element;
  number: number;
}

interface DematAccountStepsProps {
  steps: DematStep[];
}

const DematAccountSteps = ({ steps }: DematAccountStepsProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Open Mutual Fund Account in </span>
              <span className="text-fintech-green">3 Steps</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Start your investment journey with a quick and easy account setup process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden animate-fade-in"
                style={{
                  animationDelay: `${index * 200}ms`
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    {step.icon}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-fintech-green to-fintech-blue rounded-full flex items-center justify-center text-white font-bold text-lg animate-enhanced-glow">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://spyraexima.wylth.com/NewOnBoarding/SignUp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(155,135,245,0.3)]">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DematAccountSteps;
