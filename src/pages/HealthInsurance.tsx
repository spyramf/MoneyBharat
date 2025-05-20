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
import { Heart, ShieldCheck, User, Users, UserPlus, Hospital, CheckCircle, Clock, Calculator, CreditCard, ArrowRight, DollarSign, Ambulance, FileText, Info, CalendarDays, FileCheck, FileX, HelpCircle } from "lucide-react";
import FinancialToolCard from "@/components/FinancialToolCard";
const HealthInsuranceCard = ({
  title,
  coverAmount,
  monthlyPremium,
  features,
  rating,
  company,
  logo
}: {
  title: string;
  coverAmount: string;
  monthlyPremium: string;
  features: string[];
  rating: number;
  company: string;
  logo?: string;
}) => <Card className="border shadow-md hover:shadow-xl transition-all duration-300">
    <CardContent className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">
          {logo ? <div className="w-12 h-12">
              <AspectRatio ratio={1 / 1}>
                <Skeleton className="h-full w-full rounded-md" />
              </AspectRatio>
            </div> : <Hospital className="h-8 w-8 text-fintech-green\n" />}
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
        {features.map((feature, index) => <div key={index} className="flex items-center mb-2">
            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
            <span className="text-sm">{feature}</span>
          </div>)}
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
  </Card>;
const HealthInsurance = () => {
  const [ageGroup, setAgeGroup] = useState<number[]>([30]);
  const [coverAmount, setCoverAmount] = useState<number[]>([500000]);
  const [familyMembers, setFamilyMembers] = useState("self");
  const insurancePlans = [{
    title: "Health Shield Plus",
    coverAmount: "5,00,000",
    monthlyPremium: "899",
    features: ["No Room Rent Capping", "Free Health Check-up", "No Co-Payment"],
    rating: 4.5,
    company: "ABC Insurance"
  }, {
    title: "Comprehensive Care",
    coverAmount: "10,00,000",
    monthlyPremium: "1,299",
    features: ["Daycare Procedures", "Pre & Post Hospitalization", "Ambulance Cover"],
    rating: 4.2,
    company: "XYZ Health"
  }, {
    title: "Family Floater Plus",
    coverAmount: "15,00,000",
    monthlyPremium: "1,899",
    features: ["Cover for 4 Family Members", "AYUSH Treatment", "Restoration Benefit"],
    rating: 4.7,
    company: "PQR Assurance"
  }, {
    title: "Senior Care Gold",
    coverAmount: "7,50,000",
    monthlyPremium: "2,499",
    features: ["No Medical Check-up", "Chronic Disease Cover", "Home Healthcare"],
    rating: 4.3,
    company: "LMN Insurance"
  }];
  const healthArticles = [{
    title: "Why Health Insurance is Essential in Today's World",
    excerpt: "Learn about the importance of health coverage in unpredictable times.",
    icon: <Heart className="h-6 w-6" />
  }, {
    title: "How to Choose the Right Health Insurance Plan",
    excerpt: "Factors to consider when selecting a health insurance policy for your family.",
    icon: <ShieldCheck className="h-6 w-6" />
  }, {
    title: "Understanding Pre-existing Conditions and Waiting Periods",
    excerpt: "Navigate the complexities of pre-existing conditions in health insurance.",
    icon: <Clock className="h-6 w-6" />
  }];
  return <div className="min-h-screen bg-background">
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
            <Button className="bg-gradient-to-r from-fintech-green to-fintech-green text-white px-8 py-6 text-lg w-full">
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
                  <Slider id="age-range" defaultValue={ageGroup} max={70} min={18} step={1} onValueChange={setAgeGroup} className="mb-2" />
                  <div className="text-center">
                    <span className="text-lg font-semibold">{ageGroup[0]} years</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label className="mb-2 block text-sm font-medium">Who Needs Health Insurance?</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant={familyMembers === 'self' ? 'default' : 'outline'} onClick={() => setFamilyMembers('self')} className={familyMembers === 'self' ? 'bg-fintech-purple' : ''}>
                      <User className="mr-2 h-4 w-4" />
                      Self
                    </Button>
                    <Button variant={familyMembers === 'self+spouse' ? 'default' : 'outline'} onClick={() => setFamilyMembers('self+spouse')} className={familyMembers === 'self+spouse' ? 'bg-fintech-purple' : ''}>
                      <Users className="mr-2 h-4 w-4" />
                      Self+Spouse
                    </Button>
                    <Button variant={familyMembers === 'family' ? 'default' : 'outline'} onClick={() => setFamilyMembers('family')} className={familyMembers === 'family' ? 'bg-fintech-purple' : ''}>
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
                  <Slider id="cover-amount" defaultValue={coverAmount} max={10000000} min={300000} step={100000} onValueChange={setCoverAmount} className="mb-2" />
                  <div className="text-center">
                    <span className="text-lg font-semibold">
                      ₹{coverAmount[0] >= 10000000 ? '1 Crore' : coverAmount[0] >= 100000 ? `${coverAmount[0] / 100000} Lakh` : coverAmount[0]}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label className="mb-2 block text-sm font-medium">City Tier</Label>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="bg-fintech-purple text-white hover:bg-fintech-purple/90">
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
                  <Button className="w-full bg-gradient-to-r from-fintech-green to-fintech-green py-6 text-lg">
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
                {insurancePlans.map((plan, index) => <HealthInsuranceCard key={index} {...plan} />)}
              </div>
            </TabsContent>
            
            <TabsContent value="family" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => <HealthInsuranceCard key={`family-${index}`} {...plan} />)}
              </div>
            </TabsContent>
            
            <TabsContent value="senior" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {insurancePlans.map((plan, index) => <HealthInsuranceCard key={`senior-${index}`} {...plan} />)}
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
            <div className="glass-card p-6 border">
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
                <Hospital className="h-7 w-7 text-white" />
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
                  <FileCheck className="h-6 w-6 mr-2 text-fintech-green" />
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
                  <Users className="h-6 w-6 mr-2 text-fintech-green" />
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
                  <Hospital className="h-6 w-6 mr-2 text-fintech-green" />
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
                  <Clock className="h-6 w-6 mr-2 text-fintech-green" />
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
                  <FileX className="h-6 w-6 mr-2 text-fintech-green" />
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
                  <CreditCard className="h-6 w-6 mr-2 text-fintech-green" />
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
                  <CalendarDays className="h-6 w-6 text-fintech-green" />
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
                  <FileText className="h-6 w-6 text-fintech-green" />
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
                  <DollarSign className="h-6 w-6 text-fintech-green" />
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
                  <Hospital className="h-6 w-6 text-fintech-purple" />
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
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Eligibility Criteria for Health Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding who can apply for health insurance policies in India
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Policy Type</TableHead>
                  <TableHead>Age Criteria</TableHead>
                  <TableHead>Medical Requirements</TableHead>
                  <TableHead>Other Conditions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Individual Health Plan</TableCell>
                  <TableCell>18 to 65 years</TableCell>
                  <TableCell>Medical check-up may be required beyond 45 years</TableCell>
                  <TableCell>Valid ID and address proof</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Family Floater</TableCell>
                  <TableCell>
                    Adult: 18 to 65 years<br />
                    Children: 3 months to 25 years
                  </TableCell>
                  <TableCell>Based on the age of oldest member</TableCell>
                  <TableCell>Family relationship documents</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Senior Citizen Plan</TableCell>
                  <TableCell>60 to 80 years</TableCell>
                  <TableCell>Mandatory medical check-up</TableCell>
                  <TableCell>Income proof may be required</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Critical Illness Cover</TableCell>
                  <TableCell>18 to 65 years</TableCell>
                  <TableCell>Detailed medical history required</TableCell>
                  <TableCell>Lower age limit can vary by insurer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            
            <div className="mt-8 p-6 border rounded-lg bg-yellow-50 border-yellow-200">
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Info className="h-5 w-5 text-yellow-600 mr-2" />
                Important Notes on Eligibility
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Entry age varies by insurer and policy type. Some insurers offer health plans for newborns, while others require a minimum age of 3 months.</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Pre-existing conditions don't disqualify you from getting health insurance but may lead to waiting periods before coverage begins.</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Indian citizens residing abroad can purchase domestic health insurance but coverage may be limited to treatments in India.</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Non-resident Indians (NRIs) can purchase health insurance policies in India for themselves or their family members living in India.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Rider Covers Offered */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Rider Covers Offered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optional add-ons that enhance your base health insurance policy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Ambulance className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-lg font-bold mb-2">Critical Illness Rider</h3>
                <p className="text-gray-600">
                  Provides a lump-sum benefit upon diagnosis of specified critical illnesses like cancer, heart attack, stroke, etc., regardless of the actual treatment cost.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex items-center justify-center mb-4">
                  <Hospital className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-lg font-bold mb-2">Hospital Cash Benefit</h3>
                <p className="text-gray-600">
                  Daily cash allowance for each day of hospitalization to cover incidental expenses not covered by the base policy, like transportation, attendant fees, etc.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-lg font-bold mb-2">Personal Accident Cover</h3>
                <p className="text-gray-600">
                  Compensation in case of accidental death, permanent total disability, permanent partial disability, or temporary total disability.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-lg font-bold mb-2">Maternity Benefit</h3>
                <p className="text-gray-600">
                  Coverage for pregnancy-related expenses including pre and post-natal care, delivery charges, and newborn baby coverage from day one.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex items-center justify-center mb-4">
                  <CalendarDays className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-lg font-bold mb-2">Room Rent Waiver</h3>
                <p className="text-gray-600">
                  Removes the room rent sub-limits from your policy, allowing you to choose any type of room without any co-payment or deduction in claim amount.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-fintech-purple/10 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-fintech-purple" />
                </div>
                <h3 className="text-lg font-bold mb-2">Convalescence Benefit</h3>
                <p className="text-gray-600">
                  Fixed amount paid for recovery expenses if hospitalization exceeds a specified number of consecutive days (usually 7 days).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Documents Required for Purchasing a Health Insurance Policy */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Documents Required for Purchasing a Health Insurance Policy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential paperwork needed for a smooth application process
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-fintech-purple mr-2" />
                  Identity Proof (Any one)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Aadhaar Card</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>PAN Card</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Voter ID Card</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Driving License</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Passport</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-fintech-purple mr-2" />
                  Age Proof (Any one)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Birth Certificate</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>10th Certificate</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Passport</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Driving License</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-fintech-purple mr-2" />
                  Address Proof (Any one)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Aadhaar Card</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Passport</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Voter ID Card</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Utility Bills (not older than 3 months)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Bank Statement (not older than 3 months)</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 flex items-center">
                  <FileText className="h-5 w-5 text-fintech-purple mr-2" />
                  Medical Documents (If applicable)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Medical Reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Previous Health Insurance Policy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Medical History Declaration</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-5 border rounded-md bg-blue-50 border-blue-200">
              <h4 className="font-semibold mb-2 flex items-center">
                <Info className="h-5 w-5 text-blue-600 mr-2" />
                Additional Documents for Family Floater Policies
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Marriage Certificate (for spouse)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Birth Certificates (for children)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  <span>Relationship Proof for Dependent Parents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Understanding Claim Settlement Process */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Understanding Claim Settlement Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A step-by-step guide to filing and settling health insurance claims
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="cashless" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cashless">Cashless Claims</TabsTrigger>
                <TabsTrigger value="reimbursement">Reimbursement Claims</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cashless" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Planned Hospitalization</h3>
                        <p className="text-gray-600">
                          Submit pre-authorization form to the insurance desk at the network hospital 3-4 days before admission.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Insurance Verification</h3>
                        <p className="text-gray-600">
                          Hospital forwards your request to the insurer who verifies policy details and eligibility.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Authorization Letter</h3>
                        <p className="text-gray-600">
                          Insurer issues an authorization letter specifying the approved amount for treatment.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Treatment & Discharge</h3>
                        <p className="text-gray-600">
                          Receive treatment without paying upfront. Hospital may request for a small deposit for non-medical expenses.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Final Bill Settlement</h3>
                        <p className="text-gray-600">
                          At discharge, the hospital sends the final bill to the insurer for direct settlement.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        6
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pay Non-Covered Expenses</h3>
                        <p className="text-gray-600">
                          You only pay for non-medical expenses or items not covered under your policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reimbursement" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Inform the Insurer</h3>
                        <p className="text-gray-600">
                          Notify your insurer about hospitalization within the specified time frame (usually 24-48 hours).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Pay Medical Bills</h3>
                        <p className="text-gray-600">
                          Clear all hospital bills and collect all original documents, invoices, and medical reports.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">File Claim Form</h3>
                        <p className="text-gray-600">
                          Submit the completed claim form along with all required documents to the insurer.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Claim Processing</h3>
                        <p className="text-gray-600">
                          Insurer evaluates the claim based on policy terms, coverage, and submitted documents.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Additional Information</h3>
                        <p className="text-gray-600">
                          Insurer may request additional documents or clarification if required.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        6
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">Claim Settlement</h3>
                        <p className="text-gray-600">
                          Approved amount is transferred directly to your bank account within the specified timeframe.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-10 p-6 border rounded-lg bg-blue-50">
              <h3 className="text-xl font-semibold mb-4">Documents Required for Claim Settlement</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Duly filled and signed claim form</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Original hospital bills and receipts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Discharge summary from the hospital</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Prescriptions and pharmacy bills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Investigation reports (lab tests, X-rays, etc.)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Medical practitioner's certificate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Previous medical records (for pre-existing diseases)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Identity proof of the policyholder</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Common Reasons for Claim Rejection */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Common Reasons for Claim Rejection</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding why health insurance claims get denied and how to avoid rejection
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FileX className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Non-Disclosure of Pre-existing Conditions</h3>
                  </div>
                  <p className="text-gray-600">
                    Failing to disclose pre-existing conditions at the time of policy purchase can lead to claim rejection. Always provide complete medical history.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FileX className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Waiting Period Restrictions</h3>
                  </div>
                  <p className="text-gray-600">
                    Claims made during specified waiting periods for certain conditions or treatments are automatically rejected. Be aware of all waiting periods in your policy.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FileX className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Policy Exclusions</h3>
                  </div>
                  <p className="text-gray-600">
                    Treatments or conditions specifically excluded in the policy terms will not be covered. Read your policy document thoroughly to understand all exclusions.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FileX className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Delayed Claim Intimation</h3>
                  </div>
                  <p className="text-gray-600">
                    Not informing the insurer about hospitalization within the specified timeframe can result in claim denial. Report all hospitalizations immediately.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FileX className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Incomplete Documentation</h3>
                  </div>
                  <p className="text-gray-600">
                    Missing or inadequate documentation leads to claim rejection. Ensure all required documents are submitted correctly and completely.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-4">
                      <FileX className="h-5 w-5 text-red-500" />
                    </div>
                    <h3 className="text-lg font-semibold">Non-Medical Expenses</h3>
                  </div>
                  <p className="text-gray-600">
                    Items like toiletries, administrative charges, or dietary supplements are typically not covered and will be deducted from the claim amount.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 border rounded-lg bg-green-50 border-green-200">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                How to Avoid Claim Rejection
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Disclose all pre-existing conditions truthfully at the time of policy purchase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Read and understand the policy terms, conditions, exclusions, and waiting periods</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Inform the insurer about hospitalization immediately or within the specified timeframe</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Keep all original medical bills, reports, and documents safely</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Submit complete and accurate claim documents within the prescribed time limit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Covered vs Not Covered Under Health Insurance Policies */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Covered vs Not Covered Under Health Insurance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding what expenses are typically included and excluded in health insurance policies
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-100 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-600 flex items-center">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Typically Covered
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>In-patient hospitalization expenses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Pre and post-hospitalization expenses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Daycare procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Ambulance charges (with limits)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>ICU charges</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Room rent (with sub-limits in some policies)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Doctor's consultation fees</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Surgery expenses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Medicines and consumables</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Diagnostic tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Organ donor expenses (in some policies)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>AYUSH treatments (in some policies)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                      <span>Domiciliary treatment (in some policies)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-red-100 border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-600 flex items-center">
                    <FileX className="h-6 w-6 mr-2" />
                    Typically Not Covered
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Pre-existing diseases (during waiting period)</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Cosmetic surgeries</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Dental treatments (unless due to accident)</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Eyesight correction procedures</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Fertility treatments and birth control procedures</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Obesity treatments</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Self-inflicted injuries</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Injuries due to hazardous activities</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Injuries under the influence of alcohol or drugs</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Non-medical expenses (toiletries, food for attendants)</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Alternative treatments (unless specifically covered)</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Maternity expenses (unless specifically covered)</span>
                    </li>
                    <li className="flex items-start">
                      <FileX className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                      <span>Outpatient Department (OPD) expenses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Health Insurance Portability */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">What is Health Insurance Portability & How it Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding how to switch insurers without losing benefits
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto glass-card p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What is Health Insurance Portability?</h3>
              <p className="text-gray-600">
                Health insurance portability is a facility that allows policyholders to switch from one insurance provider to another without losing the waiting period credits and other benefits accumulated with the previous insurer. It was introduced by the Insurance Regulatory and Development Authority of India (IRDAI) to promote competition and improve customer service in the health insurance sector.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Benefits of Portability</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Continuity of waiting periods for pre-existing conditions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Transfer of No-Claim Bonus accumulated</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Option to increase sum insured</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Access to better features and services</span>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">How Portability Works</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Apply in Advance</h4>
                    <p className="text-gray-600">
                      Submit portability request to the new insurer at least 45 days before the expiry of your existing policy.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Fill Portability Form</h4>
                    <p className="text-gray-600">
                      Complete the portability form and submit it along with details of your current policy and medical history.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Information Sharing</h4>
                    <p className="text-gray-600">
                      The new insurer will request your policy details and claim history from your current insurer through the IRDAI web portal.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proposal Evaluation</h4>
                    <p className="text-gray-600">
                      The new insurer evaluates your proposal based on your health declaration, claim history, and underwriting guidelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Decision & Policy Issuance</h4>
                    <p className="text-gray-600">
                      The new insurer must communicate their decision within 15 days. If approved, you'll receive a new policy with portability benefits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5 border rounded-md bg-yellow-50 border-yellow-200">
              <h4 className="font-semibold mb-2 flex items-center">
                <Info className="h-5 w-5 text-yellow-600 mr-2" />
                Important Points to Remember
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Portability is allowed only at the time of renewal of your existing policy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>The new insurer is not obligated to accept your portability request</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Waiting periods already served are credited only for the same level of coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Additional waiting periods may apply for any enhanced coverage or sum insured</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Network Hospitals and Cashless Treatment */}
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Understanding Network Hospitals and Cashless Treatment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How the cashless hospitalization process works and its benefits
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div>
                <h3 className="text-xl font-semibold mb-4">What are Network Hospitals?</h3>
                <p className="text-gray-600 mb-4">
                  Network hospitals are healthcare facilities that have a direct tie-up with your health insurance provider. These hospitals have agreed to provide cashless treatment to policyholders according to predetermined rates and conditions.
                </p>
                <p className="text-gray-600">
                  When you get treated at a network hospital, you don't need to pay upfront for covered medical expenses. The insurance company settles the bill directly with the hospital, making the process hassle-free for you during medical emergencies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits of Cashless Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>No upfront payment for covered medical expenses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Simplified admission process during emergencies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>No need to file reimbursement claims and wait for approval</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Standardized treatment costs as per pre-agreed rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Faster discharge process after treatment completion</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="glass-card p-8 mb-10">
              <h3 className="text-xl font-semibold mb-6">Cashless Treatment Process</h3>
              
              <Tabs defaultValue="planned" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="planned">Planned Hospitalization</TabsTrigger>
                  <TabsTrigger value="emergency">Emergency Hospitalization</TabsTrigger>
                </TabsList>
                
                <TabsContent value="planned">
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Pre-Authorization Request</h4>
                        <p className="text-gray-600">
                          Submit the cashless pre-authorization form to the hospital's insurance desk 3-4 days before the planned procedure.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Form Processing</h4>
                        <p className="text-gray-600">
                          The hospital forwards your request to the insurance company's Third Party Administrator (TPA) for approval.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Verification & Approval</h4>
                        <p className="text-gray-600">
                          The TPA verifies your policy details, coverage, and eligibility for the requested treatment and provides approval.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Treatment & Discharge</h4>
                        <p className="text-gray-600">
                          After treatment, the hospital sends the final bill to the TPA for direct settlement based on the approved amount.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="emergency">
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Hospital Admission</h4>
                        <p className="text-gray-600">
                          Get admitted to a network hospital and inform the hospital's insurance desk about your policy details.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Hospital Submits Request</h4>
                        <p className="text-gray-600">
                          The hospital fills the pre-authorization form and sends it to the TPA within 24 hours of admission.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Quick Approval</h4>
                        <p className="text-gray-600">
                          The TPA processes the emergency request on priority and provides approval for cashless treatment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 rounded-full bg-fintech-purple flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Treatment & Settlement</h4>
                        <p className="text-gray-600">
                          After treatment, the hospital settles the bill directly with the TPA, and you only pay for non-covered expenses.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="p-6 border rounded-lg bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Info className="h-5 w-5 text-blue-600 mr-2" />
                Tips for Smooth Cashless Claims
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Always carry your health insurance card</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Verify if your hospital is in the network before admission</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Keep your ID proof handy during hospitalization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Fill the pre-authorization form completely and accurately</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Understand which expenses are not covered</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                  <span>Keep your insurer's contact details saved on your phone</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Frequently Asked Questions */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about health insurance policies and claims
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is a pre-existing disease in health insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A pre-existing disease is any condition, ailment, injury, or disease that is diagnosed by a physician within 48 months prior to the policy issuance. Most health insurance policies have a waiting period of 2-4 years for pre-existing diseases, during which claims related to these conditions are not covered.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  What is a family floater health insurance plan?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A family floater health insurance plan provides coverage for the entire family under a single policy with a shared sum insured. It typically covers the policyholder, spouse, dependent children, and sometimes parents. The premium is calculated based on the age of the oldest member. This type of plan is cost-effective compared to individual plans for each family member.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  What is a No Claim Bonus (NCB) in health insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  No Claim Bonus (NCB) is a reward given by insurers for claim-free years. It is typically offered as either an increase in the sum insured (usually 5-50% for each claim-free year) or as a discount on the renewal premium. The accumulated NCB can significantly enhance your coverage over the years without any additional cost.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What is a sub-limit in health insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Sub-limits are caps or restrictions on specific expenses within your overall sum insured. Common sub-limits include room rent (e.g., 1% of sum insured per day), specific disease treatments, doctor's fees, or ambulance charges. When choosing a policy, opt for one with minimal sub-limits to avoid out-of-pocket expenses during claims.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Can I have multiple health insurance policies?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, you can have multiple health insurance policies from different insurers or the same insurer. In case of hospitalization, you can claim from either one policy or multiple policies sequentially. For sequential claims, you need to submit the original bills to the first insurer and the claim settlement letter along with certified copies of bills to the second insurer.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  What is a Third-Party Administrator (TPA) in health insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A Third-Party Administrator (TPA) is an intermediary between the insurance company and the policyholder. TPAs process claims, issue health cards, provide cashless authorizations, and maintain a network of hospitals. They handle the administrative aspects of health insurance services on behalf of the insurance company but don't make decisions about claim approvals.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Is maternity covered in regular health insurance plans?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Maternity coverage is typically not included in regular health insurance plans. It's usually available as an add-on rider or in specific plans designed for maternity benefits. These plans generally have a waiting period of 2-4 years before maternity benefits can be claimed. Additionally, some policies may include coverage for the newborn baby from day one.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  What happens to my health insurance if I change jobs?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  If you have employer-provided group health insurance, the coverage typically ends when you leave the company. However, some insurers offer the option to convert your group policy into an individual policy without losing continuity benefits. Additionally, if you've maintained a separate individual health policy alongside your corporate coverage, it remains unaffected by your job change.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  Are day care procedures covered in health insurance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, modern health insurance plans cover day care procedures that require less than 24 hours of hospitalization. These include treatments like cataract surgery, chemotherapy, dialysis, tonsillectomy, etc. The number of covered day care procedures varies by policy, with some comprehensive plans covering over 150+ procedures.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  What is the difference between co-payment and deductible?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  A co-payment is a percentage of the claim amount that the policyholder needs to bear from their pocket (e.g., 20% of the claim amount). A deductible is a fixed amount that the policyholder must pay before the insurance coverage kicks in. Both features help reduce premium costs but increase out-of-pocket expenses during claims.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>;
};
export default HealthInsurance;