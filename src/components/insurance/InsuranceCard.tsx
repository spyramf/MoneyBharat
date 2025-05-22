
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface InsuranceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  linkTo?: string;
  linkText?: string;
}

const InsuranceCard = ({
  title,
  description,
  icon,
  color,
  linkTo = "#",
  linkText = "View plans",
}: InsuranceCardProps) => (
  <Card className="h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
    <CardContent className="p-6">
      <div className={`w-14 h-14 rounded-xl mb-4 flex items-center justify-center ${color} text-white`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={linkTo} className="inline-flex items-center text-sm font-medium text-fintech-purple">
        {linkText}
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </CardContent>
  </Card>
);

export default InsuranceCard;
