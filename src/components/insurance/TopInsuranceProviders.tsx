import React from "react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

interface Provider {
  name: string;
  category: string;
  claimSettlement: string;
  networkHospitals: string;
  rating: string;
  riskProfile: string;
  colorClass: string;
}

interface TopInsuranceProvidersProps {
  providers: Provider[];
}

const TopInsuranceProviders = ({ providers }: TopInsuranceProvidersProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Top Insurance Providers</h2>
          <p className="text-lg text-gray-600">
            Compare the best insurance companies based on claim settlement ratio, network hospitals, and customer
            ratings
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-100 bg-white shadow-sm">
          <Table>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="w-[200px]">Insurer</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Claim Settlement</TableHead>
                <TableHead>Network Hospitals</TableHead>
                <TableHead>Customer Rating</TableHead>
                <TableHead>Risk Profile</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {providers.map((provider, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className={`w-1.5 h-14 ${provider.colorClass} rounded-full`}></div>
                      {provider.name}
                    </div>
                  </TableCell>
                  <TableCell>{provider.category}</TableCell>
                  <TableCell>{provider.claimSettlement}</TableCell>
                  <TableCell>{provider.networkHospitals}</TableCell>
                  <TableCell>{provider.rating}/5</TableCell>
                  <TableCell>
                    <Badge
                      className={`${
                        provider.riskProfile === "Very Good"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {provider.riskProfile}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* <div className="text-center mt-8">
          <Button variant="outline" className="border-fintech-purple text-fintech-purple">
            View All Insurance Providers
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default TopInsuranceProviders;
