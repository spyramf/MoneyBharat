
import { useState, useEffect } from 'react';
import { calculateEmi, calculateTotalInterest, calculateTotalPayable } from '@/utils/loanCalculator';

interface UseLoanCalculatorProps {
  initialLoanAmount?: number;
  initialInterestRate?: number;
  initialLoanTenure?: number;
}

interface LoanCalculationResult {
  loanAmount: number;
  interestRate: number;
  loanTenure: number;
  emi: number;
  totalInterest: number;
  totalPayable: number;
  setLoanAmount: (amount: number) => void;
  setInterestRate: (rate: number) => void;
  setLoanTenure: (tenure: number) => void;
}

export const useLoanCalculator = ({
  initialLoanAmount = 500000,
  initialInterestRate = 10.5,
  initialLoanTenure = 36
}: UseLoanCalculatorProps = {}): LoanCalculationResult => {
  const [loanAmount, setLoanAmount] = useState<number>(initialLoanAmount);
  const [interestRate, setInterestRate] = useState<number>(initialInterestRate);
  const [loanTenure, setLoanTenure] = useState<number>(initialLoanTenure);
  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayable, setTotalPayable] = useState<number>(0);

  useEffect(() => {
    const calculatedEmi = calculateEmi(loanAmount, interestRate, loanTenure);
    setEmi(calculatedEmi);
    setTotalInterest(calculateTotalInterest(calculatedEmi, loanAmount, loanTenure));
    setTotalPayable(calculateTotalPayable(calculatedEmi, loanTenure));
  }, [loanAmount, interestRate, loanTenure]);

  return {
    loanAmount,
    interestRate,
    loanTenure,
    emi,
    totalInterest,
    totalPayable,
    setLoanAmount,
    setInterestRate,
    setLoanTenure
  };
};
