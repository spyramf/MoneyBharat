
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface LoanFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface LoanFeaturesProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  features: LoanFeature[];
  className?: string;
}

const LoanFeatures = ({
  title,
  subtitle,
  badgeText,
  features,
  className = ""
}: LoanFeaturesProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {badgeText && (
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-purple border-fintech-purple">
              {badgeText}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanFeatures;
