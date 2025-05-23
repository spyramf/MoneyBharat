
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LoanHeroProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

const LoanHero = ({
  title,
  subtitle,
  badgeText,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  gradientFrom = "from-fintech-green/10",
  gradientTo = "to-fintech-blue/10",
  className = ""
}: LoanHeroProps) => {
  return (
    <section className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} py-16 md:py-[100px] relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badgeText && (
            <Badge variant="outline" className="mb-4 px-4 py-1 bg-white/90 backdrop-blur-sm border-fintech-green">
              {badgeText}
            </Badge>
          )}
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            {subtitle}
          </p>
          {(primaryButtonText || secondaryButtonText) && (
            <div className="flex flex-wrap justify-center gap-4">
              {primaryButtonText && (
                <Button 
                  size="lg" 
                  className="hover:bg-fintech-deep-purple text-white bg-fintech-green"
                  onClick={onPrimaryClick}
                >
                  {primaryButtonText}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-fintech-green text-fintech-green hover:bg-fintech-green/10"
                  onClick={onSecondaryClick}
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-fintech-green/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-fintech-blue/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default LoanHero;
