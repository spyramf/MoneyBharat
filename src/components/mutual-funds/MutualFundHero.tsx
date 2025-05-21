
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MutualFundHero = () => {
  return (
    <section className="pt-28 pb-16 px-4 md:px-8 bg-gradient-to-br from-white via-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Simplify</span> Your Mutual Fund Investments
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Invest smarter with Money Bharat's curated mutual funds selection, zero commission, and expert guidance.
          </p>
          <a
            href="https://spyraexima.wylth.com/NewOnBoarding/SignUp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-lg px-8 py-6">
              Start Investing Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MutualFundHero;
