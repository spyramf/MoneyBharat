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
const TopPerformingFunds = ({
  funds
}: TopPerformingFundsProps) => {
  return <section className="px-4 md:px-8 bg-white py-12">
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
        
        <Card className="shadow-sm border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50 border-b">
                  <TableRow>
                    <TableHead className="py-4 px-6 text-gray-700 font-semibold text-base">Fund Name</TableHead>
                    <TableHead className="py-4 px-6 text-gray-700 font-semibold text-base">Category</TableHead>
                    <TableHead className="py-4 px-6 text-gray-700 font-semibold text-base">1Y Returns</TableHead>
                    <TableHead className="py-4 px-6 text-gray-700 font-semibold text-base">AUM</TableHead>
                    <TableHead className="py-4 px-6 text-gray-700 font-semibold text-base">Risk</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {funds.map((fund, index) => <TableRow key={index} className="hover:bg-gray-50 transition-all duration-200 border-0">
                      <TableCell className="py-6 px-6 border-t border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className={`w-1 self-stretch rounded-full ${fund.borderColor.replace("border-l-4 ", "bg-")}`}></div>
                          <div>
                            <div className="font-medium text-gray-800 text-base">{fund.name}</div>
                            <div className="text-sm text-gray-500 mt-1">{fund.description}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-6 border-t border-gray-100">
                        <Badge variant="outline" className={getRiskBadgeStyles(fund.category)}>
                          {fund.category}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-6 px-6 border-t border-gray-100 font-semibold text-green-600 flex items-center gap-1">
                        {fund.returns}
                        <TrendingUp className="w-4 h-4 text-green-500 ml-1" />
                      </TableCell>
                      <TableCell className="py-6 px-6 border-t border-gray-100 font-medium">
                        {fund.aum}
                      </TableCell>
                      <TableCell className="py-6 px-6 border-t border-gray-100">
                        <Badge className={getRiskBadgeStyles(fund.risk)}>
                          {fund.risk}
                        </Badge>
                      </TableCell>
                    </TableRow>)}
                </TableBody>
              </Table>
            </div>
          </CardContent>
          <div className="p-5 flex justify-center border-t border-gray-200 bg-gray-50">
            {/* <Button className="transition-all duration-300 font-medium flex items-center gap-2 px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md bg-fintech-green">
              View All Mutual Funds
              <ArrowRight className="w-4 h-4" />
            </Button> */}
          </div>
        </Card>
      </div>
    </section>;
};

// Helper function to get badge styles based on category or risk level
const getRiskBadgeStyles = (value: string): string => {
  switch (value.toLowerCase()) {
    case 'equity':
      return 'bg-green-50 text-green-700 border-green-100 font-medium px-3 py-1.5';
    case 'hybrid':
      return 'bg-amber-50 text-amber-700 border-amber-100 font-medium px-3 py-1.5';
    case 'debt':
      return 'bg-blue-50 text-blue-700 border-blue-100 font-medium px-3 py-1.5';
    case 'very high':
      return 'bg-red-100 text-red-700 border-0 px-3 py-1.5 font-medium';
    case 'high':
      return 'bg-blue-100 text-blue-700 border-0 px-3 py-1.5 font-medium';
    case 'moderate':
      return 'bg-amber-100 text-amber-700 border-0 px-3 py-1.5 font-medium';
    case 'low':
      return 'bg-green-100 text-green-700 border-0 px-3 py-1.5 font-medium';
    default:
      return 'bg-gray-100 text-gray-700 border-0 px-3 py-1.5 font-medium';
  }
};
export default TopPerformingFunds;