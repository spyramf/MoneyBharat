
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Fund {
  name: string;
  performance: string;
  category: string;
  returns: string;
  aum: string;
  risk: string;
  colorClass: string;
}

interface TopPerformingFundsProps {
  funds: Fund[];
}

const TopPerformingFunds = ({ funds }: TopPerformingFundsProps) => {
  return (
    <section className="px-4 md:px-8 bg-white py-[10px]">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Top Performing Funds</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our selection of top-performing mutual funds across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {funds.map((fund, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 100}ms`
              }}
              className="bg-white border border-gray-100 p-6 shadow-md hover:shadow-lg hover:border-fintech-purple/30 transition-all duration-300 animate-fade-in px-[24px] rounded-xl py-[40px]"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
              </div>
              <h3 className="font-bold text-lg text-center mb-4">{fund.name}</h3>
              <div className="flex justify-between items-center mb-2 py-[5px]">
                <span className="text-gray-600">Returns (CAGR)</span>
                <span className="font-bold text-green-600">{fund.returns}</span>
              </div>
              <div className="flex justify-between items-center mb-2 py-[5px]">
                <span className="text-gray-600">Category</span>
                <span>{fund.category}</span>
              </div>
              <div className="flex justify-between items-center mb-2 py-[5px]">
                <span className="text-gray-600">AUM</span>
                <span>{fund.aum}</span>
              </div>
              <div className="flex justify-between items-center mb-4 py-[5px]">
                <span className="text-gray-600">Risk</span>
                <span className={`px-2 py-1 rounded-full text-xs text-white ${fund.colorClass}`}>{fund.risk}</span>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" className="w-full hover:bg-gray-50 group">
                  Invest Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPerformingFunds;
