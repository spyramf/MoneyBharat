
import React from "react";
import { Info, Check } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";

interface EligibilityCriterion {
  policyType: string;
  ageCriteria: string;
  medicalRequirements: string;
  otherConditions: string;
}

const eligibilityCriteria: EligibilityCriterion[] = [
  {
    policyType: "Individual Health Insurance",
    ageCriteria: "3 months to 65 years (varies by insurer)",
    medicalRequirements: "Medical tests typically required for applicants above 45 years",
    otherConditions: "Pre-existing conditions may have waiting periods; premium depends on age and health status"
  },
  {
    policyType: "Family Floater Policy",
    ageCriteria: "Adults: 18-65 years; Children: 3 months onwards",
    medicalRequirements: "Medical tests based on age of family members and sum insured",
    otherConditions: "Usually covers self, spouse, dependent children and parents; premium based on eldest member's age"
  },
  {
    policyType: "Senior Citizen Health Insurance",
    ageCriteria: "60 years and above",
    medicalRequirements: "Pre-policy medical check-up mandatory in most cases",
    otherConditions: "Specialized coverage for age-related ailments; longer waiting periods; higher premiums"
  },
  {
    policyType: "Group Health Insurance",
    ageCriteria: "No specific age limit (depends on employment status)",
    medicalRequirements: "Usually no pre-entry medical tests required",
    otherConditions: "Provided by employers; covers employees and sometimes dependents; premium paid by employer"
  }
];

const importantNotes = [
  "Medical underwriting is required for most individual and family policies, especially for higher coverage amounts.",
  "Non-disclosure of pre-existing conditions can lead to claim rejection and policy cancellation.",
  "Age limits and medical requirements may vary significantly across insurance providers.",
  "Some special health conditions may require additional premium loading or may be permanently excluded from coverage."
];

const EligibilityCriteria = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Eligibility Criteria for Health Insurance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding who can apply for health insurance policies in India
          </p>
        </div>
        
        <div className="mb-10 max-w-6xl mx-auto overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-purple-50">
                <TableHead className="font-semibold text-purple-900">Policy Type</TableHead>
                <TableHead className="font-semibold text-purple-900">Age Criteria</TableHead>
                <TableHead className="font-semibold text-purple-900">Medical Requirements</TableHead>
                <TableHead className="font-semibold text-purple-900">Other Conditions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {eligibilityCriteria.map((criterion, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="font-medium">{criterion.policyType}</TableCell>
                  <TableCell>{criterion.ageCriteria}</TableCell>
                  <TableCell>{criterion.medicalRequirements}</TableCell>
                  <TableCell>{criterion.otherConditions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="max-w-6xl mx-auto bg-blue-50 p-6 rounded-lg border border-blue-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Info className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900">Important Notes on Eligibility</h3>
          </div>
          
          <ul className="space-y-3">
            {importantNotes.map((note, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <p className="text-gray-700">{note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EligibilityCriteria;
