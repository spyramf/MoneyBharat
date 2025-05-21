
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, ArrowRight } from "lucide-react";

interface Fund {
  name: string;
  returns: string;
  risk: string;
  category: string;
  aum: string;
  colorClass: string;
  description: string;
  borderColor: string;
  riskColorClass: string;
}

interface TopPerformingFundsProps {
  funds: Fund[];
}

const TopPerformingFunds = ({ funds }: TopPerformingFundsProps) => {
  return (
    <section className="px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 relative inline-block">
            Top Performing Funds
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 to-blue-500 transform -translate-y-1"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Our selection of mutual funds with consistent performance and strong returns
          </p>
        </div>
        
        <Card className="shadow-lg border border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="w-[250px] py-4 text-gray-700 font-semibold">Fund Name</TableHead>
                  <TableHead className="w-[120px] py-4 text-gray-700 font-semibold">Category</TableHead>
                  <TableHead className="w-[120px] py-4 text-gray-700 font-semibold">1Y Returns</TableHead>
                  <TableHead className="w-[120px] py-4 text-gray-700 font-semibold">AUM</TableHead>
                  <TableHead className="w-[120px] py-4 text-gray-700 font-semibold">Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {funds.map((fund, index) => (
                  <TableRow 
                    key={index}
                    className={`${fund.borderColor} hover:bg-gray-50 transition-all duration-200 group`}
                  >
                    <TableCell className="py-4">
                      <div className="font-medium text-gray-800 group-hover:text-green-600 transition-colors">{fund.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{fund.description}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100 font-medium px-2.5 py-1">
                        {fund.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-semibold text-green-600 flex items-center gap-1">
                      {fund.returns}
                      <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                    </TableCell>
                    <TableCell className="font-medium">{fund.aum}</TableCell>
                    <TableCell>
                      <Badge className={`${fund.riskColorClass} border-0 px-2.5 py-1 font-medium`}>
                        {fund.risk}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <div className="p-5 flex justify-center border-t border-gray-100 bg-gray-50">
            <Button className="bg-green-500 hover:bg-green-600 transition-all duration-300 font-medium flex items-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md">
              View All Mutual Funds
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TopPerformingFunds;
