
import React from "react";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const NetworkHospitals = () => {
  const benefits = [
    "No upfront payment for covered medical expenses",
    "Simplified admission process during emergencies",
    "No need to file reimbursement claims and wait for approval",
    "Standardized treatment costs as per pre-agreed rates",
    "Faster discharge process after treatment completion"
  ];

  const plannedHospitalizationSteps = [
    {
      id: 1,
      title: "Pre-Authorization Request",
      description: "Submit the cashless pre-authorization form to the hospital's insurance desk 3-4 days before the planned procedure."
    },
    {
      id: 2,
      title: "Form Processing",
      description: "The hospital forwards your request to the insurance company's Third Party Administrator (TPA) for approval."
    },
    {
      id: 3,
      title: "Verification & Approval",
      description: "The TPA verifies your policy details, coverage, and eligibility for the requested treatment and provides approval."
    },
    {
      id: 4,
      title: "Treatment & Discharge",
      description: "After treatment, the hospital sends the final bill to the TPA for direct settlement based on the approved amount."
    }
  ];

  const tips = [
    "Always carry your health insurance card",
    "Keep your ID proof handy during hospitalization",
    "Understand which expenses are not covered",
    "Verify if your hospital is in the network before admission",
    "Fill the pre-authorization form completely and accurately",
    "Keep your insurer's contact details saved on your phone"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Understanding Network Hospitals and Cashless Treatment</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            How the cashless hospitalization process works and its benefits
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">What are Network Hospitals?</h3>
            <p className="text-gray-700 mb-4">
              Network hospitals are healthcare facilities that have a direct tie-up with your health insurance provider. These hospitals have agreed to provide cashless treatment to policyholders according to predetermined rates and conditions.
            </p>
            <p className="text-gray-700">
              When you get treated at a network hospital, you don't need to pay upfront for covered medical expenses. The insurance company settles the bill directly with the hospital, making the process hassle-free for you during medical emergencies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Benefits of Cashless Treatment</h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">
                    <Check className="h-5 w-5" />
                  </span>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6">Cashless Treatment Process</h3>
              
              <Tabs defaultValue="planned" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="planned">Planned Hospitalization</TabsTrigger>
                  <TabsTrigger value="emergency">Emergency Hospitalization</TabsTrigger>
                </TabsList>
                <TabsContent value="planned">
                  <div className="space-y-6">
                    {plannedHospitalizationSteps.map((step) => (
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
                </TabsContent>
                <TabsContent value="emergency">
                  <div className="space-y-6">
                    <p className="text-gray-700 mb-4">
                      In case of emergency hospitalization:
                    </p>
                    <ol className="list-decimal list-inside space-y-4 ml-4">
                      <li className="text-gray-700">
                        <span className="font-medium">Inform the hospital:</span> Show your health insurance card at the admission counter and request cashless treatment.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Hospital initiates the process:</span> The hospital will contact your insurer's TPA with your policy details and admission information.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Initial approval:</span> The TPA may provide an initial approval for a certain amount while they review your case.
                      </li>
                      <li className="text-gray-700">
                        <span className="font-medium">Treatment and discharge:</span> The final bill is settled directly between the hospital and insurance company after treatment completion.
                      </li>
                    </ol>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Card className="border border-blue-100 bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500 text-white rounded-full p-1 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg">Tips for Smooth Cashless Claims</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{tip}</span>
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

export default NetworkHospitals;
