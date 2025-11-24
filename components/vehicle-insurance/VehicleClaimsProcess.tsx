
import React from "react";
import { PhoneCall, ClipboardCheck, Car, FileText, CheckCircle } from "lucide-react";

interface ClaimStep {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const claimSteps: ClaimStep[] = [
  {
    id: "notify",
    title: "Notify Your Insurer",
    description: "Contact your insurance company immediately after the incident through their helpline, mobile app, or website.",
    icon: <PhoneCall className="w-12 h-12 p-2 text-blue-600" />
  },
  {
    id: "file-claim",
    title: "File a Claim",
    description: "Submit the claim form with details of the incident, policy number, and vehicle information.",
    icon: <ClipboardCheck className="w-12 h-12 p-2 text-blue-600" />
  },
  {
    id: "inspection",
    title: "Vehicle Inspection",
    description: "The insurance surveyor will inspect your vehicle to assess the damage and estimate repair costs.",
    icon: <Car className="w-12 h-12 p-2 text-blue-600" />
  },
  {
    id: "documentation",
    title: "Submit Documents",
    description: "Provide necessary documents like RC, driving license, police FIR (if applicable), and repair estimates.",
    icon: <FileText className="w-12 h-12 p-2 text-blue-600" />
  },
  {
    id: "approval",
    title: "Claim Approval & Settlement",
    description: "Once approved, the insurer will settle the claim either directly with the garage or reimburse you.",
    icon: <CheckCircle className="w-12 h-12 p-2 text-blue-600" />
  }
];

const VehicleClaimsProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Vehicle Insurance Claims Process</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Follow these simple steps to file and settle your vehicle insurance claim efficiently
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Desktop timeline connector */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Timeline steps */}
            <div className="space-y-12 md:space-y-0">
              {claimSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Mobile timeline node */}
                    <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                    <div className="md:hidden absolute left-0 top-6 w-6 h-6 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
                    
                    {/* Content */}
                    <div className={`md:w-5/12 pb-8 md:pb-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                      <h3 className="text-xl font-bold mb-3 flex md:block items-center pl-8 md:pl-0">
                        <span className="inline-block w-7 h-7 rounded-full bg-blue-100 text-blue-600 text-center leading-7 mr-3 md:hidden">
                          {index + 1}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 pl-8 md:pl-0">{step.description}</p>
                    </div>
                    
                    {/* Desktop timeline node */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center z-10">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Empty space for alignment */}
                    <div className="md:w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleClaimsProcess;
