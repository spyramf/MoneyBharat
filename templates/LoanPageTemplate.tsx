import React, { useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import LoanHero from "@/components/loans/LoanHero";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface LoanCalculatorConfig {
  initialLoanAmount: number;
  initialInterestRate: number;
  initialLoanTenure: number;
  loanAmountMin: number;
  loanAmountMax: number;
  interestRateMin: number;
  interestRateMax: number;
  tenureMin: number;
  tenureMax: number;
}

interface LoanPageTemplateProps {
  pageTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  heroGradientFrom?: string;
  heroGradientTo?: string;
  featuresTitle: string;
  featuresSubtitle: string;
  features: FeatureItem[];
  calculatorTitle?: string;
  calculatorSubtitle?: string;
  calculatorConfig?: LoanCalculatorConfig;
  eligibilityTitle?: string;
  eligibilitySubtitle?: string;
  eligibilityCriteria?: string[];
  requiredDocuments?: string[];
  processTitle?: string;
  processSubtitle?: string;
  processSteps?: ProcessStep[];
  faqs?: FAQItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaBadgeText?: string;
  ctaPrimaryButton: string;
  ctaSecondaryButton: string;
}

const formatINR = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

const calculateEMI = (loanAmount: number, annualRate: number, tenureMonths: number) => {
  const monthlyRate = annualRate / 12 / 100;
  if (monthlyRate === 0) {
    return loanAmount / tenureMonths;
  }

  const numerator = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths);
  const denominator = Math.pow(1 + monthlyRate, tenureMonths) - 1;
  return numerator / denominator;
};

const LoanPageTemplate: React.FC<LoanPageTemplateProps> = ({
  pageTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  heroGradientFrom = "from-fintech-purple",
  heroGradientTo = "to-fintech-blue",
  featuresTitle,
  featuresSubtitle,
  features,
  calculatorTitle = "EMI Calculator",
  calculatorSubtitle,
  calculatorConfig,
  eligibilityTitle = "Eligibility Criteria",
  eligibilitySubtitle,
  eligibilityCriteria = [],
  requiredDocuments = [],
  processTitle = "Application Process",
  processSubtitle,
  processSteps = [],
  faqs = [],
  ctaTitle,
  ctaSubtitle,
  ctaBadgeText,
  ctaPrimaryButton,
  ctaSecondaryButton,
}) => {
  const [loanAmount, setLoanAmount] = useState(calculatorConfig?.initialLoanAmount ?? 100000);
  const [interestRate, setInterestRate] = useState(calculatorConfig?.initialInterestRate ?? 12);
  const [loanTenure, setLoanTenure] = useState(calculatorConfig?.initialLoanTenure ?? 12);

  const emi = useMemo(() => calculateEMI(loanAmount, interestRate, loanTenure), [loanAmount, interestRate, loanTenure]);
  const totalPayment = emi * loanTenure;
  const totalInterest = totalPayment - loanAmount;

  return (
    <div className="bg-gray-50">
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <LoanHero
        title={heroTitle}
        subtitle={heroSubtitle}
        gradientFrom={heroGradientFrom}
        gradientTo={heroGradientTo}
        primaryButtonText="Apply Now"
        secondaryButtonText="Check Eligibility"
      />

      <div className="container mx-auto px-4 py-12 space-y-12">
        <section>
          <div className="flex flex-col gap-4 text-center mb-10">
            <Badge variant="secondary" className="mx-auto">
              {featuresTitle}
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">{featuresSubtitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="h-full border border-gray-100 shadow-sm">
                <CardContent className="p-6 space-y-4">
                  {feature.icon && <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">{feature.icon}</div>}
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {calculatorConfig && (
          <section className="grid gap-8 lg:grid-cols-2">
            <Card className="border-gray-100 shadow-md">
              <CardContent className="p-6 space-y-6">
                <div>
                  <Badge variant="outline" className="mb-3">
                    {calculatorTitle}
                  </Badge>
                  {calculatorSubtitle && <p className="text-gray-600">{calculatorSubtitle}</p>}
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="loan-amount">Loan Amount</Label>
                    <Input
                      id="loan-amount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      min={calculatorConfig.loanAmountMin}
                      max={calculatorConfig.loanAmountMax}
                      className="mt-2"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formatINR(calculatorConfig.loanAmountMin)} - {formatINR(calculatorConfig.loanAmountMax)}
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="interest-rate">Interest Rate (% p.a.)</Label>
                    <Input
                      id="interest-rate"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      min={calculatorConfig.interestRateMin}
                      max={calculatorConfig.interestRateMax}
                      step={0.1}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="loan-tenure">Tenure (Months)</Label>
                    <Input
                      id="loan-tenure"
                      type="number"
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      min={calculatorConfig.tenureMin}
                      max={calculatorConfig.tenureMax}
                      className="mt-2"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-100 shadow-md bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Estimated EMI</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{formatINR(Math.round(emi))}/month</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Principal Amount</span>
                  <span className="font-semibold">{formatINR(loanAmount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold">{formatINR(Math.round(totalInterest))}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Total Payment</span>
                  <span className="font-semibold">{formatINR(Math.round(totalPayment))}</span>
                </div>
                <Separator />
                <p className="text-xs text-gray-500">
                  *Calculation is for illustration only. Actual EMI may vary based on loan amount, interest rate, tenure, and lender policies.
                </p>
              </CardContent>
            </Card>
          </section>
        )}

        {(eligibilityCriteria.length > 0 || requiredDocuments.length > 0) && (
          <section className="grid gap-8 lg:grid-cols-2">
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-3">
                    {eligibilityTitle}
                  </Badge>
                  {eligibilitySubtitle && <p className="text-gray-600">{eligibilitySubtitle}</p>}
                </div>
                <ul className="space-y-3">
                  {eligibilityCriteria.map((criteria) => (
                    <li key={criteria} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-fintech-purple" />
                      {criteria}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-gray-100 shadow-sm">
              <CardContent className="p-6 space-y-4">
                <div>
                  <Badge variant="outline" className="mb-3">
                    Required Documents
                  </Badge>
                </div>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 h-2 w-2 rounded-full bg-fintech-blue" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {processSteps.length > 0 && (
          <section className="space-y-6">
            <div className="text-center">
              <Badge variant="secondary" className="mx-auto mb-3">
                {processTitle}
              </Badge>
              {processSubtitle && <p className="text-gray-600">{processSubtitle}</p>}
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <Card key={step.title} className="border-gray-100 shadow-sm">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple/10 text-fintech-purple flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`} className="border border-gray-100 rounded-xl px-4">
                  <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}

        <section className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white rounded-3xl p-10 shadow-lg">
          <div className="flex flex-col gap-4 text-center">
            {ctaBadgeText && (
              <span className="inline-flex items-center justify-center text-sm font-semibold px-4 py-1 bg-white/20 rounded-full mx-auto">
                {ctaBadgeText}
              </span>
            )}
            <h2 className="text-3xl font-bold">{ctaTitle}</h2>
            <p className="text-white/80 max-w-3xl mx-auto">{ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button asChild size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
                <Link href="/booking">{ctaPrimaryButton}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link href="/contact">{ctaSecondaryButton}</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoanPageTemplate;
