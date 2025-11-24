
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, FileText, ClipboardCheck, PhoneCall, Clock, CheckCircle } from "lucide-react";

interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const claimSteps: Step[] = [
  {
    id: "step1",
    number: 1,
    title: "Intimation",
    description: "Inform the insurance company about the death of the policyholder as soon as possible, within the specified timeframe.",
    icon: <PhoneCall className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "step2",
    number: 2,
    title: "Documentation",
    description: "Submit necessary documents including death certificate, policy document, claim form, ID proof, and bank details.",
    icon: <FileText className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "step3",
    number: 3,
    title: "Verification",
    description: "The insurance company verifies the claim details and documents submitted by the nominee.",
    icon: <ClipboardCheck className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "step4",
    number: 4,
    title: "Processing",
    description: "The claim is processed based on the verification results. Additional information may be requested if needed.",
    icon: <Clock className="w-6 h-6 text-indigo-600" />
  },
  {
    id: "step5",
    number: 5,
    title: "Settlement",
    description: "Upon approval, the claim amount is transferred to the nominee's bank account within 30 days of document submission.",
    icon: <CheckCircle className="w-6 h-6 text-indigo-600" />
  }
];

const TermClaimsProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Term Insurance Claims Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the claims process ensures a smooth experience for your nominees during a difficult time
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-[40px] top-[50px] bottom-[70px] w-0.5 bg-indigo-200 z-0"></div>
            
            {claimSteps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col md:flex-row mb-8 md:mb-12">
                <div className="flex-none md:w-20">
                  <div className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 relative mx-auto bg-indigo-600">
                    {step.number}
                  </div>
                </div>
                
                <Card className="flex-grow ml-0 md:ml-6 mt-4 md:mt-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="mr-3 md:hidden">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <div className="hidden md:block mb-3">
                      {step.icon}
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < claimSteps.length - 1 && (
                  <div className="hidden md:flex absolute left-[40px] top-[56px] text-indigo-600">
                    <ArrowRight className="rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-indigo-50 p-4 rounded-lg">
            <p className="text-center text-sm text-indigo-800">
              <strong>Important:</strong> Claims should be intimated within 90 days of the death. Most insurers settle claims within 30 days of receiving complete documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermClaimsProcess;
