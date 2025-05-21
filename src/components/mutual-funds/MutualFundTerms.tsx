
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

interface MutualFundTerm {
  term: string;
  definition: string;
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor?: string;
}

interface MutualFundTermsProps {
  terms: MutualFundTerm[];
}

const MutualFundTerms = ({ terms }: MutualFundTermsProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white text-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gray-800">Important Terms </span>
            <span className="text-orange-500">Related to </span>
            <span className="text-green-500">Mutual Funds</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Familiarize yourself with these key mutual fund terms to make informed investment decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {terms.map((term, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <Card className="border border-gray-200 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in cursor-pointer overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className={`rounded-full p-3 mb-4 ${term.bgColor || 'bg-green-100'}`}>
                        {term.icon}
                      </div>
                      <h3 className="font-bold text-xl mb-2">{term.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{term.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent side="top" className="w-80 p-4 shadow-xl bg-white border border-gray-200">
                <div className="flex flex-col gap-2">
                  <h4 className="font-bold text-lg">{term.term}</h4>
                  <p className="text-gray-700">{term.definition}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MutualFundTerms;
