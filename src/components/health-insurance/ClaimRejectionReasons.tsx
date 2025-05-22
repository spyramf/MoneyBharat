
import React from "react";
import { Check, FileWarning } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface RejectionReason {
  id: string;
  title: string;
  description: string;
}

const rejectionReasons: RejectionReason[] = [
  {
    id: "non-disclosure",
    title: "Non-Disclosure of Pre-existing Conditions",
    description: "Failing to disclose pre-existing conditions at the time of policy purchase can lead to claim rejection. Always provide complete medical history."
  },
  {
    id: "waiting-period",
    title: "Waiting Period Restrictions",
    description: "Claims made during specified waiting periods for certain conditions or treatments are automatically rejected. Be aware of all waiting periods in your policy."
  },
  {
    id: "policy-exclusions",
    title: "Policy Exclusions",
    description: "Treatments or conditions specifically excluded in the policy terms will not be covered. Read your policy document thoroughly to understand all exclusions."
  },
  {
    id: "delayed-intimation",
    title: "Delayed Claim Intimation",
    description: "Not informing the insurer about hospitalization within the specified timeframe can result in claim denial. Report all hospitalizations immediately."
  },
  {
    id: "incomplete-documentation",
    title: "Incomplete Documentation",
    description: "Missing or inadequate documentation leads to claim rejection. Ensure all required documents are submitted correctly and completely."
  },
  {
    id: "non-medical-expenses",
    title: "Non-Medical Expenses",
    description: "Items like toiletries, administrative charges, or dietary supplements are typically not covered and will be deducted from the claim amount."
  }
];

const preventionTips = [
  "Disclose all pre-existing conditions truthfully at the time of policy purchase",
  "Read and understand the policy terms, conditions, exclusions, and waiting periods",
  "Inform the insurer about hospitalization immediately or within the specified timeframe",
  "Keep all original medical bills, reports, and documents safely",
  "Submit complete and accurate claim documents within the prescribed time limit"
];

const ClaimRejectionReasons = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Common Reasons for Claim Rejection</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding why health insurance claims get denied and how to avoid rejection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-10">
          {rejectionReasons.map((reason) => (
            <Card key={reason.id} className="border border-gray-100 bg-gray-50/50">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="mt-1 text-red-400 flex-shrink-0">
                    <FileWarning className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border border-green-100 bg-green-50/70 max-w-6xl mx-auto">
          <CardContent className="p-6">
            <div>
              <h3 className="font-semibold text-lg mb-4 text-green-800 flex items-center gap-2">
                <Check className="h-5 w-5" /> How to Avoid Claim Rejection
              </h3>
              <ul className="space-y-2">
                {preventionTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-green-500 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ClaimRejectionReasons;
