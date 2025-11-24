
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";

interface LoanEligibilityDocumentsProps {
  title: string;
  subtitle: string;
  badgeText?: string;
  eligibilityCriteria: string[];
  requiredDocuments: string[];
  className?: string;
}

const LoanEligibilityDocuments = ({
  title,
  subtitle,
  badgeText,
  eligibilityCriteria,
  requiredDocuments,
  className = ""
}: LoanEligibilityDocumentsProps) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {badgeText && (
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-purple border-fintech-purple">
              {badgeText}
            </Badge>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="eligibility" className="w-full">
            <div className="text-center mb-8">
              <TabsList className="inline-flex">
                <TabsTrigger value="eligibility" className="text-lg px-6">Eligibility Criteria</TabsTrigger>
                <TabsTrigger value="documents" className="text-lg px-6">Required Documents</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="eligibility" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Criteria</CardTitle>
                  <CardDescription>Check if you're eligible for our loan</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {eligibilityCriteria.map((criterion, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                  <CardDescription>Documents needed for loan application</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {requiredDocuments.map((document, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{document}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default LoanEligibilityDocuments;
