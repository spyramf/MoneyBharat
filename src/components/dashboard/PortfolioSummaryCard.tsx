
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, DollarSign, PieChart } from 'lucide-react';

interface PortfolioSummaryCardProps {
  totalValue: number;
  totalInvestment: number;
  gainLoss: number;
  gainLossPercentage: number;
  activeSIPs: number;
  sipAmount: number;
}

const PortfolioSummaryCard = ({
  totalValue,
  totalInvestment,
  gainLoss,
  gainLossPercentage,
  activeSIPs,
  sipAmount
}: PortfolioSummaryCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const isPositive = gainLoss >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Current Value</p>
              <p className="text-2xl font-bold">{formatCurrency(totalValue)}</p>
            </div>
            <div className="p-2 rounded-full bg-blue-100">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Investment</p>
              <p className="text-2xl font-bold">{formatCurrency(totalInvestment)}</p>
            </div>
            <div className="p-2 rounded-full bg-green-100">
              <PieChart className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Gain/Loss</p>
              <p className={`text-2xl font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(gainLoss)}
              </p>
              <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                ({isPositive ? '+' : ''}{gainLossPercentage.toFixed(2)}%)
              </p>
            </div>
            <div className={`p-2 rounded-full ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
              {isPositive ? (
                <TrendingUp className={`h-6 w-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
              ) : (
                <TrendingDown className={`h-6 w-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active SIPs</p>
              <p className="text-2xl font-bold">{activeSIPs}</p>
              <p className="text-sm text-gray-600">{formatCurrency(sipAmount)}/month</p>
            </div>
            <div className="p-2 rounded-full bg-purple-100">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PortfolioSummaryCard;
