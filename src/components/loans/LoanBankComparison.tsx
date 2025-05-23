
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface BankComparisonItem {
  bank: string;
  interestRate: string;
  processingFee: string;
  prepaymentCharges: string;
}

interface LoanBankComparisonProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  loanComparisons: BankComparisonItem[];
  onApply?: (bank: string) => void;
  className?: string;
}

const LoanBankComparison = ({
  title,
  subtitle,
  badgeText,
  loanComparisons,
  onApply,
  className = ""
}: LoanBankComparisonProps) => {
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {badgeText && (
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-orange border-fintech-orange">
              {badgeText}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg border border-gray-100">
          <div className="bg-gradient-to-r from-fintech-green/10 to-fintech-blue/10 p-6 rounded-t-xl">
            <h3 className="text-xl font-bold text-center">Compare Loan Options</h3>
            <p className="text-center text-gray-600 text-sm mt-2">Updated as of May 2025</p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-b-xl">
            <Table>
              <TableHeader className="bg-gray-50 border-b border-gray-200">
                <TableRow>
                  <TableHead className="py-4 px-6 text-left font-semibold text-gray-700 w-[200px]">Bank / NBFC</TableHead>
                  <TableHead className="py-4 px-6 text-left font-semibold text-gray-700">Interest Rate</TableHead>
                  <TableHead className="py-4 px-6 text-left font-semibold text-gray-700">Processing Fee</TableHead>
                  <TableHead className="py-4 px-6 text-left font-semibold text-gray-700">Prepayment Charges</TableHead>
                  <TableHead className="py-4 px-6 text-center font-semibold text-gray-700 w-[120px]">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanComparisons.map((bank, index) => (
                  <TableRow key={index} className={`border-b border-gray-200 hover:bg-gray-50/70 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-fintech-purple/10 rounded-full flex items-center justify-center mr-3 text-white font-bold" style={{
                          backgroundColor: index === 0 ? "#6366f1" : index === 1 ? "#8b5cf6" : index === 2 ? "#0369a1" : index === 3 ? "#14b8a6" : "#f59e0b"
                        }}>
                          {bank.bank.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{bank.bank}</p>
                          <p className="text-xs text-gray-500">Personal Loan</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-medium">
                        {bank.interestRate}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200 font-medium">
                        {bank.processingFee}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 font-medium">
                        {bank.prepaymentCharges}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4 px-6 text-center">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="text-fintech-green border-fintech-green hover:bg-fintech-green/10"
                        onClick={() => onApply && onApply(bank.bank)}
                      >
                        Apply
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="bg-gray-50 p-4 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Rates and charges are indicative and may vary based on eligibility criteria and loan amount
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanBankComparison;
