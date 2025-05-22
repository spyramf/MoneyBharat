
import React from "react";
import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

interface CoverageItem {
  id: string;
  description: string;
}

const coveredItems: CoverageItem[] = [
  { id: "in-patient", description: "In-patient hospitalization expenses" },
  { id: "pre-post", description: "Pre and post-hospitalization expenses" },
  { id: "daycare", description: "Daycare procedures" },
  { id: "ambulance", description: "Ambulance charges (with limits)" },
  { id: "icu", description: "ICU charges" },
  { id: "room", description: "Room rent (with sub-limits in some policies)" },
  { id: "consultation", description: "Doctor's consultation fees" },
  { id: "surgery", description: "Surgery expenses" },
  { id: "medicines", description: "Medicines and consumables" },
  { id: "diagnostic", description: "Diagnostic tests" },
  { id: "organ-donor", description: "Organ donor expenses (in some policies)" },
  { id: "ayush", description: "AYUSH treatments (in some policies)" },
  { id: "domiciliary", description: "Domiciliary treatment (in some policies)" },
];

const notCoveredItems: CoverageItem[] = [
  { id: "pre-existing", description: "Pre-existing diseases (during waiting period)" },
  { id: "cosmetic", description: "Cosmetic surgeries" },
  { id: "dental", description: "Dental treatments (unless due to accident)" },
  { id: "eyesight", description: "Eyesight correction procedures" },
  { id: "fertility", description: "Fertility treatments and birth control procedures" },
  { id: "obesity", description: "Obesity treatments" },
  { id: "self-inflicted", description: "Self-inflicted injuries" },
  { id: "hazardous", description: "Injuries due to hazardous activities" },
  { id: "alcohol", description: "Injuries under the influence of alcohol or drugs" },
  { id: "non-medical", description: "Non-medical expenses (toiletries, food for attendants)" },
  { id: "alternative", description: "Alternative treatments (unless specifically covered)" },
  { id: "maternity", description: "Maternity expenses (unless specifically covered)" },
  { id: "opd", description: "Outpatient Department (OPD) expenses" },
];

const CoverageTable = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Covered vs Not Covered Under Health Insurance</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Understanding what expenses are typically included and excluded in health insurance policies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="border border-green-100 bg-white">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-4 text-green-600 flex items-center gap-2">
                <Check className="h-5 w-5" /> Typically Covered
              </h3>
              <div className="space-y-2">
                {coveredItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-2">
                    <span className="mt-1 text-green-500 flex-shrink-0">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{item.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border border-red-100 bg-white">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-4 text-red-600 flex items-center gap-2">
                <X className="h-5 w-5" /> Typically Not Covered
              </h3>
              <div className="space-y-2">
                {notCoveredItems.map((item) => (
                  <div key={item.id} className="flex items-start gap-2">
                    <span className="mt-1 text-red-500 flex-shrink-0">
                      <X className="h-4 w-4" />
                    </span>
                    <span className="text-gray-700">{item.description}</span>
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

export default CoverageTable;
