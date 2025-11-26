
import React from "react";
import { Heart, Stethoscope, PiggyBank, BadgeDollarSign, Building, Syringe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
interface RiderCover {
  id: string;
  title: string;
  description: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}
const riderCovers: RiderCover[] = [{
  id: "critical-illness",
  title: "Critical Illness Rider",
  description: "Covers specific critical illnesses like cancer, heart attack, and stroke with a lump-sum payment upon diagnosis.",
  Icon: Heart
}, {
  id: "hospital-cash",
  title: "Hospital Cash Benefit",
  description: "Provides a daily cash allowance during hospitalization to cover additional expenses not covered by your base plan.",
  Icon: Building
}, {
  id: "accidental-death",
  title: "Accidental Death & Disability Cover",
  description: "Offers financial protection in case of accidental death or permanent disability due to an accident.",
  Icon: Syringe
}, {
  id: "premium-waiver",
  title: "Premium Waiver Benefit",
  description: "Waives future premium payments in case of disability or critical illness while keeping the policy active.",
  Icon: BadgeDollarSign
}, {
  id: "maternity-cover",
  title: "Maternity Cover",
  description: "Covers pregnancy and childbirth related expenses including pre and post-natal care costs.",
  Icon: Stethoscope
}, {
  id: "outpatient",
  title: "Outpatient Department (OPD) Cover",
  description: "Covers expenses for consultations, diagnostics and treatments that don't require hospitalization.",
  Icon: PiggyBank
}];
const RiderCovers = () => {
  return <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Rider Covers Offered</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Optional add-ons that enhance your base health insurance policy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {riderCovers.map(rider => <Card key={rider.id} className="border hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-accent p-3 rounded-full">
                    <rider.Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{rider.title}</h3>
                    <p className="text-muted-foreground text-sm">{rider.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default RiderCovers;
