
/**
 * Calculate EMI (Equated Monthly Installment)
 * @param principal Loan amount
 * @param interestRate Annual interest rate (in percentage)
 * @param tenure Loan tenure in months
 * @returns Monthly EMI amount (rounded to nearest integer)
 */
export const calculateEmi = (
  principal: number,
  interestRate: number,
  tenure: number
): number => {
  const rateMonthly = interestRate / 12 / 100;
  const emi = 
    principal * 
    rateMonthly * 
    Math.pow(1 + rateMonthly, tenure) / 
    (Math.pow(1 + rateMonthly, tenure) - 1);
  
  return Math.round(emi);
};

/**
 * Calculate total interest payable over loan tenure
 * @param emi Monthly EMI
 * @param principal Loan amount
 * @param tenure Loan tenure in months
 * @returns Total interest payable
 */
export const calculateTotalInterest = (
  emi: number,
  principal: number,
  tenure: number
): number => {
  return emi * tenure - principal;
};

/**
 * Calculate total amount payable (principal + interest)
 * @param emi Monthly EMI
 * @param tenure Loan tenure in months
 * @returns Total amount payable
 */
export const calculateTotalPayable = (
  emi: number,
  tenure: number
): number => {
  return emi * tenure;
};
