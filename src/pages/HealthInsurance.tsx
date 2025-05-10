import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Heart,
  ShieldCheck,
  User,
  Users,
  UserPlus,
  Hospital,
  CheckCircle,
  Clock,
  Calculator,
  CreditCard,
  ArrowRight,
  DollarSign,
  Bandage as BriefcaseMedical,
  Ambulance,
  Bandage,
  FileText,
  Info,
  CalendarDays,
  FileCheck,
  FileX,
  Question
} from "lucide-react";
import FinancialToolCard from "@/components/FinancialToolCard";

const HealthInsuranceCard = ({
  title,
  coverAmount,
  monthlyPremium,
  features,
  rating,
  company,
  logo,
}: {
  title: string;
  coverAmount: string;
  monthlyPremium: string;
  features: string[];
  rating: number;
  company: string;
  logo?: string;
}) => (
  <Card className="border shadow-md hover:shadow-xl transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
          {logo ? (
            <div className="w-12 h-12">
              <AspectRatio ratio={1 / 1}>
                <Skeleton className="h-full w-full rounded-md" />
              </AspectRatio>
            </div>
          ) : (
            <Hospital className="h-8 w-8 text-fintech-purple" />
          )}
        </div>
        <div className="text-right">
          <div className="inline-flex items-center bg-green-100 px-2 py-1 rounded text-green-700">
            <span className="text-xs font-semibold">{rating}/5</span>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{company}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-500 mb-1">Cover Amount</p>
          <p className="text-lg font-semibold">₹{coverAmount}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-md">
          <p className="text-xs text-gray-500 mb-1">Monthly Premium</p>
          <p className="text-lg font-semibold text-fintech-purple">₹{monthlyPremium}</p>
        </div>
      </div>

      <div className="mb-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center mb-2">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <Link to="#" className="text-fintech-purple text-sm font-medium">
          View Details
        </Link>
        <Button className="bg-fintech-purple hover:bg-fintech-purple/90">
          Buy Now
        </Button>
      </div>
    </CardContent>
  </Card>
);

const HealthInsurance = () => {
  const [ageGroup, setAgeGroup] = useState<number[]>([30]);
  const [coverAmount, setCoverAmount] = useState<number[]>([500000]);
  const [familyMembers, setFamilyMembers] = useState("self");

  const insurancePlans = [
    {
      title: "Health Shield Plus",
      coverAmount: "5,00,000",
      monthlyPremium: "899",
      features: ["No Room Rent Capping", "Free Health Check-up", "No Co-Payment"],
      rating: 4.5,
      company: "ABC Insurance"
    },
    {
      title: "Comprehensive Care",
      coverAmount: "10,00,000",
      monthlyPremium: "1,299",
      features: ["Daycare Procedures", "Pre & Post Hospitalization", "Ambulance Cover"],
      rating: 4.2,
      company: "XYZ Health"
    },
    {
      title: "Family Floater Plus",
      coverAmount: "15,00,000",
      monthlyPremium: "1,899",
      features: ["Cover for 4 Family Members", "AYUSH Treatment", "Restoration Benefit"],
      rating: 4.7,
      company: "PQR Assurance"
    },
    {
      title: "Senior Care Gold",
      coverAmount: "7,50,000",
      monthlyPremium: "2,499",
      features: ["No Medical Check-up", "Chronic Disease Cover", "Home Healthcare"],
      rating: 4.3,
      company: "LMN Insurance"
    },
  ];

  const healthArticles = [
    {
      title: "Why Health Insurance is Essential in Today's World",
      excerpt: "Learn about the importance of health coverage in unpredictable times.",
      icon: <Heart className="h-6 w-6" />
    },
    {
      title: "How to Choose the Right Health Insurance Plan",
      excerpt: "Factors to consider when selecting a health insurance policy for your family.",
      icon: <ShieldCheck className="h-6 w-6" />
    },
    {
      title: "Understanding Pre-existing Conditions and Waiting Periods",
      excerpt: "Navigate the complexities of pre-existing conditions in health insurance.",
      icon: <Clock className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Protect Your <span className="gradient-text">Health</span> and Financial Security
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare health insurance plans tailored to your needs and get coverage at the best price
          </p>
          <div className="max-w-md mx-auto">
            <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white px-8 py-6 text-lg w-full">
              Compare Health Insurance Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Quote Calculator */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Get a Quick Health Insurance Quote</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <Label htmlFor="age-range" className="mb-2 block text-sm font-medium">Age of Oldest Member</Label>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">18 years</span>
                    <span className="text-sm text-gray-500">70 years</span>
                  </div>
                  <Slider
                    id="age-range"
                    defaultValue={ageGroup}
                    max={70}
                    min={18}
                    step={1}
                    onValueChange={setAgeGroup}
                    className="mb-2"
                  />
                  <div className="text-center">
                    <span className="text-lg font-semibold">{ageGroup[0]} years</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label className="mb-2 block text-sm font-medium">Who Needs Health Insurance?</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button 
                      variant={familyMembers === 'self' ? 'default' : 'outline'} 
                      onClick={() => setFamilyMembers('self')}
                      className={familyMembers === 'self' ? 'bg-fintech-purple' : ''}
                    >
                      <User className="mr-2 h-4 w-4" />
                      Self
                    </Button>
                    <Button 
                      variant={familyMembers === 'self+spouse' ? 'default' : 'outline'}
                      onClick={() => setFamilyMembers('self+spouse')}
                      className={familyMembers === 'self+spouse' ? 'bg-fintech-purple' : ''}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Self+Spouse
                    </Button>
                    <Button 
                      variant={familyMembers === 'family' ? 'default' : 'outline'}
                      onClick={() => setFamilyMembers('family')}
                      className={familyMembers === 'family' ? 'bg-fintech-purple' : ''}
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      Family
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-6">
                  <Label htmlFor="cover-amount" className="mb-2 block text-sm font-medium">Cover Amount (₹)</Label>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">₹3L</span>
                    <span className="text-sm text-gray-500">₹1Cr</span>
                  </div>
                  <Slider
                    id="cover-amount"
                    defaultValue={coverAmount}
                    max={10000000}
                    min={300000}
                    step={100000}
                    onValueChange={setCoverAmount}
                    className="mb-2"
                  />
                  <div className="text-center">
                    <span className="text-lg font-semibold">
                      ₹{coverAmount[0] >= 10000000 ? '1 Crore' : 
                         coverAmount[0] >= 100000 ? `${coverAmount[0]/100000} Lakh` : 
                         coverAmount[0]}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label className="mb-2 block text-sm font-medium">City Tier</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button 
                      variant="outline"
                      className="bg-fintech-purple text-white hover:bg-fintech-purple/90"
                    >
                      Tier 1
                    </Button>
                    <Button variant="outline">
                      Tier 2
                    </Button>
                    <Button variant="outline">
                      Tier 3
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="w-full bg-gradient-to-r from-fintech-purple to-fintech-blue py-6 text-lg">
                    Show Best Plans
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Health Insurance Plans */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Popular Health Insurance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare and choose from our top-rated health insurance plans
            </p>
          </div>
          
          <Tabs defaultValue="individual" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="individual">Individual</TabsTrigger>
              <TabsTrigger value="family">Family</TabsTrigger>
              <TabsTrigger value="senior">Senior Citizen</TabsTrigger>
            </TabsList>
            
            <TabsContent value="individual" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => (
                  <HealthInsuranceCard key={index} {...plan} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="family" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => (
                  <HealthInsuranceCard key={`family-${index}`} {...plan} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="senior" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => (
                  <HealthInsuranceCard key={`senior-${index}`} {...plan} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-8">
            <Button className="px-8" variant="outline">
              View All Plans
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Health Insurance Types */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Types of Health Insurance Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the right health coverage for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-fintech-purple to-fintech-blue rounded-xl mb-4 flex items-center justify-center">
                <User className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Individual Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Tailored coverage for a single person with customizable benefits to suit personal health needs.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹499/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-fintech-orange to-fintech-purple rounded-xl mb-4 flex items-center justify-center">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Floater Insurance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive coverage for your entire family under a single policy with shared sum insured.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹1,199/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue rounded-xl mb-4 flex items-center justify-center">
                <BriefcaseMedical className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Critical Illness Cover</h3>
              <p className="text-gray-600 mb-4">
                Financial protection against major illnesses with lump-sum benefits upon diagnosis.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹899/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                <Hospital className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Group Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Employer-provided coverage for employees with competitive premiums and extensive benefits.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Custom corporate plans
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                <UserPlus className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Senior Citizen Health Insurance</h3>
              <p className="text-gray-600 mb-4">
                Specialized plans for individuals above 60 years with coverage for age-related ailments.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹1,999/month
              </Badge>
            </div>
            
            <div className="glass-card p-6">
              <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mb-4 flex items-center justify-center">
                <DollarSign className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Top-up Health Plans</h3>
              <p className="text-gray-600 mb-4">
                Additional coverage that starts after your base health insurance reaches its limit.
              </p>
              <Badge className="bg-fintech-purple/10 text-fintech-purple hover:bg-fintech-purple/20 border-none">
                Starting at ₹299/month
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Choosing a Health Insurance Plan - Factors to Consider */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Choosing a Health Insurance Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key factors to consider when selecting the right health insurance for you and your family
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileCheck className="h-6 w-6 mr-2 text-fintech-purple" />
                  Coverage Amount
                </h3>
                <p className="text-gray-600">
                  Evaluate your medical history, potential healthcare needs, and financial situation to determine an adequate sum insured. 
                  The coverage should be sufficient to handle medical inflation and unforeseen critical illnesses.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-6 w-6 mr-2 text-fintech-purple" />
                  Family Size & Composition
                </h3>
                <p className="text-gray-600">
                  Consider whether an individual plan or family floater policy would better suit your needs based on your family's age, 
                  health status, and medical requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Hospital className="h-6 w-6 mr-2 text-fintech-purple" />
                  Network Hospitals
                </h3>
                <p className="text-gray-600">
                  Check if your preferred hospitals are included in the insurer's network for cashless treatment. 
                  A wide hospital network ensures convenient access to quality healthcare services.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-fintech-purple" />
                  Waiting Periods
                </h3>
                <p className="text-gray-600">
                  Understand the various waiting periods for pre-existing diseases, specific ailments, and maternity benefits. 
                  Choose policies with shorter waiting periods if you have existing health conditions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileX className="h-6 w-6 mr-2 text-fintech-purple" />
                  Exclusions & Sub-limits
                </h3>
                <p className="text-gray-600">
                  Carefully review policy exclusions and sub-limits on room rent, specific treatments, or procedures.
                  Policies with fewer restrictions and sub-limits are generally more beneficial.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-fintech-purple" />
                  Claim Settlement Ratio
                </h3>
                <p className="text-gray-600">
                  Research the insurer's claim settlement ratio and turnaround time. A higher ratio indicates reliability and
                  efficiency in processing claims when you need them most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Factors That Affect Health Insurance Premium */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Factors That Affect Health Insurance Premium</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding what influences the cost of your health insurance policy
            </p>
          </div>
          
          <div className="glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <CalendarDays className="h-6 w-6 text-fintech-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Age</h3>
                  <p className="text-gray-600">
                    Premium increases with age as health risks typically grow higher. Purchasing insurance at a younger age secures lower premiums.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <FileText className="h-6 w-6 text-fintech-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Medical History</h3>
                  <p className="text-gray-600">
                    Pre-existing conditions often lead to higher premiums or extended waiting periods for coverage.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-fintech-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Family Size</h3>
                  <p className="text-gray-600">
                    The number of family members included in the policy directly affects the premium amount.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <DollarSign className="h-6 w-6 text-fintech-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sum Insured</h3>
                  <p className="text-gray-600">
                    Higher coverage amounts result in higher premium payments, but offer greater financial security.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <Hospital className="h-6 w-6 text-fintech-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">
                    Premiums vary based on city tier due to differences in healthcare costs across locations.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex-shrink-0 flex items-center justify-center mr-4">
                  <BriefcaseMedical className="h-6 w-6 text-fintech-purple" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Occupation</h3>
                  <p className="text-gray-600">
                    High-risk occupations may attract higher premiums due to increased chances of health issues or injuries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key features of a Health insurance policy */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Key Features of a Health Insurance Policy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential benefits included in comprehensive health insurance plans
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">Hospitalization Coverage</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Covers room charges, nursing expenses, ICU costs, surgeon's fees, doctor visits, medicines, and other services during hospitalization.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">Pre & Post Hospitalization</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Coverage for medical expenses incurred before admission (typically 30-60 days) and after discharge (typically 60-90 days).
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">Daycare Procedures</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Covers treatments that require less than 24 hours of hospitalization, such as cataract surgery, chemotherapy, dialysis, etc.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">No-Claim Bonus</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Reward in the form of increased sum insured or premium discounts for claim-free years, enhancing your coverage over time.
                </p>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">Cashless Treatment</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Direct settlement between the insurer and network hospitals, eliminating the need for upfront payment by the policyholder.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">AYUSH Coverage</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Coverage for alternative treatments like Ayurveda, Yoga, Unani, Siddha, and Homeopathy at recognized hospitals.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">Preventive Health Check-ups</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Complimentary health check-ups at regular intervals to monitor your health and detect issues early.
                </p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold">Restoration Benefit</h3>
                </div>
                <p className="text-gray-600 ml-8">
                  Automatic restoration of the sum insured if it gets exhausted during the policy period, providing additional coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria for Purchasing a Health Insurance Policy */}
