import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}
const claimSteps: Step[] = [{
  id: "step1",
  number: 1,
  title: "Hospitalization",
  description: "Get admitted to a network hospital and inform the insurance provider within 24-48 hours."
}, {
  id: "step2",
  number: 2,
  title: "Document Submission",
  description: "Present your health card and ID proof to the hospital's insurance desk."
}, {
  id: "step3",
  number: 3,
  title: "Pre-Authorization",
  description: "Hospital will send details to insurer for approval of cashless treatment."
}, {
  id: "step4",
  number: 4,
  title: "Treatment",
  description: "Receive medical treatment after approval from the insurance company."
}, {
  id: "step5",
  number: 5,
  title: "Discharge & Settlement",
  description: "Upon discharge, the hospital and insurer will settle the approved amount directly."
}];
const ClaimsProcess = () => {
  return <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Claims Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've simplified the claims process so you can focus on your recovery without worrying about paperwork.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-[40px] top-[50px] bottom-[70px] w-0.5 bg-blue-200 z-0"></div>
            
            {claimSteps.map((step, index) => <div key={step.id} className="relative flex flex-col md:flex-row mb-8 md:mb-12">
                <div className="flex-none md:w-20">
                  <div className="w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg z-10 relative mx-auto bg-fintech-green">
                    {step.number}
                  </div>
                </div>
                
                <Card className="flex-grow ml-0 md:ml-6 mt-4 md:mt-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>
                
                {index < claimSteps.length - 1 && <div className="hidden md:flex absolute left-[40px] top-[56px] text-blue-600">
                    <ArrowRight className="rotate-90" />
                  </div>}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ClaimsProcess;