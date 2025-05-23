
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLoanCalculator } from '@/hooks/useLoanCalculator';

interface LoanCalculatorProps {
  initialLoanAmount?: number;
  initialInterestRate?: number;
  initialLoanTenure?: number;
  loanAmountMin?: number;
  loanAmountMax?: number;
  interestRateMin?: number;
  interestRateMax?: number;
  tenureMin?: number;
  tenureMax?: number;
  className?: string;
  onApply?: () => void;
}

const LoanCalculator = ({
  initialLoanAmount = 500000,
  initialInterestRate = 10.5,
  initialLoanTenure = 36,
  loanAmountMin = 50000,
  loanAmountMax = 5000000,
  interestRateMin = 5,
  interestRateMax = 20,
  tenureMin = 12,
  tenureMax = 84,
  className = '',
  onApply
}: LoanCalculatorProps) => {
  const {
    loanAmount,
    interestRate,
    loanTenure,
    emi,
    totalInterest,
    totalPayable,
    setLoanAmount,
    setInterestRate,
    setLoanTenure
  } = useLoanCalculator({
    initialLoanAmount,
    initialInterestRate,
    initialLoanTenure
  });

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      <Card className="border-none shadow-md">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <Label htmlFor="loan-amount" className="flex justify-between">
                <span>Loan Amount (₹)</span>
                <span className="font-medium text-fintech-purple">{loanAmount.toLocaleString()}</span>
              </Label>
              <Slider 
                value={[loanAmount]} 
                min={loanAmountMin} 
                max={loanAmountMax} 
                step={10000} 
                onValueChange={value => setLoanAmount(value[0])} 
                className="mt-4" 
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>₹{(loanAmountMin/1000).toLocaleString()}K</span>
                <span>₹{(loanAmountMax/100000).toLocaleString()}L</span>
              </div>
            </div>
            
            <div>
              <Label htmlFor="interest-rate" className="flex justify-between">
                <span>Interest Rate (%)</span>
                <span className="font-medium text-fintech-purple">{interestRate}%</span>
              </Label>
              <Slider 
                value={[interestRate]} 
                min={interestRateMin} 
                max={interestRateMax} 
                step={0.1} 
                onValueChange={value => setInterestRate(value[0])} 
                className="mt-4" 
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{interestRateMin}%</span>
                <span>{interestRateMax}%</span>
              </div>
            </div>
            
            <div>
              <Label htmlFor="loan-tenure" className="flex justify-between">
                <span>Loan Tenure (months)</span>
                <span className="font-medium text-fintech-purple">{loanTenure} months</span>
              </Label>
              <Slider 
                value={[loanTenure]} 
                min={tenureMin} 
                max={tenureMax} 
                step={1} 
                onValueChange={value => setLoanTenure(value[0])} 
                className="mt-4" 
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>{Math.floor(tenureMin/12)} Year{tenureMin > 12 ? 's' : ''}</span>
                <span>{Math.floor(tenureMax/12)} Years</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="bg-gradient-to-br from-fintech-green/10 to-fintech-blue/10 rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold mb-2">Loan Summary</h3>
          <p className="text-sm text-gray-600">Based on your selected parameters</p>
        </div>
        
        <div className="p-6 flex flex-col gap-6 flex-grow">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
            <p className="text-3xl font-bold text-fintech-green">₹{emi.toLocaleString()}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <p className="text-sm text-gray-600 mb-1">Total Interest</p>
              <p className="text-xl font-semibold">₹{totalInterest.toLocaleString()}</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
              <p className="text-sm text-gray-600 mb-1">Total Amount</p>
              <p className="text-xl font-semibold">₹{totalPayable.toLocaleString()}</p>
            </div>
          </div>
          
          {onApply && (
            <div className="mt-auto">
              <Button onClick={onApply} className="w-full bg-fintech-green text-white hover:bg-fintech-green/90">
                Apply Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
