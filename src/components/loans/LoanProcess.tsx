
import { Badge } from "@/components/ui/badge";

interface ProcessStep {
  title: string;
  description: string;
}

interface LoanProcessProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  steps: ProcessStep[];
  className?: string;
}

const LoanProcess = ({
  title,
  subtitle,
  badgeText,
  steps,
  className = ""
}: LoanProcessProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {badgeText && (
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-green border-fintech-green">
              {badgeText}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative text-center px-6 pb-10 md:pb-0">
              <div className="w-16 h-16 bg-fintech-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-green">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connector (only for items before the last one) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-gray-200">
                  <div className="absolute right-0 top-0 h-1 w-1/2 bg-fintech-green/20"></div>
                  {index > 0 && <div className="absolute left-0 top-0 h-1 w-1/2 bg-fintech-blue/20"></div>}
                </div>
              )}
              
              {/* Last item connector */}
              {index === steps.length - 1 && index > 0 && (
                <div className="hidden md:block absolute top-8 left-0 w-1/2 h-1 bg-fintech-purple/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanProcess;
