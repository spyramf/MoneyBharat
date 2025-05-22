
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const InsurancePortability = () => {
  const benefits = [
    {
      id: "waiting-period",
      text: "Continuity of waiting periods for pre-existing conditions"
    },
    {
      id: "no-claim",
      text: "Transfer of No-Claim Bonus accumulated"
    },
    {
      id: "sum-insured",
      text: "Option to increase sum insured"
    },
    {
      id: "features",
      text: "Access to better features and services"
    }
  ];

  const steps = [
    {
      id: 1,
      title: "Apply in Advance",
      description: "Submit portability request to the new insurer at least 45 days before the expiry of your existing policy."
    },
    {
      id: 2,
      title: "Fill Portability Form",
      description: "Complete the portability form and submit it along with details of your current policy and medical history."
    },
    {
      id: 3,
      title: "Information Sharing",
      description: "The new insurer will request your policy details and claim history from your current insurer through the IRDAI web portal."
    },
    {
      id: 4,
      title: "Proposal Evaluation",
      description: "The new insurer evaluates your proposal based on your health declaration, claim history, and underwriting guidelines."
    },
    {
      id: 5,
      title: "Decision & Policy Issuance",
      description: "The new insurer must communicate their decision within 15 days. If approved, you'll receive a new policy with portability benefits."
    }
  ];

  const reminders = [
    "Portability is allowed only at the time of renewal of your existing policy",
    "The new insurer is not obligated to accept your portability request",
    "Waiting periods already served are credited only for the same level of coverage",
    "Additional waiting periods may apply for any enhanced coverage or sum insured"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">What is Health Insurance Portability & How it Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding how to switch insurers without losing benefits
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-4">What is Health Insurance Portability?</h3>
          <p className="text-gray-700">
            Health insurance portability is a facility that allows policyholders to switch from one insurance provider to another 
            without losing the waiting period credits and other benefits accumulated with the previous insurer. It was introduced 
            by the Insurance Regulatory and Development Authority of India (IRDAI) to promote competition and improve customer 
            service in the health insurance sector.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-4">Key Benefits of Portability</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-start gap-2">
                <span className="text-green-500 mt-1 flex-shrink-0">
                  <Check className="h-5 w-5" />
                </span>
                <span className="text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-6">How Portability Works</h3>
          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.id} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-medium">
                    {step.id}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-yellow-200 bg-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 text-white rounded-full p-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg">Important Points to Remember</h4>
              </div>
              <div className="space-y-2">
                {reminders.map((reminder, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{reminder}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InsurancePortability;
