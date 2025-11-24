import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface LoanCTAProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  gradientFrom?: string;
  gradientTo?: string;
  className?: string;
}

const LoanCTA = ({
  title,
  subtitle,
  badgeText,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  gradientFrom = "from-fintech-green",
  gradientTo = "to-fintech-blue",
  className = "",
}: LoanCTAProps) => {
  return (
    <section className={`py-16 bg-gradient-to-r ${gradientFrom} ${gradientTo} relative overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0zMCA0NGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PHBhdGggZD0iTTI0IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          {badgeText && (
            <Badge variant="outline" className="mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm border-white">
              {badgeText}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl mb-8">{subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {/* <Button 
              size="lg" 
              className="bg-white text-fintech-green hover:bg-white/90"
              onClick={onPrimaryClick}
            >
              {primaryButtonText}
            </Button>
            {secondaryButtonText && (
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={onSecondaryClick}
              >
                {secondaryButtonText}
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanCTA;
