
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section className="px-4 md:px-8 bg-white py-16">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Top Performing Funds</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our selection of mutual funds with consistent performance
          </p>
        </div>
        
        <Card className="shadow-sm border border-gray-100 rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="w-[250px] py-4">Fund Name</TableHead>
                  <TableHead className="w-[120px] py-4">Category</TableHead>
                  <TableHead className="w-[120px] py-4">1Y Returns</TableHead>
                  <TableHead className="w-[120px] py-4">AUM</TableHead>
                  <TableHead className="w-[120px] py-4">Risk</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {funds.map((fund, index) => (
                  <TableRow 
                    key={index}
                    className={`${fund.borderColor} hover:bg-gray-50 transition-colors`}
                  >
                    <TableCell className="py-4">
                      <div className="font-medium">{fund.name}</div>
                      <div className="text-sm text-gray-500">{fund.description}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-100 font-medium">
                        {fund.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-green-600">{fund.returns}</TableCell>
                    <TableCell>{fund.aum}</TableCell>
                    <TableCell>
                      <Badge className={`${fund.riskColorClass} border-0`}>
                        {fund.risk}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <div className="p-4 flex justify-center border-t border-gray-100">
            <Button className="bg-green-500 hover:bg-green-600">
              View All Mutual Funds
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TopPerformingFunds;
