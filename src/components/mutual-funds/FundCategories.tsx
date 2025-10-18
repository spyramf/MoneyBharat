import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FundCategory {
  type: string;
  expectedReturns: string;
  riskLevel: string;
  description: string;
  bgColor: string;
  textColor: string;
  iconBg: string;
  icon: JSX.Element;
}

interface FundCategoriesProps {
  categories: FundCategory[];
}

const FundCategories = ({ categories }: FundCategoriesProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Fund Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the right type of mutual fund for your investment goals and risk appetite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((fund, index) => (
            <div
              key={index}
              className={`${fund.bgColor} card-fund-category card-fade-in`}
              style={{ "--animation-delay": `${index * 150}ms` } as React.CSSProperties}
            >
              <div className="flex justify-center mb-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${fund.iconBg}`}>
                  {fund.icon}
                </div>
              </div>

              <h3 className={`text-2xl font-bold text-center mb-6 ${fund.textColor}`}>{fund.type}</h3>

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-600">Expected Returns</p>
                <p className="font-bold">{fund.expectedReturns}</p>
              </div>

              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">Risk Level</p>
                <p className="font-bold">{fund.riskLevel}</p>
              </div>

              <p className="text-gray-600 text-center mb-6">{fund.description}</p>

              {/* <div className="flex justify-center">
                <Button variant="outline" className="bg-white rounded-full hover:bg-gray-50 group">
                  Explore Funds
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundCategories;
